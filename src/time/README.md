#### sleep

```javascript
/**
 * demo1 配合async/await 关键字 使用
 */
(async function () {
  console.log('开始, ' + new Date());
  await sleep(3000);
  console.log('继续, ' + new Date());
})();

/**
 * demo2
 */
sleep(3000).then(() => {
  // 这里写sleep之后需要去做的事情
});
```
