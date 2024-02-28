<div align="center"> <a href="https://github.com/syh-micro-build/mb-admin"> <img width="100" src="./public/logo.png"> </a> <br> <br>

[![license](https://img.shields.io/github/license/syh-micro-build/mb-admin.svg)](LICENSE) [![repo-size](https://img.shields.io/github/repo-size/syh-micro-build/mb-admin.svg)](repo-size) [![last-commit](https://img.shields.io/github/last-commit/syh-micro-build/mb-admin.svg)](last-commit) [![stars](https://img.shields.io/github/stars/syh-micro-build/mb-admin.svg)](stars) [![forks](https://img.shields.io/github/forks/syh-micro-build/mb-admin.svg)](forks) [![release](https://img.shields.io/github/release/syh-micro-build/mb-admin.svg)](release) [![watchers](https://img.shields.io/github/watchers/syh-micro-build/mb-admin.svg)](watchers)

<h1>mb-admin</h1>
</div>

## 介绍

mb-admin 是一个基于 `element-plus` 免费开源的中后台模版。使用了最新的`vue3`，`vite`，`TypeScript`等主流技术开发，开箱即用的中后台前端解决方案，可以用来作为项目的启动模版，也可用于学习参考。并且时刻关注着最新技术动向，尽可能的第一时间更新。

mb-admin 的定位是后台集成方案，不太适合当基础模板来进行二次开发。因为集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不关注这方面的问题，也可以直接基于它进行二次开发。

## 特性

- **最新技术栈**：使用 Vue3 + vite5 + vueRouter + pina 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **主题**: 可配置的主题
- **自定义数据** 内置 Mock 数据方案
- **权限** 内置完善的动态路由权限生成方案
- **组件** 二次封装了多个常用的组件
- **示例** 内置丰富的示例

## 前序准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) - 项目开发环境
- [Vite](https://vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [Vue-Router-Next](https://next.router.vuejs.org/) - 熟悉 vue-router 基本使用
- [Element-Plus](https://element-plus.org/) - element-plus 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - mockjs 基本语法

## 安装和使用

- 获取代码

```bash
git clone https://github.com/syh-micro-build/mb-admin.git
```

- 安装依赖

```bash
cd mb-admin

npm install

npm run prepare
```

- 运行

```bash
npm run dev
```

- 打包

```bash
# 开发环境
npm run build dev

# 测试环境
npm run build test

# 生产环境
npm run build pro
```

- 打包后预览

```bash
# 开发环境
npm run preview dev

# 测试环境
npm run preview test

# 生产环境
npm run preview pro
```

- 提交代码

```bash
git add .

npx cz
```

## 如何贡献

<a href="https://github.com/syh-micro-build/mb-admin/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=syh-micro-build/mb-admin" />
</a>

你可以[提一个 issue](https://github.com/syh-micro-build/mb-admin/issues/new) 或者提交一个 Pull Request。

**Pull Request:**

1. Fork 代码
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交 `pull request`

## Git 贡献提交规范

- `feat`: ✨ 新增功能 | A new feature'
- `fix`: 🐛 修复缺陷 | A bug fix'
- `docs`: 📝 文档更新 | Documentation only changes'
- `style`: 💄 代码格式 | Changes that do not affect the meaning of the code'
- `refactor`: ♻️ 代码重构 | A code change that neither fixes a bug nor adds a feature'
- `perf`: ⚡️ 性能提升 | A code change that improves performance'
- `test`: ✅ 测试相关 | Adding missing tests or correcting existing tests'
- `build`: 📦️ 构建相关 | Changes that affect the build system or external dependencies'
- `ci`: 🎡 持续集成 | Changes to our CI configuration files and scripts'
- `chore`: 🔨 其他修改 | Other changes that do not modify src or test files'
- `revert`: ⏪️ 回退代码 | Revert to a commit'

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 许可证

[MIT](./LICENSE)