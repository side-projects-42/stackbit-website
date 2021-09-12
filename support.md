This app works best with JavaScript enabled.







Support & FAQ
=============

Have a Question? We're here to help.

We've Got You
-------------

We want to make sure that you're successful with Stackbit. Take a look at the FAQ below for answers to some common questions.

Don't see your question answered? [Check the docs](https://docs.stackbit.com) or [contact support via email](mailto:support@stackbit.com).

FAQ
---

### How do I navigate to edit another page in Studio?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Go to the sitemap tapping the arrow next to the page name.

![sitemap in Stackbit Studio](/images/support/sitemap.jpg)

From there you can move around the different pages. You can also move from one page to another hovering on a link and tapping the 'Navigate' link.

![Site Navigation in Stackbit studio](/images/support/navigate.jpg)

Alternatively, you can append a `uri` variable to the URL of the Studio in your browser's address bar. For example. `?uri=/about` would edit the about page while `?uri=/blog/post-4/` would edit the blog post with the slug of `post-4`.

### How do I delete a page using Stackbit Studio?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

You can delete pages directly from within the Studio Editor. In order to do so, open the sitemap tapping the arrow next to the page name you're currently on. Then hover on the page you want to delete and you'll see the trash can to delete it.

![Delete page in Stackbit](/images/support/delete-page.jpg)

### Can I customize the layout of my site? How?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Yes. The site is yours to customize as you wish. The best way to begin customizing is to clone your site locally. You can locate instructions on how to run your site locally in the `readme.md` file or via the instructions in the Studio's "Developer Tools" panel.

![Developer Tools in the Stackbit Studio](/images/support/developer-tools-sm.png)

### How do I install and edit my project locally?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

For projects that work within the Stackbit Studio, instructions for installing your project locally can be found within the Studio's "Developer Tools" panel.

![Developer Tools in the Stackbit Studio](/images/support/developer-tools-sm.png)

Alternatively, the instructions for running your project locally can be found in the project's `readme.md` file.

### How do I connect my custom domain?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

For users who authenticated with Github and are using Netlify, you will need to log into Netlify and add your custom domain there [using these instructions](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/). If you do not have a Github account, or just need some additional guidance, we will be glad to help you. Please [contact support](mailto:support@stackbit.com) with your project ID, which can be found in the URL when using the Studio.

### Why are my edits not showing up in the Studio preview?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

In most cases, this occurs on projects using Git as a CMS and is due to changes being made to the `master` branch but not the `preview` branch. The most efficient way to solve this is to merge any changes that have been made to `master` into the `preview` branch.

`git checkout preview git merge master`

It is recommended that you make edits directly to the `preview` branch. These will be pushed to `master` - along with your content changes - when you click publish in the Studio.

If this fails to resolve your issue or the issue you are encountering is different from the one described above, please [contact support](mailto:support@stackbit.com).

### I am getting an error when trying to run my project locally? It says my project is missing site-metadata.json.<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Usually this error means that there's a setup error between Stackbit and an API-based CMS like Contentful or Sanity. Typically, this is the result of the Stackbit API key not being set or being incorrectly set.

To see what value is set for `STACKBIT_API_KEY` environment variable, run `printenv STACKBIT_API_KEY` from the terminal/command-line. The value should only contain letters and numbers and should *not* contain the curly brackets (i.e. `{` and `}`).

Another option is to run `npx @stackbit/stackbit-pull`, which pulls the content locally from the API-based CMS, with your Stackbit API key appended via the `--stackbit-api-key=` paremeter.

Once the content is properly pulled, you should be able to run your site locally without errors.

If this fails to resolve your issue or the issue you are encountering is different from the one described above, please [contact support](mailto:support@stackbit.com).

### I'm getting a permission denied error when trying to clone my GitHub repository locally. How do I fix this?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

