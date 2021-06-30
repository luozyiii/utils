/**
 * 延迟多少毫秒后继续执行
 * @return {Promise}
 */

export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
