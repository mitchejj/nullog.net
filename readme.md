Right now this readme is a guide to help me think through issues and document a thought process.

Thinking about using subtrees over submoudles for the backlog and maybe even weblog and the journal. For this it looks like https://github.com/ingydotnet/git-subrepo is the best choice.

will use src/subrepo/<something> as the landing spot, or so I thought... I think that leads to layout that doesn't seem logical to keep a mental model up-to-date.

`git subrepo clone src/backlog`
`git subrepo push src/backlog`
`git subrepo pull src/backlog`

For backlog need to import from soggy and add a file 'backlog.json' with

    {
        "layout": "layout/base.hbs",
        "permalink": "{{ path }}",
        "hasDate": true,
        "non-index": true,
        "hasWarning": true
    }

should change from non-index to isIndex

weblog
    weblog.json
    should have isDraft false then use draft in daate location





The includes dir
* _includes
    * layouts/
       * base.hbs -- generic page type 
    * partials/
        * components/
            * header.hbs -- top head
            * services.hbs -- links to online me
        * html/
            * header.hbs -- the html header
            * footer.hbs -- page footer
    * skel.hbs
    * index.hbs
