This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Adding Analytics to Your Stackbit Gatsby Site
=============================================

Adding the Google Analytics (or any analytics script really) to a Stackbit site - Gatsby or not - is easy and doesn't require that you edit any code at all. Instead, we'll use a feature in Netlify called [snippet injection](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/). Here are the steps:

1.  Get the Google Analytics code for your site from Google

    ![Getting the Google Analytics code](/docs/images/google-analytics-code.png)

2.  In your site's Netlify dashboard, go to Settings &gt; Build & Deploy &gt; Post Processing and click the "Add Snippet" button.

    ![Netlify snippet inject](/docs/images/netlify-snippet-injection.png)

3.  Choose "before `</head>`", which is where Google suggests you place analytics code and then paste your analytics snippet into the provided text box. Hit save.

    ![Adding analytics snippet in Netlify](/docs/images/netlify-snippet-injection2.png)

Your site will now automatically have the analytics code injected on every page.

Did you find this page useful?
------------------------------





Jump to Section
---------------











