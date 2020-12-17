/*
    Used in core.njk
    Functionally: takes 'some.thing' and returns 'some'
    Purpose: core.njk holds the logic as to which layout is needed
    i.e. if layout is page.njk
      we need need the page/body.njk to render the page
    or if layout is index.njk
      no page uses index.njk --- index comes from src/{weblog,journal,backlog}.md

*/
module.exports = function (string) {
  return string.replace(/\.[^/.]+$/, '')
}
