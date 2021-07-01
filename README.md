# utils

基于 rollup + typescript 封装常用的工具函数

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

### 引入 typescript，增强代码的可读性

[link](https://www.tslang.cn/docs/home.html)

```javascript

// 安装支持typescript插件
yarn add -D typescript

// rollup-plugin-typescript2
yarn add rollup-plugin-typescript2 -D

// tslib
yarn add tslib -D

// rollup.config.js
import typescript from 'rollup-plugin-typescript2';

plugins: [
  typescript({
    exclude: 'node_modules/**',
    typescript: require('typescript'),
    useTsconfigDeclarationDir: true, // 自动生成types 声明
  }),
]

// 添加tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "lib": ["es2015", "es2016", "es2017", "dom"],
    "sourceMap": true,
    "declaration": true,
    "declarationDir": "lib/types",
    "typeRoots": ["node_modules/@types"],
    "moduleResolution": "node",
    "esModuleInterop": true
  },
  "exclude": ["./test", "./lib", "node_modules/"]
}

// package.json
"main": "lib/utils.umd.js",
"module": "lib/utils.esm.js",
"typings": "lib/types/index.d.ts",

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
// 根据需求选择后 根目录生成jest.config.js
```

- 支持 typesctipt 测试

```javascript
// 安装
yarn add -D ts-jest @types/jest
// .test.js 文件全部改成 .test.ts

// jest.config.js 增加配置
transform: {
  '^.+\\.tsx?$': 'ts-jest',
},
testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
```

### eslint 支持(备注：vue-cli 创建的项目如果有 eslint 支持，不添加 eslint 支持会引入失败)

```javascript
@typescript-eslint/parser
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

### npm 包发布到本地调试

```javascript
// 源npm包安装到本地
yarn link

// 卸载
yarn unlink "@leslie0403/utils"

// 在项目中使用 npm 包
yarn link "@leslie0403/utils"
```

### 小技巧-本地快速启动服务器 live-server or http-serve

```javascript
// 全局安装
npm install -g live-server
// 切换到项目根目录,启动服务
live-server ./
```
