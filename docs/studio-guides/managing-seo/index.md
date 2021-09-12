This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Managing SEO
============

Stackbit allows you to easily implement the basics of SEO in your Jamstack site to improve your search engine rankings and drive more traffic to your site.

### <a href="#pre_requisites" class="hash-link"><span class="icon-copy"></span></a>Pre-requisites

-   You’ll need a Stackbit account, if you don’t have one [you can create one for free](https://app.stackbit.com/register)
-   You’ll need a site created with Stackbit that uses one of our themes

If you prefer to use your own theme, check out [“How to enable SEO features in a custom theme on Stackbit”](/docs/reference/seo-tools/)

### <a href="#seo_overview" class="hash-link"><span class="icon-copy"></span></a>SEO overview

Stackbit’s SEO tools help you to easily implement the following on-page SEO and social elements:

-   [Title and meta description](/docs/studio-guides/managing-seo/#title_and_meta_description)
-   [Domain field](/docs/studio-guides/managing-seo/#domain_field)
-   [Social tags (for Facebook and Twitter)](/docs/studio-guides/managing-seo/#social_tags)
-   [ALT image tags](/docs/studio-guides/managing-seo/#alt_image_tags)

### <a href="#title_and_meta_description" class="hash-link"><span class="icon-copy"></span></a>Title and meta description

Once you’ve created a project, head to the Studio and click on the SEO feature.

![SEO topbar](/docs/images/seo-topbar.png)

You should see the following section open on the screen:

![Stackbit SEO panel](/docs/images/seo-panel.png)

The title and meta description fields will be empty if the title and description of the page are empty (or if they don’t exist). Every page has its own meta title and meta description, navigate to different pages to edit their SEO tags. If you don’t do anything, Stackbit will automatically fill in the meta title and meta description fields for you when you edit the content on each page. If you want to change them, just click on ‘SEO’, edit the fields, and save. Don’t forget to publish the changes to make them visible on your website.

The length of the meta title should be 50-60 characters for a title tag or under 545 pixels width. It should also include primary and secondary keywords, as well as your brand name. As per the meta description, the ideal length is between 50-160 characters and apart from describing the content of the page and adding a call to action, it is important that meta descriptions on each page are unique.

### <a href="#domain_field" class="hash-link"><span class="icon-copy"></span></a>Domain field

In the Metadata tab of the SEO panel you can find the domain field. After you generated your project first time, it will be prefilled with the default Netlify URL (if you chose Netlify as your deployment platform):

![Domain field in SEO panel](/docs/images/seo-domain-field.png)

The domain field is the site's global setting and can be found in the project's config file but for easier use it can be updated via the SEO panel as well. The SEO panel uses this field to generate absolute URLs for social card images (for cards to pass validation), preview URLs, etc. If you change your domain in Netlify, Azure, or DigitalOcean, you have to update this field in the SEO panel as well.

### <a href="#social_tags" class="hash-link"><span class="icon-copy"></span></a>Social tags

By default, the social tags (Facebook and Twitter) will be the same as the general meta title and description tags of the page. You can preview how they will appear in both Facebook and Twitter in the ‘Social’ tab.

![SEO social tab](/docs/images/seo-soc.png)

However, if you want to have different meta title and meta description tags for the page, on Facebook, and on Twitter, you can do that by editing them individually and saving the changes.

**Important to note!** Images for Twitter must be less than 5MB in size. JPG, PNG, WEBP, and GIF formats are supported, but only the first frame of an animated GIF will be used. SVG is not supported.

#### Open Graph Type (og:type)

In the social tab of Stackbit Studio's SEO tools you can find the `og:type` (open graph type tag) field.

![Open Graph Type filed in SEO panel](/docs/images/seo-og-type.png)

With `og:type` field you can help Facebook understand your content. Also, this tag impacts how your content shows up in Facebook news feed. Each page should have a single `og:type` tag, that means multiple `og:type` values are not possible.

The most common `og:type` tag values are `website`, `article`, `profile` and `video`. Output example:

    <meta property="og:type" content="website" />

For example, if you have a site with a home page, blog and about page, you can set `og:type` to `website` for your home page, `og:type` `article` for all posts and `og:type` `profile` for your about page. If you have a general website with no specific content, you can set `og:type` to `website` for all your site pages. Actually, if you don’t define the `og:type` at all, Facebook will read it as `og:type` `website` by default.

You can see the full list of supported `og:type` values [here](https://ogp.me/#object-type).

#### Twitter Card Type (twitter:card)

In the social tab of Stackbit Studio’s SEO tools you can find the `twitter:card` field.

![Twitter Card Type](/docs/images/twitter-card.png)

The `twitter:card` is required and defines the type of card, which will be one of the following: `summary`, `summary_large_image`, `app`, or `player`. You can find more about the difference between Twitter Card types in the [Twitter’s help for developers](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards).

### <a href="#alt_image_tags" class="hash-link"><span class="icon-copy"></span></a>ALT image tags

Accessibility and SEO best practices recommend that all images and logos have an alt tag. In order to add it, navigate to the image or logo you want to edit, open its fields, and add the relevant descriptor to the ALT image field.

![ALT image tags](/docs/images/alt-image-tags.png)

The length of the alt description should be less than 125 characters and it should contain relevant target keywords.

If you can’t find the alt tag field under your image or logo, make sure it’s defined in the stackbit.yaml.

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Pre-requisites](#pre_requisites)
-   [SEO overview](#seo_overview)
-   [Title and meta description](#title_and_meta_description)
-   [Domain field](#domain_field)
-   [Social tags](#social_tags)
-   [ALT image tags](#alt_image_tags)











