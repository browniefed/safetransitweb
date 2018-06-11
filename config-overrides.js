const { rewireEmotion } = require("react-app-rewire-emotion");

module.exports = function override(config, env) {
  const isProd = process.env.NODE_ENV === "production";

  return rewireEmotion(config, env, {
    inline: !isProd,
    hoist: isProd,
    sourceMap: !isProd,
    autoLabel: !isProd,
  });
};
