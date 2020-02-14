const fs = require("fs")
const { DateTime } = require("luxon");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownItAnchor = require("markdown-it-anchor");


module.exports = function(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItClass = require('@toycode/markdown-it-class');

  const options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  const mapping = {
    h1: ['md-h1', 'f1', 'code', 'lh-title'],
    h2: ['md-h2', 'f2', 'code', 'tracked', 'lh-title'],
    h3: ['md-h1', 'f3', 'code', 'tracked', 'lh-title'],
    h4: ['md-h2', 'f4', 'code', 'tracked', 'lh-title'],
    h5: ['md-h1', 'f5', 'code', 'tracked', 'lh-title'],
    h6: ['md-h2', 'f6', 'code', 'tracked', 'lh-title'],
    p: ['md-text', 'fs-normal', 'lh-copy', 'measure-s', 'measure-wide-ns'],
    a: ['md-link', 'no-underline', 'link', 'dim', 'dark-blue'],
    code: ['md-code', 'bg-washed-blue'],
    em: 'tag'

      
  };

  const md = markdownIt(options)
    .use(markdownItClass, mapping);

  
  eleventyConfig.setLibrary("md", md);
  return {
    dir: {
      input: "src",
      output: "_site_"
    }
  }
};

// # https://www.11ty.dev/docs/config/
