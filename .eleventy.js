
const rfc3339 = require('./utils/filters/rfc3339.js')
const shortDate = require('./utils/filters/shortDate.js')
const getDomain = require('./utils/filters/getDomain.js')
const _layout = require('./utils/filters/layout.js')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = function (eleventyConfig) {
  if (isProduction) {
    const minHtml = require('./utils/transforms/minHtml.js')
    eleventyConfig.addTransform('htmlmin', minHtml)
  }

  // Setting up Markdown It
  /* ********************************************************************* */
  const markdown = require('markdown-it')
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  }
  const md = markdown(markdownOptions)
  eleventyConfig.setLibrary('md', md)

  // Adding Filers
  /* ********************************************************************* */
  // eleventyConfig.addFilter('debug', function (value) {
  //   return `<xmp>${JSON.stringify(value || 'NOTHING', null, 2)}</xmp>`
  // })
  eleventyConfig.addFilter('layout', _layout)
  eleventyConfig.addFilter('rfc3339', rfc3339)
  eleventyConfig.addFilter('short_date', shortDate)
  eleventyConfig.addFilter('getDomain', getDomain)

  // Adding Collections
  /* ********************************************************************* */

  eleventyConfig.addCollection('_journal', function (collection) {
    return collection.getFilteredByGlob('src/journal/*.md')
  })
  eleventyConfig.addCollection('backlog', function (collection) {
    return collection.getFilteredByGlob('src/backlog/*.md')
  })
  eleventyConfig.addCollection('weblog', function (collection) {
    return collection.getFilteredByGlob('src/weblog/*.md')
  })

  // Plugin's
  /* ********************************************************************* */
  // {% link_to "something-slug %}
  eleventyConfig.addPlugin(require('eleventy-plugin-link_to'))

  eleventyConfig.addPassthroughCopy({ 'src/_assets/img': 'assets/img' })

  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    ghostMode: false
  })

  return {
    dir: {
      input: 'src',
      output: '_site_'
    }
  }
}

// # https://www.11ty.dev/docs/config/
