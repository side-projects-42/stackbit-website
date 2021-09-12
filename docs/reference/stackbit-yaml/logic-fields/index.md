This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Logic Fields
============

The `logicFields` is a list of strings defining fields used in static site generation logic.

To enjoy the advanced features of Stackbit Studio, you will need to specify which fields are used in your site's logic.

Examples for logic fields:

-   A field used inside logical expression such as `page.category === "news"`
-   A field used as an object key such as `categories[page.category]`
-   A field used to generate page URL path such as a slug field `/posts/{slug}`
-   A field whose value is an image that is going through image processing: `./images/hero.png`

You don't need to specify logic fields for fields of the following types: `enum`, `slug`, `boolean`, `date`, `datetime`. These fields are always considered as logic fields. Only fields of types `string`, `text`, `markdown`, `number`, and `url` should be specified as logic fields.

    logicFields:
      - page.category
      - post.slug

The logic fields consist of three parts - the `model_name`, the `field_path`, and the `field_name`, and are specified using the following format (square brackets "\[\]" indicate optional parts):

    [<model_name>.[<field_path>.]]<field_name>

-   `field_name` (required) - the name of the field
-   `model_name` (optional) - the name of the model containing the field
-   `field_path` (optional) - the path to the field within the model

If you specify a `field_name` without `model_name`, any field having this name across all models will be considered as a logic field.

<a href="#examples" class="hash-link"><span class="icon-copy"></span></a>Examples
---------------------------------------------------------------------------------

A logic field can use all the three parts to specify a particular field of a specific model under a particular field path:

    logicFields:
      #  model┆ field┆ field
      #  name ┆ path ┆ name
      # ┌────┐┆┌────┐┆┌───┐
      - config.header.style

If the logic field is a direct child of the model, the field path can be omitted:

    logicFields:
      #  model┆ field
      #  name ┆ name
      # ┌────┐┆┌───────┐
      - config.siteTitle

Or it can specify only the field name, in which case any field with that name will be considered as a logic field:

    logicFields:
      # field name
      # ┌──┐
      - slug

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Examples](#examples)











