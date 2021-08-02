/**
 * 判断是否是对象
 * @param {Object} obj 对象
 */
export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
