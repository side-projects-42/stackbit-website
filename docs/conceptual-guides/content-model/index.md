This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Content Model

## <a href="#what_is_content_model_and_why_do_i_need_one" class="hash-link"><span class="icon-copy"></span></a>What is Content Model, and why do I need one?

The content model describes the structure of your website's content. Stackbit uses your website's content model to allow you to edit your site's content within the [site preview](/docs/conceptual-guides/site-preview).

For example, assume your site's blog posts are stored in markdown files with three fields in the frontmatter - "title", "image" and "tags", and with the post content in the body of the markdown file like this:

    ---
    title: "Content Model"
    image: "/images/content-model.png"
    tags: ["jamstack", "stackbit", "content-model"]
    ---

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.

    ## Subheader

    Consequat id porta nibh venenatis cras sed felis eget.
    Dui ut ornare lectus sit amet est placerat in egestas.

The content model of the blog post would describe the names and types of blog post fields:

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 301px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 83.42857142857143%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAA9hAAAPYQGoP6dpAAACkklEQVQ4y22UW08bMRCF8///Squ+VS2teABVQIAESilQLrlCArms4+x91/ZXjXeXLqiWTmbiy9k5M2N3nHO0R2EceelebWnBUkH89prY9hCujjjGykFHlFl0aonzyherwoz5UjNfbrwf57yuyd5tav15gYyOEMmiTGwSUy80gNFwwOHBD467R2y1amLxv9afsd4mNUenCV22pAbWCWwyWEUQRAYVG3QKUQ4qcbxsDYut9RBfIpSgyjoNHSFLSnheh4ymM+4GE65vhygd8agcv2cFN/OC/iTnURl/KCkcaY2sdISZ9RDijjDHBSwDzd2fG4aDB87PztBqxXQDvXHuSb9cZt7+b8hHdB2pj7Awlk0KoYHYQQqsYgjiKqIGq9Ay14bnFuYb4+crnlaEL2vN+c8LTnp9jo5P0VrzsLLs32bs3mScjAqsq3JV2n+QQoj0bTvCRCSrkKurKw6PunSPT4iikKeN4+Ah93L7k0quEDZt0vhCGAqhaSSXFiWVdJABkYXnbVVl2SxtJZhtDOvIeizDqmdVXPlNt3RKY73k+cuK05Mue3t7zJ6m6MSwf5f7CKeB8XayNtzMS7rDnN644POvlKNB7smkH00jOS3wt+B+MObi8prFShFlhvtF6RHElsGy9BE9KcNobZgEhtNxwdWs9E0dZa4l2TgvQ2WgCwgSvAxJtJBJNVViX+XKXBBV6yJZqpy1JUtjD8eP7H7f4dvOV6ajeybrko/9lP3bnA+9hE/91EuUXL4fQvRGcl6CinIWa3kEFIGO0Yn1RZBo5IpJ/4mN8uqmiMyk9uWxkOIV5jWHcoXwxZFoI/+iuDo31cuS1JWWK7ZN38J/oKhzKC+HaTVpA/vuf3teGtyj9tvP119V2h54ISBIJQAAAABJRU5ErkJggg==');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/9ee29401e77f1734a4aa3ff5a6aaa6a9/fb933/content-model-post.png" title="Post Content Model" alt="Post Content Model" class="gatsby-resp-image-image" sizes="(max-width: 301px) 100vw, 301px" srcset="
                                  /docs/static/9ee29401e77f1734a4aa3ff5a6aaa6a9/4edbd/content-model-post.png 175w,
                                  /docs/static/9ee29401e77f1734a4aa3ff5a6aaa6a9/fb933/content-model-post.png 301w
                                " /></span>

By knowing your site's content model, Stackbit can provide an "on-page" editing experience **without any additional changes to your site's code**.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 32%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVQY01WQyU7DYBCD8/4viMQNqaWlS5rk32a1UXKhzNGaz7Y8AVibdlGSKmNIj/AutjUzM3czU4+smk2RAMmmWSQSnLYq3/dyujdxyhhtDA20oXMbRd091aJKXIt3T02o5XOVtbsFp+v99XHuX/NuHGCCHqzBS2AJRO5KNzyatx3ma6uf5/W8oEhOz6WcZrttKY5IdMtVszvE4YEEI5GJn+rzCEmW2k+PftvQDRPfDkfIPHLTbLYXARlJO+DXCAv8PZP/4IPfV8kjDeAxEIfjUmwZIW8wyV+3216lzhfogwAAAABJRU5ErkJggg==');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/d2761704c855589f9e6da23c18a3d55a/8c557/content-model-post-preview-editor.png" title="Post Preview and Editing using Content Model" alt="Post Preview and Editing using Content Model" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/d2761704c855589f9e6da23c18a3d55a/4edbd/content-model-post-preview-editor.png  175w,
                                  /docs/static/d2761704c855589f9e6da23c18a3d55a/13ae7/content-model-post-preview-editor.png  350w,
                                  /docs/static/d2761704c855589f9e6da23c18a3d55a/8c557/content-model-post-preview-editor.png  700w,
                                  /docs/static/d2761704c855589f9e6da23c18a3d55a/e996b/content-model-post-preview-editor.png 1050w,
                                  /docs/static/d2761704c855589f9e6da23c18a3d55a/5c5b6/content-model-post-preview-editor.png 1265w
                                " /></span>

