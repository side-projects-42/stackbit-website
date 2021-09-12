This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Object models
=============

Object models describe arbitrary data that can be nested inside [Page Models](/docs/reference/stackbit-yaml/page-models/) or [Data Models](/docs/reference/stackbit-yaml/data-models/). Usually these models will describe page components such as header, sections, footer, etc. or common components such as buttons.

Object Models extend the [common properties](/docs/reference/stackbit-yaml/models/#common_model_properties) defined in the base Model.

<a href="#object_model_properties" class="hash-link"><span class="icon-copy"></span></a>Object Model Properties
---------------------------------------------------------------------------------------------------------------

In addition to the common properties, object models define the following properties:

-   **`labelField`:** the name of the field whose value will be used as an item label when the object represented by this model is used inside a list, or as field label when the object is referenced by another object.
-   **`extends`:** list of object models this object extends. The extended object will inherit from its parent all fields and their properties recursively. If the extended object already has a field with the same name as in the parent object, only the properties that resolve to undefined in the extended object will be copied.

To reference object models from within other models, use fields of type `model`.

<a href="#example" class="hash-link"><span class="icon-copy"></span></a>Example
-------------------------------------------------------------------------------

    models:

      # A page model referencing the "action" object model
      page:
        type: page
        label: "Page"
        fields:

          # A "button" field can reference objects represented by the "action" object model
          - type: model
            name: button
            label: Button
            models: [action]

      # The "action" object model
      action:
        type: object
        label: Action
        labelField: label
        fields:
          - type: string
            name: label
            label: Label
            required: true
          - type: string
            name: url
            label: URL
            required: true

Example for generic page:

    ---
    title: Home
    button:
      label: click me
      url: https://www.example.com
    ---

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Object Model Properties](#object_model_properties)
-   [Example](#example)











