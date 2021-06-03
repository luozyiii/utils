# utils

基于 rollup 封装常用的工具函数

### 开始

- 安装依赖

```javascript
yarn add rollup -D

yarn add rollup-plugin-node-resolve -D
yarn add rollup-plugin-commonjs -D
yarn add rollup-plugin-json -D

yarn add @babel/node -D
yarn add @babel/core -D
yarn add @babel/preset-env -D

yarn add rollup-plugin-babel -D

yarn add rollup-plugin-terser -D
```

### 项目中使用了 async/await， 报错 regeneratorRuntime is not defined

- 报错原因
  这个报错表面上是由于 async function 语法被 babel 转译之后的代码使用了 regeneratorRuntime 这个变量，但是这个变量在最终的代码里未定义造成的报错。

- 方案
  正确的做法是使用按需加载，将 useBuiltIns 改为 "usage"，babel 就可以按需加载 polyfill，并且不需要手动引入 @babel/polyfill

```javascript
yarn add core-js@3 -D

// .babelrc 配置更新  useBuiltIns 按需引入 polyfill
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
        "debug": false
      }
    ]
  ]
}

```

### Jest 前端自动化测试

> 保证代码质量

- 简单使用

```javascript
// 安装
yarn add jest -D
// package.json
"scripts": {
  "test": "jest"
},
// 新建 .test.js文件 编写测试用例
```

- 修改 jest 配置

```javascript
// 运行
yarn jest --init
// 根据需求选择 后根目录生成jest.config.js
```

### 发布到 npm

```javascript
// 获取当前npm包镜像地址
npm get registry

// 设置回官方地址
npm config set registry https://registry.npmjs.org/

// 设置淘宝镜像地址
npm config set registry http://registry.npm.taobao.org/

// 登录
npm login

// 发布私有域的包
npm publish --access=public

// 24小时内可撤销包；删除已在 npm 发布的同名包，需要在24小时后才能重新发布
npm unpublish --force
```