module.exports = {
  devServer: {
    port: 3000,
    // 代理转发
    proxy: {
      '/': {
        target: 'http://127.0.0.1:3000',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  },
  outputDir: 'dist', // 生产环境构建文件的目录
  assetsDir: 'static', // 生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  productionSourceMap: true, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // configureWebpack: {},
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('components', resolve('src/components'))
  //     .set('layout', resolve('src/layout'))
  //     .set('base', resolve('src/base'))
  //     .set('static', resolve('src/static'))
  // },
  css: {
    sourceMap: false
  },
  // 多页面配置
  pages: {
    index: {
      // page 的入口
      entry: 'src/apps/index.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    office: {
      // page 的入口
      entry: 'src/apps/main.js',
      // 模板来源
      template: 'public/office.html',
      // 在 dist/office.html 的输出
      filename: 'office.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'office Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'office']
    },
    students: {
      // page 的入口
      entry: 'src/apps/main.js',
      // 模板来源
      template: 'public/students.html',
      // 在 dist/students.html 的输出
      filename: 'students.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'students Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'students']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/apps/index.js'
  }
}