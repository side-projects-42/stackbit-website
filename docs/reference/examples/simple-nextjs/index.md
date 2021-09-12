This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Simple Next.js Example
======================

This example builds a Stackbit site starting from the Next.js starter. It renders simple pages with just a few simple fields from local markdown files.

Below you will find a link to the code, an option to generate your own Stackbit site from the code, and the following concepts:

-   [Rendering Basic Pages](#rendering_basic_pages)
-   [Making Pages Editable in Stackbit](#making_pages_editable_in_stackbit)

<a href="#the_code" class="hash-link"><span class="icon-copy"></span></a>The Code
---------------------------------------------------------------------------------

This code is available on GitHub in the [stackbit/example-nextjs-simple](https://github.com/stackbit/example-nextjs-simple) repo.

**Warning:** The code that powers this example uses new features. It is meant as a demonstration to teach basic concepts and is not ready to be used in production.

You can also clone this project into your own Stackbit site by clicking the button below:

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://stackbit.com/create?theme=https://github.com/stackbit/example-nextjs-simple)

<a href="#rendering_basic_pages" class="hash-link"><span class="icon-copy"></span></a>Rendering Basic Pages
-----------------------------------------------------------------------------------------------------------

The project is set up to render basic pages from content. It comes together with three pieces:

-   [Content Source](#content_source)
-   [Page Template](#page_template)
-   [Utility Methods](#utility_methods)

### <a href="#content_source" class="hash-link"><span class="icon-copy"></span></a>Content Source

These pages are placed in the [`content/pages` directory](https://github.com/stackbit/example-nextjs-simple/tree/main/content/pages). Pages can have a title, subtitle, and image in its frontmatter, along with content in the main body area. For example, [here's the home page](https://github.com/stackbit/example-nextjs-simple/blob/main/content/pages/index.md):

    ---
    title: Home
    subtitle: This is the home page.
    image: /images/sentidos-humanos-kEq5QH9rUTM-unsplash.jpg
    ---

    Laborum sit officia magna duis adipisicing ...

### <a href="#page_template" class="hash-link"><span class="icon-copy"></span></a>Page Template

The page template is placed at [`pages/[[...slug]].jsx`](https://github.com/stackbit/example-nextjs-simple/blob/main/pages/%5B%5B...slug%5D%5D.jsx).

Notice that we have removed the `index.jsx` file from [the `pages` directory](https://github.com/stackbit/example-nextjs-simple/tree/main/pages). That's because we're rendering pages with an [optional catch all route](https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes). This is what enables us to nest pages without having templates explicitly nested in the `pages` directory. But that means we can't have any conflicting routes, which `index.jsx` would create.

This template has a `getStaticPaths()` method, which tells Next which pages to load. This function makes use of a `getPagePaths()` utility method, covered below.

    export async function getStaticPaths() {
      const pagePaths = await getPagePaths();
      return { paths: pagePaths, fallback: false };
    }

Next then runs a `getStaticProps()` function for each page. This is where we use a `getPageProps()` utility method to parse the markdown file for the requested route.

    export async function getStaticProps({ params }) {
      const page = await getPageProps(params.slug);
      return { props: { page } };
    }

### <a href="#utility_methods" class="hash-link"><span class="icon-copy"></span></a>Utility Methods

The utility methods are what makes everything work together. Take a look at [the `utils/pages.js` file](https://github.com/stackbit/example-nextjs-simple/blob/main/utils/pages.js). This has a number of methods that read from the `content/pages` directory, parses the content, and makes it available to the template.

Each function is commented so you can see what it is responsible for.

<a href="#making_pages_editable_in_stackbit" class="hash-link"><span class="icon-copy"></span></a>Making Pages Editable in Stackbit
-----------------------------------------------------------------------------------------------------------------------------------

After you have a site that is rendering basic pages, the next step is to make the pages editable in Stackbit Studio.

We can make this happen by adding [a `stackbit.yaml` file](https://github.com/stackbit/example-nextjs-simple/blob/main/stackbit.yaml) in the root of the project. The configuration file in the example project contains comments to better explain each item. Let's talk about a few of them.

### <a href="#enabling_asset_uploads" class="hash-link"><span class="icon-copy"></span></a>Enabling Asset Uploads

Because pages have an image, we want to enable an asset uploading feature in Stackbit. And we want to store those images within the code repository. To do this, we add the `assets` setting:

    assets:
      referenceType: static
      staticDir: public
      uploadDir: images
      publicPath: /

This tells Stackbit to store uploaded images to the `public/images` directory, and to reference the `public` directory as the root of the project, which is how Next.js will treat that directory.

### <a href="#the_page_model" class="hash-link"><span class="icon-copy"></span></a>The Page Model

`models` is where we define our Stackbit data models. You can read more about that setting in [the reference guide](/docs/reference/stackbit-yaml/models).

Our config for pages says we have four fields: `title`, `subtitle`, and `image`.

    models:
      page:
        type: page
        label: page
        fields:
          - name: title
            type: string
            label: Title
            required: true
          - name: subtitle
            type: string
            label: Subtitle
          - name: image
            type: image
            label: Image

We tell Stackbit that our pages can be found in the `content/pages` directory.

    pagesDir: content/pages

<a href="#try_it_yourself" class="hash-link"><span class="icon-copy"></span></a>Try it Yourself
-----------------------------------------------------------------------------------------------

That's it! That's how Stackbit works at its most basic. Give it a spin for yourself by clicking the button below to create your own Stackbit project from this example. Or [create your own site](https://app.stackbit.com/create) using own of Stackbit's prebuilt themes.

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://stackbit.com/create?theme=https://github.com/stackbit/example-nextjs-simple)

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [The Code](#the_code)
-   [Rendering Basic Pages](#rendering_basic_pages)
    -   [Content Source](#content_source)
    -   [Page Template](#page_template)
    -   [Utility Methods](#utility_methods)
-   [Making Pages Editable in Stackbit](#making_pages_editable_in_stackbit)
    -   [Enabling Asset Uploads](#enabling_asset_uploads)
    -   [The Page Model](#the_page_model)
-   [Try it Yourself](#try_it_yourself)











