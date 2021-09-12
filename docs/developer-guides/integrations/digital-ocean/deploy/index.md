This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Deploy to DigitalOcean
======================

Stackbit users are able to deploy their Jamstack site to multiple platforms, including [DigitalOcean](https://www.digitalocean.com/). Stackbit's partnership with DigitalOcean allows users to use [DigitalOcean’s App Platform](https://www.digitalocean.com/products/app-platform) for deploying their static sites using their DigitalOcean accounts.

<a href="#pre_requisites" class="hash-link"><span class="icon-copy"></span></a>Pre-requisites
---------------------------------------------------------------------------------------------

To deploy a Jamstack site created with Stackbit to DigitalOcean, you will need:

-   A Stackbit account connected to GitHub. You can [create one for free here](https://app.stackbit.com/register?redirect=%2Fcreate) if you don’t have one.
-   A DigitalOcean account. You can [sign up here](https://cloud.digitalocean.com/registrations/new) if you don’t have one. You will also need to install the DigitalOcean GitHub application [DigitalOcean Github Application](https://cloud.digitalocean.com/apps/github/install).

<a href="#step_1_create_a_site_with_stackbit" class="hash-link"><span class="icon-copy"></span></a>Step 1: Create a site with Stackbit
--------------------------------------------------------------------------------------------------------------------------------------

To [create a site with Stackbit](https://app.stackbit.com/create?deployment=digitalocean) and deploy it to DigitalOcean you need to first log into your Stackbit account, create a new project, and change the deployment option to DigitalOcean.

<a href="#step_2_digitalocean_authorization" class="hash-link"><span class="icon-copy"></span></a>Step 2: DigitalOcean authorization
------------------------------------------------------------------------------------------------------------------------------------

Click the ‘Connect’ button.

![Stackbit Summary Page. DigitalOcean connection](/docs/images/digitalocean-deployment-stackbit-1.png)

You will be redirected to the DigitalOcean Authorization page where you’ll be prompted to allow Stackbit to access your DigitialOcean account.

![Stackbit Authentication with DigitalOcean](/docs/images/digitalocean-deployment-stackbit-authorization.png)

<a href="#step_3_install_digitalocean_s_github_app" class="hash-link"><span class="icon-copy"></span></a>Step 3: Install DigitalOcean’s GitHub app
--------------------------------------------------------------------------------------------------------------------------------------------------

After connecting your DigitalOcean account with Stackbit, make sure you have the [DigitalOcean’s Github Application](https://cloud.digitalocean.com/apps/github/install) installed.

You can install it by clicking the “Install” button or just go [here](https://cloud.digitalocean.com/apps/github/install).

![Stackbit Summary Page. DigitalOcean connection. Install Github Application](/docs/images/digitalocean-deployment-stackbit-2.png)

Then you will be redirected to a GitHub page to accept the installation.

![DigitalOcean GitHub Application Installation Confirmation](/docs/images/digitalocean-deployment-stackbit-3.png)

<a href="#step_4_finish_creating_your_site" class="hash-link"><span class="icon-copy"></span></a>Step 4: Finish creating your site
----------------------------------------------------------------------------------------------------------------------------------

Once you’ve installed DigitalOcean’s Github Application, you will be redirected to the DigitalOcean page. Return to the Stackbit Summary Page and click the “Create Site” button.

![Stackbit Summary Page. Create Site and Deploy to DigitalOcean](/docs/images/digitalocean-deployment-stackbit-4.png)

In approximately 60 seconds, you will have your site deployed to DigitalOcean and enabled with [Stackbit Studio’s](https://www.stackbit.com/blog/announcing-stackbit-studio/) capabilities to manage your site.

![Stackbit Summary Page. Create Site and Deploy to DigitalOcean](/docs/images/digitalocean-deployment-stackbit-5.png)

### <a href="#caveats" class="hash-link"><span class="icon-copy"></span></a>Caveats

1.  Make sure sure you have connected your Stackbit account to GitHub by installing Stackbit’s Github Application. It’s easy to detect if you don’t have it installed; Stackbit will ask you via the interface.

> Note: In order to avoid mismatches in permissions on GitHub and deploy your site successfully, make sure you have installed both the DigitalOcean and the Stackbit GitHub applications.

![Stackbit Summary Page. Install Stackbit GitHub Application](/docs/images/digitalocean-deployment-stackbit-6.png)

1.  Right now we support only Git CMS as an option. We are aiming to add support for additional CMS options soon.

![Stackbit CMS selection Page](/docs/images/digitalocean-deployment-stackbit-7.png)

Enjoy!

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Pre-requisites](#pre_requisites)
-   [Step 1: Create a site with Stackbit](#step_1_create_a_site_with_stackbit)
-   [Step 2: DigitalOcean authorization](#step_2_digitalocean_authorization)
-   [Step 3: Install DigitalOcean’s GitHub app](#step_3_install_digitalocean_s_github_app)
-   [Step 4: Finish creating your site](#step_4_finish_creating_your_site)
    -   [Caveats](#caveats)











