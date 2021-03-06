This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Site Preview

The preview of your site in Stackbit is generated by the development server of your static-site-generator such as Gatsby or Jekyll. Because the preview is served by the SSG development server, any changes to site's content and code are immediately reflected in the preview. To show you the preview Stackbit runs the development server of your SSG and routes the site pages to your browser.

## <a href="#running_preview" class="hash-link"><span class="icon-copy"></span></a>Running Preview

Stackbit runs the following steps to show you the preview of your site:

1.  It clones your site's repository
2.  It checks-out the `preview` branch
3.  It installs your site dependencies depending on your static site generator (e.g., `npm install` for Node based SSGs such as Gatsby and Next.js, and `bundle install` for Jekyll)
4.  It runs your static site generator's development server (e.g.: `gatsby develop` for Gatsby, and `bundle exec jekyll serve` for Jekyll).
5.  It routes any page requests made from your browser to SSG's development server and returns responses back to your browser, as if you are developing your site locally on your local machine.

For example, suppose your site uses [Gatsby](https://www.gatsbyjs.com/). In that case, after cloning your repository, checking out the `preview` branch, and installing dependencies, Stackbit executes `gatsby develop` in its preview-server to start Gatsby's development server and then routes page requests from your browser to that development server running internally on `http://localhost`.

![Site Preview Diagram](/docs/349a05b4d26af038ba9a38ce8751bfbf/site-preview-diagram.svg)

If your site uses [Hugo](https://gohugo.io/), Stackbit executes `hugo server` and routes page requests to Hugo's development server running internally on `http://localhost`.

You can see the logs of how Stackbit pulls your repository, installs dependencies, and runs your SSG's development server by clicking on the "**Logs**" button in the "Advanced Tools" bottom bar:

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/563ad97c3fc1f052765675e3475c3e5f/c83ae/hugo-logs.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 43.99999999999999%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLElEQVQoz42R626EIBSEfRnrKiKgqNzkJuquq7bv/zQte2v/NG3yhZycZMicmaRljquJ9pbQoe5ML0PdGWUvALE0r9+K5jcyQJOWRzGTQZlFu7XpTQ67HHYA9QAxgHl8n5SYF1V/H05lmyiz+Gkf50O7lQ/RQlULSATEvMQ8DhEOcaSqJUA9JHHIYZcIPdvxOs6H8as0C2UOIPbyluZN+sNq+r2PFyXSLHbcxvlwYXPTLs0CicgA/Q+J1IsNm58PG67ar6iRrzyy4i+x0Iu52fbTbsOm7HlwF6YCZa4XY91q1ChMVQ67DNBT2d55iJVZ3LSH87ufjxibX6fzh9Rzx53Qc8t9yx2mA2oUJBxTRW7fPaq65c4qIiER5bOYDNAcdkXV32t7HfKz5C/xJyPRbvNtAUNcAAAAAElFTkSuQmCC&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/563ad97c3fc1f052765675e3475c3e5f/8c557/hugo-logs.png" title="Hugo Logs" alt="Hugo Logs" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/563ad97c3fc1f052765675e3475c3e5f/4edbd/hugo-logs.png  175w,
                                    /docs/static/563ad97c3fc1f052765675e3475c3e5f/13ae7/hugo-logs.png  350w,
                                    /docs/static/563ad97c3fc1f052765675e3475c3e5f/8c557/hugo-logs.png  700w,
                                    /docs/static/563ad97c3fc1f052765675e3475c3e5f/e996b/hugo-logs.png 1050w,
                                    /docs/static/563ad97c3fc1f052765675e3475c3e5f/c83ae/hugo-logs.png 1180w
                                  " /></a></span>

## <a href="#preview_updates" class="hash-link"><span class="icon-copy"></span></a>Preview Updates

Because the preview is served by the SSG development server, any changes to site's content and code are immediately reflected in the preview.

Your SSG's development server should listen to content changes and respond to them by refreshing any opened browser sessions via [live-reload](http://livereload.com/) or [HMR](https://webpack.js.org/concepts/hot-module-replacement/). Most of the static-site-generators have these functionalities enabled by default, so you don???t have to do anything.

Due to the nature of static site generators and how their development server work, any changes made to the code, or the content are immediately picked up by the SSG and reflected in the browser.

Of course, in order for Stackbit to show you the preview of your site, your SSG's development server must work without crashing.

## <a href="#publishing_changes" class="hash-link"><span class="icon-copy"></span></a>Publishing Changes

When you publish your site, Stackbit merges the `preview` branch to your `master` branch.

**Note:** If you imported an existing site via the import flow, the `preview` and the `master` branches might have different names. The branch you have specified as your base branch will be treated as the `master` branch (even if it isn't called `master`) and will be used as the starting point for the new `preview` branch. If the name `preview` is already taken, the new branch will be suffixed with a short hash `preview-qwerty`.

Changing the branch where `preview` or `master` point to can't be done from the UI at the moment. However, if you happen to need to change this, [please let us know](https://www.stackbit.com/support) and we'll be happy to help you. Also, [you can learn more about how the preview branch works in file-based CMS here](/docs/conceptual-guides/file-based-cms/#the_preview_branch).

## Did you find this page useful?

## Jump to Section

- [Running Preview](#running_preview)
- [Preview Updates](#preview_updates)
- [Publishing Changes](#publishing_changes)
