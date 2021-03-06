This app works best with JavaScript enabled.

- [Pricing](/pricing)
- [Agencies](/agencies)
- [Businesses](/businesses)
- [Documentation](https://www.stackbit.com/docs/)
- [Sign In](https://app.stackbit.com/)
- <a href="https://app.stackbit.com/create" class="button-component button-component-theme-accent button-component-hollow"><span>Get Started</span></a>

# Gating Content in JAMstack Sites

Brian Rinaldi — November 14, 2019

A step-by-step guide to adding registration and login to your JAMstack site and requiring login for specific sections of content on a JAMstack site.

It's a common requirement for a site to have a section that is restricted to members or even specific types of members. In order to implement this, you need a way for users to register and sign in, a way to assign roles to a user and a way to prevent/grant them access to specific content. But, how can you accomplish that when you're working with static assets as in a JAMstack site? In this tutorial, we're going to look at how to do exactly that.

## The Tools We'll Use

While there are numerous ways to solve this problem, in this example we'll be leveraging a number of solutions that depend on Netlify.

- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) - this is what will manage our site users. We'll use the default functionality, although there are ways to [integrate external authentication providers via OAuth](https://docs.netlify.com/visitor-access/oauth-provider-tokens/#setup-and-settings). If you'd like to know more about how it works, you can find the [docs for Identity here](https://docs.netlify.com/visitor-access/identity/).
- [Netlify Identity Widget](https://identity.netlify.com/) - this tool makes it easy to add Netlify Identity login functionality to your site's UI without needing configuration. The GitHub project for the widget is [available here](https://github.com/netlify/netlify-identity-widget).
- [Netlify Functions](https://www.netlify.com/products/functions/) - these are serverless functions (using AWS Lambda) that Netlify provides an easy way to build, test and deploy as part of your project.

The example I'll show was generated using [Stackbit](https://www.stackbit.com/), which offers a quick and easy way to build CMS-connected JAMstack sites (full disclosure: I am the developer advocate for Stackbit). I chose [Hugo](https://gohugo.io/) as my static site generator and [Exto](https://github.com/stackbithq/stackbit-theme-exto) as my theme, but neither of these impact how restricted content access is implemented.

*Note: It's important to point out that both Netlify Identity and Functions have usage caps, after which they can incur charges. In addition, in order to prevent specific users from accessing sections of your site, they need to be assigned a role. Role-based access controls are currently limited to Netlify's Business plan. You can check out the \*\[*full feature pricing grid*\](<https://www.netlify.com/pricing/#features>)* for Netlify for exact usage limits and costs.\*

## Implementing Identity

To reduce the scope of this tutorial and simplify our sample project, we're going to make some assumptions. First, you already have a site (in my case, generated by [Stackbit](https://www.stackbit.com/) with whatever theme you choose) with a section of content that exists under a subdirectory of the site that you want to restrict (for instance, in my case I'll be restricting the blog posts section which are published under `/posts/`).

### Enable Identity for Your Project

The first step is to enable Netlify Identity via the "Identity" menu item within the Netlify dashboard or going to "Settings" and then "Identity".

![Enable identity](/images/1573736223-enable-identity.png)

If you go through the main Identity menu item, you'll want to click "Settings and usage" to edit settings once it is enabled before continuing. Identity has a lot of customization available, from open to invite only registrations, to external OAuth providers, to webhooks, to the templates of any emails that the registration process might send.

In the case of this tutorial (and to make local testing easier), I disabled the confirmation step. This would send the user an email upon registration and require that they click a link to confirm their email/account before they can continue. This is definitely a good feature for a real world site, but makes testing a simple demo a bit more tedious.

![Disable confirmation](/images/1573736239-confirmation-not-required.png)

For a real site, you'll definitely want to return here later and at least customize the email communications, but for now, let's start adding the ability to sign up/log in via our site.

### Add the Identity Widget to Log In

The [Netlify Identity Widget](https://identity.netlify.com/) is an open source tool from Netlify that makes it easy to add a login/signup to a site that is using Netlify Identity. The end result will look something like this:

![](/images/netlify%20identity%20signup%20login.png)

The first thing we need to do is include the script in the head section of the HTML. I modified `layouts/baseof.html` in my Exto template to add the script.

    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

Now let's add the login button that will open the model window allowing me to either choose sign up or log in. In my project, I added the below code to `layouts/partials/header.html`. It uses the `button` layout seen in the animated gif above.

    <div data-netlify-identity-button></div>

At this point, you should be able to sign up and log into your site - even locally, if you're using `netlify dev` via the [Netlify CLI](https://github.com/netlify/cli). Next, let's add the widget to one more place by creating a page that we'll redirect users to who are not signed in but attempt to access a restricted page. I created a page in my project under `content/gated.md` (though your location may differ depending on which static site generator you use). The only content on the page is the login button, but this time using the `menu` layout.

    ---
    title: Registration Required
    subtitle: The content you have requested requires a login.
    layout: page
    ---

    <div data-netlify-identity-menu></div>

The resulting page looks like this:

![Gated redirect page](/images/1573736251-gated-page.png)

*Note: In my examples, I'm using the same CSS that the \*\[*Identity widget sample page*\](<https://identity.netlify.com/>)* uses. Without copying that CSS, your buttons will appear unstyled. Unfortunately, if there is a place where this CSS file is available to be easily included, I am not aware of it.\*

### Create a Function to Assign a Role to New Users

Our users can now register, log in and log out, but there's one problem. In order to implement our redirect, the users will need to be assigned a role. By default, users are not assigned a role in Netlify Identity, though one can be manually assigned. Clearly, my site is going to be hugely popular, so this would be difficult to manage.

Thankfully, [Netlify Functions](https://www.netlify.com/products/functions/) offer us a way to create a serverless function that will make this happen automatically. The benefit of Netlify Functions is that they can be deployed as part of my project code and can even be easily tested locally using `netlify dev`.

The first thing that we need to do is define where our functions will live. Add the following line under the `[build]` heading within `netlify.toml`. This says that our functions will be located in the `/lambda` folder (you're free to choose a different folder name if you prefer).

    functions = "./lambda"

Next create the `lambda` folder and inside of it add a file named `identity-validate.js`, which will contain the code of our function. It's important to note that the name here is critical. By naming the file with one of the [available triggers](https://docs.netlify.com/functions/trigger-on-events/#available-triggers), it will automatically be triggered on that event. The `identity-validate` event is triggered when a user tries to sign up via Identity.

Now let's add our function code.

*Note: The code for my serverless function is taken from \*\[*this article*\](<https://www.netlify.com/blog/2019/02/21/the-role-of-roles-and-how-to-set-them-in-netlify-identity/>)* by Divya Sasidharan. The only thing I needed to change was the role(s) being assigned.\*

    exports.handler = function (event, context, callback) {
        const data = JSON.parse(event.body);
        const { user } = data;

        const responseBody = {
            app_metadata: {
                roles: ['member'],
                my_user_info: 'this is some user info'
            },
            user_metadata: {
                ...user.user_metadata, // append current user metadata
                custom_data_from_function: 'hurray this is some extra metadata'
            }
        };
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(responseBody)
        });
    };

Once this function is in place, any user who signs up will now automatically be assigned to the `member` role. You can change that role or even assign them multiple roles if your use case requires it.

## Adding the Redirect

Now that our users can sign up and are assigned a role, it's time to implement role based redirects. There are two ways to implement redirects in Netlify: via a `_redirects` file or via the `netlify.toml` file. The syntax for writng a `_redirects` file is simple, but you'll need to be careful where you place the file as it differs depending on the static site generator (basically, it needs to be in the output folder). The benefit of using `netlify.toml` is that you don't need to worry about that, but the syntax is a little tougher and more verbose.

> Note: The [Netlify playground](https://play.netlify.com/redirects) offers a good way to test these out. While it only accepts the `_redirects` format, it will output the `netlify.toml` format for you.

We'll need two redirects. First, we need one that "redirects" anyone with the "member" role to their post (I say redirect, but basically it is just allowing them access). The second will take everyone else (i.e. anyone who is not logged in or does not have a "member" role) to the login page we created earlier (`/gated`).

    [[redirects]]
    from = "/posts/*"
    to = "/posts/:splat"
    status = 200
    force = true
    conditions = {Role = ["member"]}
    [[redirects]]
    from = "/posts/*"
    to = "/gated/"
    status = 404
    force = true

All the pieces are now in place, so...

## Let's Give This a Try

A user can access the blog list, but will be redirected when they click on an actual post. Once logged in, they can get access to the content of the post.

Keep in mind, all this is still happening on a site with completely static assets.

## Where to Go From Here

Obviously, this was a very simplified example that can be improved upon. For example, it would be great if the user was redirected back to their content after signing in or, instead of redirecting to the login page, it redirected to a version of the same URL that triggered the modal. Nonetheless, with minimal effort and code, we still have a fully functioning user registration and login and gated content restrictions.

If you'd like to go further, I recommend the following resources:

- [Getting Started with JWT and Identity](https://www.netlify.com/blog/2018/01/23/getting-started-with-jwt-and-identity/) by Gerald Onyango
- [The role of roles and how to set them in Netlify Identity](https://www.netlify.com/blog/2019/02/21/the-role-of-roles-and-how-to-set-them-in-netlify-identity/) by Divya Sasidharan
- [Role-based access control with JWT documentation](https://docs.netlify.com/visitor-access/role-based-access-control/#create-users-and-set-roles)

<span class="post-share-title">Share on:</span>

Tweet

Share

<!-- -->

<!-- -->
