const htmlmin = require('html-minifier')

module.exports = function (content, outputPath) {
  if (outputPath.endsWith('.html')) {
    const minified = htmlmin.minify(content, {
      collapseInlineTagWhitespace: false,
      collapseWhitespace: true,
      sortClassName: true,
      useShortDoctype: true,
      removeComments: true
    })
    return minified
  }
  return content
}
