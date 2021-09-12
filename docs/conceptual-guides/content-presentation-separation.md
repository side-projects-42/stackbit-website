This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Separating Content from Presentation
====================================

Back in the days, when everyone talked about [separating content from presentation](https://en.wikipedia.org/wiki/Separation_of_content_and_presentation), they usually meant separating HTML (content) from CSS (presentation). Some came up with ideas for separation between [content, structure, and presentation](https://alistapart.com/article/separationdilemma/). All that is still correct, but to make the content truly separated from the presentation, it should be separated from its surrounding HTML entirely.

Having the content separated from its presentation, which can be a React component or a Liquid template, will make your website much more flexible for editing. And with the use of headless-CMS driving the content, or storing the content in flat files, will allow your website editors and marketers to edit your website with ease. Stackbit encourages this concept as its editor is built around this idea.

Let's look at the following example. Assume your site is written in React and has a Post component that looks like this:

    export default function Post(props) {
      return (
        <article>
          <h1>Post Title</h1>
          <time datetime="2021-03-16">Match 16th 2021</time>
          <div>
            <h2>Post Subtitle</h2>
            <img src="/images/post-image.png" alt="Post Image"/>
            <p>
              <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque felis imperdiet proin fermentum leo vel orci.
              Consectetur adipiscing elit duis tristique sollicitudin.
            </p>
          </div>
        </article>
      );
    }

Here, we have the post content hard-coded into the component. This makes it impossible for your marketing team to edit this post's content without opening and changing the code. Moreover, if your editors need to update an image, add another subtitle, or make some text bold, they need to learn HTML.

Let's improve this example by taking out the content into a separate file. We will use a markdown file `.md` because it allows putting a large amount of markdown text below the frontmatter. The frontmatter is the metadata parameters of the post between the lines with `---`:

    ---
    title: Post Title
    date: 2021-03-16
    ---

    ## Subtitle

    ![Post Image](/images/post-image.png)

    **Lorem ipsum** dolor sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Scelerisque felis imperdiet proin fermentum leo vel orci.
    Consectetur adipiscing elit duis tristique sollicitudin.

Once we have our post content in a separate markdown file we can now load it and inject into our React component via `props` which will then be rendered within HTML elements.

    import moment from 'moment';
    import marked from 'marked';

    export default function Post(props) {
      return (
        <article>
          <h1>{ props.title }</h1>
          <time datetime={ props.date }>{ moment().format('MMMM Do YYYY') }</time>
          <div dangerouslySetInnerHTML={{ __html: marked(props.content) }} />
        </article>
      );
    }

There are multiple ways to load and inject markdown files into your page templates. Every Static Site Generator has its own way of doing that. Some SSGs, such as Hugo and Jekyll, were built around reading content from markdown files. Others, such as Gatsby and Next.js, require some setup to do that. Read [this guide](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/) to learn how to add markdown pages in Gatsby, and [this one](https://nextjs.org/blog/markdown) to learn how to do the same in Next.js.

Did you find this page useful?
------------------------------





Jump to Section
---------------












