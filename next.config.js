const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  env: {
    HEROKU_RELEASE_VERSION: process.env.HEROKU_RELEASE_VERSION,
  },
});
