// Babel configuration file (Don't change anything if not sure)
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
