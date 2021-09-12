This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

How to add a new Tailwind component to your site on Stackbit
============================================================

You have a Jamstack site. You're using Gatsby as your static site generator and Contentful to manage your content. You like Tailwind because its community offers a lot of solid visual components. You'd like to expose some of those components in your site so your team can just grab them and add them to pages in your site.

In this guide, we're going to see how to add a Tailwind component to your site on Stackbit.

<a href="#step_1_create_a_new_content_type_for_the_component_on_contentful" class="hash-link"><span class="icon-copy"></span></a>Step 1: Create a new content type for the component on Contentful
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Pick a beautiful component from a library like [Tailwind UI](https://tailwindui.com/preview). For this guide, we chose [Tailwind UI's first "features" component](https://tailwindui.com/components/marketing/sections/feature-sections).

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 40.57142857142858%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABFklEQVQY02WQW1PCQAyF+f+/y0EF6SCOzzqK9KIIbXZz362WQmXG85iTky/JjFkAIhHnK/X/dKlnxBSiu5u5z9yTu6WUpj4ibrsuBKyqsN/HECIiuvvoppTdUx6m4Oyak3NWtZfXt/tlUayflg+b9eZ5VWxWxWNVNWY+tfV933UwhBGzX2TmIuLuqiZix1aIGJHMbKKMYQCYqea7BW8/qrKsd7v6+3BEJICAiER5sdT3bdk0XxEpIoUQAQKEOJF7otRBICIRNTNVFRFRHa22g2EOsaqd1lFRPZNF8s2cy/qzqpvDoWUe92QRZs7zWy7LpqyatgWR8wlE/EdWSxDCEOOzhyflnM0zQOAxRoMVI0akvu9/v/0Do8LNBM6eXMcAAAAASUVORK5CYII=');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/39d915128d9236b34a57f3c9f7bfe7aa/8c557/screenshot-tailwind-ui-features.png" title="Tailwind UI component screenshot" alt="Tailwind UI component screenshot" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/39d915128d9236b34a57f3c9f7bfe7aa/4edbd/screenshot-tailwind-ui-features.png  175w,
                                  /docs/static/39d915128d9236b34a57f3c9f7bfe7aa/13ae7/screenshot-tailwind-ui-features.png  350w,
                                  /docs/static/39d915128d9236b34a57f3c9f7bfe7aa/8c557/screenshot-tailwind-ui-features.png  700w,
                                  /docs/static/39d915128d9236b34a57f3c9f7bfe7aa/e996b/screenshot-tailwind-ui-features.png 1050w,
                                  /docs/static/39d915128d9236b34a57f3c9f7bfe7aa/2cefc/screenshot-tailwind-ui-features.png 1400w,
                                  /docs/static/39d915128d9236b34a57f3c9f7bfe7aa/a1ccc/screenshot-tailwind-ui-features.png 2776w
                                " /></span>

Whenever a component seems to include elements that could be repeated with code, like this example's four features, be sure to give those elements their own Contentful content types, linking to them from your main content type as **reference** fields set to "many references."

We'll work our way up from modeling a single child "feature item" to modeling the parent "features list" that represents our whole component.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 30.857142857142854%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCElEQVQY0zWPSW7DMBAE9f+/BTnEMBAhi2zJliWaO2fI4TIMHCeNPjWqDj1o69bbtu33XchSSuNe218b98bsPEoDUrlaa+/PsT+xISSWFi+bMiGl2jFzLAzUgbqBevxYXo/Ty9t8GJfjeJIm9P/8ysRCh2m57crb2Fzku6khFgdZuXi5qWUV0yzeP7dpXnfpU2m1cW2cax8CJqWttkFpGymH2L+ntAsppDTOJ8pUCKCf52icxUgB0AeMMaXCg/ZJmnC+7tJCad0AH8Z0Xs1dB8o5JqJM3vM8o7UaIJaSiajW8pBT7dKEr9NFGXj8RD6tdBVW6KAcKovKoYO2CVTGWo8uoPUImGLhH7beVdbjCSvTAAAAAElFTkSuQmCC');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/8c557/tailwind-component-model.png" title="Architectural diagram" alt="Architectural diagram" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/4edbd/tailwind-component-model.png  175w,
                                  /docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/13ae7/tailwind-component-model.png  350w,
                                  /docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/8c557/tailwind-component-model.png  700w,
                                  /docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/e996b/tailwind-component-model.png 1050w,
                                  /docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/2cefc/tailwind-component-model.png 1400w,
                                  /docs/static/f9987c96ada0d9eb33d7b364dc25fc1e/dd13c/tailwind-component-model.png 2572w
                                " /></span>

