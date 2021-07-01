import { getDevice } from './index';

test('测试 getDevice 方法', () => {
  expect(getDevice()).toBe('unknown');
});
