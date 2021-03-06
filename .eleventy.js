const format = require('date-fns/format');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/*.ico");
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");

  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  })

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  }
};