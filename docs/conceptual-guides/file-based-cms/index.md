This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

File-Based CMS
==============

As explained in the [Site Preview](/docs/conceptual-guides/site-preview) conceptual guide, Stackbit shows your website's preview by cloning your site's repository and running the SSG development server. When your site's content is stored in files within your site's repository, any changes you make to your site's content via Stackbit are written back to your content files, committed, and pushed to the source repository.

<a href="#the_preview_branch" class="hash-link"><span class="icon-copy"></span></a>The `preview` branch
-------------------------------------------------------------------------------------------------------

To ensure that the changes you make to your site within Stackbit will not be immediately deployed and published by serverless deployment platform such as Netlify, Stackbit commits and pushes all content changes to a special `preview` branch. In other words, the `preview` branch stores the "unpublished" content of your site.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/dee8368ed5d604683232e6762fe9fad6/5f78c/git-commits.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 29.714285714285715%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwElEQVQY05XO3WrDMAyG4dz/je1gsMFgDAaFrW2ctKsd/yS29Uly1jA2Rs+qYz3S2xHg3DT5oK2td04HcIzJh1hKqZVE5A6sqkSU5jmmFLYTlZmJSFVvVkWVWSoUrCLaWuvWdbXWPTw+DePYm+Fjf/jcH47H3vuQ89byhwHOpboZSwURRHXDIcTnl9fT+TyMJ2PG3hhrHYBaK8A3eJqxlA3rD04pvb3vJu99iNa6r8slxJhzWZb8//NvtoBFRa7Z39zyXM63UeTwAAAAAElFTkSuQmCC&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/dee8368ed5d604683232e6762fe9fad6/8c557/git-commits.png" title="Git Commits" alt="Git Commits" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/dee8368ed5d604683232e6762fe9fad6/4edbd/git-commits.png  175w,
                                    /docs/static/dee8368ed5d604683232e6762fe9fad6/13ae7/git-commits.png  350w,
                                    /docs/static/dee8368ed5d604683232e6762fe9fad6/8c557/git-commits.png  700w,
                                    /docs/static/dee8368ed5d604683232e6762fe9fad6/e996b/git-commits.png 1050w,
                                    /docs/static/dee8368ed5d604683232e6762fe9fad6/2cefc/git-commits.png 1400w,
                                    /docs/static/dee8368ed5d604683232e6762fe9fad6/5f78c/git-commits.png 1606w
                                  " /></a></span>

Likewise, if you want to make changes to your site's code and see them in the preview, you will have to make them on the `preview` branch. As soon as you push new changes to the `preview` branch, Stackbit will receive a GitHub commit webhook and pull your changes. If your SSG has live-reload or HMR, the preview will be updated with new changes automatically.

When you decide to publish your site via Stackbit, Stackbit merges the changes from the `preview` branch to the `main` or `master` branch. If you have configured your serverless deployment platform to deploy the site as soon as new commits are pushed to these branches, then publishing your site via Stackbit will also deploy your live site.

The following diagram shows the flow described above.

![Preview Branch Diagram](/docs/253459844bd217295ea585bd9007dc5f/preview-branch-diagram.svg)

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [The preview branch](#the_preview_branch)












