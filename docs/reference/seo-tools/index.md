This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

How to enable SEO features in a custom theme on Stackbit
========================================================

To make your theme compatible with Stackbit Studio's SEO tools, you will need to add the `domain` field, `stackbit_page_meta` model and `seo` field referencing the `stackbit_page_meta` model to all page models in the `stackbit.yaml` file and update your theme template files according to `stackbit_page_meta` model.

**Important to note!** If your theme doesn't have stackbit.yaml file, please check the documentation [here](/docs/reference/stackbit-yaml/), or you can use the [Stackbit theme as the reference](https://github.com/stackbit/stackbit-theme-azimuth).

<a href="#adding_domain_field_and_stackbit_page_meta_model_to_the_stackbit_yaml_file" class="hash-link"><span class="icon-copy"></span></a>Adding `domain` field and `stackbit_page_meta model` to the `stackbit.yaml` file
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

First, add the `domain` field to the config model in your `stackbit.yaml` file (project root directory):

    models:
      config:
        type: data
        label: Site Configuration
        fields:
          - type: string
            name: domain
            label: Domain

Next, add the `stackbit_page_meta` model under the `models` key in your `stackbit.yaml` file (project root directory):

    stackbit_page_meta:
      type: object
      label: Page meta data
      fields:
        - type: string
          name: title
          label: Title
          description: The page title that goes into the <title> tag
          default: ''
        - type: string
          name: description
          label: Description
          description: The page description that goes into the <meta name="description"> tag
          default: ''
        - type: list
          name: robots
          label: Robots
          description: The items that go into the <meta name="robots"> tag
          items:
            type: enum
            options:
              - all
              - index
              - follow
              - noindex
              - nofollow
              - noimageindex
              - notranslate
              - none
          default: [all]
        - type: list
          name: extra
          label: Extra
          description: >-
            Additional definition for specific meta tags such as open-graph,
            twitter, etc.
          items:
            type: object
            labelField: name
            fields:
              - type: string
                name: name
                default: ""
              - type: string
                name: value
                default: ""
              - type: string
                name: keyName
                default: name
              - type: boolean
                name: relativeUrl

Finally, add the `seo` field referencing the `stackbit_page_meta` model to all page models in the `stackbit.yaml` file. For instance:

    page:
      type: page
      label: Page
      layout: page
      fields:
        - type: string
          name: title
          label: Title
          required: true
        - type: model
          name: seo
          models:
            - stackbit_page_meta

Now, when you create a new page, the `stackbit_page_meta` model fields will be added to the front matter of your page, and you will be able to edit those fields in Stackbit Studio.

<a href="#adjusting_theme_template_files_to_stackbit_page_meta_model" class="hash-link"><span class="icon-copy"></span></a>Adjusting theme template files to `stackbit_page_meta` model
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Depending on the static site generator you are using, the implementation of this feature may differ. Please select the implementation guide for your static site generator:

