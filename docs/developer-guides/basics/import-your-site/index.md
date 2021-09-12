This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Import an Existing Site into Stackbit

In this tutorial, we'll go through the necessary steps to bring your existing Jamstack site to Stackbit and start taking advantage of Stackbit's editing and collaboration tools.

1.  [Prerequisites](#prerequisites)
2.  [Add a stackbit.yaml file to your site](#step_1_add_a_stackbit_yaml_file_to_your_site)
3.  [Import your site into Stackbit](#step_2_import_your_site_into_stackbit)
4.  [Learn how Stackbit's editor works](#step_3_learn_how_stackbit_s_editor_works)
5.  [Publish your site](#step_4_publish_your_site)

## <a href="#prerequisites" class="hash-link"><span class="icon-copy"></span></a>Prerequisites

Please note the following limitations when importing a site into Stackbit:

- You have access to your website's code repository on [GitHub](https://github.com/). If you don't have one handy, you can fork this [blog boilerplate for Gatsby](https://github.com/gatsbyjs/gatsby-starter-blog).
- Stackbit supports sites built using one of the following SSGs - Gatsby, Next.js, Eleventy, Gridsome, Hexo, Hugo, Jekyll, Next.js, Nuxt, Sapper, Vuepress.
- Your site's content must be separated from the presentation. For example, if your site uses React, then the content should be stored separately and passed to React components via props. If you want to learn more about separating content from presentation, read our [conceptual guide](/docs/conceptual-guides/content-presentation-separation) on this subject.
- Your site's content is stored in files in your site's git repository. These files should have one of the following extensions - `.md`, `.mdx`, `.markdown`, `.yaml`, `.yml`, `.json`, `.toml`. Alternatively, your site's content is managed by one of the supported CMSs - Contentful, Sanity, Forestry, NetlifyCMS.
- Your site has a working development server that listens to content changes in files or headless CMS and refreshes any opened browser sessions via live-reload or HMR when the content is changed.

## <a href="#step_1_add_a_stackbit_yaml_file_to_your_site" class="hash-link"><span class="icon-copy"></span></a>Step 1: Add a stackbit.yaml file to your site

Before importing your site into Stackbit, let's create a configuration file that will tell Stackbit how to import and run the preview of your site correctly and provide advanced features such as the on-page editing experience.

### <a href="#install_stackbit_cli" class="hash-link"><span class="icon-copy"></span></a>Install Stackbit CLI

    npm install -g @stackbit/cli

### <a href="#generate_the_configuration_file_stackbit_yaml_for_your_site_or_custom_starter_repository" class="hash-link"><span class="icon-copy"></span></a>Generate the configuration file (stackbit.yaml) for your site or custom starter repository

    cd my-website
    stackbit init

In short, this file tells Stackbit which Static Site Generator (SSG) your site uses, what environment it needs to run in, and the information about the content structure of your site. To learn more about `stackbit.yaml` and how to configure it visit [stackbit.yaml documentation](/docs/reference/stackbit-yaml).

### <a href="#add_the_stackbit_yaml_to_your_repository" class="hash-link"><span class="icon-copy"></span></a>Add the stackbit.yaml to your repository

    git add stackbit.yaml
    git commit -m 'add stackbit.yaml'
    git push

Note that the generated `stackbit.yaml` is the "**best guess**", so it might not have the best content model for your site. For example, fields that could store markdown content might be marked as strings. After generating the `stackbit.yaml` file, we recommend reviewing it and adjusting it if needed. We also recommend running the `validate` command to check if there are content files without matched models.

Click [here](/docs/reference/stackbit-cli) to learn more about Stackbit CLI.

## <a href="#step_2_import_your_site_into_stackbit" class="hash-link"><span class="icon-copy"></span></a>Step 2: Import your site into Stackbit

Navigate to <https://app.stackbit.com/import> to import your site into Stackbit. You will need to connect Stackbit with your GitHub account. After connecting, select your website's repository from the list of repositories in your GitHub account. Stackbit will load your repository and select the `master` branch for you. From this branch Stackbit will create a new `preview` branch that will be used by Stackbit.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 598px;
                              "><a href="/docs/static/9da9b8b6698e7ce133b3a948294a3916/0c69d/stackbit-import-site-screen.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 70.85714285714285%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVQoz32TzW7UMBDH8wLwLKhISD1wKeLSI6gPQI99ii0ICYEQXMqRd+gD8BitKAtJvNlsPjZx/BWPPxIbZcNWixL1L2s0sv2b8XjswO/V972xxlprzGC10dZaN8i7vfz/Crz34ywAZFmaZVlZllW1TdN1kReT/RN4lDWGUiaEAAAuWjEMwRlv28GREnZWzmfmjN3c3oURCiMUxehPhOJ4FYYxQkkYr6IYhWGUppsaYzfNbIwWFCtBJCcgSMsIJ7XkjW4ZcMIoqapKAhxWHhweI67sz8z8Lu2yGOzOGfxfueFqYNy05q4fJn/ctkeX6Olb9PxD8uwdOlqgJ4v48cXy0cUyOL87/bIegcMrHOAd6282+s33/NVV+vpqc/Ztc/p1/fJzcvIxefEpOX6/WlxXI+lmb3uMMgZ+sEFzsHP+ga7OLgVz+/6lBwDRCq3VfTvd3pk8Et0VSY0pcSXwEjMh6roSjGmlCMaMse12S5paaz0Dd32PG1IUOSUsI3We5xhjKnjTNCXnWZ5XDY1LSgmZq9k701kAUNZIqxWA2X0RrbWynZRSGcvAaqXu4b8EHBaF+zecAwAAAABJRU5ErkJggg==&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/9da9b8b6698e7ce133b3a948294a3916/0c69d/stackbit-import-site-screen.png" title="Stackbit Import Site" alt="Stackbit Import Site" class="gatsby-resp-image-image" sizes="(max-width: 598px) 100vw, 598px" srcset="
                                    /docs/static/9da9b8b6698e7ce133b3a948294a3916/4edbd/stackbit-import-site-screen.png 175w,
                                    /docs/static/9da9b8b6698e7ce133b3a948294a3916/13ae7/stackbit-import-site-screen.png 350w,
                                    /docs/static/9da9b8b6698e7ce133b3a948294a3916/0c69d/stackbit-import-site-screen.png 598w
                                  " /></a></span>

Click **Continue**, then click **Go** on the next screen. Stackbit will now load the preview of your site by running the following steps:

1.  It clones your repository
2.  It checks-out the `preview` branch
3.  It installs your project dependencies by running `npm install`
4.  It runs your Static Site Generator (SSG) development server, i.e.: `gatsby develop`
5.  It routes any page requests made from your browser to your Static Site Generator development server

You can open the Logs panel at the left of the screen to see these steps' logs. When Stackbit finishes running all these steps, you will see your site's live preview served by the your SSG development server.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/14c8053e2ff82b44172ff6b3142e0a70/0e909/preview-logs.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 26.285714285714285%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxUlEQVQY032Q6Q7CIBCEeRmPWqu9oNCTo9V4vv/bjNn1iNHojwkQYOabFWVlodsRqvaQxiNXA+KtxnItESUSi7jELCowX32L7ugtaZ0arDYVhKoD/HRB748Y/BF2PGMIJz63w57DSm1RVBa56jkwkz2HvZvPopwlqibATRd07sCy4cSGzZuZNI7XtGyZJErUi/BTgj6F3ZXNendgWvsgNN2EJDNM8yT6Vf9JKaiGbkZI7XiOtFfGMxVVo/kQ0X2m6q+SrMYNaB6iHd9Q12EAAAAASUVORK5CYII=&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/14c8053e2ff82b44172ff6b3142e0a70/8c557/preview-logs.png" title="Preview Logs" alt="Preview Logs" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/14c8053e2ff82b44172ff6b3142e0a70/4edbd/preview-logs.png  175w,
                                    /docs/static/14c8053e2ff82b44172ff6b3142e0a70/13ae7/preview-logs.png  350w,
                                    /docs/static/14c8053e2ff82b44172ff6b3142e0a70/8c557/preview-logs.png  700w,
                                    /docs/static/14c8053e2ff82b44172ff6b3142e0a70/e996b/preview-logs.png 1050w,
                                    /docs/static/14c8053e2ff82b44172ff6b3142e0a70/2cefc/preview-logs.png 1400w,
                                    /docs/static/14c8053e2ff82b44172ff6b3142e0a70/0e909/preview-logs.png 3008w
                                  " /></a></span>

☝️ The Logs panel can help you debug any issues that might cause your site's preview in Stackbit not to load.

To learn more about how Stackbit Preview works, read our [conceptual guide](/docs/conceptual-guides/site-preview/).

## <a href="#step_3_learn_how_stackbit_s_editor_works" class="hash-link"><span class="icon-copy"></span></a>Step 3: Learn how Stackbit's editor works

After Stackbit loads your site, it will enter the "Edit" mode. In the "Edit" mode, when you move your mouse pointer around, the editor shows rectangular guides around editable content. Clicking inside the rectangular area will activate the on-page editor and let you edit the underlying source value.

Click on a title and change its text to something else, then press enter. When editing a text, the rectangle around the text becomes green, and when the change is being saved, the rectangle becomes orange.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/fa21aa8151b246b69e4c23603c974ef2/2a08f/gatsby-starter-edit-title.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 57.14285714285714%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB0UlEQVQoz42S228SURDG+ZfV+lKTFrSN4ov/gqaJNsbU1heDaGKiLwasjbEXKFrY++UcdqHswrLAz5yDSxoeTCf5Mucy8535zkwpHlxzcdGm8/uKs/OWXnt+SPP7Md2eSavdodW+xPV8Tk5+0mgeY5gWKm++gHy2YDZnhVK3a7C5+YDtcoWtrW3u3L3Hy1f7VB4+Ymdnl8dPqpTLFQ7eHlKtPmVj476O+VD/iLJsOtOkBXGJNVMXkyznfzZKUtJ0woJlVarS+XyZW0qTEaeNr0gh8QJJEPZxfUHPsLFsT6/9UCJkjB+oGEE/HiL7AwLR1+e2GxAPR5q4JMKQ/b0XuI6Lafv633p2wLkpOTUEp6bkzJS07D5tJ+KXIQjihCzLScdTxhPlM+215MUNKbr0fyik3PzwdazHacmOF3Jw9J6u4TBbwDjLyefLB4qg20JX2LElz2tN6j/+8K55xeG3S/ZqDZ69/ozhRZp4mt+ObNmUcUYUD4nia9JJTjxMqX/6wpujmm5Q0fl1metYVZikGZ4vCGWku6hIVBfV4IYiwvXCJXyhoTqq9vrOD3WOgho1TThKJpiWq6HGxHJ8zMJbriZQKM56prMiVXvDchkMk5XkvwsmNJmMNtGcAAAAAElFTkSuQmCC&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/fa21aa8151b246b69e4c23603c974ef2/8c557/gatsby-starter-edit-title.png" title="Click to edit" alt="Click to edit" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/fa21aa8151b246b69e4c23603c974ef2/4edbd/gatsby-starter-edit-title.png  175w,
                                    /docs/static/fa21aa8151b246b69e4c23603c974ef2/13ae7/gatsby-starter-edit-title.png  350w,
                                    /docs/static/fa21aa8151b246b69e4c23603c974ef2/8c557/gatsby-starter-edit-title.png  700w,
                                    /docs/static/fa21aa8151b246b69e4c23603c974ef2/e996b/gatsby-starter-edit-title.png 1050w,
                                    /docs/static/fa21aa8151b246b69e4c23603c974ef2/2cefc/gatsby-starter-edit-title.png 1400w,
                                    /docs/static/fa21aa8151b246b69e4c23603c974ef2/2a08f/gatsby-starter-edit-title.png 1422w
                                  " /></a></span>

**What just happened?**

When you changed the text, Stackbit did the following steps:

- Stackbit updated the markdown file containing the original text inside the preview server.
- The SSG server picked up the updated file and updated the live preview via web-socket.
- Stackbit committed the change within the markdown file into the special `preview` branch and pushed the changes to GitHub.

☝️ Stackbit never commits content changes to the `master` or the `main` branches. This is to ensure that your changes will not be picked up by a serverless deployment platform such as Netlify, affecting your live site.

Let's look at the git commit with the updated markdown file. To quickly open your site's repository, click on the "Settings" button in the top bar. Then click on the "Open" button beside the GitHub repository section.

In GitHub, select the `preview` branch and click the "commits" link to see the latest commits. You should see that the latest commit has the following commit message "**_index.md: updated title_**":

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/ca88d48060b573e0bd4d72f3979b94d6/dcb79/git-preview-commits.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 35.42857142857142%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVQoz52Q227CMBiDef/H2+7ZQEDbtJBDm3PSb2o6Nq6x5FiRJeu3DzEmHlKhjeGJdd24vsVDTAmlNFJpnPN4H5rxLg7bs1hL1w+I8c61G5DaEFMmxESImZBy+8dUds3lz7ch48LmJVIue+AoRj4/P/g6X/g+X7j2AjFJJqm5S9PULA4XEtbHposLzIulkx6hPYt1+JD2QPl4cDweud46BiEIIVBreS76wn+UUnA+oGxk8VuTSC6/FyopOZ1OjOPEMAhutw6hPONcuM8ZYTKDzkxzaRW3sFIq3nsmE1E2EV8Djdb0fYfWBqV1061WzCsx18aQds2lUuvOtO3Ydi3kXCi18gNLJSEMMC5D8wAAAABJRU5ErkJggg==&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/ca88d48060b573e0bd4d72f3979b94d6/8c557/git-preview-commits.png" title="Git preview commits" alt="Git preview commits" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/ca88d48060b573e0bd4d72f3979b94d6/4edbd/git-preview-commits.png  175w,
                                    /docs/static/ca88d48060b573e0bd4d72f3979b94d6/13ae7/git-preview-commits.png  350w,
                                    /docs/static/ca88d48060b573e0bd4d72f3979b94d6/8c557/git-preview-commits.png  700w,
                                    /docs/static/ca88d48060b573e0bd4d72f3979b94d6/e996b/git-preview-commits.png 1050w,
                                    /docs/static/ca88d48060b573e0bd4d72f3979b94d6/2cefc/git-preview-commits.png 1400w,
                                    /docs/static/ca88d48060b573e0bd4d72f3979b94d6/dcb79/git-preview-commits.png 1700w
                                  " /></a></span>

Click on the commit message to see the diff:

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/c9d77/git-commit-diff.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 40%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABTklEQVQoz3XR23KbMBSFYd7/zXLRi2bqxhnXJw4GG4QkhDBCQn8H4mQ8zfTim7W1tu52MrpApQWtlLSqQyr9yA7VGeww4nzATf/hA9oMaGMZnSdpek+hBhppEKpHaIu5e+wY6Jd0gWGKq/vD87ywbqYfA4ObScgrSEv6uqJOC8p9jsyu9GXNLBRITWw/BKFW8z/C4x9dT2LLjD47cilOHI5/OOwOnPYn9rsjxTmjzPI1L2mGvF5pqwp9u63zJ1FWWNEwGU2yiQd+zFte9Y6XastLseNnc2Jrcs7+RhpqzmHJG0VsKGjWvCAonyz9NUqS93jmV9yztxc2MuVN5bzJnK0q+N1mXzZttnbLbpnLKKhoKeMDLXXUJD4EfPC4aWJ07pvP/nk/eU8kMscn63smEXamNvN6WWnuK7Vk90Fbh+rHr93SmcFz93y7/OgjfwHF22MB4EiQEgAAAABJRU5ErkJggg==&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/8c557/git-commit-diff.png" title="Git commit diff" alt="Git commit diff" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/4edbd/git-commit-diff.png  175w,
                                    /docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/13ae7/git-commit-diff.png  350w,
                                    /docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/8c557/git-commit-diff.png  700w,
                                    /docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/e996b/git-commit-diff.png 1050w,
                                    /docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/2cefc/git-commit-diff.png 1400w,
                                    /docs/static/baa045b9eb976f4e3c03d6c3482c0a1f/c9d77/git-commit-diff.png 1964w
                                  " /></a></span>

As you can see, Stackbit updated the `title` field committed the change to the `preview` branch.

To learn more about how Stackbit works with file-based content, read our [conceptual guide](/docs/conceptual-guides/file-based-cms/).

## <a href="#step_4_publish_your_site" class="hash-link"><span class="icon-copy"></span></a>Step 4: Publish your site

Now, your site is ready to be published. Click the "Publish" button in the top right to publish your site. Stackbit will merge the `preview` branch into the `master` branch.

You can set up your site with a serverless deployment platform such as Netlify or Vercel. These platforms will deploy and publish your site whenever new commits are pushed to the `master` branch, effectively deploying your changes whenever you click the "Publish" button in Stackbit.

## Did you find this page useful?

## Jump to Section

- [Prerequisites](#prerequisites)
- [Step 1: Add a stackbit.yaml file to your site](#step_1_add_a_stackbit_yaml_file_to_your_site)
  - [Install Stackbit CLI](#install_stackbit_cli)
  - [Generate the configuration file (stackbit.yaml) for your site or custom starter repository](#generate_the_configuration_file_stackbit_yaml_for_your_site_or_custom_starter_repository)
  - [Add the stackbit.yaml to your repository](#add_the_stackbit_yaml_to_your_repository)
- [Step 2: Import your site into Stackbit](#step_2_import_your_site_into_stackbit)
- [Step 3: Learn how Stackbit's editor works](#step_3_learn_how_stackbit_s_editor_works)
- [Step 4: Publish your site](#step_4_publish_your_site)
