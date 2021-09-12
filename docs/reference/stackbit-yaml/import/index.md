This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Import
======

The [`import`](/docs/reference/stackbit-yaml/import/) object defines how to import the initial theme content into an API-based CMS.

If your theme works with an API-based CMS, such as Contentful or Sanity, you might want to have an initial content which will be imported into the CMS when Stackbit creates a new site from your theme.

When user creates a new site from a theme powered by API-based CMS, Stackbit Site Builder can provision the CMS with the initial theme content. As part of the provisioning process, Stackbit Site Builder will create a CMS project, import the content schema, and the initial content located in a special "export" file previously exported from the CMS. The "export" file can be created using the tools provided by CMS, such as CLI. Stackbit will also generate any access tokens required by the static site generator to fetch the content from CMS, and will setup webhooks needed to trigger the deployment platform when the user publishes the content inside CMS. To support this automatic provisioning, you will need to provide the `import` object.

![Stackbit Studio with API-based CMS Diagram](/docs/images/import-diagram-contentful.svg)

**Note:** Currently Stackbit supports importing content for Contentful and Sanity CMS's only.

<a href="#contentful" class="hash-link"><span class="icon-copy"></span></a>Contentful
-------------------------------------------------------------------------------------

If your theme uses Contentful as the headless-CMS, you can [export the content schema and the initial site contents](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) into a JSON file. Specify the path to this file in the `contentFile` property. You should also provide the names of the environment variables for the space ID and the Content Delivery API Token expected by your static site generator to fetch the data from Contentful. Use `spaceIdEnvVar` and `accessTokenEnvVar` to specify the environment variable name for the space ID and the Content Delivery API Token, respectively.

For example, if your theme uses Gatsby you need to specify the names of the environment variables used to configure the [gatsby-source-contentful](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/) plugin.

`stackbit.yaml`:

    stackbitVersion: ~0.3.0
    ssgName: gatsby
    cmsName: contentful
    import:
      type: contentful
      contentFile: contentful/export.json
      spaceIdEnvVar: CONTENTFUL_SPACE_ID
      accessTokenEnvVar: CONTENTFUL_ACCESS_TOKEN

`contentful-export.json` (created by running `contentful space export`):

    {
        "contentTypes": [...],
        "entries": [...],
        "assets": [...],
        "locales": [...],
        "webhooks": [...],
        "roles": [...],
        "editorInterfaces": [...]
    }

Example for `gatsby-config.js` with `gatsby-source-contentful` configured to read `spaceId` and `accessToken` options from `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` environment variables respectively:

    module.exports = {
        plugins: [
            {
                resolve: `gatsby-source-contentful`,
                options: {
                    spaceId: process.env.CONTENTFUL_SPACE_ID,
                    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                },
            }
        ]
    };

**Note:** If the static site generator uses different environment variables names, the values of the \`spaceIdEnvVar\` and \`accessTokenEnvVar\` properties have to reflect that.

**Example**

Here is an example for [Contentful-Gatsby](https://github.com/stackbit-themes/azimuth-gatsby-contentful) starter repo with Contentful data exported into the `contentful/export.json` file. The path to this file and several other properties are specified in `stackbit.yaml` in the `import` object. In this example, the `import` object has two additional properties - `uploadAssets` and `assetsDirectory`. You should use these properties if your exported data includes downloaded assets as explained in the [contentful-import](https://github.com/contentful/contentful-import#assets) package.

<a href="#sanity" class="hash-link"><span class="icon-copy"></span></a>Sanity
-----------------------------------------------------------------------------

If your theme uses Sanity as the headless-CMS, you can [export the content schema and the initial site contents](https://www.sanity.io/docs/export) into an NDJSON file. Specify the path to this file in the `contentFile` property. You should also provide the names of the environment variables for the project ID, the dataset, and the token expected by your static site generator to fetch the data from Sanity. Use `projectIdEnvVar`, `datasetEnvVar` and `tokenEnvVar` to specify the environment variable name for the project ID, the dataset, and the token, respectively.

You can also set the boolean flags `deployStudio` and `deployGraphql` to ensure that Stackbit deploys Sanity Studio and Sanity GraphQL API when creating the site. Note, `gatsby-source-sanity` plugin might require having Sanity GraphQL API endpoint in order to work properly.

For example, if your theme uses Gatsby you need to specify the names of the environment variables used to configure the [gatsby-source-sanity](https://www.gatsbyjs.com/plugins/gatsby-source-sanity/) plugin.

`stackbit.yaml`:

    stackbitVersion: ~0.3.0
    ssgName: gatsby
    cmsName: sanity
    import:
      type: sanity
      contentFile: sanity-export.tar.gz
      sanityStudioPath: studio
      deployStudio: true
      deployGraphql: true
      projectIdEnvVar: SANITY_PROJECT_ID
      datasetEnvVar: SANITY_DATASET
      tokenEnvVar: SANITY_TOKEN

Example for `gatsby-config.js` with `gatsby-source-sanity` configured to read `projectId`, `dataset` and `token` options from `SANITY_PROJECT_ID`, `SANITY_DATASET` and `SANITY_TOKEN` environment variables respectively:

    module.exports = {
        plugins: [
            {
                resolve: `gatsby-source-sanity`,
                options: {
                    projectId: process.env.SANITY_PROJECT_ID,
                    dataset: process.env.SANITY_DATASET,
                    token: process.env.SANITY_TOKEN
                },
            }
        ]
    };

**Note:** If the static site generator uses different environment variables names, the values of the \`projectIdEnvVar\`, \`datasetEnvVar\` and \`tokenEnvVar\` properties have to reflect that.

**Example**

Here is an example for [Sanity-Nextjs](https://github.com/stackbit-themes/azimuth-nextjs-sanity) starter repo with Sanity data exported into the `sanity-export/export.tar.gz` file. The path to this file and several other properties are specified in `stackbit.yaml` in the `import` object.

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Contentful](#contentful)
-   [Sanity](#sanity)











