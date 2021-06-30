/**
 * 数字千分位处理
 * @param {String | Number} num 数字
 * @return {String} 格式的字符串,如'1,234,567.45'
 *
 * 另外：代码量最少的一种方法；需考虑兼容性
 * toLocaleString 方法（代码量最少的一种方法）
 * var num = 3600; num.toLocaleString()
 */

export function toThousands(num: number) {
  var str = num.toString();
  var reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, '$1,');
}

/**
 * 数字格式化，不进行四舍五入,默认保留2位小数点
 * @param {String | Number} num 数字
 * @param {String | Number} len 保留几位小数; 默认保留两位
 * @return {String} 格式的字符串,如 "20210.01"
 * var num = 20210.010009; formatNum(num)
 */

export function formatNum(num: number | string, len: number = 2) {
  if (typeof num === 'number') {
    num = String(num);
  }
  len = parseInt(String(len));

  const pad = new Array(len + 1).join('0');

  if (num.indexOf('e-') > 0) {
    num = '0' + String(Number(num) + 1).substr(1);
  }

  const arr = num.split('.');
  if (len < 1) {
    return arr[0];
  }
  arr[1] = (arr.length < 2 ? pad : arr[1] + pad).substr(0, len);
  return arr.join('.');
}
