/**
 * 校验十八位身份证号码
 * @param {*} idcard 身份证号码
 * @return {boolean} 验证结果true/false
 */

export function isIDCard(idcard) {
  let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(idcard);
}

/**
 * 校验手机号码
 * @param {*} mobile 身份证号码
 * @return {boolean} 验证结果true/false
 */

export function isMobile(mobile) {
  let reg = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/;
  return reg.test(mobile);
}

/**
 * 校验邮箱
 * @param {*} email 邮箱
 * @return {boolean} 验证结果true/false
 */

export function isEmail(email) {
  let reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
  return reg.test(email);
}
