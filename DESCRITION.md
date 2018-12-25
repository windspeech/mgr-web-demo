/*
*
*
*
*
*
*/

## 所有的HTTP请求放在一起统一管理
## 日志服务、本地存储服务、错误监控、Mock服务等统一存在公共服务层


## 不允许在个模块内部直接调用其他模块的Dispatch方法（写操作、变更其他模块的state）
## 不允许在一个模块内部直接读取其他模块的state方法（读操作）

TSLint
stylelint
Document This
EditorConfig for VS Code
Prettier - Code formatter
Debugger for Chrome


src
|—— assets                    // 资源目录 图片、样式、iconfont
|—— apps                      // 模块入口文件
|—— components                // 全局通用组件目录
|—— config                    // 项目配置、拦截器
|—— directives                // 拓展指令集合
|—— plugins                   // 插件相关
|—— routes                    // 路由配置
|—— service                   // 服务层
|—— utils                     // 工具类
|—— views                     // 视图层

components
|—— cm1
|—— cm2
|__ ...

views
|—— Office
    |—— index.vue
    |—— message
        |—— list.vue
        |—— add-message.vue
        |—— ...
|—— Recruit
|—— ...

config
|—— index.js                  // 全局配置
|—— interceptors              // 拦截器
    |—— index.js              // 入口文件
    |—— axios.js              // 请求、响应拦截
    |—— router.js             // 路由拦截
    |__ ...
|__ ...

service
|—— api
    |—— index.js               // 入口文件
    |—— office.js              // 办公接口配置
    |__ ...
|—— const.js                   // 常量枚举
|—— language                   // 国际化
|—— menuConfig                 // 菜单集
|—— store                      // vuex状态管理
|—— expands                    // 拓展
    |—— localstorage.js        // 本地存储，稍微封装下，支持存取对象即可
    |—— monitor.js             // 监控功能，调用api接口发送
    |—— log.js                 // 日志功能，调用api接口发送
    |__ ...
|__ ....

store
|—— index.js
|—— actions.js                 // 根 action
|—— mutations.js               // 根 mutation
|—— modules
    |—— user.js                // 用户模块
    |—— products.js            // 产品模块
    |__ ...
