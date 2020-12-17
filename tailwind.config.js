module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './build/**/*.html'
    ]
  },
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
      square: 'square'
    },
    fontFamily: {
      code: 'Consolas, monaco, monospace',
      system_sans: 'sans-serif',
      system_serif: 'serif'
    }
  }
}
