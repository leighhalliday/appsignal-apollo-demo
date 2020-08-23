const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(["HEROKU_RELEASE_VERSION"])
    );
    return config;
  },
});
