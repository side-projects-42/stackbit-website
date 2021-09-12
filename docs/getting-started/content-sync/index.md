This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Content Synchronization with GitHub
===================================

Your content is stored in Markdown files within the `content` directory of your repository. Let's learn how it works.

<a href="#editing_in_stackbit_pushes_code_to_github" class="hash-link"><span class="icon-copy"></span></a>Editing in Stackbit Pushes Code to GitHub
---------------------------------------------------------------------------------------------------------------------------------------------------

A change in Stackbit's visual editor triggers a commit to the `preview` branch in your repository. To test it out:

1.  Click the **gear icon** in the top left of the Studio.
2.  Click **Open** next to Github.
3.  Place Stackbit and Github side by side.
4.  In Github, click **Content**, then **Pages**, and finally `index.md`.
5.  Click the **Master** button. Select the `preview` branch.
6.  In Stackbit, edit the hero title.
7.  Refresh the Github page. Watch it update.

<a href="#code_commits_pushed_to_github_update_content_in_stackbit" class="hash-link"><span class="icon-copy"></span></a>Code Commits Pushed to Github Update Content in Stackbit
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The sync we showed above goes both ways. A commit to the `preview` branch of your repository updates Stackbit's visual editor. Let's test that out.

1.  Start in the `./content/pages/index.md` file in the Github repository.
2.  Click the edit button.
3.  Change the `title` under the `hero_section`.
4.  Scroll down and add a description like **Updated title**.
5.  Click **Commit changes**.
6.  Watch the new title show up in Stackbit.

💡 **Reminder:** Make sure your commit is to the `preview` branch. If you're using a local development environment, make sure to `push` the changes up to your remote repository.

  
  

-   **Previous Step:** [Live & Shareable Preview](/docs/getting-started/live-previews/)
-   **Next Step:** [Edit and Commit Code](/docs/getting-started/edit-code/)

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Editing in Stackbit Pushes Code to GitHub](#editing_in_stackbit_pushes_code_to_github)
-   [Code Commits Pushed to Github Update Content in Stackbit](#code_commits_pushed_to_github_update_content_in_stackbit)











