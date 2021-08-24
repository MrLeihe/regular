import { isEmail } from '../lib/index'

test('校验字符串是否是合法的邮箱格式', () => {
  expect(isEmail('frontend@nowcoder.com.cn')).toBeTruthy()
  expect(isEmail('front.end@nowcoder.com')).toBeTruthy()
  expect(isEmail('frontend@nowcoder.com')).toBeTruthy()
  expect(isEmail('front end@nowcoder.com')).toBeFalsy()
  expect(isEmail('front@end@nowcoder.com')).toBeFalsy()
})
