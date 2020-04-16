const PostCompilePlugin = require('webpack-post-compile-plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  // pluginOptions: {
  //   'cube-ui': {
  //     postCompile: false,
  //     theme: false
  //   }
  // }

  // cube-ui不兼容问题
  chainWebpack: config => {
    const conf = config.toConfig()
    config
      .plugin('post-compile')
      .use(PostCompilePlugin, [{
        config: {
          module: {
            rules: [...conf.module.rules]
          }
        }
      }])
      .end()
      .plugin('transform-modules')
      .use(TransformModulesPlugin)
  },

  configureWebpack: {
    devServer: {
      before(app) {
        //模拟后台服务器  express
        app.get('/api/login', function(req, res) {
          const { username, pwd } = req.query;
          console.log(username, pwd);

          if(username == 'ray' && pwd == '123456') {
            res.json({ code: 200, token: 'abcde' });
          }else {
            res.status(401).json({ code: 500, message: '用户名或密码错误'})
          }
        });

        //保护接口的中间件
        function auth(req, res, next) {
          if(req.headers.token) {
            next()
          }else {
            //用户未授权
            res.sendStatus(401)
          }
        }
        //获取登录用户信息
        app.get('/api/userinfo', auth, function(req, res) {
          res.json({ code: 200, data: { name: 'tom', age: 20} })
        });
      }
    }
  }
}
