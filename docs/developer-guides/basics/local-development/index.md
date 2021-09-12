This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Local Development

In this section, we'll cover:

- [Overview](#overview)
- [Executing the Commands for Git CMS Projects](#executing_the_commands_for_git_cms_projects)
- [Executing the Commands for API-based CMS Projects](#executing_the_commands_for_api_based_cms_projects)
- [Authenticating GitHub via the Command Line with 2FA](#authenticating_github_via_the_command_line_with_2fa)
- [Working with Git CMS Projects](#working_with_git_cms_projects)
- [Troubleshooting](#troubleshooting)

## <a href="#overview" class="hash-link"><span class="icon-copy"></span></a>Overview

Every Jamstack site built with Stackbit can be modified, customized and tested locally. You have full access to the code. Local development just requires some basic set up steps - all of which are provided directly from within Stackbit's studio editing environment.

If you know where your code repository is located, begin by cloning it. If you're not sure, you can find specific instructions following [the studio guide](/docs/studio-guides/accessing-code).

## <a href="#executing_the_commands_for_git_cms_projects" class="hash-link"><span class="icon-copy"></span></a>Executing the Commands for Git CMS Projects

Projects for which you have chosen Git as their CMS backend will have a five step process for installing your site locally that looks similar the following (note that your project's specific instructions will include your username and project repo):

    git clone git@github.com:username/repo.git
    cd repo
    git checkout preview
    npm install
    npm run start

If you have chosen to have your GitHub repository private, you will need to enter your username and password. If your account has two-factor authentication enabled, please see the additional instructions below.

Please note that for Git CMS projects, the commands will check out the `preview` branch. Stackbit's studio editing environment uses this branch to allow for drafts and live previews of content without needing to publish them first. In order to see your changes in the Stackbit editor, they will need to exist on the `preview` branch. Once you are satisfied with your code changes, you will need to merge your changes into the `master` branch.

**Warning: Do not delete the `preview` branch after merging. The Studio requires it to exists in order to function as expected.** If you have deleted it, you can simply recreate it as a new branch from `master` and all will work fine.

## <a href="#executing_the_commands_for_api_based_cms_projects" class="hash-link"><span class="icon-copy"></span></a>Executing the Commands for API-based CMS Projects

For projects that use an API-based CMS such as Sanity or Contentful, the commands will look similar to the following (note that your project's specific instructions will include your username, project repository and API keys):

    git clone git@github.com:username/repo.git
    cd repo
    export STACKBIT_API_KEY=stackbit_api_key
    npm install
    npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5ef53cfe38042b001bf8e48c
    npm run develop

If you have chosen to have your GitHub repository private, you will need to enter your username and password. If your account has two-factor authentication enabled, please see the additional instructions below.

Stackbit pull is the process that syncronizes changes made in the CMS with your project. When you make changes to your content either in Stackbit's editor or within the CMS itself, you'll want to rerun the `npx @stackbit/stackbit-pull` line from your project's instructions each time you want to pull the latest content changes into your local project.

## <a href="#authenticating_github_via_the_command_line_with_2fa" class="hash-link"><span class="icon-copy"></span></a>Authenticating GitHub via the Command Line with 2FA

It is generally recommended that you have two-factor authentication enabled on your GitHub account for your own security. However, if you do have it enabled, the flow for authenticating via the command line will differ. You'll need to create a personal access token and use this instead of your password. You can see the [full instructions in GitHub's documentation](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

## <a href="#working_with_git_cms_projects" class="hash-link"><span class="icon-copy"></span></a>Working with Git CMS Projects

Stackbit offers the option of choosing git as a file-based CMS option. Even though the content is stored as Markdown and YAML files in your GitHub repository, you still have the full live editing and previewing functionality in the Stackbit studio. However, when editing the site locally it is important to know how this works so that your preview does not get out of sync with your live site.

To enable live editing and previewing in the studio, Stackbit creates two branches in GitHub when it generates your site:

- The `master` branch is the branch that represents your live site. This is the branch that deploys to Netlify.
- The `preview` branch is the branch that runs the preview that you see in Stackbit studio. Changes made to this branch are pushed to `master` whenever you publish within Stackbit studio.

If you clone your repository locally and work on `master`, you may notice that your preview in studio does not reflect these changes. To avoid this, you can do one of the following:

- Instead clone the `preview` branch locally and make your code changes there. These changes will be reflected in the studio preview and will be pushed live (i.e. pushed to `master`) when you publish in Stackbit studio.
- Make your changes in `master`. When you are done, switch to the `preview` branch and run `git merge master`. This will merge all your changes from `master` to the `preview` branch so that they are reflected in the studio preview.

## <a href="#troubleshooting" class="hash-link"><span class="icon-copy"></span></a>Troubleshooting

Note to HTTPS users, commands are written using SSH format. If you want to use HTTPS in your commands, please consult [Github documentation](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

Note to Windows users, all instructions are written and tested against Unix and Mac. We suggest Windows users make use of the [Windows Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

Note to Sanity CMS users, if you run `sanity upgrade` locally you also need to run `sanity build` and commit the resulting changes. There can exist a state where Sanity upgrades but the needed components in the code do not, resulting in the Studio not loading your site. Running `sanity build` should solve this and is a best practice when modifying your Sanity site locally.

## Did you find this page useful?

## Jump to Section

- [Overview](#overview)
- [Executing the Commands for Git CMS Projects](#executing_the_commands_for_git_cms_projects)
- [Executing the Commands for API-based CMS Projects](#executing_the_commands_for_api_based_cms_projects)
- [Authenticating GitHub via the Command Line with 2FA](#authenticating_github_via_the_command_line_with_2fa)
- [Working with Git CMS Projects](#working_with_git_cms_projects)
- [Troubleshooting](#troubleshooting)
