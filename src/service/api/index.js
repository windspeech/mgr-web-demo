/* 
 * api接口统一管理
 */
import { get, post } from '@/plugins/axios';

// demo
export const fetchUserInfo = p => get('/info', p);
export const postUserInfo = p => post('/info', p);
// 调用
// import { apiDemo } from '@/request/api';
// apiDemo({
// page: 1,
// pageSize: 10
// }).then(res => {
// 获取数据成功
// ...s
// })
