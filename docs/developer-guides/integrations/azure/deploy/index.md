This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Deploy to Azure
===============

Stackbit users have the option to deploy their Jamstack sites to Microsoft Azure. We have partnered with Microsoft to leverage their [Static Web Apps service](https://azure.microsoft.com/en-us/services/app-service/static/), so those with Azure accounts can easily integrate and deploy their sites seamlessly.

If you want to deploy your new site to Azure but don’t have an account yet, [sign up for one](https://azure.microsoft.com/en-us/free/?utm=stackbit) before proceeding.

There are two different paths available to users wishing to deploy to Azure:

1.  Add your [Azure Active Directory Tenant ID](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) to your Stackbit account.
2.  Use [Stackbit’s Azure Marketplace app](https://portal.azure.com/#create/stackbit1606600345290.stackbithqstackbit) to create a new Azure Managed Resource Group. You’ll enter your Tenant ID and Managed Resource Group on Stackbit when creating your site.

Both paths will allow Stackbit to manage resources on your Azure account, and we will explain the difference between them in this document.

<a href="#option_1_add_your_azure_tenant_id_to_your_stackbit_account" class="hash-link"><span class="icon-copy"></span></a>Option 1: Add Your Azure Tenant ID to Your Stackbit Account
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Azure provides a way to authenticate into a user’s account and allow external services to manage and create new resources. Stackbit uses this approach with GitHub’s service, for example. Our platform can create new GitHub repositories on your behalf in your account and connect them to your private repositories. Another example is Netlify, where once you claim your account when building sites via Stackbit, the platform can automatically manage the services that deploy your site on their platform.

On Azure, this is called your [Active Directory Tenant ID](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant), (AD Tenant ID).

That is the preferred method of authentication if you are working on your own, as a part of a small team, or do not have an organizational resource management policy to follow. It will allow Stackbit to create new [Resource Groups for Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) on Azure on your behalf. You don’t have to worry about overprovisioning. We abide by the policy limits of Azure, the same way that we do for services like Contentful. We will alert you when you are at capacity and prevent you from creating more sites than your Azure plan allows.

### <a href="#find_your_tenant_id" class="hash-link"><span class="icon-copy"></span></a>Find Your Tenant ID

To find the Azure AD Tenant ID for your account, log into Azure [https://portal.azure.com/\#allservices.](https://portal.azure.com/#allservices)

![Microsoft Azure Active all services menu](/docs/images/azure-deployment-1.png)

From here, select the Azure Active Directory, which has a little blue pyramid icon (second row, second from the left). That will drop you into your [Default Directory Overview](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview)

![Azure Default Directory menu](/docs/images/azure-deployment-2.png)

Under the “Tenant information” card, you will find your Tenant ID. Click on the blue copy icon to copy this ID to your clipboard.

### <a href="#create_a_new_site_on_stackbit" class="hash-link"><span class="icon-copy"></span></a>Create a New Site on Stackbit

Now, create a new site on Stackbit using the following link:

[https://app.stackbit.com/create?deployment=azure](http://app.stackbit.com/create?deployment=azure&theme=diy)

Once on the Stackbit Site Builder page, select your theme, static site generator, and headless CMS as you usually would. In the Azure card, paste the Tenant ID you found in the previous steps and hit ‘Connect.’

![Stackbit Site Builder showing Azure Tenant ID card](/docs/images/azure-deployment-4.png)

That will bring you to an authentication page from Microsoft. Accept the terms, and it will redirect you back to the Site Builder.

For the last step, hit the ‘Create Site’ button, and in a few moments, your site will be ready to edit in the Studio and deployed on Azure. Under the hood, Stackbit will provision the needed Static Web Apps Resource Group and configure it to deploy your new Jamstack site.

When you publish your site or page in Stackbit Studio, it will deploy it on Azure in your newly -created resource group.

Stackbit will store this Tenant ID, which means the next time you create a site using [https://app.stackbit.com/create?deployment=azure](https://app.stackbit.com/create?deployment=azure%5D) you will not need to add it, and the platform can simply deploy the new resources automatically.

<a href="#option_2_use_the_stackbit_azure_marketplace_app" class="hash-link"><span class="icon-copy"></span></a>Option 2: Use the [Stackbit Azure Marketplace App](https://portal.azure.com/#create/stackbit1606600345290.stackbithqstackbit)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Azure provides a way to authenticate into a specific Resource Group generated by a user. This route allows external services to connect and trigger actions inside the resource but not create or manage other resources.

That is the preferred method for developers who want more control over their resource usage, enterprise customers with organizational resource management policies, and agencies managing multiple applications across multiple Azure accounts.

### <a href="#the_stackbit_azure_marketplace_app" class="hash-link"><span class="icon-copy"></span></a>The Stackbit Azure Marketplace App

To make it easy to create a new Azure Managed Resource Group for Static Web Apps, we have created the [Stackbit Azure Marketplace App](https://portal.azure.com/#create/stackbit1606600345290.stackbithqstackbit). Users can find this by searching for ‘Stackbit’ in the Azure Marketplace, which can be [found through their portal site](https://portal.azure.com/). You can also get to the [app directly by clicking here](https://portal.azure.com/#create/stackbit1606600345290.stackbithqstackbit)

![The Stackbit Azure Marketplace App](/docs/images/azure-deployment-5.png)

After pressing “Create,” you need to select or create a resource group and define the application name,

![The Stackbit Azure Marketplace App Basics](/docs/images/azure-deployment-6.png)

then agree to the terms and press “Create.”

![The Stackbit Azure Marketplace App Review And Create](/docs/images/azure-deployment-7.png)

After the application is ready, go to the resource to check it out.

![The Stackbit Azure Marketplace App Post Deploy](/docs/images/azure-deployment-9.png)

On the created Managed Application page you can find information about the Stackbit application. In the Resource group, a single static index.html placeholder page was deployed. It contains some useful information about Stackbit. At the top of the page, you will find your Managed Resource Group ID. You’ll need it for the next step.

![The Stackbit Azure Installed Managed Application Page](/docs/images/azure-deployment-3.png)

Visit the [Stackbit Site Builder](https://app.stackbit.com/create?deployment=azure&utm_source=marketplace_app&utm_medium=referral) to create a new site.

After selecting your theme, static site generator, and headless CMS, you will need to paste your Tenant ID and Managed Resource Group ID into the Azure card. The Tenant ID is needed to verify that the user has access to the relevant resource group.

![The Stackbit Summary Page Azure Deployment Target](/docs/images/azure-deployment-8.png)

When you hit “Create Site,” it will deploy your new site to your specified Manages Resource Group.

When you publish your content changes in Stackbit Studio, it will deploy on your Azure website. Congratulations!

If you run into issues or unexpected behavior, [please let us know](https://www.stackbit.com/support) and we’ll be happy to help.

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Option 1: Add Your Azure Tenant ID to Your Stackbit Account](#option_1_add_your_azure_tenant_id_to_your_stackbit_account)
    -   [Find Your Tenant ID](#find_your_tenant_id)
    -   [Create a New Site on Stackbit](#create_a_new_site_on_stackbit)
-   [Option 2: Use the Stackbit Azure Marketplace App](#option_2_use_the_stackbit_azure_marketplace_app)
    -   [The Stackbit Azure Marketplace App](#the_stackbit_azure_marketplace_app)











