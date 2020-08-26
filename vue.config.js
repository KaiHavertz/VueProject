'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = 8080
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false, // 改为false可一定程度上解决浏览器f12查看到源码的问题
  devServer: {
    disableHostCheck: true,
    port: port,
    overlay: {
      warnings: false,
      errors: true
    },
    //配置代理，所有  http://localhost:8080/api 走 http://localhost:8080/
    proxy: {
      '/wardemo': {
        target: `http://localhost:8081/wardemo`,
        changeOrigin: true, //是否允许跨域
        pathRewrite: {
          '^/wardemo': '/wardemo'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src') // 别名。开启后@表示src下目录
      }
    }
  },
}