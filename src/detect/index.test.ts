import { isObject } from './index';

test('测试 isObject 方法', () => {
  expect(isObject({ a: 1 })).toBe(true);
  expect(isObject('abc')).toBe(false);
});
