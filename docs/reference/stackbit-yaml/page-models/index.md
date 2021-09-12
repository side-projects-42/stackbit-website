This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Page models
===========

Page Models describe the structure of your site's pages stored in markdown files (`.md`, `.mdx`, `.markdown`).

Page models extend all the [common properties](/docs/reference/stackbit-yaml/models/#common_model_properties) and [model matching properties](/docs/reference/stackbit-yaml/models/#model_matching_properties) defined in the base model.

<a href="#page_model_properties" class="hash-link"><span class="icon-copy"></span></a>Page Model Properties
-----------------------------------------------------------------------------------------------------------

### <a href="#hidecontent" class="hash-link"><span class="icon-copy"></span></a>`hideContent`

-   **Allowed values:** boolean
-   **Default value:** `false`
-   **Required:** false

Set to `true` for pages that should not have markdown content below the front-matter.

### <a href="#urlpath" class="hash-link"><span class="icon-copy"></span></a>`urlPath`

-   **Allowed values:** a fixed or dynamic URL path
-   **Default value:** `/{slug}`
-   **Required:** false
-   **Example value:** `/blog/{slug}`

Stackbit uses the `urlPath` property to help users create pages and navigate their site.

This can either be a fixed path for page models that are matched to a single `file` or a dynamic pattern for page models that can have multiple pages. To create dynamic pattern use curly braces with tokens: `{title}`.

When using API-based CMS, the tokens should be named after fields available in the model. For example, a blog post model likely has a `slug` field representing the path to the specific post within the blog, so a `post` page model should contain a `slug` token inside `urlPath` - `/blog/{slug}`.

When using file-based content, the `slug` will be extrapolated from the [`filePath`](#filepath). For example, if the `filePath` is `/blog/{slug}.md` and the file representing the blog post is stored at `/blog/hello.md`, the extrapolated `slug` will be `hello` and the interpolated `urlPath` will be `/blog/hello`.

### <a href="#filepath" class="hash-link"><span class="icon-copy"></span></a>`filePath`

-   **Allowed values:** a file path pattern relative to `pagesDir`
-   **Default value:** computed by appending `.md` to `urlPath`. For the default `urlPath` the value will be `/{slug}.md`.
-   **Required:** false
-   **Example value:** `posts/{slug}.md`

Stackbit uses the `filePath` property to know where to store the new pages. You need to specify this property only when your project uses file-based content.

This can either be a fixed path for page models that are matched to a single `file` or a dynamic pattern for page models that can have multiple pages. To create dynamic pattern use curly braces with tokens: `{title}`.

For example, if your blog posts files are stored in the `blog` folder, you can use the `blog/{slug}.md` pattern. When creating a new blog post in Stackbit Studio, the `{slug}` token will be replaced with a string provided by the user, and the new page will be saved at `{pagesDir}/blog/{slug}.md`.

When the file paths of your page model correspond to their url paths, you don't need to specify `filePath`. For example, if your `pagesDir` is `content` and your page files correspond to their url path, there is no need to specify `filePath` (note `index.md` is always collapsed):

-   `content/index.md` =&gt; `/`
-   `content/about` =&gt; `/about`
-   `content/articles/index.md` =&gt; `/articles`
-   `content/articles/hello.md` =&gt; `/articles/foo`
-   `content/articles/world/index.md` =&gt; `/articles/world`

On the other hand, if page model files do not correspond to their url paths, you need to specify the correct `filePath`:

-   `_posts/hello.md` =&gt; `/blog/hello`
-   `_posts/world.md` =&gt; `/blog/world`

In this case, the urlPath would be `/blog/{slug}` and the `filePath` would be `_posts/{slug}.md`

**Note:** Please do not confuse `filePath` with model matching properties such as `file` and `folder`. The former is used by Stackbit to create new pages, while the later is used to match between models and files.

**Example**:

    ssgName: jekyll
    pagesDir: content
    models:

      home:
        type: page
        label: Home Page
        file: index.md
        singleInstance: true
        # the urlPath and filePath can be static
        urlPath: "/"
        filePath: "index.md"

      page:
        type: page
        label: Basic Page
        # the urlPath and filePath can be dynamic patterns with tokens
        # here both urlPath and filePath can be omitted as urlPath is set to default
        # value and filePath correspond to the urlPath
        urlPath: "/{slug}"
        filePath: "{slug}.md"
        fields:
          ...

      post:
        type: page
        label: Blog Post
        folder: _posts
        # the urlPath and filePath doesn't have to be the same. For example in Jekyll,
        # the posts are stored in _posts folder but can be configured to be published
        # under /blog url path
        urlPath: "/blog/{slug}"
        filePath: "_posts/{slug}.md"
        fields:
          ...

### <a href="#singleinstance" class="hash-link"><span class="icon-copy"></span></a>`singleInstance`

Should be set too `true` for models that should have only one page instance (e.g.: homepage).

**Example**

Assume a site with three pages represented by two models - `home` and `simple`:

    ├── content
    │   ├── index.md      (model: home)
    │   ├── about.md      (model: simple)
    │   └── contact.md    (model: simple)
    └── stackbit.yaml

We want our site editors to be able to create additional pages of the `simple` model, but not be able to create additional pages of the `home` model. Therefore, we can set `singleInstance: true` for `home` model and leaving the `simple` model to match all other files in the `content` folder. We also don't need to exclude `index.md` from `simple` model because when a file is marked as `singleInstance` in one model you don't need to exclude that file in other models.

`stackbit.yaml`

    pagesDir: content
    models:
      home:
        type: page
        label: Home Page
        # the "file" property will match the index.md file to the home model
        file: index.md
        singleInstance: true
      simple:
        type: page
        label: Simple Page
        # all other files will be matched to the "simple" model.
        # There is no need to specify the "folder" property because its
        # default value is empty string, meaning it will match all files
        # inside the "content" folder.
        # Also, there is no need to specify the "exclude: index.md" because
        # single instance pages are excluded automatically from other models

<a href="#page_model_matching_properties" class="hash-link"><span class="icon-copy"></span></a>Page Model Matching Properties
-----------------------------------------------------------------------------------------------------------------------------

As described in the base [Model](/docs/reference/stackbit-yaml/models/#model_matching_properties) documentation, the model matching properties are used to match the `models` defined in stackbit.yaml to files these models represent. Following are the page model matching properties that are used to match `page` models to markdown files.

For every markdown file, the model matching is executed in the following order and stopped as soon as one of the steps match one or more models:

-   A file is matched to any models with `file` property.
-   A file is matched to any models with `layout` property.
-   A file is matched to any models with `folder`, `match` and `exclude` properties.

If a file is matched to zero or more than 1 model, the file is left unmatched. You can calidate that all of your content files match exactly one model by running the [`stackbit validate`](/docs/reference/stackbit-cli/#validate) CLI command.

**Note:** If your project is configured to work with an external headless-CMS, you don't need to specify these properties. Stackbit will use CMS data to do the model matching.

### <a href="#file" class="hash-link"><span class="icon-copy"></span></a>`file`

Setting the `file` of your model to a file path, will match that model to that file and that file only. The value of the `file` should be a file path relative to the `pagesDir` folder.

The `file` property cannot be combined with other model matching properties.

The `file` is required if [`singleInstance: true`](/docs/reference/stackbit-yaml/page-models/#singleinstance) and vice versa.

**Example**

    # stackbit.yaml
    pagesDir: content
    models:
      home:
        type: page
        label: Home
        file: index.md
        singleInstance: true

The `home` model will match the `content/index.md` file only.

    ├── content
    │   ├── posts
    │   │   ├── index.md
    │   │   ├── post-1.md
    │   │   └── post-2.md
    │   ├── index.md        # will match this file
    │   ├── about.md
    │   └── contact.md
    └── stackbit.yaml

### <a href="#layout" class="hash-link"><span class="icon-copy"></span></a>`layout`

Setting the `layout` of your model will match that model to all pages having the same value in a field specified by [`pageLayoutKey`](/docs/reference/stackbit-yaml/properties/#pagelayoutkey).

You can think of the `layout` field as a simple "by value" matcher. The name of the field by which pages will be matched is specified using the [`pageLayoutKey`](/docs/reference/stackbit-yaml/properties/#pagelayoutkey). The default `layout` value is undefined meaning no matching by `layout` will be done.

Historically, we called this property `layout` because some static site generators like Hugo, [Jekyll](https://jekyllrb.com/docs/step-by-step/04-layouts/#use-layouts) and [Eleventy](https://www.11ty.dev/docs/layouts/), provide a way to define the "layout", or the "type", of pages using the frontmatter's `layout` field. The assumption is that pages having the same `layout` would share the same model and fields. Of course the name of the frontmatter's field by which the page model is matched does not have to be `layout`, you can define any other field to be used to match pages using the [`pageLayoutKey`](/docs/reference/stackbit-yaml/properties/#pagelayoutkey).

For example, in the "Gatsby Starter Foundation" the page's `template` field is used to [select the React template for the page](https://github.com/stackrole/gatsby-starter-foundation/blob/v1.0.0/gatsby-node.js#L46-L48). By its nature, every React component has its own set of props. Therefore, it is safe to assume that every React template component can be described by its own model with predefined set of fields. To match pages to models by their `template` field we can set the [`pageLayoutKey`](/docs/reference/stackbit-yaml/properties/#pagelayoutkey) to `template` and then set the `layout` of every model to match the `template` value of pages they describe. This way, pages having the same `template` value as model's `layout` value will be matched to that model:

    ├── src
    │   └── content
    │       └── pages
    │           ├── about.md    (template: 'about-page'   => model: about)
    │           ├── contact.md  (template: 'contact-page' => model: contact)
    │           └── index.md    (template: 'index-page'   => model: index)
    └── stackbit.yaml

`src/content/pages/about.md`:

    ---
    template: about-page
    slug: /about
    title: About Foundation
    ---
    Thank you! ...

`src/content/pages/contact.md`:

    ---
    template: contact-page
    slug: /contact
    title: Get in touch
    ---
    Got a burning question regarding **JAMstack**...

`stackbit.yaml`:

    # The "pageLayoutKey" defines the name of the field in page models
    # that should be used to match the value of the model's "layout" property
    pageLayoutKey: template

    models:
      index:
        type: page
        label: Index Page
        layout: index-page
        fields: # ...
      about:
        type: page
        label: About Page
        layout: about-page
        fields: # ...
      contact:
        type: page
        label: About Page
        layout: contact-page
        fields: # ...

### <a href="#folder" class="hash-link"><span class="icon-copy"></span></a>`folder`

Setting the `folder` of your model to a folder path, will match that model to all markdown files within that folder. The value of the `folder` should be a folder path relative to the `pagesDir`.

The default value for `folder` is an empty string, meaning if the `folder` is not set it will match all files within the `pagesDir`.

The `folder` can be combined with the `match` and the `exclude` properties to fine tune the model matching. The `match` and `exclude` are glob patterns, or array of glob patterns, relative to the specified `folder`. For example, if the `folder` value is set to `posts` and the `match` value is `["index.md",                               "about.md"]`, the content model would match `posts/index.md` and `posts/about.md`.

This field is mutually exclusive with `singleInstance: true` and `file`.

**Example**

    # stackbit.yaml
    pagesDir: content
    models:
      blog:
        type: page
        label: Blog Posts
        folder: posts
        exclude: ["index.md"]
        fields: # ...

The `blog` model will match all files inside the posts folder except the `index.md` file.

    ├── content
    │   ├── posts
    │   │   ├── index.md
    │   │   ├── post1.md    # will match this file
    │   │   ├── post2.md    # will match this file
    │   │   └── post3.md    # will match this file
    │   ├── index.md
    │   ├── about.md
    │   └── contact.md
    └── stackbit.yaml

### <a href="#match" class="hash-link"><span class="icon-copy"></span></a>`match`

A glob pattern, or array of glob patterns used to match page files. The glob pattern is relative to a folder specified in the `folder` property. The default value is `**/*`, which will match all files in all subfolders within the specified `folder`.

The following examples all achieve the same match:

    match: ["index.md", "about.md"]
    match: "{index.md,about.md}"
    match: "{index,about}.md"
    match:
      - "index.md"
      - "about.md"

Internally the "[micromatch](https://github.com/micromatch/micromatch)" NPM module is used to match the files.

This field is mutually exclusive with `singleInstance: true` and `file`.

**Example**

    # stackbit.yaml
    pagesDir: content
    models:
      simple:
        type: page
        label: Simple Page
        match: "*.md"

The `simple` model will match all files having the `.md` extensions that are the direct children of the `content` folder:

    ├── content
    │   ├── posts
    │   │   ├── index.md
    │   │   ├── post1.md
    │   │   ├── post2.md
    │   │   └── post3.md
    │   ├── index.md       # will match this file
    │   └── about.md       # will match this file
    │   └── product.md     # will match this file
    └── stackbit.yaml

### <a href="#exclude" class="hash-link"><span class="icon-copy"></span></a>`exclude`

A glob pattern, or array of glob patterns used to exclude page files from being matched. The glob pattern is relative to a folder specified in the `folder` property. The default value is undefined, which will not exclude any files.

Internally the "[micromatch](https://github.com/micromatch/micromatch)" NPM module is used to match the files.

This field is mutually exclusive with `singleInstance: true` and `file`.

**Example**

    # stackbit.yaml
    pagesDir: content
    models:
      simple:
        type: page
        label: Simple Page
        match: "*.md"
        exclude: "index.md"

The `simple` model will match all files having the `.md` extensions that are the direct children of the `content` folder excluding the `index.md` file:

    ├── content
    │   ├── posts
    │   │   ├── index.md
    │   │   ├── post1.md
    │   │   ├── post2.md
    │   │   └── post3.md
    │   ├── index.md
    │   └── about.md       # will match this file
    │   └── product.md     # will match this file
    └── stackbit.yaml

<a href="#example" class="hash-link"><span class="icon-copy"></span></a>Example
-------------------------------------------------------------------------------

To better understand how a page model describes a page, let's look at the following example. In this example, all markdown pages are stored inside the `content` folder. The `content` folder has several root pages as well as an `articles` folder containing all the articles of our site.

    ├── content
    │   ├── articles
    │   │   ├── article-1.md
    │   │   ├── article-2.md
    │   │   └── article-3.md
    │   ├── index.md
    │   ├── about.md       # will match this file
    │   └── contact.md     # will match this file
    └── stackbit.yaml

All site pages can be grouped into 3 types, each represented by its own model:

-   The home page, stored as `index.md` file. This page will be represented by the `home` model.
-   The "other" pages, stored as `about.md` and `contact.md` files. These pages will be represented by the `simple_page` model.
-   The "article" pages, stores in the `articles` folder. These pages will be represented by the `article` model.

Every page type has its own set of fields that is shared among pages of the same type. For example, the following markdown page is one of these articles stored in `content/articles/article-1.md` file. This page has 3 fields shared among all other articles:

    ---
    title: How to define page models
    image_thumbnail: images/screenshot.jpg
    date: 2020-10-10
    ---

    ## Terris paruerit positis

    Lorem markdownum limosi Anguemque dum quam Saturnia. Ecce pennis, sed [refugit
    lyram](http://aquarum-hoc.net/): procedit [nimium](http://fatum.net/et).
    Pariterque non voragine meum manibus hunc, sub conpellat, populo munere; equos
    illi terras utque ut.

To describe our page models, we would need to create the following `stackbit.yaml` file:

    stackbitVersion: ~0.3.0

    ssgName: hugo
    # ... other properties

    # the root folder for all markdown pages
    pagesDir: content

    models:

      # a model of type "page" called "home"
      home:
        type: page
        label: Home Page

        # this model matches a single file within the "content" folder
        file: index.md
        singleInstance: true

        # the urlPath and filePath of this page are constant
        urlPath: "/"
        filePath: "index.md"

        # list of model fields
        fields:
          - type: string
            name: title
            label: Page Title
          - type: boolean
            name: show_articles
            label: Show Articles
            description: Show list of recent articles
          - type: number
            name: num_articles
            label: Number of articles
            description: Number of recent articles to show

      # a model of type "page" called "simple_page"
      simple_page:
        type: page
        label: Simple Page

        # this model matches all direct child files of the "content" folder
        # having the ".md" extension
        # there is no need to specify the "index.md" in the "exclude" because
        # the order of model matching will match it to the "home" model first
        match: "*.md"

        # there is no need to specify the urlPath and filePath of this model
        # because their values are equal to defaults
        # urlPath: "/{slug}"
        # filePath: "{slug}.md"

        # list of model fields
        fields:
          - type: string
            name: title
            label: Page Title

      # a model of type "page" called "article"
      article:
        type: page
        label: Article

        # this model matches all files within the "content/articles" folder
        folder: articles

        # the url pattern of the article page
        # the {slug} is extrapolated from filePath
        # the urlPath doesn't have to have same physical path
        urlPath: "/articles/{slug}"

        # the filePath defines where new article files will be stored
        # and used to extrapolate the {slug} for the urlPath
        filePath: "articles/{slug}.md"

        # list of model fields
        fields:
          - type: string
            name: title
            label: Title
            description: The title of the article
            required: true
          - type: image
            name: image_thumbnail
            label: Article Image
            description: The article image
          - type: date
            name: date
            label: Date
            description: The article publish date

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Page Model Properties](#page_model_properties)
    -   [hideContent](#hidecontent)
    -   [urlPath](#urlpath)
    -   [filePath](#filepath)
    -   [singleInstance](#singleinstance)
-   [Page Model Matching Properties](#page_model_matching_properties)
    -   [file](#file)
    -   [layout](#layout)
    -   [folder](#folder)
    -   [match](#match)
    -   [exclude](#exclude)
-   [Example](#example)











