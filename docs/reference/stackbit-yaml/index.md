This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

stackbit.yaml
=============

The `stackbit.yaml` file lets you define the directory structure, the content schema, and other aspects of your site needed to make it work with Stackbit. `stackbit.yaml` should be placed in the root of your repository.

There are two use cases for `stackbit.yaml`. The first use case serves Stackbit Site Builder and provides the data needed to create and configure a new site from a theme repository. The second use case serves Stackbit Studio and provides the necessary information to work with an existing site.

Both Stackbit Site Builder and Stackbit Studio can work without `stackbit.yaml`. They will try to infer the missing data from project files. However, to support advanced capabilities and prevent misconfigurations, we recommend providing this file.

<a href="#stackbit_studio" class="hash-link"><span class="icon-copy"></span></a>Stackbit Studio
-----------------------------------------------------------------------------------------------

Stackbit Studio runs your static site generator and shows your site's live preview, enabling you and your collaborators to edit your site with an on-page editing experience and publish it.

When a user [creates a site from a theme](/docs/conceptual-guides/site-creation/) or imports an existing site, Stackbit Studio uses `stackbit.yaml` to run your SSG. Once your SSG is up and running, Stackbit Studio shows the live site preview allowing you to edit your site pages, create new and delete existing pages, navigate your site via site-map, and other functionalities.

Stackbit Studio synchronizes site content in a bi-directional manner. When you make any content changes in Stackbit Studio, it immediately synchronizes these changes with the headless-CMS. Likewise, when you make any changes in the headless-CMS or the git repository, Stackbit Studio reflects them in live site preview.

Depending on your headless-CMS, Stackbit Studio will work in one of the two modes - "[API-based CMS mode](/docs/conceptual-guides/api-based-cms)" or "[File-based CMS mode](/docs/conceptual-guides/file-based-cms)".

<a href="#generating_stackbit_yaml" class="hash-link"><span class="icon-copy"></span></a>Generating stackbit.yaml
-----------------------------------------------------------------------------------------------------------------

In order to get started quickly, you can use Stackbit CLI `init` command to automatically generate `stackbit.yaml`. Although the generated file might not describe your project exactly, it might save you a lot of time defining your content model.

First install the Stackbit CLI:

    npm i @stackbit/cli -g

Then run the `init` command from your project folder:

    stackbit init

Click [here](/docs/reference/stackbit-cli) to learn more about Stackbit CLI.

<a href="#validating_stackbit_yaml" class="hash-link"><span class="icon-copy"></span></a>Validating stackbit.yaml
-----------------------------------------------------------------------------------------------------------------

To validate `stackbit.yaml` install Stackbit CLI:

    npm i @stackbit/cli -g

Then run the `validate` command from your project folder:

    stackbit validate

The `validate` command will validate the structure of your `stackbit.yaml` and validate your site's content files against models defined in `stackbit.yaml`.

Click [here](/docs/reference/stackbit-cli) to learn more about Stackbit CLI.

<a href="#configuring_stackbit_yaml" class="hash-link"><span class="icon-copy"></span></a>Configuring stackbit.yaml
-------------------------------------------------------------------------------------------------------------------

The configuration of `stackbit.yaml` might differ depending on the configuration of your site and the headless-CMS your site use.

As explained in [Conceptual Guides](/docs/conceptual-guides), if your site is pre-configured to work with a headless-CMS, such as Contentful, then your site's content model is already defined in these CMS. Stackbit will use that content model, so you won't need to define the same content model again in `stackbit.yaml`.

On the other hand, if your site does not use any headless-CMS and stores its content in plain files (md, JSON, YAML, etc.), you will need to define your site's content models in `stackbit.yaml` using [Models](/docs/reference/stackbit-yaml/models/) and [Fields](/docs/reference/stackbit-yaml/fields/).

Read the following sections to learn how to configure `stackbit.yaml`

You can create and edit your Stackbit Content Model using the [Content Model screen](/docs/studio-guides/modeling-content/) in the Stackbit Studio.

-   <a href="/docs/reference/stackbit-yaml/properties/" class="docs-item-link"></a>
    Properties

    <span class="icon-angle-right" aria-hidden="true"></span>
    This section describes the base properties of stackbit.yaml and when to use them

-   <a href="/docs/reference/stackbit-yaml/import/" class="docs-item-link"></a>
    Import

    <span class="icon-angle-right" aria-hidden="true"></span>
    Importing initial theme content into the CMS

-   <a href="/docs/reference/stackbit-yaml/assets/" class="docs-item-link"></a>
    Assets

    <span class="icon-angle-right" aria-hidden="true"></span>
    Assets define how files, such as images, are stored and handled in a project

-   <a href="/docs/reference/stackbit-yaml/logic-fields/" class="docs-item-link"></a>
    Logic Fields

    <span class="icon-angle-right" aria-hidden="true"></span>
    List of fields used in static site generation logic.

-   <a href="/docs/reference/stackbit-yaml/models/" class="docs-item-link"></a>
    Models

    <span class="icon-angle-right" aria-hidden="true"></span>
    Models define the structure of site content

-   <a href="/docs/reference/stackbit-yaml/page-models/" class="docs-item-link"></a>
    Page models

    <span class="icon-angle-right" aria-hidden="true"></span>
    Page models define the structure of site pages

-   <a href="/docs/reference/stackbit-yaml/data-models/" class="docs-item-link"></a>
    Data models

    <span class="icon-angle-right" aria-hidden="true"></span>
    Data models define the structure of site data files such as JSON, TOML, or YAML

-   <a href="/docs/reference/stackbit-yaml/object-models/" class="docs-item-link"></a>
    Object models

    <span class="icon-angle-right" aria-hidden="true"></span>
    Object models define the structure of data nested inside page or data models

-   <a href="/docs/reference/stackbit-yaml/fields/" class="docs-item-link"></a>
    Model Fields

    <span class="icon-angle-right" aria-hidden="true"></span>
    Model fields define the fields that make up a particular model

-   <a href="/docs/reference/stackbit-yaml/examples/" class="docs-item-link"></a>
    Examples

    <span class="icon-angle-right" aria-hidden="true"></span>
    stackbit.yaml examples

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Stackbit Studio](#stackbit_studio)
-   [Generating stackbit.yaml](#generating_stackbit_yaml)
-   [Validating stackbit.yaml](#validating_stackbit_yaml)
-   [Configuring stackbit.yaml](#configuring_stackbit_yaml)











