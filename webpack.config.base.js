const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    fallback: {
      assert: require.resolve("assert"), // assert 모듈에 대한 폴리필 지정
    },
  },
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./src/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  // 모듈 처리 방식을 설정
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },

      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },

      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              // Sass 모듈을 사용하지 않도록 설정
              sassOptions: {
                // CSS 모듈을 비활성화
                modules: false,
              },
            },
          },
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: 8080,
    hot: true,
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
