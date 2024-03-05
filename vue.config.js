module.exports = {
  publicPath: './', //部署应用包时的基本 URL，此处设置为相对路径
  // productionSourceMap: false,//打包时不要映射文件
  // outputDir:'dist/demo',
  // 在此处修改应用名称
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '云原生应用平台22';
      return args;
    });
  },
  // 开发服务器的相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    open: true,
    proxy: {
      '/api': {
        target: 'http://215.9.53.61:8080', //开发时请求网关的url
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, //开启改变域名，后端通过request.getHeader("Host") 看不到请求本机域名，而是后端自己的域名
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
