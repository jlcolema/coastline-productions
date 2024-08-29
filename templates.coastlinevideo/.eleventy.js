const CleanCSS = require("clean-css");
// const Terser = require("terser");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("cssmin", function(code) {

    return new CleanCSS({}).minify(code).styles;

  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("media");

  // eleventyConfig.addFilter("jsmin", function(code) {

  //   let minified = Terser.minify(code);

  //   if( minified.error ) {

  //     console.log("Terser error: ", minified.error);

  //     return code;

  //   }

  //   return minified.code;

  // });

};