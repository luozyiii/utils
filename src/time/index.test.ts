import { sleep } from './index';

it('测试 sleep 函数延迟是否成功', async () => {
  const mockCallback = jest.fn();

  setTimeout(mockCallback, 1000); // <= pass mockCallback as first argument

  expect(mockCallback).not.toHaveBeenCalled(); // Success!

  await sleep(1000);

  expect(mockCallback).toHaveBeenCalled(); // Success!
});
