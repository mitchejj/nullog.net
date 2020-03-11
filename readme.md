Right now this readme is a guide to help me think through issues and document a thought process.

Thinking about using subtrees over submoudles for the backlog and maybe even weblog and the journal.


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
