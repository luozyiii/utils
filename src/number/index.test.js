import { toThousands, formatNum } from './index';

test('测试 toThousands 方法', () => {
  expect(toThousands(12345.6)).toBe('12,345.6');
});

test('测试 formatNum 方法', () => {
  expect(formatNum(20210.0)).toBe('20210.00');
  expect(formatNum(20210.010009)).toBe('20210.01');
});