**Need a site to follow along?** [Try this Gatsby + Contentful + Tailwind starter](https://github.com/stackbit-themes/gatsby-contentful-portfolio). You can [create it in Stackbit](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/gatsby-contentful-portfolio&utm_source=tailwind-component-kb&utm_medium=referral) to start right away.

Under the **Content model** tab in Contentful, click **Add content type**.

Choose an appropriate name like "**Feature Item**" and click **Create**.

In a given small repeating feature item, if you see text, a hyperlink, or an image, create a Contentful field. In our case, that means planning for our content type to have two short text fields and one image field, which will replace Tailwind UI's sample hard-coded values of:

1.  "Competitive exchange rates", "No hidden fees", etc. → `Title`
2.  Various "Lorem ipsum..." → `Subtitle`
3.  Various purple SVG graphics → `Image`

Save your work.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 42.285714285714285%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVQY042QwUsrQQzG9+/27EGPCk9QsfXB21VoV9StvXsQPKgIglg8VC1VrHVnt7uTzGSSmcdY8OLF8DuFfF++JNnY2dva7W7tdP9sd7pZnuWDv4dHnbTXSXtpv8jyIs2LLB+k/eIgH/zrncZmv9hMD9e6+wkFQWs1GBYJv6jl2Kh8vZ09JRqoBYdotAYABEBEfP9sn9+1CFvriCJq0ZZ1WzVQt6gaDUAGXaJJlDaI1pJjlogIWl6AE2bH4ljEe7LoGbygZwxiggAzJU64ggbQkHM+hCUhBOcYjTFOkGLOi4dqJXteP55sDKer+ctK9nR+rxJiVrqp6oWx1jkW75d4H00MifkSj6bN0eXs7Ho+vJkPb8qTq8+HaZtYdrNalapCY7+VkRjWa8tooyORibEZhNrgTQjEQol4Hzd+Xfbzt0ujEMK8rB/Hk/HkbfSi7sZq8rFAY/8DZZm3tDW971wAAAAASUVORK5CYII=');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/38288bdeeefc21daedd97a1b81bd7e2f/8c557/contentful-create-feature-item-type.png" title="Screenshot of a Contentful content type with 3 fields" alt="Screenshot of a Contentful content type with 3 fields" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/38288bdeeefc21daedd97a1b81bd7e2f/4edbd/contentful-create-feature-item-type.png 175w,
                                  /docs/static/38288bdeeefc21daedd97a1b81bd7e2f/13ae7/contentful-create-feature-item-type.png 350w,
                                  /docs/static/38288bdeeefc21daedd97a1b81bd7e2f/8c557/contentful-create-feature-item-type.png 700w,
                                  /docs/static/38288bdeeefc21daedd97a1b81bd7e2f/350de/contentful-create-feature-item-type.png 998w
                                " /></span>

Return to the **Content model** tab in Contentful, and **Add content type** again.

Choose an appropriate name like "**Features List**" and click **Create**.

At this higher level of data modeling, we'll translate text from the Tailwind UI's sample HTML to three fields. We'll also create one array:

1.  "Transactions" → `Tagline`
2.  "A better way to send money" → `Title`
3.  "Lorem ipsum ... quisquam" → `Subtitle`
4.  A reference field set to "many references" and restricted to "Feature Item" content → `Features`.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 621px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 78.85714285714285%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVQoz42S227UMBCG80rc8V5c8C5IPELfoEJCiBUClRYQB1UtTTaH3SYb2zO2x2cHJcuh2mrRfvqvbH2ekfwXV99+fK+qm7vqpqzKuq3bTbu5/5uq6dbLyV2zXbfbpttWdVs17brt6m5TNMP9RrF223f9wEChNiElH39HSI2apIn1aHvwxgWOSkitjbM+FFW364UzhqQmH0LKOaUU/yRPU86ZXJQmIHnnY5rJ+9ui7FjZa+B8t2NElFJyPsSFEKOxzvmZnPP0iEIIEWMUgEppLmA38pFxxgUAAiAttrH2iMy5dXbYMUQJgEwAohICuQAuwIcw2yEYa2NKh3Lb815YzoVUWgDOrlRSqmXb2TR21q116bH8sx2bQUsUjMPIxMgEF8A47Afun3DOO+djjIcyIvQY2wEREaTSZAAkoJJKo1TDyDTNszWZEMKhrCRc96nsyVva76Y1KaWtc9Y5lDLGNB2h4AKmKRNpIkNkAPFgveWrp3xEFjYEjqg0aU2Acq7KQ3I+llmelhr9G3UyxW1Xn31dnX1ZjQpjiNa5uVwPGvqfFB+q6ycvnj19+fyWb3NIzvvpZIpXr9+cv1udr96+v7j8ePX54vLT6fkFjViQ/eUw3aoAAAAASUVORK5CYII=');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/8fdcf4ce6592ab96780c3d114e5c44ef/3075e/contentful-features-multi.png" title="Screenshot of a multi-reference array in Contentful" alt="Screenshot of a multi-reference array in Contentful" class="gatsby-resp-image-image" sizes="(max-width: 621px) 100vw, 621px" srcset="
                                  /docs/static/8fdcf4ce6592ab96780c3d114e5c44ef/4edbd/contentful-features-multi.png 175w,
                                  /docs/static/8fdcf4ce6592ab96780c3d114e5c44ef/13ae7/contentful-features-multi.png 350w,
                                  /docs/static/8fdcf4ce6592ab96780c3d114e5c44ef/3075e/contentful-features-multi.png 621w
                                " /></span>

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 634px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 62.28571428571429%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTElEQVQoz21SCY7CMAzM/7+2D0BCsBKCLhQoPXLZ8bVqAyxoGU0qd+J67DRucz3tzu1qvVmtt+vt97Ht2gEjYMbyZARM70qlw0JYCBAzIpRSXwvxX0Akysx35ZXOzFQrRURU1cxqoItkZse+9JHtH1wEOXTYBwbEycfJB2b2IeYMRDROASF/babvU16K6itcYUGaqUsPaiaP55Jpz1WV+nkNnKle0/RzuzTNyYfgQwTEmv8Ei1ZPMw0gQ2TWuboTkUwlImSAwkwixCyfUA2JhVhqhlPRLvmmuwz9mFL2MdW2X2lmGaAfRgCMKH0klruzpoIJkYiJmYifs72SRcq8Jw/nWZmd55m7627XDJP3Iaac9RPq7wmZ+0DLKYgT1YAQEe7O83W4j/SxheVQpPYyO5/DuO/a/eF4G4Zh9JMP3odCZO+TV2uf+VadVX8BW+2+PCXpaFYAAAAASUVORK5CYII=');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/3563e99655e761d75fbc15671ecde039/374ac/contentful-create-features-list-type.png" title="Screenshot of a Contentful content type with 4 fields" alt="Screenshot of a Contentful content type with 4 fields" class="gatsby-resp-image-image" sizes="(max-width: 634px) 100vw, 634px" srcset="
                                  /docs/static/3563e99655e761d75fbc15671ecde039/4edbd/contentful-create-features-list-type.png 175w,
                                  /docs/static/3563e99655e761d75fbc15671ecde039/13ae7/contentful-create-features-list-type.png 350w,
                                  /docs/static/3563e99655e761d75fbc15671ecde039/374ac/contentful-create-features-list-type.png 634w
                                " /></span>

The starter theme doesn't include a page type with a list of interchangeable sections, so we're all done data modeling in Contentful. If it did, we'd also want to edit its Contentful page data type to make "Features List" a valid data type for the field containing the list of sections.

☝️ If you'd like to add a sectioned page builder to your theme, visit our tutorials on [making a landing page builder](/docs/developer-guides/content-modeling/building-with-components/) and [sectioning an existing theme](/docs/developer-guides/content-modeling/adding-sections-existing-theme).

Wrapping up step 1, under the **Content** tab in Contentful, click **Add entry** and choose your new content type from the dropdown menu.

Create at least one piece of content in Contentful for each of your new content types.

Feel free to publish them, if you'd like. Or, to see draft content before publishing it, make sure your Gatsby theme is configured to use [Contentful's preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) by configuring the [gatsby-source-contentful](https://www.gatsbyjs.com/plugins/gatsby-source-contentful/#using-preview-api) plugin with the `host: "preview.contentful.com"` option. Use Contentful's [Preview API key](https://www.contentful.com/developers/docs/references/content-preview-api/#/introduction/preview-api-authentication) instead of the Delivery API Key to fetch unpublished data.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 638px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 115.42857142857143%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVQ4y52Tz0sbQRTH95/04kXQiychB4Mg6NG7XjzoQU/+AUKDsYK2pxxbFgpNC2KSTdzNZnZmd36+H2UTlCqYbDt8GQbmfWbe+76ZqDKu0Pp78pjM8qfheDB+zoTULhjnVyrS1iutB8U0L0T84+dwkgqlEINuAjOz975QxgEFAAiuP9bfHitmRloxImaSOoxnJpXBBXDOjXMzyh0TIS4VUUREzMT/NaLnwg/ScpipJNfSYGFQaCw0SvNexV8SGm2g6DHzvydVoX3lWVpUH6u0VDouHVWOleVUYZSpkEyrYaqmKkhDhX5zw6ukxclMD7NynOvRtBw8S+MgQsTgvXcOITAtK56oNoprm5EQmCnyAWaFyoWcCSnLCgCX2Lto3usi8gDamLLSxthKax8Cvmy/0/zY+YwvMCAaY6WqrPXz3Ig+SF4bI1VZVlqWlShkgHnNxlptrDYG8d8aHjkfFrCxLlXiVzp4EhPjHdLqg2rDXuOAyTA4JkQExEYwIPZ6ve7t7cP9/deHL3e3n0ej0aL+FTAzf+p01tfXDw4OWq3W7u5uu93e2toKAKtvZuazs7OLi4urq6ujo6P9/f1ut9tut/M8bwSfn59fXl6enJwcHx/X3xhxZ2dHCNEIvrm5WVtbOzw8zLIsjuO9vb3Nzc1mhgH4EOI4Pj093djY2N7e7nQ6SZI0MqxuVf3s6rjr6+t+v7/8nb2BAeqWeu99CIuCnXMBoAn8BxZmHNSH7iTKAAAAAElFTkSuQmCC');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/84f36cd16427c00490c124153862c82f/41be6/contentful-add-feature-item-data.png" title="Screenshot of creating &quot;Feature Item&quot; content in Contentful" alt="Screenshot of creating &quot;Feature Item&quot; content in Contentful" class="gatsby-resp-image-image" sizes="(max-width: 638px) 100vw, 638px" srcset="
                                  /docs/static/84f36cd16427c00490c124153862c82f/4edbd/contentful-add-feature-item-data.png 175w,
                                  /docs/static/84f36cd16427c00490c124153862c82f/13ae7/contentful-add-feature-item-data.png 350w,
                                  /docs/static/84f36cd16427c00490c124153862c82f/41be6/contentful-add-feature-item-data.png 638w
                                " /></span>

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 639px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 126.28571428571429%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAIAAAC+dZmEAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVQ4y5VUYW/cIAzN//9r+7JP7VSprdTuktwt14SAbYxt2EhuVa67phqyIAp+4Gc/3ABFh/i9fT6ch/uHx/uHp5f22J+GQ396bfv2OJzdTJxuWhOTIMczeI/4euh+tn1/Gvpfw6E7vrZddxpcgJjkpjWllJRkmCBwNjPT9NDRt0cqpeRc9kdTSga2tyATahITESDxpPWcOplZ/mw0OedlvzrnL+/6cHMSfZvmafY+ACepx+xa3nw0ogpESaSUsg/ThYDlZSkLWFUpxtmHFb8TOVGc5wCIPoCbvYg2Zpk5xcgppS9Jrkev2aqcRdXN/jw6N4cACEj7hK+ynUQRYwCkyBQjRf6sMEmEk3BKq5lZY2bMCZG+DDsyV8YUASkEUNVGzABp/cW38HljN+rsAUY3j86Pk3PeOx9GN88hLFmtiagV0o9Ks4WzAJL3QJEtm4iqmuoyV4XWZc1tjLzESIAEiDXsnLOIMicR3eesIqtbShKZzfIaNnrAGiFSLp8+g1yyZhVTzXbhzEmAGCk6H4DiTpHF7Onc3h2f23kQrc+oNoOANE4TUvyvJ3URiagSRfmr7Z2xRa5giSlFZg9VZfthP4/dj9NL58+itQZNTMkDhoqkWsprVWzNSoZEnpGEL3VmERYZnUOkKz0tzeXShP5RWH7nrGpl433BbPxss6XvDivYrpOxjgB4aPu260c3260O8Qf8G0pVvYP8346/AAAAAElFTkSuQmCC');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/ed660c99f8187961aec0549050361da8/738b8/contentful-add-features-list-data.png" title="Screenshot of creating &quot;Features List&quot; content in Contentful" alt="Screenshot of creating &quot;Features List&quot; content in Contentful" class="gatsby-resp-image-image" sizes="(max-width: 639px) 100vw, 639px" srcset="
                                  /docs/static/ed660c99f8187961aec0549050361da8/4edbd/contentful-add-features-list-data.png 175w,
                                  /docs/static/ed660c99f8187961aec0549050361da8/13ae7/contentful-add-features-list-data.png 350w,
                                  /docs/static/ed660c99f8187961aec0549050361da8/738b8/contentful-add-features-list-data.png 639w
                                " /></span>

If you're working with a sectioned page builder theme, add your new content, such as a "Features List" record, to the sections list of an existing page on your site but *don't* publish the page just yet. Wait until you've put the accompanying Gatsby code into production.

<a href="#step_2_add_the_new_component_to_gatsby" class="hash-link"><span class="icon-copy"></span></a>Step 2: Add the new component to Gatsby
----------------------------------------------------------------------------------------------------------------------------------------------

### <a href="#prerequisite_install_tailwind_css" class="hash-link"><span class="icon-copy"></span></a>Prerequisite: install Tailwind CSS

Before editing your site's theme, be sure to install [Tailwind CSS for Gatsby](https://tailwindcss.com/docs/guides/gatsby) into the "preview" branch of your site *(the one Stackbit's previews are rendering)*.

