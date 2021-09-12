This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# API-based CMS

As explained in the [Site Preview](/docs/conceptual-guides/site-preview) conceptual guide, Stackbit shows your website's preview by cloning your site's repository and running the SSG development server. If your site is powered by API-based headless-CMS, such as Contentful or Sanity, your site's content is stored inside CMS and is fetched by the static-site-generator when the SSG development server runs.

When you make changes to your site's content via Stackbit, these changes are synchronized with the CMS via its API. In turn, the SSG is notified about the change, rebuilds the site, and updates the site's preview.

![Stackbit Studio with API-based CMS Diagram](/docs/482425d025bc0843ede031d33ac9b086/api-based-cms.svg)

When you decide to publish your site via Stackbit, Stackbit publishes the objects within the CMS. If you have configured your CMS to notify your serverless deployment platform (e.g., Netlify) to deploy the site whenever an object is published, then publishing your site via Stackbit will also deploy your live site.

## Did you find this page useful?

## Jump to Section
