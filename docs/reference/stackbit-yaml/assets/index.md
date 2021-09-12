This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Assets
======

The `assets` object defines where the site assets, such as images, are stored in your project and how page and data files reference these assets.

**Note:** If your project is configured to work with API-based headless-CMS such as Contentful or Sanity, your assets will be stored by the headless-CMS. Therefore, you don't need to use this property.

Following is a simple example for the `assets` object:

    assets:
      referenceType: static
      staticDir: static
      uploadDir: uploads
      publicPath: /

The following sections describe the properties of the `assets` object.

<a href="#referencetype" class="hash-link"><span class="icon-copy"></span></a>`referenceType`
---------------------------------------------------------------------------------------------

-   **Allowed values**: `static` or `relative`
-   **Required:** true

The `assets.referenceType` specifies how content files reference asset files. Allowed values: `static`, `relative`.

### <a href="#static_assets" class="hash-link"><span class="icon-copy"></span></a>Static Assets

Use `static` when your site stores all the assets in a special static folder. Every static site generator defines its static folder. For example, in Hugo and Gatsby, the static folder is `static`, while in Next.js, the static folder is `public`. When a static site generator builds your site, it copies all files from the static folder to the [`publishDir`](/docs/reference/stackbit-yaml/properties#publishdir). This way, all files stored in the static folder will be publicly available from your site's root URL. To reference assets from content files, you would usually specify their public URL path. The asset's public URL path consists of the asset's file path relative to the `assets.staticDir` folder prefixed by the `assets.publicPath`.

When setting `assets.referenceType` to `static`, you need to specify the `assets.staticDir` and the `assets.publicPath`.

For example, if your project uses Hugo and you stored your site's logo in the `images` folder inside Hugo's `static` folder, such as `static/images/logo.png`. Then, after building the site, Hugo will copy the logo to the `public/images/logo.png`, and the logo will be publicly available at the `/images/logo.png` URL path. To reference the logo image from a markdown file, you would set the image value to `/images/logo.png`. In this case, the `assets.referenceType` would be `static`, the `assets.staticDir` would be `static`, and the `assets.publicPath` would be `/`.

### <a href="#relative_assets" class="hash-link"><span class="icon-copy"></span></a>Relative Assets

Use `relative` when your site stores the assets in separate folders alongside the content files and when your content files reference assets using relative paths.

When setting `assets.referenceType` to `relative`, you need to specify the `assets.assetsDir`. The `assets.assetsDir` need to specify the common ancestor folder that contains all the assets within the project.

For example, if your project uses Gatsby and your asset files placed in separate folders alongside markdown files, and the markdown files reference assets using relative paths. Then you should set `assets.referenceType` to `relative` and `assets.assetsDir` to `src`.

<a href="#staticdir" class="hash-link"><span class="icon-copy"></span></a>`staticDir`
-------------------------------------------------------------------------------------

The directory relative to the project root containing static files. Usually, the static site generator will copy files from this directory to the [`publishDir`](/docs/reference/stackbit-yaml/properties#publishdir) when it builds your site.

For example, if your project uses Hugo or Gatsby, the static directory would be `static`, and if your project uses Next.js, the static directory would be `public`.

-   **Allowed values**: Directory path relative to the project root
-   **Required:** required when `referenceType` is `static`

<a href="#publicpath" class="hash-link"><span class="icon-copy"></span></a>`publicPath`
---------------------------------------------------------------------------------------

The public URL from which the static files, stored in the `assets.staticDir`, are publicly accessible.

-   **Allowed values**: URL path relative to your site domain
-   **Required:** required when `referenceType` is `static`

<a href="#assetsdir" class="hash-link"><span class="icon-copy"></span></a>`assetsDir`
-------------------------------------------------------------------------------------

The common ancestor folder containing all the assets within your project. This folder can include files of different types. However, only files with specific extensions will be treated as assets (png, jpg, jpeg, gif, svg, ico, etc.).

-   **Allowed values**: Directory path relative to the project root
-   **Required:** required when `referenceType` is `relative`

<a href="#uploaddir" class="hash-link"><span class="icon-copy"></span></a>`uploadDir`
-------------------------------------------------------------------------------------

The `assets.uploadDir` is a directory within the `assets.assetsDir`, or the `assets.staticDir`, used to store new assets uploaded from Stackbit Studio.

When `assets.referenceType` is `static`, Stackbit Studio will save the upload files in the `{assets.staticDir}/{assets.uploadDir}` folder.

When `assets.referenceType` is `relative`, Stackbit Studio will save the uploaded files in the `{assets.assetsDir}/{assets.uploadDir}` folder.

By default, `assets.uploadDir` is an empty string, meaning StackbitStudio will save the uploaded assets directly in the `assets.staticDir` or the `assets.assetsDir` folders.

For example, setting `assets.staticDir` to `static` and `assets.uploadDir` to `images` will cause Stackbit Studio to save the newly uploaded images in the `static/images` folder.

-   **Allowed values**: Directory path relative to the `assets.staticDir` or the `assets.assetsDir`
-   **Default**: Empty string
-   **Required:** false

<a href="#examples" class="hash-link"><span class="icon-copy"></span></a>Examples
---------------------------------------------------------------------------------

### <a href="#hugo_site_with_images_in_the_static_folder" class="hash-link"><span class="icon-copy"></span></a>Hugo site with images in the "static" folder

The following example assumes a Hugo site with images located in the "static" folder. When Hugo builds the static site, it copies all images from the "static" folder to the "public" folder.

    .
    ├── ...
    ├── config.toml
    ├── stackbit.yaml
    ├── content
    │   ├── ...
    │   └── _index.md
    ├── static
    │   └── images
    │       ├── ...
    │       └── hero.png
    └── public (copy of static)

Content files, such as markdown (`.md`) and JSON files, reference images by their public URL paths. Usually, the public URL path is the physical file path relative to the `assets.staticDir` prefixed by the `publicPath`.

For example, a markdown file located in `content/_index.md` would usually reference the static image located at `static/images/hero.png` using the public URL path such as `/images/hero.png`:

    ---
    title: Home page
    image: /images/hero.png
    ---

In this case, the `stackbit.yaml` should specify the `assets` object in the following way:

    assets:
      # assets are located in static folder and are referenced by their public URL paths
      referenceType: 'static'
      # the static folder where assets are stored is 'static'
      staticDir: 'static'
      # uploaded assets will be stored in the 'static/images' folder
      uploadDir: 'images'
      # the public URL path for static assets is '/'
      publicPath: '/'

### <a href="#gatsby_site_with_images_in_the_src_folder" class="hash-link"><span class="icon-copy"></span></a>Gatsby site with images in the "src" folder

The following example assumes a Gatsby site with images located in the "src" folder alongside markdown files.

    .
    ├── ...
    ├── gatsby-config.js
    ├── stackbit.yaml
    └── src
        ├── ...
        ├── uploads
        │   ├── uploaded_image1.png
        │   └── uploaded_image2.png
        └── pages
            ├── logos
            │   ├── logo-large.png
            │   └── logo.png
            ├── hero.png
            └── index.md

Content files, such as markdown (`.md`) and JSON files, reference images using relative paths. When the user uploads new images via Stackbit Studio, it stores them in the `src/uploads` folder.

For example, a markdown file located in `src/pages/index.md` would reference an image located at `src/pages/logos/logo.png` using the relative path such as `./logos/logo.png`:

    ---
    title: Home page
    header:
      logo_image: ./images/logo.png
    hero:
      hero_title: Welcome
      hero_image: ./hero.png
    features_image: ../uploads/uploaded_image1.png
    ---

In this case, the `stackbit.yaml` should specify the `assets` object in the following way:

    assets:
      # asset are referenced using relative paths
      referenceType: relative
      # the common ancestor folder containing all the images is the 'src' folder
      assetsDir: src
      # uploaded images will be stored in 'src/uploads'
      uploadDir: uploads

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [referenceType](#referencetype)
    -   [Static Assets](#static_assets)
    -   [Relative Assets](#relative_assets)
-   [staticDir](#staticdir)
-   [publicPath](#publicpath)
-   [assetsDir](#assetsdir)
-   [uploadDir](#uploaddir)
-   [Examples](#examples)
    -   [Hugo site with images in the "static" folder](#hugo_site_with_images_in_the_static_folder)
    -   [Gatsby site with images in the "src" folder](#gatsby_site_with_images_in_the_src_folder)











