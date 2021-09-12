This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Content Modeling
================

Create new content models and fields all from Stackbit. Let's create a new content model and add it to our site.

<a href="#create_a_new_data_type" class="hash-link"><span class="icon-copy"></span></a>Create a New Data Type
-------------------------------------------------------------------------------------------------------------

1.  Click **Code** in the top nav.
2.  In the left panel, click **Code Editor**.
3.  Open the file `stackbit.yaml` and paste the following code at the bottom of the file to add a new component type called `text_section` with `id`, `title`, and `content` fields, being sure to preserve indentation so it lines up with other field models:

        text_section:
         type: object
         label: Text Section
         extends:
           - section
         fields:
           - name: content
             type: markdown
             label: Content
             description: The text content of the section

4.  Scroll up to the definition of `models` &gt; `advanced` &gt; `fields`, and in the field named `sections`, paste the following into a new line under its `items` &gt; `models` property, preserving indentation so that it lines up with `feature_section` and `hero_section`.

        - text_section

5.  Save your work *(`command` + `s`)* and close `stackbit.yaml`.

<a href="#render_the_component" class="hash-link"><span class="icon-copy"></span></a>Render the Component
---------------------------------------------------------------------------------------------------------

1.  Under `src` &gt; `components`, create a new file called `TextSection.js`, populate it with our simple component code, and save your work:

        import React from 'react';
        import _ from 'lodash';

        import { markdownify } from '../utils';

        export default class TextSection extends React.Component {
         render() {
           const section = _.get(this.props, 'section');
           const sectionId = _.get(section, 'section_id');
           const title = _.get(section, 'title');
           const content = _.get(section, 'content');

           return (
             <section id={sectionId} className="section">
               <div className="container container--small">
                 {title && <h1 className="section__title">{title}</h1>}
                 {content && <div className="section__copy">{markdownify(content)}</div>}
               </div>
             </section>
           );
         }
        }

2.  Open `src` &gt; `components` &gt; `index.js`. Copy and paste all three lines of code that refer to `HeroSection` onto new lines. Edit the pasted code to say `TextSection` instead of `HeroSection` and save your work.

<a href="#add_content_using_the_new_component" class="hash-link"><span class="icon-copy"></span></a>Add Content Using the New Component
---------------------------------------------------------------------------------------------------------------------------------------

1.  Click **Content** in the top nav.
2.  Hover over the whitespace within home page's hero section in the preview panel.
3.  Click **Add** in the bottom right of the highlight.
4.  **Choose an item type** of `Text Section` and click **Create**.
5.  A new section with *lorem ipsum* placeholder text will be added to the home page in your Stackbit preview panel.

<span class="gatsby-resp-image-wrapper" style="
                                position: relative;
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                max-width: 607px;
                              "><a href="/docs/static/6c93f178d5166a5b8574122e624eb9f9/ef9e5/example-text-section.png" class="gatsby-resp-image-link"><span class="gatsby-resp-image-background-image" style="
                                    padding-bottom: 100.57142857142858%;
                                    position: relative;
                                    bottom: 0;
                                    left: 0;
                                    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACyklEQVQ4y6WSTWsUMRjH5xN49ODBixcvouALCIVSwddSC0X0omfx5VYR/QQeit3dimzbS0UQRGqhtFCh7a7VrfXSV7vtvrVoy3ZnJpndTLKZJJNJRqZbl6JeSn88hH+S55+E54lx5tylRrRe7uro6DrV/uTIo+LxZ+Wjd8db2jqv3Ljd2D19tu38xavX2u9caLnZfevEu6cnBx4eM2KJ/njfQCzRH0sMJBKvXyRHut9b3R+c529Xe+PJeGKgN57sjSVfxpKxeH/fq8FY3+BQf2zkTc/wUI/h+wJjpIIgPAjcV0xqQyklhHAcB0IHIbdWq5mWDWDVxRhA6GKX1OukXkeuW6mYEDoYE0KIlL5WgRGGoRA8k/mWycyOjI5NTk0NfxyZSn1eXJgfHZ+YTqXT6XRq5ksqPbOy8mN0bHx6OjXxadKp1sIwjMy+L4QvpPQjpJRBJIX0pfSZYExwsbuulJJSNjK5EHtmjHF5pwwABBCall0xTcuyCSKug9wqwjUMbGBZlmlapmXawLYBQAjtmaWUlFIhfM6F51HGWN2jBbCZNYvrdmnNKkG3yjzmMcYYZ4xR6kkp98z70aEOwxCy2vXR+x1jDzrHHrcO38uU58MwVFr9lWxorZVSQRCoXRrCD+QyyC9aa0v2+oK1hjiJzo1ojHrPHB4Cw7btXC6fzxe2trby+UKhWNz8+UtrHWjVjOZVf5sRQoVCMZtd397eXs2uruVy+eKGUko3aZZj36whDEJIlF/a3Cht5HL5nYp5gGd7nhf9O+CYplmpVCB0AGzg2CCSGGPPo5R6hBBKab1ep5QSQjgXBufMtCwAgG1bjuNwLjDGCKHd0Y2cjHHOGY863ICLSPu+b0gZVKtVCB1KvQNXOwgCjDHB0ZPUH7T+t167PyjU+/Qh+wyhMzf3vVjaWM2uLy8tfZ2dK+9Ums2QgfJEwPz/hJDBb9b0NO2iN7hDAAAAAElFTkSuQmCC&#39;);
                                    background-size: cover;
                                    display: block;
                                  "></span><img src="/docs/static/6c93f178d5166a5b8574122e624eb9f9/ef9e5/example-text-section.png" title="Example CTA Section" alt="Example CTA Section" class="gatsby-resp-image-image" sizes="(max-width: 607px) 100vw, 607px" srcset="
                                    /docs/static/6c93f178d5166a5b8574122e624eb9f9/4edbd/example-text-section.png 175w,
                                    /docs/static/6c93f178d5166a5b8574122e624eb9f9/13ae7/example-text-section.png 350w,
                                    /docs/static/6c93f178d5166a5b8574122e624eb9f9/ef9e5/example-text-section.png 607w
                                  " /></a></span>

  
  

-   **Previous Step:** [Drag-and-Drop Components](/docs/getting-started/drag-and-drop/)
-   **Next Step:** [Production at Your Fingertips](/docs/getting-started/production/)

Did you find this page useful?
------------------------------





Jump to Section
---------------

-   [Create a New Data Type](#create_a_new_data_type)
-   [Render the Component](#render_the_component)
-   [Add Content Using the New Component](#add_content_using_the_new_component)











