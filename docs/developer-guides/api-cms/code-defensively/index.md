This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# How to Prevent Run-time Errors When Pulling Content From a Headless CMS

What happens if improper data makes it through to the frontend. There are three scenarios to think of:

1.  **Preventing the display of invalid data** - In many cases, invalid data won't cause a complete failure at build time, but it may end up getting displayed to the user, which is something you will want to avoid. This is something that can typically be handled in code (for instance for React-based tools like Gatsby or Next.js) or using the SSG's templating language like Liquid for Jekyll or Hugo templating for Hugo that provide conditionals, functions and filters\\
2.  **Preventing build errors due to failed queries** - In some cases, as with some of the JavaScript-based solutions, you'll be loading content via an external API call, perhaps using GraphQL. Misaligned data can cause an [`unknown field` error](https://www.gatsbyjs.org/docs/troubleshooting-common-errors/#unknown-field-a-on-type-b) or a type checking failure.
3.  **Preventing issues in previews** - In most cases, data validations on the CMS side are not performed on draft content. Therefore if you rely upon the APIs for retrieving draft content to display previews, you may encounter missing or erroneous data when attempting to use a template to preview draft content.

The way to achieve this is to code defensively.

## <a href="#code_defensively" class="hash-link"><span class="icon-copy"></span></a>Code Defensively

Content models may change or disappear or you may be attempting to preview a draft that has not been run through validation. These can cause your site build to fail if not properly accounted for and can lead to major headaches. The way to deal with that is to write a "defensive app" that can handle these changes without failing.

1.  **Don't assume fields exist or have a valid value** - Trying to output a null or empty field can result in errors or just unpredictability in how content displays. Pretty much every static site generator (SSG) offers tools for determining if a value exists, ensure that your templates code around this possibility. Aside from being empty, you may receive fields whose values may be unexpected. This is especially true if you are displaying draft previews as even required fields may not have a value or may have invalid values since they may not have been run through validation in the CMS.
2.  **Don't assume linked objects exist** - Most CMS provide a way of linking objects within the CMS. For example, in Contenful these are [links](https://www.contentful.com/developers/docs/concepts/links/) and in Sanity they are called [references](https://www.sanity.io/docs/reference-type). However, it isn't always safe to assume that because an object is linked in the record, it actually still exists within the CMS.

But how can you code defensively when dealing with these sorts of issues. Here are some tips.

- Use conditional rendering to determine if the conditions are met before displaying content. For example, here's [how to do conditional rendering in React](https://reactpatterns.com/#conditional-rendering), but templating for other SSGs offer similar capabilities.
- Leverage tools that can simplify data access in complex structures. For example, in JavaScript-based tools you can use [lodash's get function](https://lodash.com/docs/4.17.15#get). Other tools provide similar functions like [default](https://gohugo.io/functions/default/) and [isset](https://gohugo.io/functions/isset/) is Hugo.
- Avoid tight coupling by normalizing data as much as possible in the data layer. If you are using React, you would likely create a data layer within React that would handle any data interactions (here's an [8 part series on creating a data layer in React](https://www.bignerdranch.com/blog/react-data-layer-series-part-1/)). If you are using something like Hugo or Jekyll, your data layer could exist within serverless functions that call the API and populate the content within your build process. This data layer will ensure that data is passed consistently and you are protected (as best you can be) from changes in the underlying content model, irregular or missing data in a response or changes to the API.

## Did you find this page useful?

## Jump to Section

- [Code Defensively](#code_defensively)
