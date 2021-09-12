This app works best with JavaScript enabled.

# Deploying Jamstack sites to Azure

Artem Denysov — July 06, 2021

Today we are excited to announce that Stackbit users can now deploy their sites on their Microsoft Azure accounts.

For those of you who’d like to get started immediately, follow [this link](https://app.stackbit.com/create?deployment=azure) to connect your Microsoft Azure account and create a website quickly.

## Azure and Static Web Apps

[Azure](https://azure.microsoft.com/) is Microsoft’s cloud computing service. Developers use it for building and deploying all sorts of applications and services. Many larger organizations rely on their secure, global data centers for managing enterprise applications. But an increasing number of smaller teams are embracing the platform, especially ones with quick scale in mind.

Last week Microsoft officially released Azure Static Web Apps at their virtual [Code to Scale event](https://docs.microsoft.com/en-us/events/learntv/swa-cts-june-2021/?WT.mc_ID=swa-124587-memckenn). This announcement means that Microsoft users can now use Github CI/CD pipelines and their favorite development tools to deploy static resources and even trigger Azure API functions.

The fact that we can now deploy Jamstack sites to Azure is a great sign that more and more platforms are embracing this approach to websites. But it does require some hand wiring of service and a certain depth of technical know-how to get going.

This is why Stackbit makes it easy for Azure users to deploy their Jamstack sites to this application service without needing to touch a single configuration file. Just copy and paste an ID when you build your site with Stackbit and we can connect all the pieces together. Here is Stackbit’s CEO, [Ohad Eder-Pressman](https://twitter.com/ohadpr?s=20), presenting this integration at last week’s event.

## Managing Static Web Apps

There are two different ways to connect your Stackbit site with Azure. You can either let us create new resource groups for you, or you can deploy your site to a resource group that you have already created. A resource group is a container that holds related resources for an Azure solution. You can think of it as a space on the Azure platform with a URL where you can deploy files and trigger events.

If you want us to create new resources for you on Azure, all we need is your [Azure Active Directory Tenant ID](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) when you create a new site. This is easy to locate once you log in to Azure and select the Active Directory service. This is similar to how you log into [Github](https://github.com), [Netlify](https://netlify.com), or [Contentful](https://www.contentful.com/) to associate them with your Stackbit account.

![](https://lh6.googleusercontent.com/j4lxXu_VItc7DUqT6n38qMydKAgon9fygBz8yCDeJRaleb2Hq72AIuDzDGUMT1uOGacZ7wqtcLD-KHJuDyOUOPKSNwR3PAacPCP0JKxQHwTt0Z1tQCkqxrIxKZ4bB4eVx-cg3Mj0)

This saves you from logging into them each time you make a site and lets our platform allocate the needed resources when a new site is created.

This is a great option for:

- Independent developers
- Small teams
- Organizations that are creating multiple sites

The other approach is to use the [Stackbit Azure Marketplace app](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/stackbit1606600345290.stackbithq?tab=overview) to create a resource group preconfigured for working with Stackbit. After creating your Static Web App with our app, it will show you an Essentials menu with stats and a “Managed resource group ID”. Use this to only give Stackbit’s platform access to that one specific resource.

This is preferred by many:

- Development teams wanting to keep tight control of resource allocations
- Enterprise customers who have organizational resource management policies
- Agencies managing multiple applications across multiple Azure accounts

You can learn more about both options in our [documentation article](https://www.stackbit.com/docs/user-manual/services/#azure).

## More flexibility

We believe that developers should control their stacks and have the freedom to select any tools they wish. With this announcement, we are one step closer to that goal. We also want to celebrate the fact that Azure has released Static Web Apps, another sign that the Jamstack approach is gaining traction.

Azure users, to deploy your first Stackbit, start [here](http://app.stackbit.com/create?deployment=azure&theme=diy). And to our trusted dev community: What other deployment options and tools do you want to see integrated with Stackbit? [Drop us a line](https://stackbit.com/contact) and let us know.

<span class="post-share-title">Share on:</span>

Tweet

Share

<!-- -->

<!-- -->
