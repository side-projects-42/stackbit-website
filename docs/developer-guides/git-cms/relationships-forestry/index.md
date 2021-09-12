This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Managing Content Relationships in the Forestry CMS

[Forestry](https://forestry.io/) is another popular, commercial git-based CMS option. The basic setup of Forestry is simple. When you import a project, Forestry will automatically look at the content and map out the data models in its system for you, placing all of these settings in a `.forestry` directory in your project. Below is the default editing for a basic post that has a one-to-one relationship to an author and a one-to-many relationship to related posts.

![default editing in Forestry](/docs/images/forestry-defaults-sm.png)

While Forestry is extremely smart in recognizing fields, it isn't able automatically see that the `author` and `related_posts` represent relationships. Instead, `author` is just a string value and `related_posts` is an array of string values. However, these can be overridden.

In this example, open one of the posts and, from the menu icon in the top-right-corner, choose "Create Template" to create a [frontmatter template](https://forestry.io/docs/settings/front-matter-templates/) based upon the content model.

![create a new frontmatter template](/docs/images/forestry-create-template1.png)

Since this template represents the post type, Name the template "Posts".

![name the frontmatter template](/docs/images/forestry-create-template2.png)

This will generate a frontmatter template as shown below, which can be edited via the UI.

![the generated template](/docs/images/forestry-create-template3.png)

However, this requires some changes that can't be made via the UI, which requires pulling the code down and edit it. Once the code is fetched, the generated file can be found at `.forestry/font_matter/templates/posts.yml`. It has the following contents:

    ---
    label: Posts
    hide_body: false
    fields:
      - type: text
        name: title
        label: title
      - type: datetime
        name: date
        label: date
      - type: text
        name: author
        label: author
      - type: list
        name: related_posts
        label: related_posts

Add a `config` option to each that contains `required: true` to `title`, `date` and `author` since these are required fields. For example, the title will look like this:

    - type: text
      name: title
      label: title
      config:
        required: true

Next, edit the `author` type. Rather than `type: text` this should be [`type: select`](https://forestry.io/docs/settings/fields/select/) so that it will create a drop down of options. Within the `config`, define a `source` of type `pages` that pulls from the `authors` section as shown below:

    - type: select
      name: author
      label: author
      config:
        required: true
        source:
          type: pages
          section: authors

The `related_posts` is already using the [sortable list field type](https://forestry.io/docs/settings/fields/#sortable-list-field), which is what is needed. However, it needs to be configured to use a select-style entry rather than text and to pull that select from the list of posts. The configuration for this looks similar to the code above.

    - type: list
      name: related_posts
      label: related_posts
      config:
        use_select: true
        source:
          type: pages
          section: posts

The last step is to force posts to use this template by modifying the `.forestry/settings.yml` file. Under the section for `posts`, add the `template` setting as follows:

    - type: directory
      path: content/posts
      label: Posts
      create: all
      match: '**/*'
      templates:
        - posts

Once everything is checked back into source control, the dropdowns are working properly.

![editing a post in Forestry](/docs/images/forestry-editing.png)

Notice that existing references to authors and related posts may disappeared or show "Invalid Reference." This is because Forestry adds the full relative path to each related file rather than just the slug. Either edit this manually for each post via the UI or in the code. For example, here's the updated frontmatter for one of my posts:

    title: Han Shot First
    date: 2020-03-31
    author: authors/brian-rinaldi.md
    related_posts:
      - posts/last-jedi-was-good.md
      - posts/return-of-skywalker-awful.md

## Did you find this page useful?

## Jump to Section
