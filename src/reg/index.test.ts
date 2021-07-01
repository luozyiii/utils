import { isIDCard, isMobile, isEmail } from './index';

test('测试 isIDCard 方法', () => {
  expect(isIDCard('110105197310225518')).toBe(true);
  expect(isIDCard('110105197310225518X')).toBe(false);
});

test('测试 isMobile 方法', () => {
  expect(isMobile('18825040666')).toBe(true);
  expect(isMobile('11111111111')).toBe(false);
});

test('测试 isEmail 方法', () => {
  expect(isEmail('924361501@qq.com')).toBe(true);
  expect(isEmail('924361501q.com')).toBe(false);
});
