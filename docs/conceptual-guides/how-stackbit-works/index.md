This app works best with JavaScript enabled.

![Stackbit](/docs/images/stackbit-crane-sm.png)

# How Stackbit Works

Stackbit lets you and your team preview and edit your Jamstack site without the need to rebuild and deploy your site's preview every time its content is changed. The preview always reflects the latest and unpublished state of your site.

## <a href="#how_stackbit_works" class="hash-link"><span class="icon-copy"></span></a>How Stackbit Works

### <a href="#content_ownership_and_bidirectional_content_sync" class="hash-link"><span class="icon-copy"></span></a>Content Ownership and Bidirectional Content Sync

Stackbit runs your site's development server and proxies page requests from your browser to that server. Any content or code changes you make within Stackbit are immediately synchronized with your headless-CMS or committed and pushed to the special `preview` branch in your git repository if your site stores its content in Git. This synchronization also works the other around - Stackbit preview immediately reflects any changes you make to your content within the headless-CMS or Git. Stackbit never stores your content and always gets it from where you keep it. We believe in the idea that everyone should own their content.

### <a href="#wysiwyg_editing_with_no_code_changes" class="hash-link"><span class="icon-copy"></span></a>WYSIWYG Editing with No Code Changes

While editing your site content, you can enjoy the automatic on-page editing functionality. In most cases, you don't need to do anything special for this functionality to work. And in case your site doesn't use any headless-CMS, you will only need to define your site's content model in stackbit.yaml, and the rest are on us.

### <a href="#your_own_deployment" class="hash-link"><span class="icon-copy"></span></a>Your Own Deployment

Stackbit doesn't intervene with your existing CI/CD tools. Once you decide to publish changes, Stackbit will publish objects in your headless-CMS and/or merge the `preview` branch into the `main` branch. Your deployment tool will handle the rest according to how you defined it. For example, your serverless deployment platform might trigger new deployment when a new commit is pushed to the `main` branch or when the headless-CMS calls one of its "content-publish" webhooks.

## Did you find this page useful?

## Jump to Section

- [How Stackbit Works](#how_stackbit_works)
  - [Content Ownership and Bidirectional Content Sync](#content_ownership_and_bidirectional_content_sync)
  - [WYSIWYG Editing with No Code Changes](#wysiwyg_editing_with_no_code_changes)
  - [Your Own Deployment](#your_own_deployment)