-   [Next.js and Gatsby SEO implementation guide](#next_js_and_gatsby_seo_implementation)
-   [Hugo SEO implementation guide](#hugo_seo_implementation)
-   [Jekyll SEO implementation guide](#jekyll_seo_implementation)

### <a href="#next_js_and_gatsby_seo_implementation" class="hash-link"><span class="icon-copy"></span></a>Next.js and Gatsby SEO Implementation

To make your Next.js or Gatsby theme work with `stackbit_page_meta` model, you should use the following function that adds the document title, meta description, robots and any additional meta tags defined in the `extra` list field:

    function SEO(props) {
      const seo = props.page && props.page.seo;
      if (!seo) {
          return null;
      }
      return (
          <Head>
              {seo.title && <title>{ seo.title }</title>}
              {seo.description && <meta name="description" content={ seo.description } />}
              {seo.robots && <meta name="robots" content={ seo.robots.join(',') } />}
              {seo.extra && seo.extra.map((meta, index) => {
                  const keyName = meta.keyName || 'name';
                  const value = (meta.relativeUrl ? props.site.domain : '') + meta.value;
                  return <meta key={index} {...{[keyName]: meta.name}} content={value} />
              })}
          </Head>
      );
    }

The code above is for Next.js. To use it for Gatsby, replace `<Head>`, `</Head>` with `<Helmet>`, `</Helmet>`.

Next, include the `SEO` function above or under your Next.js `<Head>` element:

    <SEO page={page} site={site}/>
    <Head>
      ...
    </Head>

Or, if you are adding the SEO feature to the Gatsby project, include the function above or under the Gatsby `<Helmet>` element.

Please note that the `page` should be an object with the data of your page with the `seo` field and the `site` should be an object with the data of your site configuration with the `domain` field.

If you have successfully completed the steps above, open your project in Stackbit Studio and you should see fields in the SEO tab of the Advanced Tools panel:

![Stackbit SEO panel](/docs/images/seo-panel.png)

### <a href="#hugo_seo_implementation" class="hash-link"><span class="icon-copy"></span></a>Hugo SEO implementation

To enable SEO features in your Hugo theme, locate the `baseof.html` template file in the `layouts/_default/` directory and add the following code snippet inside the `<head>` element:

    <title>
      {{ if .Params.seo.title }}
        {{ $.Params.seo.title }}
      {{ else }}
        {{ print $.Title " | " $.Site.Title }}
      {{ end }}
    </title>
    <meta name="description" content="{{ .Params.seo.description | default "" }}" />
    {{ if .Params.seo.robots }}
      <meta name="robots" content="{{ delimit $.Params.seo.robots " ," }}">
    {{ end }}
    {{ range $meta := .Params.seo.extra }}
      {{ $key_name := $meta.keyName | default "name" }}
      {{ if $meta.relativeUrl }}
        {{ if $.Site.Params.domain }}
          {{ $domain := $.Site.Params.domain }}
          {{ $rel_url := $meta.value | relURL }}
          {{ $full_url := print $domain $rel_url }}
          <meta {{ $key_name }}="{{ $meta.name }}" content="{{ $full_url }}">
        {{ end }}
      {{ else }}
        <meta {{ $key_name }}="{{ $meta.name }}" content="{{ $meta.value }}">
      {{ end }}
    {{ end }}

Now, if you open your Hugo project in Stackbit Studio, you should see new fields under the SEO tab of the Advanced Tools panel.

### <a href="#jekyll_seo_implementation" class="hash-link"><span class="icon-copy"></span></a>Jekyll SEO implementation

To make your Jekyll theme work with the `stackbit_page_meta` model, you need to locate the partial or template file that contains the HTML `<head>` element and add the following code inside it:

    <title>
      {% if page.seo.title and page.seo.title != '' %}
        {{ page.seo.title }}
      {% else %}
        {{ page.title | append: ' | ' | append: site.title }}
      {% endif %}
    </title>
    <meta name="description" content="{{ page.seo.description | default: '' }}" />
    {% if page.seo.robots and page.seo.robots.size > 0 %}
      <meta name="robots" content="{{ page.seo.robots | join: ',' }}">
    {% endif %}
    {% for meta in page.seo.extra %}
      {% assign key_name = meta.keyName | default: 'name' %}
      {% if meta.relativeUrl %}
        {% if site.domain and site.domain != '' %}
          {% assign domain = site.domain %}
          {% assign rel_url = meta.value | relative_url %}
          {% assign full_url = domain | append: rel_url %}
          <meta {{ key_name }}="{{ meta.name }}" content="{{ full_url }}">
        {% endif %}
      {% else %}
        <meta {{ key_name }}="{{ meta.name }}" content="{{ meta.value }}">
      {% endif %}
    {% endfor %}

Now, if you open your Jekyll project in Stackbit Studio, you should see new fields under the SEO tab of the Advanced Tools panel.

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Adding domain field and stackbit\_page\_meta model to the stackbit.yaml file](#adding_domain_field_and_stackbit_page_meta_model_to_the_stackbit_yaml_file)
-   [Adjusting theme template files to stackbit\_page\_meta model](#adjusting_theme_template_files_to_stackbit_page_meta_model)
    -   [Next.js and Gatsby SEO Implementation](#next_js_and_gatsby_seo_implementation)
    -   [Hugo SEO implementation](#hugo_seo_implementation)
    -   [Jekyll SEO implementation](#jekyll_seo_implementation)











