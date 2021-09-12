This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Models
======

Models describe your site's content structure. Models are defined inside the [`models`](/docs/reference/stackbit-yaml/properties/#models) property if the `stackbit.yaml`. The `models` is an object where its keys represent the model names and values are the model definitions.

<a href="#model_types" class="hash-link"><span class="icon-copy"></span></a>Model Types
---------------------------------------------------------------------------------------

Every model must belong to one of three types:

-   [Page Models](/docs/reference/stackbit-yaml/page-models/) (`type: page`) describe the pages of your site stored in markdown files (e.g. `.md`, `.mdx`, `.markdown`).
-   [Data Models](/docs/reference/stackbit-yaml/data-models/) (`type: data`) describe the arbitrary data of your site stored in data files (e.g. `.yml`, `.yaml`, `.toml`, `.json`).
-   [Object Models](/docs/reference/stackbit-yaml/object-models/) (`type: object`) describe the objects that can be nested within other objects of Page and Data models.

Example (for simplicity, all model properties except `type` were omitted):

    models:

      # a "post" model that describes pages (of type "post")
      # that could be stored in .md files
      post:
        type: page
        # ... other properties

      # an "author" model that describes an objects (of type "author")
      # that could be stored in .json files (one per author)
      author:
        type: data
        # ... other properties

      # an "action" model that describes an object (of type "action")
      # that could be stored within other pages or objects
      action:
        type: object
        # ... other properties

**Note:** If your project is configured to work with an external headless-CMS, Stackbit will fetch the models from these headless-CMS. Therefore, all you need to specify is which of your models are pages (i.e., `type: page`) and their `urlPath`.

### <a href="#choosing_a_model_type" class="hash-link"><span class="icon-copy"></span></a>Choosing a model type

#### Page

Choose [page](/docs/reference/stackbit-yaml/page-models/) when each data record will be stored in a standalone file and will correspond to a unique URL on your web site.

#### Data

Choose [data](/docs/reference/stackbit-yaml/data-models/) for standalone data files that do not correspond to URLs on your site.

#### Object

[Objects](/docs/reference/stackbit-yaml/object-models/) are useful when you need to define a complex data model, but standalone files *(e.g. `home-hero.json`, `about-hero.json`, and `contact-hero.json` page sections)* could clutter the content authoring experience.

**Tip:** You can nest any of the three model types inside another.

