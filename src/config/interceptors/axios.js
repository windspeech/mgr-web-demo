/* 
 * axios封装
 */
// 提示框组件
import { Notification } from 'element-ui';
import store from '@/plugins/store';

// 请求拦截器
export function requestSuccessFunc(config) {
  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header上加token，不用每次请求都手动添加
  // 即使本地存在token，也有可能是过期的，所以在响应拦截器中要对返回状态进行判断
  const token = store.state.token;
  token && (config.headers.Authorization = token);
  return config;
}

export function requestFailFunc(error) {
  return Promise.reject(error);
}

// 响应拦截器
export function responseSuccessFunc(response) {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}
export function responseFailFunc(error) {
  if (error.response.status) {
    switch (error.response.status) {
      // 401:未登录
      // 未登录则跳转到未登录
      // 在登录成功后返回当前页面，这一步需要在登录页操作
      case 401:
        // router.replace({
        //   path: '/login',
        //   query: {
        //     redirect: router.currentRoute.fullPath
        //   }
        // });
        break;
        // 403：token过期
        // 登录过期需对用户提示
        // 清除本地token和清空vuex中token对象
        // 跳转到登录页
      case 403:
        Notification.error({
          message: '登录身份过期，请重新登录。'
        });
        // 清除token
        localStorage.removeItem('token');
        store.commit('loginSuccess', null);
        // 跳转到登录页面，并将要浏览的页面fullPath传过去，登录成功跳转需要访问的页面
        setTimeout(() => {
          // router.replace({
          //   path: '/login',
          //   query: {
          //     redirect: router.currentRoute.fullPath
          //   }
          // });
        }, 1000);
        break;
      // 404页面不存在
      case 404:
        Notification.error({
          message: '网络请求不存在'
        });
        break;
      // 其他错误，抛出错误提示
      default:
        Notification.error({
          message: error.response.data.message
        });
    }
    return Promise.reject(error.response);
  }
}