To validate your installation, use Stackbit's code editor to add the following HTML somewhere in your home page:

    <p
      class="
        inline-flex items-center h-12 w-max px-6
        font-semibold text-green-100 bg-pink-900
        rounded-lg border-purple-400 border-4 border-dashed
    "
    >
      Hello world
    </p>

If "Hello World" appears surrounded by a purple background and dashed border in Stackbit's preview within a few seconds, you're good to go.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 412px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 52%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVQoz2OQlZJUUlFUNtBSUlZQkJGWkZKQlZaSk5OTl5eXk5eXlpN3cXM7evnh4tPvV516uerky2WnXi06/mLThTe//v5jUNAwUNQ0VNIyVtYxVdY1U9E1VdQylJOTl5aSUJSWspGSSDYxe3jgyP9fv//9/////9///0Do39+///79Z1ALrNIKqdWJaDZL7LRO6bFO7TWObFAx81TXNdXWs9TRs3Bx83l659b/B3f+XDwP0v4PbAgYMKj5l6v7lakHVNiGl1uElluEltmFl5uF19hGVltGVJtH1XqGZyzvWbmtZv6G/IlbJm7e0rN+U9faA/P3/fv7j0Hdr0zNt0TFt8wmrNQqtNQuvNQ2vMw6vMwuqto6ssYxrs7VPy1G0KPcOLXRp7TCNLnRNb9IM6pIPenXjz8MakG1WsE1prEttgkt9vFN9omttvHNJmHVBvYBWpZeerY+ju7BvQkd8zImz8udOjd32vyCGTNTJywtX/D7918GRWNXJWNnXSsPTUsPVVNXDQs3dVMXRWNnSRlZSUkJKSlJG1v7h0+f//3//9uvv9///Pv++//3P/9//vv/9cdvBjkpCUVFRXkVdQUlJXUtLQ0dfQ0dXR1VBX0NNX1NdS1VZTcX17sPHoMC+u/f/6iAQU5eXklZVUFVQ9fC3tjW2dDSwdjWxdDCxsjI2NbczMjEzMPb79KNeyfuvNp36eGhK48PX3l89Mrj41cfn7z6mEEeBORkZWWVVFSV1TTUzUyU9XS0jS30Le20DEz1LG29/QJ3HLsU1rs9sGVdZNuGmNb1ya3rMtvX5bSvAwBTLQ1eAcn7LAAAAABJRU5ErkJggg==');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/29348d0b58cc4cda7164a63c563eb451/9e32a/hello-rounded.png" title="Hello World button screenshot" alt="Hello World button screenshot" class="gatsby-resp-image-image" sizes="(max-width: 412px) 100vw, 412px" srcset="
                                  /docs/static/29348d0b58cc4cda7164a63c563eb451/4edbd/hello-rounded.png 175w,
                                  /docs/static/29348d0b58cc4cda7164a63c563eb451/13ae7/hello-rounded.png 350w,
                                  /docs/static/29348d0b58cc4cda7164a63c563eb451/9e32a/hello-rounded.png 412w
                                " /></span>

