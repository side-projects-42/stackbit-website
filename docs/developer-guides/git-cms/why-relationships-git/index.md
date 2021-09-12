This app works best with JavaScript enabled.



























![Stackbit](/docs/images/stackbit-crane-sm.png)

Making Content Scalable and Easy to Edit with Content References
================================================================

Let's imagine a simple blog site that has multiple authors. The post data model might contain the following data:

-   Title
-   Date Posted
-   Description
-   Body
-   Author

In most cases, `author` will represent more than just a string with the name. However, we want to include a photo, a bio, social media profile links with our post. So let's update the content model:

-   Title
-   Date Posted
-   Description
-   Body
-   Author Name
-   Author Photo
-   Author Bio
-   Author Twitter

This works, but what happens when the author has 10 posts...or 100? The first problem is I will need to reenter the author information in each entry. The second problem is that I will need to update every entry each time any of this information changes. The third problem is that I want to display authors on a "contributors" page and there's no easy way to get just a list of authors.

This is where relationships come in. Instead of putting the information in each entry, I would create an author content type:

-   Name
-   Photo
-   Bio
-   Twitter

And then the `author` field of the post content type would actually be a reference to the author record. In a database, this might be a foreign key reference to the ID of the author (i.e. the author record's primary key). But in a git-based CMS, author may just an entry in a JSON file or even just Markdown file with frontmatter.

Did you find this page useful?
------------------------------





Jump to Section
---------------