Of course, the names and the types of post fields are the bare minimum your content model should have. Depending on the CMS you use, you can also specify the field labels, descriptions, validation rules, and other aspects of your content model.

Your site's content doesn't have to be stored in files. If your site is powered by an API-based CMS, your content and the content model are stored within the CMS. In this case, Stackbit will use the content and the content model defined within the CMS.

As noted above, there are two ways for Stackbit to get your site's content model - from an external CMS or from `stackbit.yaml`. The next section explains these two concepts.

## <a href="#external_content_model" class="hash-link"><span class="icon-copy"></span></a>External Content Model

### <a href="#file_based_cms" class="hash-link"><span class="icon-copy"></span></a>File-Based CMS

If your site uses file-based CMS, then your site's content model should be defined in CMS specific configuration files. Stackbit will read these configuration files and get the content-model from there. So you won't need to define the content model in `stackbit.yaml`, but only specify which CMS you use.

For example, if your site uses [NetlifyCMS](https://www.netlifycms.org/) as its CMS, your content model is defined within the NetlifyCMS's `config.yml` file. Stackbit will read NetlifyCMS configuration and use the content model from there.

![File based CMS content model](/docs/2968a013975f283ee805b092b68275a2/content-model-file-based-cms.svg)

### <a href="#api_based_cms" class="hash-link"><span class="icon-copy"></span></a>API-Based CMS

If your site uses API-based CMS, then your site's content model is defined within that CMS. Stackbit will fetch the content model via CMS API.

For example, if your site uses Contentful, the content model is defined within Contentful. Stackbit will fetch the content model via Contentful API.

![API based CMS content model](/docs/4dcda6382bf91fd118710fdab1b37623/content-model-api-based-cms.svg)

**☝️ Note:** in the case of Sanity CMS, the content of your site is stored in Sanity, but the content model is defined within configuration files of Sanity Studio similar to other File-Based CMS's. Therefore, Stackbit will load your site's content model from Sanity Studio configuration files.

**☝️ Note:** even though you don't need to define your site's entire content model in `stackbit.yaml` you still need to define the types of your models and the URL path of your page models. For more info, visit the [`models`](https://www.stackbit.com/docs/reference/stackbit-yaml/models/#example_for_project_with_a_headless_cms) documentation.

## <a href="#stackbit_content_model" class="hash-link"><span class="icon-copy"></span></a>Stackbit Content Model

If your project does not use any headless-CMS and stores the content in plain files (.md, .json, .yaml, etc.), you can define your site's content models in [`stackbit.yaml`](/docs/reference/stackbit-yaml) using [Models](/docs/reference/stackbit-yaml/models/) and [Fields](/docs/reference/stackbit-yaml/fields/).

You can create and edit your Stackbit Content Model using the [Content Model screen](/docs/studio-guides/modeling-content/) in the Stackbit Studio.

![Stackbit content model](/docs/6a6719cdca1a3bd214804a9de9cdd091/content-model-stackbit.svg)

Continuing the previous example, the post's model in `stackbit.yaml` could be defined in the following way:

    post:
      type: page
      label: Blog Post # label shown besides posts in the Stackbit editor
      folder: '/blog' # the folder where all post files are stored
      urlPath: '/blog/{slug}' # the url of each post, the {slug} is file name
      fields:
        - type: string
          name: title
          label: Title
          required: true
        - type: image
          name: image
          label: Featured Image
        - type: list
          name: tags
          label: Tag List
          items:
            type: string

## Did you find this page useful?

## Jump to Section

- [What is Content Model, and why do I need one?](#what_is_content_model_and_why_do_i_need_one)
- [External Content Model](#external_content_model)
  - [File-Based CMS](#file_based_cms)
  - [API-Based CMS](#api_based_cms)
- [Stackbit Content Model](#stackbit_content_model)
