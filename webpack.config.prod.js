const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",

  optimization: {
    chunkIds: "deterministic",
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin(), "..."],
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },

  devtool: false,
});
