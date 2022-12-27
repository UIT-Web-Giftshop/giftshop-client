const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    port: 80,
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
