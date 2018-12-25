import Vue from 'vue';
import NProgress from 'nprogress';
import Router from 'vue-router';
import routerBeforeEachFunc from '@/config/interceptors/router';
// import AppView from '@/components/app-view';
const page = name => () => import('@/views/' + name);

Vue.use(Router);
// 注入默认配置和路由表
let routerInstance = new Router({
  routes: [
    {
      path: '',
      name: '',
      component: page('home/Home')
    }
  ]
});
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc);

routerInstance.afterEach(() => {
  setTimeout(() => {
    NProgress.done();
  });
});

export default routerInstance;
