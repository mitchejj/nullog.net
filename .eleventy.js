const fs = require("fs")
const { DateTime } = require("luxon");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownItAnchor = require("markdown-it-anchor");
function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        ui: false,
        ghostMode: false
    });
    const markdownIt = require("markdown-it");
    const markdownItClass = require('@toycode/markdown-it-class');

  const options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  const mapping = {
    code: ['md-code'],
    em: ['tag']
  };

  const md = markdownIt(options)
    .use(markdownItClass, mapping);
    
  eleventyConfig.addFilter("debug", function(value) {
      return `<xmp>${JSON.stringify(value || "NOTHING", null, 2)}</xmp>`;
  });
  eleventyConfig.addFilter("short_date", function(value) {
        let date = new Date(value);
        let result = pad(date.getFullYear()) + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
        return result;
  });
eleventyConfig.addFilter("rfc3339", function(value) {
    const date = new Date(value);
    const result = date.toISOString();   
    return result;
  });
    
eleventyConfig.addCollection("_journal", function(collection) {
    return collection.getFilteredByGlob("src/journal/*.md");
  });
eleventyConfig.addCollection("backlog", function(collection) {
    return collection.getFilteredByGlob("src/subrepo/backlog/*.md");
  });

  eleventyConfig.setLibrary("md", md);
  return {
    dir: {
      input: "src",
      output: "_site_"
    }
  }
};

// # https://www.11ty.dev/docs/config/
