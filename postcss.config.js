const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  require('tailwindcss'),
  require('postcss-nested')
]

if (isProduction) {
  /* this is 'inspired' by
    https://flaviocopes.com/tailwind-setup/
  */

  // const purgecss_options = {
  //   content: ['./build/**/*.html'],
  //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  // }

  const nanoOptions = {
    preset: ['default', {
      discardComments: {
        removeAll: true
      }
    }]
  }
  plugins.push(
    require('autoprefixer'),
    require('cssnano')(nanoOptions)//,
    // require('@fullhuman/postcss-purgecss')(purgecss_options)
  )
}

module.exports = {
  plugins
}
