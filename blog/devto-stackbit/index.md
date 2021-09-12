This app works best with JavaScript enabled.

<a href="/" class="masthead-logo"><img src="/images/logo_alt.svg" alt="Stackbit logo" width="133" height="20" /></a>

<span class="screen-reader-text">Show Menu</span><span class="masthead-menu-icon" aria-hidden="true"></span>

-   [Pricing](/pricing)
-   [Agencies](/agencies)
-   [Businesses](/businesses)
-   [Documentation](https://www.stackbit.com/docs/)
-   [Sign In](https://app.stackbit.com/)
-   <a href="https://app.stackbit.com/create" class="button-component button-component-theme-accent button-component-hollow"><span>Get Started</span></a>

Own Your Content, Broaden Your Audience
=======================================

Brian Rinaldi — October 22, 2019

The Dev.to and Stackbit integration gives developers an easy option to build a site with the benefits of the JAMStack and owning their own content while accessing the large audience of developers on Dev.to.

I have always been a firm believer that content authors should maintain ownership of their content - of course, this includes developers who blog and/or write tutorials. Back in May of this year, I wrote about the three options available to developers to publish their content, while maintaining ownership and avoiding any nasty subscription modals.

> As developers, we have really great options to post but avoid Medium.  
>   
> 1) Use <https://t.co/kAJXIGPncW> if you prefer to not manage your own site at all  
> 2) Use [@Netlify](https://twitter.com/Netlify?ref_src=twsrc%5Etfw) if you want to easily spin up a static site  
> 3) Use [@Netlify](https://twitter.com/Netlify?ref_src=twsrc%5Etfw) and repost to <https://t.co/kAJXIGPncW> &lt;= do this!
>
> — Brian Rinaldi (@remotesynth) [May 15, 2019](https://twitter.com/remotesynth/status/1128645546242080768?ref_src=twsrc%5Etfw)

[Dev.to](https://dev.to/) has been my favorite developer community site for years. The community on Dev.To is among the most welcoming, the team behind it is great, their site is open source and they have always supported contributors ability to own their own content. Plus, they have tens of thousands of members, meaning you can own your content while still getting the benefit of such a large community.

> Zach Leatherman also gave a great talk about [owning your content on social media](https://www.youtube.com/watch?v=X3SrZuH00GQ) at JAMStack*conf*sf last week, that I also recommend checking out.

Owning your own content on Dev.To
---------------------------------

Previously, this was done via two options:

1.  Manually add the `canonical_url` to the front matter of a contributed post. This solves the problem of duplicate content by pointing search engines that the URL of the original post. (You can read more about the [canonical URL here](https://yoast.com/rel-canonical/) if you're interested.)
2.  Use Dev.To's publish from RSS feed feature, which has the option for also allowing the RSS source to be the canonical URL.

    ![Dev.to RSS settings](/images/1571763047-rssdevto.png)

Obviously, your site could be anything that generates an RSS feed, but we know the [JAMStack](https://jamstack.org/) offers a ton of benefits like speed, security and, perhaps most importantly for developers considering a blog, free or really cheap hosting. The problem for some developers might have been that they were unfamiliar with the JAMStack and so a solution like Wordpress might make an easier start. However, tools like [Netlify CMS](https://www.netlifycms.org/) and [Stackbit](https://www.stackbit.com/) made it super easy to create and deploy a JAMStack site with just a few clicks.

But what if you already have existing content on Dev.to? Or what if you'd rather not even have to mess with posting to your JAMStack site and prefer just to use the tools Dev.to provides? There's now an even better way!

Publishing from Dev.to to JAMStack
----------------------------------

A few weeks ago, Dev.to and Stackbit [announced](https://dev.to/connecting-with-stackbit) a way to publish Dev.to content to a JAMStack site with just a few clicks, all while ensuring that you own your own content because it all gets placed into your own GitHub account.

1.  Go to Stackbit using [the dev.to flow](https://app.stackbit.com/create?ref=devto)
2.  Select a theme.
3.  Connect your dev.to account. You may also need to connect your GitHub and Netlify accounts if you have not already done so.
4.  There are no more steps. You're done. Go sip some coffee and enjoy your new site.

Here's [my Dev.to content on published to a blog](https://neat-yam-e14d8.netlify.com/). Honestly,I think it looks great out-of-the-box but I may want to customize the theme a bit more. Otherwise, the site is essentially ready to publish. The best part is that not only are your existing posts pulled into Dev.to, but any future posts will be as well. This will trigger a new build and publish your site automatically.

Owning your content doesn't require tons of effort
--------------------------------------------------

As I've shown, you have two really easy options available to you if you would like to own your own content but still take advantage of a large community of developers on Dev.to:

1.  You can publish your own site in a few clicks and syndicate to Dev.to via RSS;
2.  Or you can create your content on Dev.to and import it into GitHub and your own blog hosted on Netlify via Stackbit.

As an added bonus, you get to learn some JAMStack by digging into the generated code!

<span class="post-share-title">Share on:</span>

Tweet

Share













<!-- -->



<!-- -->








