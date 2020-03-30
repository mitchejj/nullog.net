const cssnano_options = {
    preset: ['default', {
        discardComments: {
            removeAll: true,
        },
    }]
}

/* this is 'inspired' by
 * https://flaviocopes.com/tailwind-setup/
 */
const purgecss_options = {
    content: ['./build/**/*.html'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}

const plugins = [
    require('tailwindcss'),
    require('postcss-nested'),
]

if (process.env.NODE_ENV === 'production') {
    plugins.push (
        require('autoprefixer'),
        require('cssnano')(cssnano_options),
        require('@fullhuman/postcss-purgecss')(purgecss_options),
    )}

module.exports = {
    plugins
};

