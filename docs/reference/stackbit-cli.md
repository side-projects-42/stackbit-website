This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Stackbit CLI
============

<a href="#installation" class="hash-link"><span class="icon-copy"></span></a>Installation
-----------------------------------------------------------------------------------------

Install Stackbit CLI tool using npm:

    npm install -g @stackbit/cli

Once installed, you can run CLI commands to generate and validate your `stackbit.yaml`.

Check out the [latest release on GitHub](https://github.com/stackbit/stackbit-sdk/releases).

<a href="#commands" class="hash-link"><span class="icon-copy"></span></a>Commands
---------------------------------------------------------------------------------

### <a href="#init" class="hash-link"><span class="icon-copy"></span></a>`init`

The `init` command introspects your project files and generates the initial `stackbit.yaml` for you. To generate a new `stackbit.yaml` file, run the `init` command inside your project's root folder:

    cd my-website
    stackbit init

Stackbit CLI will generate the initial `stackbit.yaml` according to your project files. If your project doesn't use any CMS, the `init` command will also generate the content model. The content model generation relies on your project's content files (e.g., `.md`, `.json`, `.yaml`).

Note that the generated `stackbit.yaml` is the "**best guess**", so it might not have the best content model for your site. For example, fields that could store markdown content might be marked as strings. After generating the `stackbit.yaml` file, we recommend reviewing it and adjusting it if needed. We also recommend running the `validate` command to check if there are content files without matched models.

### <a href="#validate" class="hash-link"><span class="icon-copy"></span></a>`validate`

The `validate` command runs the following validation steps:

-   It loads the `stackbit.yaml` from the current working directory and validates its structure according to the [specification](/docs/reference/stackbit-yaml).
-   It loads your site's content files from folders defined by the [`pagesDir`](/docs/reference/stackbit-yaml/properties/#pagesdir) and the [`dataDir`](/docs/reference/stackbit-yaml/properties/#datadir) properties.
-   It matches the loaded content files to the [`models`](/docs/reference/stackbit-yaml/properties/#models) defined in `stackbit.yaml` using the "[model matching properties](/docs/reference/stackbit-yaml/page-models/#page_model_matching_properties)" such as `file`, `folder`, `match` and `exclude`.
-   It validates the structure of your content files against the [`models`](/docs/reference/stackbit-yaml/properties/#models) defined in the `stackbit.yaml`.

If the validator finds any errors during these validation steps, it will print them to your console providing contextual information allowing you to fix them.

**Example**

Assume the following site structure:

    .
    ├── content
    │   ├── posts
    │   │   ├── post1.md
    │   │   ├── post2.md
    │   │   └── post3.md
    │   ├── index.md
    │   └── about.md
    ├── data
    │   ├── header.yaml
    │   └── footer.json
    └── stackbit.yaml

And a `stackbit.yaml` similar to this:

    stackbitVersion: ~0.3.0
    ssgName: hugo

    dataDir: data
    pagesDir: content

    ...

    models:
      home:
        type: page
        label: Home page
        file: index.md
        singleInstance: true
        fields: [...]
      page:
        type: page
        label: Generic page
        exclude:
          - "index.md"
          - "posts/**"
        fields: [...]
      post:
        type: page
        label: Post
        folder: posts
        fields: [...]
      header:
        type: data
        label: Header
        file: header.yaml
        fields: [...]
      footer:
        type: data
        label: Footer
        file: footer.json
        fields: [...]

If everything is configured correctly, running `stackbit validate` will output this:

    loading and validating Stackbit configuration from: /path/to/your/project
      ✔ configuration is valid
    loading and validating content from: /path/to/your/project
      loaded 7 files in total (7 matched, 0 unmatched)
      7 files matched to models:
        home: 1 file:
          content/index.md
        page: 1 file:
          content/about.md
        post: 3 files:
          content/posts/post1.md
          content/posts/post2.md
          content/posts/post3.md
        header: 1 file:
          data/header.yaml
        footer: 1 file:
          data/footer.json
      ✔ content files are valid
    ✔ validation passed

<a href="#telemetry" class="hash-link"><span class="icon-copy"></span></a>Telemetry
-----------------------------------------------------------------------------------

Stackbit contains a telemetry feature that collects **anonymous** information on the usage of Stackbit CLI commands. We do this to improve the reliability of Stackbit CLI and help drive new features and improvements.

If you’d like to opt-out of sending usage information, you can do so by running the following command:

    # opt out of sharing usage information
    stackbit telemetry-disable

    # allow collecting your usage information
    stackbit telemetry-enable

**What data is being shared?**

We track general usage information, including CLI commands being invoked and **non-user-specific** command-line arguments, SSG and CMS names, number of occurred errors, etc. We use these metrics to better understand the usage patterns and improve the CLI.

Specifically, we collect the following information:

-   Command invoked (e.g., `init` or `validate`).
-   Timestamp of the event.
-   Stackbit CLI and SDK versions.
-   Node.js and OS versions.
-   Anonymous user ID - this is generated once using UUID and stored in the global config at `~/.config/stackbit-cli/config.json`.
-   The analyzed SSG and CMS name, and the number of the generated models in case of the `init` command.
-   The number of validation errors, and the number of validated files in case of the `validate` command.
-   One-way hashes of the input directory and the git remote.

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Installation](#installation)
-   [Commands](#commands)
    -   [init](#init)
    -   [validate](#validate)
-   [Telemetry](#telemetry)











