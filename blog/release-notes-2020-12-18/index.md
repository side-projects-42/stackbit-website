This app works best with JavaScript enabled.







Stackbit Release Notes - 2020-12-18
===================================

Dwayne McDaniel — December 18, 2020

New this week:

-   [Granular publishing for git-based CMS](#granular)
-   [Search in the Stackbit Studio Editor](#search)
-   [Better Support for Custom Hugo and Gatsby Themes](#custom)

Here are some of the new things our team has released this week.

<span id="granular">Granular Publishing for Sites Using a Git-Based CMS</span>
------------------------------------------------------------------------------

![Stackbit Studio Publish Menu open with Current page selected](/images/blog/publish-current-page-2020-12-18.png)

For folks using Git-based CMSes, such as using Git to store markdown in your repository, [NetlifyCMS](https://www.netlifycms.org/) or [Forestry](https://forestry.io/), you can now choose to publish the entire site or just the single page you are working on.

This is perfect for: Teams working to publish new pages and posts without worrying about other content changes made elsewhere being pushed to production too early Updating pages while developers are working on new features for the site

<span id="search">Search in the Stackbit Studio Editor</span>
-------------------------------------------------------------

![The Stackbit Studio edit menu opened with a search bar added to the top](/images/blog/editor-searchbar-2020-12-18.png)

We have added a search bar to the top of the Edit menu in the Studio. Just type the term you are looking for and the editor will reveal all the elements on that page that contain that term.

This is ideal for: Quickly identifying all elements on a page that use that term or phrase Editing all the instances of a term or phrase throughout the site Reducing the time spent visually hunting for where to click to make an edit

<span id="custom">Better Support for Custom Hugo and Gatsby Themes</span>
-------------------------------------------------------------------------

We have updated our tools to better support custom themes that do not have a pre-defined `stackbit.yaml` in their repository. This means you can now use the Stackbit Studio to edit the content on sites built using any Hugo or Gatsby theme.

Technically speaking, there are 2 big improvements we made this week. One improvement is how our tools automatically surface editable fields, including files with arrays at root objects. The other release involves how we can interact with images and other on-page items stored in a site’s file system and referenced with relative paths.

To import a custom theme and test this yourself, [create a new site](https://app.stackbit.com/create), select the ‘Custom’ theme option, and supply the Github URL for the theme.

![Stackbit Site Builder Import Custom Theme Import menu](/images/blog/import-custom-theme-2020-12-18.png)

If you want to test this out, here are a few theme suggestions:

**Hugo**

-   [Compose](https://app.stackbit.com/create?theme=https://github.com/onweru/compose)
-   [Tranquilpeak](https://app.stackbit.com/create?theme=https://github.com/kakawait/hugo-tranquilpeak-theme)
-   [MyPortfolio Theme](https://app.stackbit.com/create?theme=https://github.com/2-REC/hugo-myportfolio-theme)

**Gatsby**

-   [RG Portfolio](https://app.stackbit.com/create?theme=https://github.com/rohitguptab/rg-portfolio)
-   [Intro - Personal branding theme for developers](https://app.stackbit.com/create?theme=https://github.com/wkocjan/gatsby-theme-intro)
-   [Gastby Starter Zenii](https://app.stackbit.com/create?theme=https://github.com/thebakerdev/gatsby-starter-zenii)

Let Us Know What You Think
--------------------------

We encourage you to test out these new features and themes and give us some feedback.

All of these improvements started with users letting us know what they needed. We strive to help developers and marketers leverage the Jamstack and we are always looking for ideas that will help make a more responsive, accessible web for us all. Please let us know [how we can help](https://www.stackbit.com/contact/).

Happy building.

<span class="post-share-title">Share on:</span>

Tweet

Share













<!-- -->



<!-- -->








