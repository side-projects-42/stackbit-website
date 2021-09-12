This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# What's the Difference Between API-based and Git-based Headless CMS?

Headless CMS are a relatively new concept. Let's discuss how they differ from a traditional CMS and what problems they solve. In addition, let's look at the different flavors of headless CMS: git-based and API-based.

## <a href="#limitations_of_the_traditional_cms" class="hash-link"><span class="icon-copy"></span></a>Limitations of the Traditional CMS

The traditional CMS tightly coupled the backend (i.e. where you create and manage the content) with the frontend (i.e. where your visitors view the content you created).

These CMS were created to manage web page content, meaning that the content created in the backend was also tightly coupled with its display on the web. This meant that content was not typically reusable. A headline on the home page might be duplicated for display on a landing page - and updating one did not update the other. Because the content was specifically intended for the web, it also could not be reused in things like a mobile app.

In addition, the traditional, coupled CMS wasn't designed for the Jamstack. In most cases, pages on a traditional CMS were server rendered and thus unable to take advantage of the improved speed and security the Jamstack architecture offers.

## <a href="#why_headless_cms" class="hash-link"><span class="icon-copy"></span></a>Why Headless CMS?

Headless CMS were created to help resolve these issues. A headless CMS essentially provides only the backend (i.e. where you create and manage the content) of content management. A headless CMS can manage content irrespective of the frontend output and typically allows content items, like the theoretical headline we discussed above, to be reused both across the web app but also in things like mobile apps, chat apps, voice apps, etc.

There are many headless CMS providers, but they all generally fall into one of two categories: git-based CMS and API-based CMS. Let's explore the differences.

## <a href="#git_based_headless_cms" class="hash-link"><span class="icon-copy"></span></a>Git-based Headless CMS

The key thing to understand about a git-based headless CMS is that it does not store your content. Instead, content is maintained in a Git repository - often as Markdown for long-form content and YAML or JSON for data. The CMS provides a layer of tooling for managing this content via a web interface that is easy to understand for content editors who may be uncomfortable manually editing the file-based content.

Stackbit supports the following Git-based CMS:

- Git (file-based content in your GitHub repo)

## <a href="#api_based_headless_cms" class="hash-link"><span class="icon-copy"></span></a>API-based Headless CMS

An API-based headless CMS does store your data, which can then be accessed by the web site, mobile app or other application via an API. Because content in API-based headless CMS is not tied to physical files, they generally are able to more easily handle reuse of content objects than a git-based CMS.

Stackbit supports the following API-based CMS:

- Sanity
- Contentful

## <a href="#learn_more" class="hash-link"><span class="icon-copy"></span></a>Learn More

If you'd like to learn more about headless CMS, check out these resources:

- [What’s a Headless CMS and Why Should You Care?](https://www.stackbit.com/blog/what-is-a-headless-cms/) by Gift Egwuenu
- [10 Headless CMS Options for your Jamstack Website](https://bejamas.io/blog/headless-cms/) by Nebojsa Radakovic
- [The Evolution of Web Content Management](https://remotesynthesis.com/blog/evolution-of-web-content-manaagement) by Brian Rinaldi

## Did you find this page useful?

## Jump to Section

- [Limitations of the Traditional CMS](#limitations_of_the_traditional_cms)
- [Why Headless CMS?](#why_headless_cms)
- [Git-based Headless CMS](#git_based_headless_cms)
- [API-based Headless CMS](#api_based_headless_cms)
- [Learn More](#learn_more)
