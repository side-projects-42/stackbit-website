This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Best Practices for Content Slugs When Using the Jamstack with a Headless CMS

You may have been using slug fields in your content for ages but never really given much thought to what they are or why they exist. So let's take a quick look at that.

Years ago it was common to have URLs with identifiers, often passed as a URL parameter, to identify individual pages. For example, you might have a URL like `http://foo.bar/?id=12345`. The `id=12345` would often represent a database record ID for the content page being loaded. This has the problem of being not indicative of what the page actually contains and not being human readable. It is also considered detrimental to your page SEO as the URL also gives the search engine no indication what the page contains.

The slug helps resolve this problem by allowing a human readable (and frequently user generated) identifier for a piece of content. The term appears to have originated in Wordpress, having been adopted from the print publishing industry. Where a permalink represented the full URL that accessed a particular piece of content, including the domain, the path and the identifier (i.e `https://stackbit.com/blog/what-is-a-slug`), the slug is only the identifier portion (i.e. `what-is-a-slug`). Slugs are human readable, but, since they are intended for the URL, they should not contain any special characters or spaces.

Yoast, creators of popular SEO plugins for Wordpress, have a good [intro to slugs](https://yoast.com/slug/) that also covers their SEO impact. [This wiki](https://en.ryte.com/wiki/Slug) has a more in depth look at both the term and its usage.

## <a href="#using_content_slugs_in_jamstack_sites" class="hash-link"><span class="icon-copy"></span></a>Using Content Slugs in Jamstack Sites

The slug is important for readability and for SEO. Having a configurable slug in posts and pages can also be useful when creating Jamstack sites that rely upon a headless CMS. You'll want your content editors to be able to create pages dynamically within the CMS, which means that paths and slugs should rarely ever be hardcoded in your template code. For example, don't create an "About Us" page template that looks specifically for the "About Us" content record. Instead, create a standard page template that looks for any content that uses the standard page content model in the CMS and determines the path based upon the slug.

This also means that you can have different content types with dynamic links that follow the same slug patterns but differ in their presentation. For example, imagine a site with content models for blog, standard pages and landing pages.

- The blog post may follow a permalink pattern of `/blog/{slug}`;
- The standard page may follow a permalink pattern of `/{slug}`;
- But a landing page may also follow a permalink pattern of `/{slug}`.

Even though the standard page and landing page may have the same slug pattern, they have different content models and are assigned a different layout. While the slug would have to be unique across both standard and landing pages, your content editors will be free to create pages of differing types without breaking your site.

Following these patterns will benefit you in the long run to make your site flexible in meeting your long term needs without requiring constant code changes to support new content.

## Did you find this page useful?

## Jump to Section

- [Using Content Slugs in Jamstack Sites](#using_content_slugs_in_jamstack_sites)
