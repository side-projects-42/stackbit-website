This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Adding a Favicon to Your Stackbit Gatsby Site
=============================================

A favicon is a small icon that will display typically in the tab next to the site's name within the browser, next to the bookmark if the page is bookmarked or on the shortcut if a user saves a shortcut to the site to the desktop of a mobile device. In order to create a favicon, it is best to have multiple versions of the image to match the various sizes needed on differing devices. There are sites that will help you create these such as [favicon.io](https://favicon.io). Let's walk through the steps.

1.  Start by uploading your image to favicon.io at <https://favicon.io/favicon-converter/>. This will automatically create the sizes you need. Click the "Download" button to download a zip file with all the images.
2.  Extract the images from the zip and place them in you site at `/static/images/favicon`. In Gatsby, anything in the static folder will be made accessible to your site as assets. You do not need the `/static` portion of the path when accessing them within your site.
3.  Open `/src/components/Layout.js` in your project and place the following HTML within the `<Helmet>` block, for instance, after the CSS stylesheet link.

<!-- -->

    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="/images/favicon/site.webmanifest"></link>

1.  We'll need to update the location of the images within the provided `/images/favicon/site.webmanifest` file. Open that file and replace the JSON with the follow code (note that you can change `name` and `short_name` to whatever suits your project):

<!-- -->

    {
      "name": "Azimuth",
      "short_name": "Azimuth",
      "icons": [{
        "src": "/images/favicon/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }, {
        "src": "/images/favicon/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }],
      "theme_color": "#ffffff",
      "background_color": "#ffffff",
      "display": "standalone"
    }

Now when you run `gatsby develop` from the command-line/terminal, you should see an icon like in the example below.

![a favicon in Chrome](/docs/images/favicon.png)

Did you find this page useful?
------------------------------





Jump to Section
---------------











