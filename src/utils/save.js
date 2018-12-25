/**
 * [nameKey 命名空间]
 * @type {String}
 */
let nameKey = 'BNJ_';

/**
 *存储到cookie的方法
 *
 * @param {[Object]} json => {uid: 1, sid: 2}
 * @param {int} dayNum Int dayNum 天数  默认365
 * path为'/'
 */
export function setCookie(json, dayNum) {
  let limit = new Date();
  limit.setDate(limit.getDate() + (dayNum || 365));
  for (let i in json) {
    document.cookie = `${escape(i)}=${escape(
      json[i]
    )};expires=${limit.toGMTString()};path=/`;
  }
}

/**
 * 获取cookie
 *
 * @param {[String]} name cookie 名称
 * @returns value
 */
export function getCookie(name) {
  let arr = null;
  arr = document.cookie.match(new RegExp('(^|\\W)' + name + '=([^;]*)(;|$)'));
  if (arr != null) return unescape(arr[2]);
  return '';
}

/**
 * 删除指定的cookie的值
 *
 * @param {[Object]} key => 字符串、数组 默认为空 清空cookie
 */
export function clearCookie(key) {
  if (typeof key === 'string') {
    let date = new Date(0).toGMTString();
    document.cookie = `${key}=null;expires=${date};path=/`;
  } else if (Array.isArray(key)) {
    key.forEach(i => {
      clearCookie(i);
    });
  } else {
    let cookies = document.cookie.split(';');
    cookies.forEach(ck => {
      let k = ck.trim().split('=')[0];
      clearCookie(k);
    });
  }
}

/**
 * 获取 localstroage 值
 *
 * @param {[string]} key
 * @returns [value]
 */
export function getItem(key) {
  let data = JSON.parse(localStorage.getItem(nameKey + key));
  return data && data.data;
}

/**
 * 存储 localstroage 值
 *
 * @param {[string]} key [key值]
 * @param {[All]} value [value值]
 */
export function setItem(key, value) {
  let data = {
    data: value
  };
  try {
    localStorage.setItem(nameKey + key, JSON.stringify(data));
  } catch (e) {
    // console.log(e);
  }
}

/**
 * 删除内存中的数据
 *
 * @param {[Object]} keys
 */
export function removeItem(keys) {
  if (Array.isArray(keys)) {
    keys.map(item => {
      localStorage.removeItem(nameKey + item);
    });
  } else if (typeof keys === 'string') {
    localStorage.removeItem(nameKey + keys);
  } else {
    localStorage.clear();
  }
}
