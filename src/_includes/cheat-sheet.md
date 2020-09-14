## Guide to my `_includes`

When I moved to 11ty I opted to use handelbars as the templating system. I knew it was a second class citizen, but I knew it better than nunjucks. I wanted to get something off the ground quickly. As a result my layouts/partials became a messy rats nest I wasn't sure what was what. 

**2020-09** Time to refactor the templates to make sense, document it (here), and move to nunjucks.

* core/
    * html/
        * icons.njk --- provides the icons/favicon
        * link.njk --- provides stylesheet, cononical ref, etc
        * meta.njk --- provides page metadata
        * open_graph.njk --- provides the the open graph tags
        * twitter.njk --- provides the twitter card tags
    * core_footer.njk -- the page footer
    * core_header.njk -- picks which header to use for page.njk
    * html_header.njk -- the raw html head tag, includes core/html
* index/
    * header.njk --- inclued by core/core_header.njk if page is an index page
* landing/
    * body.njk
    * header.njk
* page/
    * body.njk
    * header.njk
    * weblog-warning.njk
* core.njk --- this is the base upon what all other pages come from
* index.njk --- null
* landing.njk --- the landing page at / aka splash page
* page.njk --- if its not special (landing) its a page
