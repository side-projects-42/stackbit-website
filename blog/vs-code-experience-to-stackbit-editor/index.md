This app works best with JavaScript enabled.

<a href="/" class="masthead-logo"><img src="/images/logo_alt.svg" alt="Stackbit logo" width="133" height="20" /></a>

<span class="screen-reader-text">Show Menu</span><span class="masthead-menu-icon" aria-hidden="true"></span>

-   [Pricing](/pricing)
-   [Agencies](/agencies)
-   [Businesses](/businesses)
-   [Documentation](https://www.stackbit.com/docs/)
-   [Sign In](https://app.stackbit.com/)
-   <a href="https://app.stackbit.com/create" class="button-component button-component-theme-accent button-component-hollow"><span>Get Started</span></a>

We've brought the VS code experience to the Stackbit editor
===========================================================

Artem Denysov — April 05, 2021

TLDR: Developers working on websites can now leverage our cloud-hosted dev env to make code edits next to a live preview. We also added some awesome code navigation capabilities to pinpoint the code and content driving every component on your website.

At Stackbit, we've made it super easy to create a Jamstack website (check out [jamstackthemes.dev](https://jamstackthemes.dev/)) and introduced the [editing experience for Jamstack websites](https://www.stackbit.com/). We try to be mindful of inefficiencies and various annoyances that occur when developing websites; as part of that, we recently polled our developers to see what they wished our editor could do for that. One thing that folks kept asking for was an always-on, hosted dev server running their SSG in develop mode, an easy way to make code changes to that server, and a **super tight feedback loop**. We already use the hosted dev server to power our visual editor's live preview, so the only thing missing was integrating a code editor.

Several days later, we had a prototype of VS Code integrated into the Stackbit editor, and it instantly felt like an awesome developer experience.

![](/images/code_screenshot%20(1).png)

Imagine not having to maintain local dev environments for all the websites you've ever touched? With the Stackbit editor, you can make that layout change, CSS tweak, or 1:00 a.m. refactoring session without downloading any source code, run *npm install*, launch a dev server, and wait forever. Moreover, you'll always get a super tight feedback loop with a side-by-side view of your code and a live preview of your website, instantly responding to any change.

Here are some ideas for things you can do with the code editor:

-   Make CSS changes
-   Paste/modify code snippets (e.g. analytics, forms, etc.)
-   Tweak layouts to move fields around
-   Make quick edits to content that's just sitting in templates

> Get back to Hacker News, Netflix, or learning Rust sooner

Code & Content Highlighting
---------------------------

When you edit any website with Stackbit, there's a lot of magic happening in the background that figures out the relationship between the website's code, its structured content, and the visual result (markup, pixels, etc). When an editor clicks an H1 to edit it, we know what flat-file stores the string for that H1 or where it is in a headless CMS schema and make the change for the editor. But what if we could use that same data to give developers a better developer experience and editing experience? We gave it a shot, and it's pretty cool. **With the code editor open, click any component on your website, and the code editor will highlight the file (and often the line of code driving it too). This is typically a template, section, or component file**.

Here are some examples of code/content highlighting's power:

-   Use highlighting to learn how a new website/theme works
-   Learn how the content schema drives different components
-   Explore component hierarchies

We've really enjoyed working with the integrated code editor over the last few weeks; it has shortened many of our daily workflows. Moreover, code highlighting makes it easy to explore new code or come back to code you wrote a while back (did I write that?!). The Stackbit editor doesn't necessarily replace a full-blown local development environment, but it can be super useful for many use cases - we're learning about new ones every day.

Lastly, the integrated code editor gives an opportunity to make a quick GIF that really brings home how the Stackbit editor works.

<span class="post-share-title">Share on:</span>

Tweet

Share













<!-- -->



<!-- -->








