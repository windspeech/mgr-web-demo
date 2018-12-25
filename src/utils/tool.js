'use strict'

var toString = Object.prototype.toString

/**
 * 判断是否是数组
 *
 * @param {Object}
 * @returns {boolean} 返回bool值
 */
export const isArray = (val) => {
  return toString.call(val) === '[object Array]'
}

/**
 * 判断值是否为FormData
 *
 * @param {Object}
 * @returns {boolean}
 */
export const isFormData = (val) => {
  return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

export const isString = (val) => {
  return typeof val === 'string'
}

export const isNumber = (val) => {
  return typeof val === 'number'
}

export const isUndefined = (val) => {
  return typeof val === 'undefined'
}

export const isObject = (val) => {
  return val !== null && typeof val === 'object'
}

export const isDate = (val) => {
  return toString.call(val) === '[object Date]'
}

export const isFile = (val) => {
  return toString.call(val) === '[object File]'
}

export const isBlob = (val) => {
  return toString.call(val) === '[object Blob]'
}

export const isFunction = (val) => {
  return toString.call(val) === '[object Function]'
}

export const forEach = (obj, fn) => {
  if (obj === null || typeof obj === 'undefined') {
    return
  }
  if (typeof obj !== 'object' && !isArray(obj)) {
    obj = [obj]
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn(obj[i], i, obj)
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn(obj[key], key, obj)
      }
    }
  }
}
/**
 * 合并对象，键相同的取后面对象的值
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
export const merge = function () {
  var result = {}

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val)
    } else {
      result[key] = val
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue)
  }
  return result
}

/**
 * 判断一值是否存在数组里
 ***/
export const inArray = (val, arr) => {
  for (let k in arr) {
    if (arr[k] === val) return true
  }
  return false
}
/**
 * 判断一个对象是否为空
 ***/
export const isEmptyObject = (obj) => {
  for (let i in obj) {
    return false
  }
  return true
}
/**
 * 判断变量是否为空；定义: "",NaN,null,undefined,[],{}
 **/
export const isEmpty = (variate) => {
  if (typeof variate === 'number') return isNaN(variate)
  if (typeof variate === 'string') return !variate
  if (variate === null) return true
  if (variate === undefined) return true
  if (variate instanceof Array) return !variate.length
  // Date类型无法遍历
  if (variate instanceof Date) return false
  if (variate instanceof Object) {
    for (let i in variate) {
      return false
    }
    return true
  }
  return false
}

/**
 * 返回对象指定键对象
 **/
export const Obj = (o) => {
  return {
    get: (keys) => {
      let newObj = {}
      for (let i in keys) {
        newObj[keys[i]] = o[keys[i]]
      }
      return newObj
    },
    exclude: (keys) => {
      let newObj = {}
      for (let k in o) {
        if (!inArray(k, keys)) {
          newObj[k] = o[k]
        }
      }
      return newObj
    },
    // 去除指定值的键
    excludeVal: (val) => {
      if (o instanceof Array) {
        for (let i in o) {
          if (o[i] === val) {
            o.splice(i, 1)
          }
        }
      } else {
        for (let i in o) {
          if (o[i] === val) {
            delete o[i]
          }
        }
      }
      return o
    },
    // 判断对象键值对是否匹配
    isMatch: (obj) => {
      for (let k in obj) {
        if (o[k] !== obj[k]) {
          return false
        }
      }
      return true
    },
    isEmpty: isEmptyObject
  }
}
/**
 * 时间格式化
 ***/
export const format = (time, format) => {
  var t = new Date(time)
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    let str = ''
    switch (a) {
      case 'yyyy':
        str = tf(t.getFullYear())
        break
      case 'MM':
        str = tf(t.getMonth() + 1)
        break
      case 'mm':
        str = tf(t.getMinutes())
        break
      case 'dd':
        str = tf(t.getDate())
        break
      case 'HH':
        str = tf(t.getHours())
        break
      case 'ss':
        str = tf(t.getSeconds())
        break
    }
    return str
  })
}
/**
 * 去除两边的字符
 * @param {str} string 必须
 * @param {ch} string - 可选，要去除的字符串，默认是去除\s
 * @param {nch} string - 可选，替换成字符串，默认是空格
 * @returns {string} 返回字符串
 **/
export const trim = function (str, ch, rch) {
  if (typeof str !== 'string') {
    throw new Error('传入参数不是字符串')
  }
  if (ch) {
    var reg = new RegExp('(^\\' + ch + '+)|(\\' + ch + '+$)', 'g')
  } else {
    return str.replace(/(^\s+)|(\s+$)/g, '')
  }
  if (ch && rch) {
    return str.replace(reg, rch)
  } else {
    return str.replace(reg, '')
  }
}

/**
 * 去除左边的字符
 * @param {str} string 必须
 * @param {ch} string - 可选，要去除的字符串，默认是去除\s
 * @param {nch} string - 可选，替换成字符串，默认是空格
 * @returns {string} 返回字符串
 **/
export const ltrim = function (str, ch, nch) {
  if (typeof str !== 'string') {
    throw new Error('传入参数不是字符串')
  }
  if (ch) {
    var reg = new RegExp('(^\\' + ch + '+)', 'g')
  } else {
    return str.replace(/(^\s+)/g, '')
  }
  if (ch && nch) {
    return str.replace(reg, nch)
  } else {
    return str.replace(reg, '')
  }
}
/**
 * 去除右边的字符
 * @param {str} string 必须
 * @param {ch} string - 可选，要去除的字符串，默认是去除\s
 * @param {nch} string - 可选，替换成字符串，默认是空格
 * @returns {string} 返回字符串
 **/
export const rtrim = function (str, ch, nch) {
  if (ch) {
    var reg = new RegExp('(\\' + ch + '+$)', 'g')
  } else {
    return str.replace(/(\s+$)/g, '')
  }
  if (ch && nch) {
    return str.replace(reg, nch)
  } else {
    return str.replace(reg, '')
  }
}

// 触发下载文件
export const downloadFile = (data, op) => {
  let blob = new Blob([data], {
    'type': op.type || 'text/plain,charset=utf-8'
  })
  let a = document.createElement('A')
  a.href = window.URL.createObjectURL(blob)
  a.download = op.name
  a.style.display = 'none'
  // for firfox
  document.body.appendChild(a)
  a.click()
  // 移除连接
  if (op.time) {
    setTimeout(function () {
      window.URL.revokeObjectURL(a.href)
      a.remove()
    }, 5000)
  }
}

// 数组去重 (获取没重复的最右一值放入新数组)
export const arrDeWeight = (arr) => {
  var t = []
  var len = arr.length
  var i = 0
  var j = 0
  for (; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        j = ++i
      }
    }
    t.push(arr[i])
  }
  return t
}

// 取num1~num2的随机数 取得到num1,num2
export function rand(num1, num2) {
  return parseInt(Math.random() * (num2 - num1 + 1) + num1)
}

// 进入全屏
export function requestFullScreen() {
  var elem = document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen()
  } else if (elem.msRequestFullscreen) {
    // elem.msRequestFullscreen() 没有指定元素
    document.body.msRequestFullscreen()
  }
}
// 退出全屏
export function exitFullscreen() {
  var doc = document
  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  } else if (doc.webkitCancelFullScreen) {
    doc.webkitCancelFullScreen()
  } else if (doc.msExitFullscreen) {
    document.msExitFullscreen()
  }
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}