The most frequent cause this error is that you have two-factor authentication (2FA) enabled on your GitHub account. GitHub accounts with 2FA enabled require a Personal Access Token as the password when authenticating via the terminal/command line. For more information on how to create a Personal Access Token, follow [GitHub's instructions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

### How do I get my current project to work with editing in the Studio?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Currently, Studio is supported on all projects created using the [Stackbit Site Builder](https://app.stackbit.com/create). Automated support for custom projects is coming soon. However, if you have a specific project you'd like to discuss enabling in the Studio, please [contact us](mailto:hello@stackbit.com).

### I made changes to the content model of my site and now it isn't working. What do I need to do?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Every Stackbit project requires a `stackbit.yaml` configuration file. This file maps out the content coming from the headless CMS to the content on the site and vice versa. In some cases, content types or properties may be added to your project that are not already mapped in the `stackbit.yaml`. In these cases, you'll need to update the `stackbit.yaml` file with content model definitions for these changes or additions. Please refer to the [`stackbit.yaml` documentation](https://docs.stackbit.com/custom-themes/stackbit-yaml/) for details on how this works.

### Where can I change the email on my account?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Please [contact support](mailto:support@stackbit.com) to request an email change while we work on adding the ability to change your email address within the account settings.

### How much does Stackbit cost?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

We have multiple pricing plans available including a Free plan. Current pricing and plan details can be found on our [pricing page](/pricing)

### What CMS and static site generators are supported in Studio?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

We are continuing to expand support for headless CMS and static site generators in Stackbit Studio. Currently, the following options are supported:

**Supported SSG:**

-   Next.js
-   Gatsby
-   Hugo
-   Jekyll

**Supported CMS**

-   Sanity.io
-   Contentful
-   Git

### My favorite static site generator is not supported. When will you be adding support for it?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

We are always workng on expanding support for new tools in Stackbit and the Stackbit Studio. Our current SSG roadmap includes Hugo and Jekyll support in the Stackbit Studio. We are also exploring 11ty support in the site builder and potentially Stackbit Studio. If you have a specific project you'd like to discuss that requires SSG support we do not currently have, [let us know](mailto:hello@stackbit.com).

### My favorite CMS is not supported. When will you be adding support for it?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

We are always workng on expanding support for new tools in Stackbit and the Stackbit Studio. Our current SSG roadmap includes Kentico Kontent support. We are also exploring other possible additions. If you have a specific project you'd like to discuss that requires SSG support we do not currently have, [let us know](mailto:hello@stackbit.com).

### My favorite deployment option is not supported. When will you be adding support for it?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

We are always working on expanding support for new tools in Stackbit. If you have a specific project you'd like to discuss that requires SSG support we do not currently have, [let us know](mailto:hello@stackbit.com).

### Why does the Studio say "preview is x commits ahead of master"?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

For users of Git a based headless CMS, such as Git, NetlifyCMS, or Foresty CMS, you will see a small notification in the bottom corner of the Stackbit Studio which will look like this:

![preview is 10 commits ahead of master](/images/support/preview-is-x-ahead-of-master-sm.png) When your site is created with the Site Builder, it sets up this `preview` branch to store all the changes made through the Studio prior to publishing. This message lets you know how many changes have been saved and are ready to be deployed.

If you're working only through the Studio you should always see either `preview is ahead of master` or simply `preview` in case no edits have been made yet.

Once you publish, `preview` is merged into `master`. At this point, the `preview` branch will no longer be ahead of the published site and the message will update to reflect this. If you work directly against the `master` branch outside of the Studio, then you can get to a state where `preview is x commits behind master`.

If you are modifying both through the Studio and editing your repository directly, you will reach a state where you will need to sync `master` with `preview` manually. If this happens you will see this menu appear when you click the `preview` message in the studio:

![The preview and live site are out of synch](/images/support/preview-and-live-site-are-out-of-sync.png)

Follow the provided link to merge `master` into `preview` on Github.

If you're making only code changes when editing the `master` branch, this should not cause issues, as the Studio is restricted to editing content.

### Should I delete my preview branch after merging? <span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

Short answer: No

If you are using a git based CMS (Git, NetlifyCMS, Forestry) the `preview` branch is a special branch that Stackbit Studio uses to store the changes you make when editing.

If you are merging manually on Github it is easy to delete the branch after merging as their workflow will suggest is it 'safe to delete' it. Please don't.

If you have deleted this branch, it is simple to to fix. All you need to do is recreate the branch from `master` and it should work as expected.

### I can't access the GitHub project for my new site. What can I do?<span class="faq-item-icon icon-plus" aria-hidden="true"></span>

<span class="faq-item-sep" aria-hidden="true"></span>

In some cases, Stackbit does not have or request advanced GitHub permissions. This is done for security purposes to avoid requesting intrusive permissions on user's GitHub accounts. In these cases, Stackbit will initially generate a project under a Stackbit owned GitHub account (i.e.`stackbit-projects`) and then initiate a transfer of the repository to your GitHub account. You should receive an email from GitHub informing you of the transfer and requesting your acceptance.

If you did not receive the email, please, first, verify that it did not get caught in spam. If you are still unable to locate the email [contact support](mailto:support@stackbit.com) to have the transfer re-initiated.









-   <a href="https://jamstack.wtf/" class="footer-link-blue">jamstack.wtf</a>
-   <a href="https://jamstackthemes.dev/" class="footer-link-blue">jamstackthemes.dev</a>



<!-- -->

-   <span class="screen-reader-text">GitHub</span>
-   <span class="screen-reader-text">Twitter</span>
-   <span class="screen-reader-text">YouTube</span>
-   <span class="screen-reader-text">LinkedIn</span>

<!-- -->

-   <a href="https://jamstack.wtf/" class="footer-link-blue">jamstack.wtf</a>
-   <a href="https://jamstackthemes.dev/" class="footer-link-blue">jamstackthemes.dev</a>

<a href="/" class="footer-logo"><img src="/images/logo_alt.svg" alt="Stackbit logo" /></a>

Copyright © 2021 Stackbit.  
💖 Made with Stackbit

<img src="https://www.facebook.com/tr?id=2703040533152181&amp;ev=PageView&amp;noscript=1" width="1" height="1" />
