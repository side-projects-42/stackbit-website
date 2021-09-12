This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Properties
==========

This section describes the base properties of `stackbit.yaml` and when to use them.

<a href="#stackbitversion" class="hash-link"><span class="icon-copy"></span></a>`stackbitVersion`
-------------------------------------------------------------------------------------------------

-   **Allowed values:** a string with any valid version number using [semver](https://semver.org/) syntax
-   **Default value:** none
-   **Required:** true

The version of the `stackbit.yaml` file. We recommend using the latest version with a tilde: `~0.3.0`, which will use the latest applicable major version.

**Example**

    stackbitVersion: ~0.3.0

<a href="#ssgname" class="hash-link"><span class="icon-copy"></span></a>`ssgName`
---------------------------------------------------------------------------------

-   **Allowed values**: `gatsby`, `nextjs`, `hugo`, `jekyll`, `eleventy`, `gridsome`, `hexo`, `nuxt`, `sapper`, `vuepress` or `custom`.
-   **Required:** true

The name of the static site generator used in your project to generate a static site. You can use the `custom` value if none of the allowed values match your SSG.

**Example**

    ssgName: jekyll

<a href="#ssgversion" class="hash-link"><span class="icon-copy"></span></a>`ssgVersion`
---------------------------------------------------------------------------------------

-   **Allowed values**: string with the version of your static site generator
-   **Required:** Required when using Hugo or other static site generator that doesn't specify its version in a dependency file.

Generally, you don't need to specify this property. Most of the static site generators such as Gatsby and Next.js specify their versions via package.json file. Other SSGs, like Jekyll, specify its version via Gemfile.

When a static site generator is not installed via dependency file, such as Hugo, Stackbit uses `ssgVersion` to manually download and install the correct version.

**Example**

    ssgName: hugo
    ssgVersion: 0.81.0

<a href="#cmsname" class="hash-link"><span class="icon-copy"></span></a>`cmsName`
---------------------------------------------------------------------------------

-   **Allowed values**: `git`, `contentful`, `sanity`
-   **Required:** false
-   **Default**: `git`

The name of the CMS your project is configured to work with. If your project does not use any CMS, you don't need to specify this property.

**Example**

    cmsName: contentful

<a href="#nodeversion" class="hash-link"><span class="icon-copy"></span></a>`nodeVersion`
-----------------------------------------------------------------------------------------

-   **Allowed values**: Node.js version, currently Stackbit supports Node.js versions 10, 12 and 14.
-   **Required:** false
-   **Default:** 10

The Node.js version used to install dependencies and run Node.js based static site generator such as Gatsby or Next.js.

Stackbit always uses the latest major version of the version you specify. For example, if you specify `12.11.0`, Stackbit will use the latest version for major `12` which is `12.21.0`. For this reason, it is enough to specify only the major.

**Example**

    ssgName: nextjs
    nodeVersion: 12assets

<a href="#import" class="hash-link"><span class="icon-copy"></span></a>`import`
-------------------------------------------------------------------------------

-   **Allowed values**: [`import`](/docs/reference/stackbit-yaml/import/) object
-   **Required:** required for themes using API-based CMS's

If your theme works with an API-based CMS, such as Contentful or Sanity, you might want to have an initial content which will be imported into the CMS when Stackbit creates a new site from your theme. The [`import`](/docs/reference/stackbit-yaml/import/) object defines how to import the initial theme content into an API-based CMS.

<a href="#buildcommand" class="hash-link"><span class="icon-copy"></span></a>`buildCommand`
-------------------------------------------------------------------------------------------

-   **Allowed values**: a string specifying the build command that builds your static site
-   **Required:** true

For example, if your project uses Jekyll, the build command would be `jekyll build`, and if your project uses Gatsby, the build command would be `gatsby build`. However, this value does not have to be the standard SSG build command. You can specify any custom command such as `npm run custom_build` or `node ./custom_build_script.js`.

**Example**

    stackbitVersion: ~0.3.0
    ssgName: jekyll
    buildCommand: jekyll build

<a href="#publishdir" class="hash-link"><span class="icon-copy"></span></a>`publishDir`
---------------------------------------------------------------------------------------

-   **Allowed values**: a string specifying the directory path relative to the project root
-   **Required:** true

The directory where the static site generator puts the generated static site files (after running the build command).

For example, if your project uses Jekyll, the publish directory would be `_site`, and if your project uses Next.js, the publish directory would be `out`.

**Example**

    stackbitVersion: ~0.3.0
    ssgName: jekyll
    buildCommand: jekyll build
    publishDir: _site

<a href="#datadir" class="hash-link"><span class="icon-copy"></span></a>`dataDir`
---------------------------------------------------------------------------------

-   **Allowed values**: a string specifying the directory path relative to the project root, or `null`
-   **Required:** true

The directory containing your site data files. Usually, data files have the `*.yaml`, `*.json`, and `*.toml` extensions.

For example, if your project uses Hugo, the directory containing your site data files would be `data`, and if your project uses Jekyll, this directory would be `_data`.

As with `pagesDir`, you can set this property to an empty string if your project's data files are located in different folders or the root folder.

If your project does not have page files, set this property to `null`. For example, if your project is configured to work with API-based CMS such as Contentful or Sanity, your data will be stored by the CMS. Therefore, this property would be `null`.

**Example**

    stackbitVersion: ~0.3.0
    ssgName: hugo
    dataDir: data

<a href="#pagesdir" class="hash-link"><span class="icon-copy"></span></a>`pagesDir`
-----------------------------------------------------------------------------------

-   **Allowed values**: a string specifying the directory path relative to the project root, or `null`.
-   **Required:** true

The directory containing your site pages' content files. Usually, page files have the `.md` extension (or `.mdx` in gatsby).

For example, if your project uses Hugo, the directory containing your site pages would be `content`.

If you have multiple folders containing page content files, or if your page content files are located in the root folder like it is accepted in Jekyll and 11ty, you may set this property to an empty string `pagesDir: ""`. Setting this property to an empty string will scan for all markdown files in your project. Keep in mind that Stackbit might include unwanted files like the `README.md` and the `CONTRIBUTING.md`. To fix that, you can explicitly exclude these files using the [`excludePages`](#excludepages) property.

If your project does not have page files, set this property to `null`. For example, if your project is configured to work with API-based CMS such as Contentful or Sanity, your pages' content will be stored by the CMS. Therefore, this property would be `null`.

**Example**

    stackbitVersion: ~0.3.0
    ssgName: hugo
    pagesDir: content

<a href="#excludepages" class="hash-link"><span class="icon-copy"></span></a>`excludePages`
-------------------------------------------------------------------------------------------

-   **Allowed values**: a list of file paths, or glob patterns
-   **Required:** false

If your `pagesDir` contains files that have markdown extensions (`.md`, `.mdx`, `.markdown`) but should not be treated as site pages, use the `excludePages` property to specify which files should not be treated as site pages. The value should be a glob string or a list of glob strings matching files that should be excluded.

**Example**

    stackbitVersion: ~0.3.0
    ssgName: jekyll
    pagesDir: ""
    excludePages:
      - doc/**/*
      - README.md
      - CONTRIBUTING.md

<a href="#assets" class="hash-link"><span class="icon-copy"></span></a>`assets`
-------------------------------------------------------------------------------

-   **Allowed values**: [`assets`](/docs/reference/stackbit-yaml/assets/) object
-   **Required:** required for Git-based CMS's

The [`assets`](/docs/reference/stackbit-yaml/assets/) object defines where the site assets, such as images, are stored and how page and data files reference these assets.

**Note:** If your project is configured to work with API-based CMS such as Contentful or Sanity, your assets will be stored by the CMS. Therefore, you don't need to use this property.

<a href="#logicfields" class="hash-link"><span class="icon-copy"></span></a>`logicFields`
-----------------------------------------------------------------------------------------

-   **Allowed values**: [`logicFields`](/docs/reference/stackbit-yaml/logic-fields/) list of strings specifying the logic fields
-   **Required:** false

The [`logicFields`](/docs/reference/stackbit-yaml/logic-fields) list define the fields used in static site generation logic.

<a href="#pagelayoutkey" class="hash-link"><span class="icon-copy"></span></a>`pageLayoutKey`
---------------------------------------------------------------------------------------------

-   **Allowed values**: the field name of page models to match models by `layout`
-   **Required:** false

The `pageLayoutKey` defines the field name of page models that will be used to match the model's [`layout`](/docs/reference/stackbit-yaml/page-models/#layout) model matching property.

<a href="#objecttypekey" class="hash-link"><span class="icon-copy"></span></a>`objectTypeKey`
---------------------------------------------------------------------------------------------

-   **Allowed values**: the field name of data models to identify the type of the object
-   **Required:** false

The `objectTypeKey` defines the field name of data models that will be used to identify the type of the objects referenced by the [`model`](/docs/reference/stackbit-yaml/fields/#model_field) or [`reference`](/docs/reference/stackbit-yaml/fields/#reference_field) fields.

<a href="#models" class="hash-link"><span class="icon-copy"></span></a>`models`
-------------------------------------------------------------------------------

-   **Allowed values**: an map of [Models](/docs/reference/stackbit-yaml/models/) that define the site's content structure
-   **Required:** false

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [stackbitVersion](#stackbitversion)
-   [ssgName](#ssgname)
-   [ssgVersion](#ssgversion)
-   [cmsName](#cmsname)
-   [nodeVersion](#nodeversion)
-   [import](#import)
-   [buildCommand](#buildcommand)
-   [publishDir](#publishdir)
-   [dataDir](#datadir)
-   [pagesDir](#pagesdir)
-   [excludePages](#excludepages)
-   [assets](#assets)
-   [logicFields](#logicfields)
-   [pageLayoutKey](#pagelayoutkey)
-   [objectTypeKey](#objecttypekey)
-   [models](#models)