-   To nest a [page](/docs/reference/stackbit-yaml/page-models/) or [data](/docs/reference/stackbit-yaml/data-models/) file, link to its filepath with a [`reference`](/docs/reference/stackbit-yaml/fields/#reference_field) field.
-   To nest an [object](/docs/reference/stackbit-yaml/object-models/), refer to its definition with a [`model`](/docs/reference/stackbit-yaml/fields/#model_field) field.

<a href="#model_naming_rules" class="hash-link"><span class="icon-copy"></span></a>Model Naming Rules
-----------------------------------------------------------------------------------------------------

As shown in the previous example, models are named as keys within the YAML file and must adhere to the following rules:

-   Must start with and end with a letter
-   Can contain only *lower case* alphanumeric characters or underscores `_`

<a href="#common_model_properties" class="hash-link"><span class="icon-copy"></span></a>Common Model Properties
---------------------------------------------------------------------------------------------------------------

### <a href="#type" class="hash-link"><span class="icon-copy"></span></a>`type`

-   **Allowed values:** `page`, `data`, `object`
-   **Required:** true

The type of the model.

**Example**

    models:
      home:
        type: page
        # ... other properties

### <a href="#label" class="hash-link"><span class="icon-copy"></span></a>`label`

-   **Allowed values:** string
-   **Required:** true

A short, descriptive name for the model. For example if you were creating a page model for a blog page you might use the label "Blog" but you could also use "Article". The model label is displayed besides the name of the content item.

**Example**

    models:
      home:
        type: page
        label: "Blog Post"

### <a href="#description" class="hash-link"><span class="icon-copy"></span></a>`description`

-   **Allowed values:** string
-   **Required:** false

Description of the model.

**Example**

    models:
      home:
        type: page
        label: "Blog Post"
        description: "Create a new blog post"

### <a href="#fields" class="hash-link"><span class="icon-copy"></span></a>`fields`

-   **Allowed values:** list of [Fields](/docs/reference/stackbit-yaml/fields/)
-   **Required:** true (forbidden for `data` models with `isList: true`)

The fields that that make up the data within the model.

**Example**

    models:
      home:
        type: page
        label: "Blog Post"
        description: "Create a new blog post"
        fields:
          - type: string # the type of the model field
            name: title # the name of the field
            label: Title

<a href="#model_matching_properties" class="hash-link"><span class="icon-copy"></span></a>Model Matching Properties
-------------------------------------------------------------------------------------------------------------------

Model matching properties are applicable to [Page Models](/docs/reference/stackbit-yaml/page-models/) and [Data Models](/docs/reference/stackbit-yaml/data-models/) only. They are used to match the `models` defined in `stackbit.yaml` to content files these models represent. When Stackbit loads your content files, it needs to know which files belong to which models. The process that matches models to content files is called **Model Matching**. To let Stackbit do the model matching, your models should specify the "Model Matching Properties":

-   `file` - matches a model to a single file relative to `pagesDir` for `page` models or `dataDir` for `data` models. Default is undefined.
-   `layout` - matches a model to all pages having the same value in a field specified by the [`pageLayoutKey`](/docs/reference/stackbit-yaml/properties/#pagelayoutkey). Applicable for `page` models only. Default is undefined.
-   `folder` - matches a model to all files inside a folder relative to `pagesDir` for `page` models or `dataDir` for `data` models.
-   `match` - additional filter that matches file glob(s) relative to the `folder`. Default is all files `**/*`
-   `exclude` - additional filter that excludes file glob(s) relative to the `folder`. Default is undefined.

To learn more about model matching properties visit [Page Model Matching Properties](/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties) or [Data Models Matching Properties](/docs/reference/stackbit-yaml/data-models/#data_model_matching_properties).

**Note:** If your project is configured to work with an external headless-CMS, you don't need to specify these properties. Stackbit will use CMS data to do the model matching.

Every content file in your site within the [`pagesDir`](/docs/reference/stackbit-yaml/properties/#pagesdir) or the [`dataDir`](/docs/reference/stackbit-yaml/properties/#datadir) must match a single model. If a file matches multiple models you will get a validation error when running [`stackbit validate`](/docs/reference/stackbit-cli/#validate) CLI command.

You may use the global [`excludePages`](/docs/reference/stackbit-yaml/properties/#excludepages) to exclude files from being loaded and matched to any model.

**Example**

Assume your site has three types of pages represented by three `page` models - `index`, `post` and `project`. The `post` and `project` pages are located inside `posts` and `projects` folders respectively, and the `index` pages can be located in any folder:

    ├── content
    │   ├── index.md            (model: index)
    │   └── posts
    │   │   ├── index.md        (model: index)
    │   │   ├── post-1.md       (model: post)
    │   │   └── post-2.md       (model: post)
    │   └── projects
    │       ├── index.md        (model: index)
    │       ├── project-1.md    (model: project)
    │       └── project-2.md    (model: project)
    └── stackbit.yaml

    pagesDir: content

    models:

      index:
        type: page
        label: Index
        # match index.md file in any folder
        match: "**/index.md"
        # ... other properties

      post:
        type: page
        label: Article
        # match any files inside {pagesDir}/posts excluding index.md
        folder: posts
        exclude: index.md
        # ... other properties

      project:
        type: page
        label: Project
        # match any files inside {pagesDir}/project excluding index.md
        folder: project
        exclude: index.md
        # ... other properties

<a href="#examples" class="hash-link"><span class="icon-copy"></span></a>Examples
---------------------------------------------------------------------------------

### <a href="#project_without_a_headless_cms" class="hash-link"><span class="icon-copy"></span></a>Project without a headless-CMS

Assume your site has several post files inside the `content/posts` folder with two properties - `title` and `featured_image`, and another `settings.yaml` file inside the `data` folder:

    ├── content
    │   └── posts
    │       ├── post1.md
    │       └── post2.md
    ├── data
    │   └── settings.yaml
    └── stackbit.yaml

To model your content you will need to define two models in your `stackbit.yaml`. One model of type `page` called `post` representing your post pages and another model of type `data` called `settings` representing the settings.yaml file. Inside each of these models you will need to define several model properties describing your models and the `fields` of your content files.

    stackbitVersion: ~0.3.0

    # ... ssgName, cmsName, etc.

    pagesDir: content
    dataDir: data

    models:

      # a model of type "page" called "post"
      post:
        type: page
        label: Post

        # this model matches all markdown files in the "content/posts" folder
        folder: posts

        # the urlPath defines the URL pattern for posts,
        # the {slug} is extrapolated from filePath
        # note the URL pattern is different from the physical folder path
        urlPath: "/blog/{slug}"

        # the filePath defines where new post files will be stored
        # and used to extrapolate the {slug} for the urlPath
        filePath: "/posts/{slug}.md"

        # list of model fields
        fields:
          - type: string
            name: title
            label: Title
          - type: image
            name: featured_image
            label: Featured Image

      # a model of type "data" called "settings"
      settings:
        type: data
        label: Settings

        # this model matches a single "data/settings.yaml" file
        file: settings.yaml
        singleInstance: true

        # list of model fields
        fields:
          - type: string
            name: title
            label: Sites Title
          - type: image
            name: logo
            label: Logo Image

### <a href="#project_with_a_headless_cms" class="hash-link"><span class="icon-copy"></span></a>Project with a headless-CMS

As noted before, if your site is configured to work with an external headless-CMS, Stackbit will read the models from that CMS. Therefore, all you need to specify in `stackbit.yaml` is the types of your models (i.e., `type: page`, `type: data`). If your content is file-based then you also need to specify the [`urlPath`](/docs/reference/stackbit-yaml/page-models/#urlpath) and [`filePath`](/docs/reference/stackbit-yaml/page-models/#filepath) for your page models.

The name of the model in `stackbit.yaml` must match the name of the model in the external CMS.

    stackbitVersion: ~0.3.0
    ...
    models:
      home:
        type: page
        urlPath: "/"
      page:
        type: page
        urlPath: "/{slug}"
      post:
        type: page
        urlPath: "/blog/{slug}"
        filePath: "/posts/{slug}.md"
      author:
        type: data

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Model Types](#model_types)
    -   [Choosing a model type](#choosing_a_model_type)
-   [Model Naming Rules](#model_naming_rules)
-   [Common Model Properties](#common_model_properties)
    -   [type](#type)
    -   [label](#label)
    -   [description](#description)
    -   [fields](#fields)
-   [Model Matching Properties](#model_matching_properties)
-   [Examples](#examples)
    -   [Project without a headless-CMS](#project_without_a_headless_cms)
    -   [Project with a headless-CMS](#project_with_a_headless_cms)











