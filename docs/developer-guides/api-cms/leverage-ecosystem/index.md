This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Ecosystem Tools for Easy Consumption of Content

Avoid the "reinventing the wheel" syndrome. Rolling your own solution can lead to problems in multiple ways, from not using the best practice methods provided by your particular toolset to not keeping up with potentially breaking changes within updates in your stack.

Where there is an existing ecosystem of tools to assist, it's almost always recommended to use them. They enforce best practices for both the SSG and the CMS, use the appropriate endpoints in the API, make data available in a consistent manner, and understand complex object relationships within the CMS (rather than you having to write the code to handle that).

For example, Gatsby has a [source plugin for Contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/), [for Sanity](https://www.gatsbyjs.org/packages/gatsby-source-sanity/), [for DatoCMS](https://www.gatsbyjs.org/packages/gatsby-source-datocms/) and more. In cases where there isn't an existing ecosystem of plugins, there may be community tools that you can leverage, but they'll require more effort to vet that they actually enforce best practices. At Stackbit, we released a tool that can help with this called [Sourcebit](https://github.com/stackbithq/sourcebit) which connects the CMS API with the SSG and has existing plugins for Contentful and Sanity on the CMS side and Hugo and Jekyll on the SSG side (for more on how to use Sourcebit, check the [introductory tutorial](https://www.stackbit.com/blog/data-driven-jamstack-sourcebit/)).

## Did you find this page useful?

## Jump to Section
