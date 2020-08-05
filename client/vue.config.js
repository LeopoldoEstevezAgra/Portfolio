const path = require('path');

module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: path.resolve(__dirname,'../api/public'),
  devServer: {
    proxy: {
      '': {
        target: 'http://localhost:5000'
      }
    }
  }
};
