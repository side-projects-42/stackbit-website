This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# Site Creation

Stackbit can convert a Jamstack theme located in a git repository into a functioning Jamstack site.

When a user [imports a Jamstack theme](/docs/developer-guides/basics/import-your-site/) built with one of the existing [static site generators](https://jamstack.org/generators/) (SSG), Stackbit Site Builder uses the configuration defined in `stackbit.yaml` to create and configure a new Jamstack site. The site creation process involves creating and provisioning a new GitHub repository, a new [headless CMS](https://jamstack.org/headless-cms/) project, and a new [serverless deployment platform](https://jamstack.wtf/#deployment) project such as [Netlify](https://www.netlify.com/).

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><a href="/docs/static/69bfece94f46b8b3c453bf1a380dbf4a/87488/stackbit-site-builder-diagram.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 100%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEc0lEQVQ4y5WTW2wUZRTHz+62VKoGJQRiUsEnKxJMULGY2EeiEhWNBvFBUAIYjUh8IFxU8ALYpirWxJDYxkBLQtBWAlhqb2iaWmnT9Cq9bbe7273Mzs7Mzn3mm+sx37R9UGqi5+X7Hv7nd07O+R8gjr9f081LpuXU6Tbe7/gItuuHeILgI5YqprdvaPRW02Q03qwS/x3i+HchIuiWD0uGZli1QkGSDNOKERfXiyZCQfeKaZLp4g7dtDCVziAviEhsF00bdxEXwbD9yJJAWTPPsBzPawaZEk3cQEH1Pfod9NUc3MmLCg6PTRhTMwldUgw0XdxteQgq8ZYGGpZbK8mqJKt6zHDxYQrqi1vFnRMmDKes1/c0yLjrvIavfa/inkYZ++LW/vZxE25Mkci6Y+ztQNvDGlnRMppujjqIDxkuQlp0i0bSDrCKV/Fpi3Ll8E/Sj4eapKaT19VrcwW3sj9u06LhfwN+LcpKwSRO1HRxveXSgXsh2mnJu8yKmnZt5YdXlFVHLiv3nbyu3lv6HrPiULMM+y9IQIG3QS3Hf98wrQ5iu02GjQ9QEKIagW0/hB4/zXVUfsH7T1Tx6ubPOa2imvcePJ6/AXAYYGsS1h5jgZFdEDSPLhJ41QOgAGasE9DOAhImKNIzMAkk0QPLDuQ3bqnmnq2o4p/edIrbVlHNP1N+Ir+l7AgbAWiHV+tESAguiHwunIxNhgUuFwqA37xSCmjMBX8aA2MzlR03J7b7RN647xwDL38nw8FLMmyu4gH22vDkx5PLD37VEkHMhOY4EwQuB4nZKORZBgKDGrYfUk0Xhkf+LLJ9vJBiBIzG51BULVe38Eso6Q4/VcOVIrrAxkcB8TkQBhqBE0RI8vZqQVSqs7n8t5wgv7lgHR/GOYTfYliC6Gd5JoG5VIxYWgERsRde6o4EvjSd53Ms1z02Hm2dnpntZQvqgSkOy1TNSCqarmumfS4AxjgH5peBJS1jZOZMm4BnfmGd2k4ROyetLkQMgIphb80wbHMskTo3l85e5iVtN0EsUzSdKxQkekkXA2B/wl4ELjtxTZ164ayIO+plY/tZEWva1QC44aO5OyeyFiQScaBNm9kR0A1Cc1YKBemDZCp92rDcnQGQzlEyPGqBEHH8ck5xN03n7MdysvOo4eEqVJOAeBW4PAufNPRH3j6fXt4zOB1BdMLBKBQJmHQSfM+d9yKFLXQIqYILvTELsjLdOIYyvPbi4HR+b9fA7FvJnLSzcRDvXtQCrAleXZWK8kyqCH0vHAApZFHUH7dD3VErmBnv4T0FSUnH4knjj74BNZPNZRFx9ULh0COfcdA8ZEDXJIFfpwh0TJC/Xw11/rqjbOD8TJaF1iGenmARIEJdBksRMXxjKBXm8znIK16gX7vUPf8zKDBdcEKjKVrxeEjQ8ahm4+/RHCnPKw4Imhummv8ccd6BU20mrHmjPWJ72M8wWUynkmh7ODSvMGGCcf4fsDtqwcWbcrFC/HpBNlpZQflZJX5D2y2jdCjlwDS7NPAvCUmePJktpPAAAAAASUVORK5CYII=&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/69bfece94f46b8b3c453bf1a380dbf4a/8c557/stackbit-site-builder-diagram.png" title="Stackbit Site Builder Diagram" alt="Stackbit Site Builder Diagram" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                    /docs/static/69bfece94f46b8b3c453bf1a380dbf4a/4edbd/stackbit-site-builder-diagram.png  175w,
                                    /docs/static/69bfece94f46b8b3c453bf1a380dbf4a/13ae7/stackbit-site-builder-diagram.png  350w,
                                    /docs/static/69bfece94f46b8b3c453bf1a380dbf4a/8c557/stackbit-site-builder-diagram.png  700w,
                                    /docs/static/69bfece94f46b8b3c453bf1a380dbf4a/e996b/stackbit-site-builder-diagram.png 1050w,
                                    /docs/static/69bfece94f46b8b3c453bf1a380dbf4a/87488/stackbit-site-builder-diagram.png 1282w
                                  " /></a></span>

For example, suppose your theme is pre-configured to work with an API-based headless-CMS, such as Contentful or Sanity. In that case, Stackbit Site Builder will use the [`import`](/docs/reference/stackbit-yaml/import/) object defined in `stackbit.yaml` to create a space in Contentful, or a project in Sanity, and provision it with the content schema and the initial content stored in the special export file.

In case your theme is not configured to work with any CMS, but it stores its content in flat content files such as markdown, json, yaml. And you want sites created from your theme to work with Stackbit's on-page editor. You can provide the website's content models in `stackbit.yaml` using the [Models](/docs/reference/stackbit-yaml/models/) and the [Fields](/docs/reference/stackbit-yaml/fields/). Read our conceptual guide about [Content Models](/docs/conceptual-guides/content-model) to learn more.

When you import a theme into Stackbit, it will validate the format of your `stackbit.yaml` and will validate the content schema against the content files. You can use Stackbit CLI to [validate](/docs/reference/stackbit-cli/#validate) your `stackbit.yaml` locally.

After Stackbit creates a new site, the `stackbit.yaml` continues to serve Stackbit Studio.

## Did you find this page useful?

## Jump to Section
