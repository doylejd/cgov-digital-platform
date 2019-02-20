const path = require('path');

module.exports = {
    "Common": path.resolve(__dirname, "src/entrypoints/global/Common.js"),
    "Article": path.resolve(__dirname, "src/entrypoints/article/Article.js"),
    "Homelanding": path.resolve(__dirname, "src/entrypoints/homelanding/Homelanding.js"),
    "PDQ": path.resolve(__dirname, "src/entrypoints/pdq/PDQ.js"),
}