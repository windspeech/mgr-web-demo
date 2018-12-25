import axios from 'axios';
// 序列化post类型的数据
import QS from 'qs';
import {
  requestSuccessFunc,
  requestFailFunc,
  responseSuccessFunc,
  responseFailFunc
} from '@/config/interceptors/axios';

// 环境切换
// if (precess.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '/api'
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = '/api';
// }

// 请求超时时间设置
// 10s
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';

// 注入请求拦截
axios.interceptors.request.use(requestSuccessFunc, requestFailFunc);

// 注入失败拦截
axios.interceptors.response.use(responseSuccessFunc, responseFailFunc);

/* 
 * get方法，对应get请求
 * @param {string} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/* 
 * post方法，对应post请求
 * @param {string} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
