/**
 * 获取手机操作系统类型
 * @return {string} ios android unknown
 */

export function getDevice() {
  var ua = navigator.userAgent;
  if (/Android|BlackBerry|IEMobile/i.test(ua)) {
    return 'android';
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    return 'ios';
  }
  return 'unknown';
}
