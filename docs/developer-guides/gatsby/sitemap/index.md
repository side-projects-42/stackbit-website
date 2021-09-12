This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Adding a Sitemap to Your Stackbit Gatsby Site

A `sitemap.xml` is useful for submitting to search engines like Google that use this to assist in properly crawling your site. Having a sitemap is another way to improve your site SEO. In this case, we will be utilizing a Gatsby plugin called simply [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)

1.  Open the command line/Terminal, navigate to your projects directory and install the plugin.

<!-- -->

    npm install --save gatsby-plugin-sitemap

1.  Open gatsby-config.js in your code editor. Under the `plugins` section, add an entry for `gatsby-plugin-sitemap` as below (note that the `...` is where the other existing plugins listed will exist)

<!-- -->

    plugins: [
            `gatsby-plugin-sitemap`,
            ...
    ]

1.  Open `site-metadata.json` and add an entry for `siteUrl` right after the opening curly bracket (aagin, the `...` represents the rest of the file):

<!-- -->

    {
        "siteUrl": "https://good-celery-27120.netlify.app/",
        ...
    }

1.  This plugin only runs when the site is run in production mode, so to test it, open the command-line/Terminal and use the following command to run your site:

<!-- -->

    gatsby build && gatsby serve

Then navigate to `http://localhost:9000/sitemap.xml` to view your sitemap.

It's worth noting that the gatsby-plugin-sitemap plugin is configurable. By default it includes every page on your site. Check the [documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) for customization options.

## Did you find this page useful?

## Jump to Section