-   Don't see it? Try restarting Stackbit's preview engine and/or reloading the browser page.
-   Updating, but slowly? Try [Tailwind's just-in-time mode](https://tailwindcss.com/docs/just-in-time-mode) for faster edits.

### <a href="#create_new_gatsby_components" class="hash-link"><span class="icon-copy"></span></a>Create new Gatsby components

Using the [Stackbit code editor](https://www.stackbit.com/blog/vs-code-experience-to-stackbit-editor/), create a new Gatsby template file to render your component -- or maybe more, if your component inherently involves nesting of repeated sub-components.

We're calling the file that will render the overall component `src/components/FeaturesList.jsx` *(plural)*, and the file that will render each feature within it `src/components/FeatureItem.jsx` *(singular)*.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 52%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVQoz22RbUtTcRjGz9fIeXac7uHMufmwnXPc1D0w1yhBkV4EfYDe9i6iT1AmRC800zQqzQqpKLCFGESm4EMQ5qbOmMtNXREhtaXpua7YsiLwvrm4/2/ui9/1v4UzgSjOHu+gP9BGf7idwXA7ff4TbAqcZLC1g+FoJ0ORTl7pusqugUl2j6Vxo/8+e67fZG/fLQ4MjXBocJCxhz18fKcbQltLAKciUUYiUQRDrVDURqiaF6rmK73dHhVNzQGsJtdQ+FEAsU+SOELM7xJCk98Pxeul01ULudoBk9lMo1GEZDRSkiSKYjktFgs/ptPFHeo6CF3/LRxK1wH9gIQOQdM0hEJheuoa4LbKqDFVQhRFGo1GSJIEg8EAm83GiZevuLi0wsRKkjPzi8xl4yzs7rKwBxb2DqADBACh1uWC1hxg1B/EabeCjvoGWMwWWq02yLK9ZCjbLIzNxDmR2OF08ivXcgUmt78zsZXnUjbP+GYePw9KySG4nE40qF76gyE0KArcqgpXMb5sh8NRA4OhnBazGe8SH7j9Dczt7PGIKsL9I6z3aCwewuPxoK6uvmRmt1fD6XQVCVlVZUZmI/1n9z8ddvEnua/rEJw1NVCb/CVCVVGhKGrJrDjdbg+OlZWhWray78kcLz9N89r4OnsnNtg/meHIVJbP5rJ88z6L+XiGqewXCHW1taXILYEgFI9SopOkCppMlTCZKllWZqDDbmX36DTP3V3l+QdJXhhL8eKjdV4aX+fw63XGZlOIzSQ5H89C0FQNWqOPXq8PNpvMigoTRVH8e+liZNlm5fCLBY7ObfHe/CZvz25z9G2Oz5c+M7b0iVPL21hIZLicyuEXBmAB1MbvOlsAAAAASUVORK5CYII=');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/c2e4f7b53ef6e86f6f9d32a281122a33/8c557/stackbit-add-code-file.png" title="Screenshot of adding a file to a folder in the Stackbit code editor" alt="Screenshot of adding a file to a folder in the Stackbit code editor" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/c2e4f7b53ef6e86f6f9d32a281122a33/4edbd/stackbit-add-code-file.png 175w,
                                  /docs/static/c2e4f7b53ef6e86f6f9d32a281122a33/13ae7/stackbit-add-code-file.png 350w,
                                  /docs/static/c2e4f7b53ef6e86f6f9d32a281122a33/8c557/stackbit-add-code-file.png 700w,
                                  /docs/static/c2e4f7b53ef6e86f6f9d32a281122a33/d9199/stackbit-add-code-file.png 960w
                                " /></span>

If you prefer, you can edit the preview branch of the GitHub repository Stackbit is managing for you through your favorite development workflow.

Implementation details will be particular to your site, but if the component you downloaded looks like this:

    <div class="hello world">Sample text standing in for a title</div>

...then the JSX inside your exported default `return()` should look something like this:

    <div className="hello world">{title}</div>

If a component includes elements that can be repeated with code, like the features in our component, break those elements out into their own React components. Iterating with the `.map()` function is a great way to pass appropriate parameters to your subcomponents.

[Tailwind UI offers React samples for components](https://blog.tailwindcss.com/tailwind-ui-now-with-react-and-vue-support), so this work may be mostly done for you, depending on the Tailwind component library you're using.

Make sure each new template file also exports a GraphQL fragment to tell the page rendering it what fields you created on your content type in Contentful. *([Here's a great article about colocating fragments with the code they support](https://dev.to/ricardoromox/colocated-fragments-organizing-your-graphql-queries-in-react-24a6), a [position also endorsed by Apollo at GraphQL.com](https://www.graphql.com/articles/best-practices-for-graphql-clients).)*

Here's what our `FeatureItem.jsx` file looks like:

    // src/components/FeatureItem.jsx

    // JSX simplified for readability and to respect Tailwind UI licensing
    import { graphql } from 'gatsby';
    import PropTypes from 'prop-types';
    import React from 'react';

    const FeatureItem = (props) => {
      const { title, subtitle, image } = props;
      return (
        <div className="relative">
          <dt>
            <div className="absolute h-6 w-6 text-blue-600" dangerouslySetInnerHTML={{ __html: image.svg.content }} />
            <p className="ml-8 text-xl text-black">{title}</p>
          </dt>
          <dd className="ml-8 text-gray-700">{subtitle}</dd>
        </div>
      );
    };

    FeatureItem.propTypes = {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired
    };

    export default FeatureItem;

    export const query = graphql`
      fragment FeatureItemFragment on ContentfulFeatureItem {
        id
        title
        subtitle
        image {
          svg {
            content
          }
        }
      }
    `;

*(Note: you need to install the [gatsby-transformer-inline-svg](https://www.gatsbyjs.com/plugins/gatsby-transformer-inline-svg/) Gatsby plugin for `image.svg.content` to be available to your GraphQL fragment.)*

And here's what our our `FeaturesList.jsx` file looks like -- note how it uses `.map()` to repeatedly call `<FeatureItem />`:

    // src/components/FeaturesList.jsx

    // JSX simplified for readability and to respect Tailwind UI licensing
    import { graphql } from 'gatsby';
    import PropTypes from 'prop-types';
    import React from 'react';
    import FeatureItem from './FeatureItem';

    const FeaturesList = (props) => {
      const { tagline, title, subtitle, features } = props;
      return (
        <div className="px-4">
          <div>
            <h2 className="text-blue-600 uppercase">{tagline}</h2>
            <p className="text-4xl font-extrabold">{title}</p>
            <p className="text-gray-700">{subtitle}</p>
          </div>

          <dl>
            {features.map((featureItem) => (
              <FeatureItem {...featureItem} />
            ))}
          </dl>
        </div>
      );
    };

    FeaturesList.propTypes = {
      tagline: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
    };

    export default FeaturesList;

    export const query = graphql`
      fragment FeaturesListFragment on ContentfulFeaturesList {
        id
        tagline
        title
        subtitle
        features {
          ...FeatureItemFragment
        }
      }
    `;

Sometimes, Gatsby can't quite keep up with your changes, even if your code is perfect. If you run into problems that don't make sense *(e.g. Gatsby not recognizing a Contentful GraphQL endpoint that definitely exists)*, try refreshing your browser page. If that doesn't help, restart the Stackbit preview engine:

1.  Click the **settings gear icon** in the upper left corner
2.  Click its **Advanced** tab at the upper left of the pop-up
3.  Click **Restart** in the lower right corner of the popup

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 41.714285714285715%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB80lEQVQY0wHoARf+AD1FT05UX0hLV2ZLVVJDTjY+Szo+S0ZKV0tOWkRHVFBQVihYlBd15C1NeTs6QjxBTklNWD9DTkhMWEVIVABESE9KTlY8QElHQ0w+PUU6P0dARE02OUKLjJLCxMq7ur7AxtO7zue/xtLBwsfBw8nCxMrBw8nDxcu2uL4APz9ANzc4Ozo7Nzg5LjAxMTEyMjIyIiIil5ic5+nsrKG3kY6y6dvf9vf78/X78/b78/X68/X78/X77/H3AEFBQTc3OCwsLSYmKCMiIyUkJSYnKRUXGIqLkOTm683I0MbC0Nza4t3g5tPV29DR2NbY3trb4dna4dvc4QAzMzM8PT8zNDUmJichISIhICEoLDAfJSqKjJDo6e3h4+br7O7r7O/m5uvS1NvP0NfT1Nva3OPa2+Pf4eYAMDAvODs/RUZJMzM1IyQlIB8fKCwvJjE4jI6T293kzM3U0dLa0dHZ2Nng0tTawcLIxcXL1MHI0LrA3NDUAC8vLy8yNT0+QCsrLCEhIiIhISUoKhwhJYqMkN/g6NHT2dfY39fX39ja4dPV28rL0NPV2tXIztTBx9fP0wA6OjksLzI5OjwqKisgICEkIyQoJScXFBaXl5r7/P/s7vHv8PTv8PTv8PPv8PTx8vXv8fXx8/bl7PXE1/DO8gLnyci99wAAAABJRU5ErkJggg==');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/cf55ab254450c0b8f6ffc7742fb6a396/8c557/stackbit-restart.png" title="Screenshot of the Stackbit restart preview button" alt="Screenshot of the Stackbit restart preview button" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/cf55ab254450c0b8f6ffc7742fb6a396/4edbd/stackbit-restart.png  175w,
                                  /docs/static/cf55ab254450c0b8f6ffc7742fb6a396/13ae7/stackbit-restart.png  350w,
                                  /docs/static/cf55ab254450c0b8f6ffc7742fb6a396/8c557/stackbit-restart.png  700w,
                                  /docs/static/cf55ab254450c0b8f6ffc7742fb6a396/e996b/stackbit-restart.png 1050w,
                                  /docs/static/cf55ab254450c0b8f6ffc7742fb6a396/84ee5/stackbit-restart.png 1076w
                                " /></span>

### <a href="#summon_the_new_components_from_your_theme" class="hash-link"><span class="icon-copy"></span></a>Summon the new components from your theme

Now we need to summon `Features.jsx` from an existing page template, passing it a piece of "Features" content from Contentful.

For this example, we'll simply embed a reference to `Feature` directly into `src/pages/index.js`.

-   We need to import our new component into `index.js`:

        import Features from '../components/Features';

-   Right below `<Hero />`, we'll pass this piece of content to our new `<Features />` component:

        <FeaturesList {...data.singlefeatureslist} />

-   Inside the definition of `query`, we'll edit the `HomeQuery` GraphQL query by adding a definition for a `singlefeatureslist` property right below the existing `portfolio` property. The new code fetches the first result from Gatsby's query against Contentful's "Features" content, ignoring any other query results that may exist:

          singlefeatureslist: contentfulFeaturesList {
            ...FeaturesListFragment
          }

Here is the new & improved `index.js`:

    // src/pages/index.js

    import { graphql } from 'gatsby';
    import React from 'react';
    import Cards from '../components/Cards';
    import FeaturesList from '../components/FeaturesList';
    import Hero from '../components/Hero';
    import Layout from '../layouts/Layout';
    import Newsletter from '../components/Newsletter';
    import SiteMetadata from '../components/SiteMetadata';

    const IndexPage = ({ data }) => {
      return (
        <Layout>
          <SiteMetadata title="Home" description="Portfolio of John Doe" />

          <Hero />

          <FeaturesList {...data.singlefeatureslist} />

          <div className="bg-gray-100 py-12 lg:py-16">
            {data.portfolio && data.portfolio.nodes.length > 0 ? (
              <Cards items={data.portfolio.nodes} />
            ) : (
              <div className="container">No projects found.</div>
            )}
          </div>
          <Newsletter />
        </Layout>
      );
    };

    export default IndexPage;

    export const query = graphql`
      query HomeQuery {
        portfolio: allContentfulPortfolio {
          nodes {
            ...PortfolioCard
          }
        }
        singlefeatureslist: contentfulFeaturesList {
          ...FeaturesListFragment
        }
      }
    `;

At this point, your new component should show up in your site preview in Stackbit. 🎊

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 33.142857142857146%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVQY03WQ2U7CQBSG+wwYjJqUmdN2Ol0oEJ/OFzAaEwOIeuED6b1hFdEYBQWBBkrXoTOmhVv/nKuTfPkXSdMIBtAJpbalGIamEVVRVJ0eHxabjdYsFP2J9zEPR7Ng+OP3JpvedzCcBu/zcOzGkqISAEAIgaYhwAghjAFU7aRYfLi4FJynnIt/JBHdAACMsKpTWq1ZZadcqTq1UxnD1XW92x89t7uD4Vv/5bXTHbQ7/YSxlAuen0SInsEYYYQ1wzScmu3UHKciI3x7dx+zdDqbr73N0l0tlu7vwvXDmLHt3tk0LZyjoOtYVUq5MEZHxYOz8+bjWMShz4XYhX/6jNtfq20SpXkViVIKO2WdoSTLGQxQKBTqjZYQgrFtmvI8J49YytJshezBeeasgGIQk1DbKtsAWJZLsIdvhBCuF3hB7AWxHyVBzFZBsgqTdZhsIvYHDUDto5or9yMAAAAASUVORK5CYII=');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/000c4e89ece54cb166fcd06128f33fbe/8c557/stackbit-component-exists.png" title="Stackbit showing the new component" alt="Stackbit showing the new component" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/000c4e89ece54cb166fcd06128f33fbe/4edbd/stackbit-component-exists.png  175w,
                                  /docs/static/000c4e89ece54cb166fcd06128f33fbe/13ae7/stackbit-component-exists.png  350w,
                                  /docs/static/000c4e89ece54cb166fcd06128f33fbe/8c557/stackbit-component-exists.png  700w,
                                  /docs/static/000c4e89ece54cb166fcd06128f33fbe/e996b/stackbit-component-exists.png 1050w,
                                  /docs/static/000c4e89ece54cb166fcd06128f33fbe/f1c64/stackbit-component-exists.png 1390w
                                " /></span>

If you don't see your new component, try restarting Stackbit's preview engine and/or reloading the browser page.

<a href="#step_3_profit_edit_your_site_in_stackbit" class="hash-link"><span class="icon-copy"></span></a>Step 3: Profit: edit your site in Stackbit
---------------------------------------------------------------------------------------------------------------------------------------------------

If you haven't already, make the page editable by clicking the **Content** tab at the top center, to ensure you leave the **Code** tab you've been working with.

Click **Add content** from the side navbar -- or hover over a nearby one and click **Add** -- to add another feature to your Tailwind component.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 700px;
                              "><span class="gatsby-resp-image-background-image" style="
                                  padding-bottom: 58.85714285714286%;
                                  position: relative;
                                  bottom: 0;
                                  left: 0;
                                  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVQoz22Q7U9ScRTH7x/Ru17U1kazVcuFBCgZChdBxDuUpVwMbZPiZS/6C3rZFm09bNacsdIo0C1YjpE250PhAz4QSDFYalPk4SKIIHB/9552cVNjffbbb7+z8/ue8z0H69Tf1ep61QRJdPTclLZdFzQJG5QtSgLHTaLeCaXRoVD0yFu0YolKJFE2ydrlKn0fIX794NJT03nsbPdwTZ+NZxw5o3v/0OKyPHv1+PmbwbcfnwzYH1m9Q2Nu18Sie3LW6Z7+7Jke/zLj9Mx6Jqd887OL36awmsY7F4SdF+u7zgl01tGJrQMIxkoRCkVT5Y1UIbidWU/QwQQKxOkwxUTTrD9Gb2YYAGABMD5ffOUqv7ZWyONdttnsAIAQDcAAsEcAMAyDjkLgQu7FVMBUGr2i9baqrbvhVtsHh4vlxJXC3LcTOGHlZtiTFNZluC9X6iRSDV+IvxtxrAV/zcx99y4sRaK/l5fXVlb9vuVV34qfrlSsAtN19zfjHfWN6lqBzDHqBEDxRCqepDLZXDxJxeLJ3QSVTadZhi7RiP3XD6YmDK0aUqXR1wllg8Of/BSk97IIoWO3APBjtxzayeVz+9WdSdJkNJr1+n6RGH9pHXOH89lcvsxBczupqCcjhaWtg3KxUCrTp5tj5hatWaE1SJT1IrllYGTo68/YbjJ/WGRPVsUeC6ptk4Z7BoNJhmvrbjS/sI6Nh0vU3j5dPNyYXwjMedcCoXA4WqU5NXM7qSZIKa69xm+yj7oAgEaIQSgeWN8Mhjb+bO/EEgzL/vf8BYBMHHXL5pqBAAAAAElFTkSuQmCC');
                                  background-size: cover;
                                  display: block;
                                "></span><img src="/docs/static/652313667aab6e65bfa7d2523186501b/8c557/stackbit-edit-content.png" title="Screenshot of editing component content in Stackbit" alt="Screenshot of editing component content in Stackbit" class="gatsby-resp-image-image" sizes="(max-width: 700px) 100vw, 700px" srcset="
                                  /docs/static/652313667aab6e65bfa7d2523186501b/4edbd/stackbit-edit-content.png  175w,
                                  /docs/static/652313667aab6e65bfa7d2523186501b/13ae7/stackbit-edit-content.png  350w,
                                  /docs/static/652313667aab6e65bfa7d2523186501b/8c557/stackbit-edit-content.png  700w,
                                  /docs/static/652313667aab6e65bfa7d2523186501b/b12f7/stackbit-edit-content.png 1020w
                                " /></span>

If you'd like, take a look at Contentful -- your changes from Stackbit will show up instantly.

Looking great? Publish your changes using Stackbit. Your edits to Gatsby and your data in Contentful should all go live. 🎉

<a href="#helpful_resources" class="hash-link"><span class="icon-copy"></span></a>Helpful resources
---------------------------------------------------------------------------------------------------

-   Not on Stackbit yet? Bring your site -- check out our [Getting Started Tutorial](/docs/getting-started/)
-   Ready to add multiple sections? [Section an existing theme](/docs/developer-guides/content-modeling/adding-sections-existing-theme)

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Step 1: Create a new content type for the component on Contentful](#step_1_create_a_new_content_type_for_the_component_on_contentful)
-   [Step 2: Add the new component to Gatsby](#step_2_add_the_new_component_to_gatsby)
    -   [Prerequisite: install Tailwind CSS](#prerequisite_install_tailwind_css)
    -   [Create new Gatsby components](#create_new_gatsby_components)
    -   [Summon the new components from your theme](#summon_the_new_components_from_your_theme)
-   [Step 3: Profit: edit your site in Stackbit](#step_3_profit_edit_your_site_in_stackbit)
-   [Helpful resources](#helpful_resources)












