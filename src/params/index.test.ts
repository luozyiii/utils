import { getParamFromURL, formatUrl } from './index';

test('测试 getParamFromURL 方法', () => {
  let url = 'https://alibaba.com?a=1&b=2&c=3#/abc/def?a=2&b=3&c=4';
  let a = getParamFromURL(url, 'a');
  expect(a).toBe('1');
});

test('测试 formatUrl 方法', () => {
  let url = 'https://alibaba.com?a=1&b=2&c=3#/abc/def?a=2&b=3&c=4';
  let obj = formatUrl(url);
  expect(obj).toEqual({ a: '1', b: '2', c: '3#/abc/def' });
});
