This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Edit and Commit Code Locally
============================

Try editing your project using Stackbit's Code Editor *and* your local code editor. View your changes instantly in Stackbit.

<a href="#edit_the_code_with_stackbit_s_code_editor" class="hash-link"><span class="icon-copy"></span></a>Edit the Code with Stackbit's Code Editor
---------------------------------------------------------------------------------------------------------------------------------------------------

The live preview in Stackbit is driven by the `preview` branch. When you save your Stackbit Code Editor changes, Stackbit makes a commit to the `preview` branch in Github.

1.  Click **Code** in the top nav.
2.  In the left panel, click **Code Editor**.
3.  Under the `src/css` directory, open the `main.scss` file.
4.  Add `.text-green { color: #2ea44f; }` to the file.
5.  Save your work *(`command` + `s`)* and close `main.scss`.
6.  Hover over the page title in the preview panel.
7.  Click **Code** in the bottom right of the highlight. This opens the `HeroSection.js` file and highlights the `H1` code responsible for rendering the title.
8.  Add `text-green` to the `H1`'s className.
9.  Save your work and watch the color of the title update.

<a href="#edit_the_code_with_your_local_code_editor" class="hash-link"><span class="icon-copy"></span></a>Edit the Code with Your Local Code Editor
---------------------------------------------------------------------------------------------------------------------------------------------------

Now let's edit the `preview` branch from your local development environment. After we commit the changes, we'll see it update in Stackbit.

### <a href="#clone_the_repo_to_your_local_ide" class="hash-link"><span class="icon-copy"></span></a>Clone the repo to your local IDE

1.  Open your local machine's command prompt and execute the following three commands, substituting your GitHub username for `YOUR_USERNAME`:

        git clone https://YOUR_USERNAME@github.com/YOUR_USERNAME/my-first-site.git
        cd my-first-site
        git checkout preview

### <a href="#change_the_title_s_color" class="hash-link"><span class="icon-copy"></span></a>Change the title's color

1.  Open the `my-first-site` directory in your local development editor.
2.  Click the `src` directory. Then the `css` directory. Then open the `main.css` file.
3.  Add `.text-purple { color: #800080; }` to the file. Save it.
4.  Click the `components` directory. The open the `HeroSection.js` file.
5.  In `HeroSection.js` add `text-green` to the `H1`'s className. Save it.

### <a href="#push_your_local_work_to_the_github" class="hash-link"><span class="icon-copy"></span></a>Push your local work to the Github

1.  In your command prompt, execute the following three commands:

        git add --all
        git commit -m "Color change"
        git push

2.  Navigate back to Stackbit. Close the Settings modal.
3.  Watch the color of the title change to purple.

  
  



















