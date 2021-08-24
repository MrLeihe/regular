/**
 * 校验是否为合法的邮箱格式
 *
 * @param {string} sEmail 邮箱字符串
 * @returns {boolean}
 * @example
 *
 * isEmail('frontend@nowcoder.com.cn')
 * // => true
 */
export const isEmail = (sEmail) => {
  var reg = /^[\w\.]+@\w+\.\w+\.?\w*$/
  return reg.test(sEmail)
}
