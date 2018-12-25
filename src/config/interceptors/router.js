// config/interceptors/router.js
import NProgress from 'nprogress';
// import { Notification } from 'element-ui';
// import { getItem } from '@/utils/save';
export default function routerBeforeEachFunc(to, from, next) {
  // 这里可以做页面拦截，后台系统中在这里面做权限处理
  // let permits = getItem('permits') || [];
  // let curPermitId = ('' + to.meta.id) || '';
  // if (curPermitId && permits.indexOf(curPermitId) === -1) {
  //   Notification.error({
  //     message: '无权限操作'
  //   });
  //   return false;
  // }
  NProgress.start();
  // console.log(from)
  return next();
}
