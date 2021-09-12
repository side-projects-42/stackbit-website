This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Examples
========

<a href="#basic_stackbit_yaml_examples" class="hash-link"><span class="icon-copy"></span></a>Basic stackbit.yaml examples
-------------------------------------------------------------------------------------------------------------------------

The following examples show the typical fields you would need to include in `stackbit.yaml` in different use cases.

### <a href="#importing_existing_project_connected_with_a_headless_cms" class="hash-link"><span class="icon-copy"></span></a>Importing existing project connected with a headless-CMS

When importing an existing project already connected with a headless-CMS, Stackbit Studio gets your site's schema from the headless-CMS, so you don't need to define the Models of your site.

For example, if you import an existing Gatsby project which is already contected with Contentful, all you have to specify is that your project uses Gatsby as static site generator, Contentful as headless-CMS, and the models representing your site pages with their url path patterns. The model names must match the content types IDs in Contentful.

    stackbitVersion: ~0.3.0
    ssgName: gatsby
    cmsName: contentful
    logicFields:
      - page.slug
      - post.slug
      - post.date
    models:
      page:
        type: page
        urlPath: '{slug}'
      post:
        type: page
        urlPath: '/blog/{slug}'

### <a href="#importing_a_theme_not_connected_with_any_headless_cms" class="hash-link"><span class="icon-copy"></span></a>Importing a theme not connected with any headless-CMS

When importing a theme not connected with any headless-CMS, both Stackbit Site Builder and Stackbit Studio need to know about your project's structure and its content schema.

    stackbitVersion: ~0.3.0
    # the name of the static site generator
    ssgName: gatsby
    # the build command that builds the static site
    buildCommand: npm run build
    # the folder where static site generator puts the generated site
    publishDir: public
    # the assets object defining how to handle project assets
    assets:
      referenceType: static
      # the folder with static asset files
      staticDir: static
      # the folder within the staticDir where the uploaded files will be stored
      uploadDir: images
      # the URL path from which the static assets will be server
      publicPath: /
    # the folder containing project's data files (yaml, json, toml)
    dataDir: data
    # the folder containing project's markdown page files (.md, .mdx, .markdown)
    pagesDir: content
    # list of globs matching the files that should be excluded from the pagesDir
    excludePages:
      - README.md
    # list of field that are used in logical expressions
    logicFields:
      - post.category
    # the schema of project's content
    models:
      # the "post" model defining the schema of the project "post" pages
      post:
        type: page
        label: Post
        folder: posts
        urlPath: "/blog/{title}"
        # list of model fields
        fields:
          # see model fields documentation for more info
          - type: string
            name: title
          - type: string
            name: category
          ...

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Basic stackbit.yaml examples](#basic_stackbit_yaml_examples)
    -   [Importing existing project connected with a headless-CMS](#importing_existing_project_connected_with_a_headless_cms)
    -   [Importing a theme not connected with any headless-CMS](#importing_a_theme_not_connected_with_any_headless_cms)











