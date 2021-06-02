import { sleep } from './index';

test('测试 sleep 方法', async () => {
  const result = await sleep();
  expect(result).toBe(undefined);
});
