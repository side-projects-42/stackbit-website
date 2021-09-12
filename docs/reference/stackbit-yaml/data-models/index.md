This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Data models
===========

Data models describe the structure of your site's data files (`.json`, `.yaml`, `.toml`). Common examples for such files might be a `data/nav.json` that contains the site's navigation menu configuration or a `data/authors` folder containing `jane.json`, `john.json`, and other blog post authors.

Data Models extend all the [common properties](/docs/reference/stackbit-yaml/models/#common_model_properties) and several [model matching properties](/docs/reference/stackbit-yaml/models/#model_matching_properties) defined in the base model.

<a href="#data_model_properties" class="hash-link"><span class="icon-copy"></span></a>Data Model Properties
-----------------------------------------------------------------------------------------------------------

### <a href="#islist" class="hash-link"><span class="icon-copy"></span></a>`isList`

-   **Allowed values:** boolean
-   **Default value:** `false`
-   **Required:** false

A boolean flag specifying if the outermost level of data stored in a file described by this model is a list.

-   When omitted or set to `false`, use the model's [`fields`](/docs/reference/stackbit-yaml/fields/#field_properties) property to specify its structure.
-   When set to `true`, use the model's [`items`](#items) property to specify the data types of items in the list.

See [Array data files](#array_data_files) for an example.

### <a href="#items" class="hash-link"><span class="icon-copy"></span></a>`items`

-   **Allowed values:** Anything that is allowed for the `items` property of a [`list`](/docs/reference/stackbit-yaml/fields/#list_field) field
-   **Default value:** undefined
-   **Required:** required if [`isList`](#islist) is set to `true`

An object specifying the data types of items listed in a data file whose root structure is an array. A data model's `items` property has the same format as the `items` property in a [`list`](/docs/reference/stackbit-yaml/fields/#list_field) field.

See [Array data files](#array_data_files) for an example.

<a href="#data_model_matching_properties" class="hash-link"><span class="icon-copy"></span></a>Data Model Matching Properties
-----------------------------------------------------------------------------------------------------------------------------

Data model matching properties are very similar to [page model matching](/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties). With two exceptions:

1.  All data model matching properties are relative to `dataDir` *(be sure to specify one)*.
2.  The `layout` matching property is not available for data models.

The following are data model matching properties:

-   `file` - matches a model to a single file relative to the `dataDir`. Cannot be combined with other matching properties. Default is undefined.
-   `folder` - matches a model to all files inside a folder relative to the `dataDir`. The default value for `folder` is an empty string, which will match all data files in `dataDir`. This value can be combined with the `match` and `exclude` properties to fine tune the files to match.
-   `match` - additional filter that matches file glob(s) relative to the `folder`. Default is all files `**/*`
-   `exclude` - additional filter that excludes file glob(s) relative to the `folder`. Default is undefined.

Visit [page model matching properties](/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties) for examples.

<a href="#examples" class="hash-link"><span class="icon-copy"></span></a>Examples
---------------------------------------------------------------------------------

### <a href="#data_in_the_root_folder" class="hash-link"><span class="icon-copy"></span></a>Data in the root folder

If your site's files aren't all contained within a folder like `_data`, you can set `dataDir` to an empty string and specify `file` or `folder` relative to the root folder.

    ├── data
    │   └── footer.json    (model: footer)
    ├── stackbit.yaml
    └── config.yaml        (model: config)

`stackbit.yaml`:

    stackbitVersion: ~0.3.0
    ...
    dataDir: ""
    models:
      config:
        type: data
        label: Config
        file: config.yml  # relative to `dataDir` which is the root folder
        fields:
          ...
      footer:
        type: data
        label: Footer
        file: data/footer.json  # relative to `dataDir` which is the root folder
        fields:
          ...

### <a href="#data_file_folders_and_references" class="hash-link"><span class="icon-copy"></span></a>Data file folders and references

If part of your site's content model is best suited to storing one data record per file, you may find it useful to group related data files by using the `folder` [data model matching property](#data_model_matching_properties) instead of `file`.

For example, to credit a blog post, you could point a [`reference`](/docs/reference/stackbit-yaml/fields/#reference_field) field to its author's individual data file within an `authors` folder.

    ├── _data
    │   ├── authors
    │   │   ├── jane.json                        (model: author)
    │   │   └── john.json                        (model: author)
    │   └── nav.json                             (model: navigation)
    ├── content
    │   └── blog
    │       └── using-stackbit-effectively.md    (model: post)
    └── stackbit.yaml

`jane.json`:

    {
      "first_name": "Jane",
      "last_name": "Doe"
    }

`john.json`:

    {
      "first_name": "John",
      "last_name": "Doe"
    }

`content/posts/using-stackbit-effectively.md`:

    ---
    title: Using Stackbit effectively
    author: _data/authors/jane.json
    ---

    Main content goes here...

`stackbit.yaml`:

    pagesDir: content
    dataDir: _data
    models:
      navigation:
        type: data
        label: Navigation Menu
        file: nav.json # path is relative to the `dataDir`
        isList: true
        items:
          # ...
      author:
        type: data
        label: Author
        folder: authors # path is relative to the `dataDir`
        fields:
          - type: string
            name: first_name
          - type: string
            name: last_name
      post:
        type: page
        label: Blog Post
        folder: blog # path is relative to the `pagesDir`
        match:
          - '*'
        fields:
          - type: string
            name: title
            label: Title
          - name: author
            type: reference
            label: Author
            models:
              - author

A static site generator template can transform the page's `author` data into a byline:

    {%- capture author_slug -%}
      {{ page.author | replace: "_data/authors/", "" | replace: ".json", "" }}
    {%- endcapture -%}

    <div>By {{ site.data.authors[author_slug].first_name }} {{ site.data.authors[author_slug].last_name }}</div>

### <a href="#array_data_files" class="hash-link"><span class="icon-copy"></span></a>Array data files

If you need to model a type of data file whose root structure is an array, set [`isList`](#islist) to `true` and define list items' schemas with [`items`](#items).

Array data files are suited to storing collections of data whose records don't each need an independently referenceable file, such as the items in a navigation menu.

    ├── _data
    │   └── nav.json     (model: navigation)
    └── stackbit.yaml

`nav.json`:

    [
      {
        "label": "Home",
        "url": "/"
      },
      {
        "label": "Blog",
        "url": "/blog"
      },
      {
        "label": "About",
        "url": "/about"
      }
    ]

`stackbit.yaml`:

    dataDir: _data
    models:

      # a model of type "data" called "navigation"
      navigation:
        type: data
        label: Navigation Menu

        # this model matches a single file within the "_data" folder
        file: nav.json

        # the root of the nav.json file is an array
        isList: true

        # the structure of each root array item
        items:
          type: object
          labelField: label
          fields:
            - type: string
              name: label
            - type: string
              name: url

An `_includes/navigation.html` static site generator component might render your navigation menu with a loop over `_data/nav.json`:

    <ul>
    {% for item in site.data.nav %}
      <li>
        <a href="{{ item.url }}">
          {{ item.label }}
        </a>
      </li>
    {% endfor %}
    </ul>

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Data Model Properties](#data_model_properties)
    -   [isList](#islist)
    -   [items](#items)
-   [Data Model Matching Properties](#data_model_matching_properties)
-   [Examples](#examples)
    -   [Data in the root folder](#data_in_the_root_folder)
    -   [Data file folders and references](#data_file_folders_and_references)
    -   [Array data files](#array_data_files)











