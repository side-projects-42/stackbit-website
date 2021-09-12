This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Managing Content Relationships in Netlify CMS
=============================================

[Netlify CMS](https://www.netlifycms.org/) is an open source, git-based CMS. It can be deployed to Netlify, but this is not a requirement. Let's look at how to set up an example with posts that have a one-to-one relationship to authors and a one-to-many relationship to related posts. This will focus on defining and managing the relationships rather than the nuts and bolts of getting Netlify CMS up and running.

Netlify CMS defines its content model via a `config.yaml` configuration file placed within the `admin` directory. For this example, we only need two collections: one for the posts and one for the authors. Here are the complete collections from a basic configuration.

    collections:
      - name: post
        label: Posts
        folder: content/posts
        create: true
        slug: '{{slug}}'
        fields:
          - widget: string
            name: title
            label: Title
            required: true
            hint: >-
              The title of the blog post
          - widget: date
            name: date
            label: Date
            required: true
            hint: >-
              The date the post is published
          - widget: string
            name: slug
            label: Slug
            required: true
            hint: >-
              The post URL (do not include folder or file extension)
          - widget: relation
            name: author
            label: Author
            required: true
            hint: >-
              The author of the post
            collection: author
            valueField: slug
            searchFields: ['title']
            displayFields: ['title']
          - widget: relation
            name: related_posts
            label: Related Posts
            required: false
            multiple: true
            hint: >-
              Other related posts
            collection: post
            valueField: slug
            searchFields: ['title']
            displayFields: ['title']
          - widget: markdown
            name: body
            label: Content
            required: true
            hint: Page content
      - name: author
        label: Authors
        folder: content/authors
        create: true
        slug: '{{slug}}'
        fields:
          - widget: string
            name: title
            label: Name
            required: true
            hint: >-
              The name of the author
          - widget: string
            name: slug
            label: Slug
            required: true
            hint: >-
              The post URL (do not include folder or file extension)
          - widget: markdown
            name: body
            label: Content
            required: true
            hint: Author bio

The key pieces of this, from a relationships point of view, are the `author` and `related_posts` fields. These use the [relation widget type](https://www.netlifycms.org/docs/widgets/#relation), which allows users to select a reference to another collection via the CMS user interface. Here's what that looks like - notice the difference between `author`, which is a single value reference, and `related_posts`, which has `multiple: true` thereby allowing multiple reference selections.

![The Netlify CMS relationships UI](/docs/images/netlifycms-ui-sm.png)

As you can see from the image above, the user can search for related items either by pulling the dropdown or by typing and filtering. The multiple select is smart enough to only show options that have not yet been selected. The configuration has different options for the field in the related content that it performs the search on (`searchFields`) and the fields that it displays in the UI (`displayFields`) - both allow for multiple fields to be defined. The example uses just the `title` field for both authors and posts.

So far, that's pretty simple, but the `valueField` leads us into into the trickier part. Netlify CMS does not allow you to select the filename or slug for the `valueField` - it must be a field defined in the frontmatter.

Because of this, we need an additional field named `slug` in both the `post` and `author` content types defined in the `config.yaml`. This is a string containing the posts slug to be used by the SSG but also by Netlify CMS to manage the relationship value placed into the frontmatter. Below is example template for loading the related content (the example uses Hugo):

    <h2>{{ .Title }}</h2>
    {{ $author_page := print "/authors/" .Params.Author }}
    {{ with .Site.GetPage $author_page }}
        <p><em>By {{.Title}}</em></p>
    {{ end }}
    {{.Content}}

    <h4>Related Posts</h4>

    <ul>
    {{ range $postname := .Params.Related_posts }}
        {{ $post_page := print "/posts/" $postname }}
        {{ with $.GetPage $post_page }}
            <li><a href="{{.Permalink}}">{{ .Title }}</a></li>
        {{ end }}
    {{ end }}
    </ul>
    </html>

The issue with this is, as you can imagine, that it is very fragile. First, the code loading the page assumes that the slug and filename match. Since `slug` is just a textfield in the CMS, it is prone to easy typos.

Did you find this page useful?
------------------------------





Jump to Section
---------------











