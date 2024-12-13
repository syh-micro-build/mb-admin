# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.4.0](https://github.com/syh-micro-build/mb-admin/compare/v1.3.1...v1.4.0) (2024-12-13)


### 🔨  其他修改 | Chore

* :hammer: 更新依赖，重大更新 ([6441b21](https://github.com/syh-micro-build/mb-admin/commit/6441b2197a16594cb9e7ecc5c3b4a81685f93a12))
* **release:** 1.3.1 ([a39a1bc](https://github.com/syh-micro-build/mb-admin/commit/a39a1bced408dd9ae7054ae64d9fb300b2ef8b19))


### ⚡️  性能提升 | Performance Improvements

* **ui:** :zap: 全局默认box-sizing: border-box;降低元素布局难度 ([b8e7574](https://github.com/syh-micro-build/mb-admin/commit/b8e7574839039b3a2b6f14da41dff9a01790d5c3))
* **ui:** :zap: 移除scrollbar__view高度限定 ([7b04a6a](https://github.com/syh-micro-build/mb-admin/commit/7b04a6a0c5d7df81ede15da1f7af5df53094fb3f))


### ✨  新增功能 | New Feature

* :sparkles: 添加本地调试时，输出局域网服务 ([7f7ab6e](https://github.com/syh-micro-build/mb-admin/commit/7f7ab6eaef089655c9640cb88dfdf7c506350905))
* :sparkles: 添加树形控件，支持右键自定义菜单进行节点编辑 ([bd19760](https://github.com/syh-micro-build/mb-admin/commit/bd19760c88ae6c457664fd2db1ec1c32027e43e8))
* **ui:** :sparkles: 添加自定义尺寸弹窗 ([d6a2123](https://github.com/syh-micro-build/mb-admin/commit/d6a21235f92422dd90ae09817be79d5246f7bf2a))


### 🐛  修复缺陷 | Bug Fixes

* :bug: 当前页不为1时，修改页数后会导致多次调用getList方法问题 ([c89e81c](https://github.com/syh-micro-build/mb-admin/commit/c89e81c8bd27b8528f0693d469fa8574c08a746d))
* :bug: 解决@vue/eslint-config-typescript中eslint版本与项目中eslint版本不兼容的问题 ([2408e8c](https://github.com/syh-micro-build/mb-admin/commit/2408e8c58a5f6b9896a173f3f2278ec281a446c6))
* :bug: 提高"initModel判断schema对应的field是否存在,兼容null与0等场景"代码健壮性 ([35920af](https://github.com/syh-micro-build/mb-admin/commit/35920af91d0b4d361a2f964dc588881738bbc717))
* :bug: 修复isUrl判断错误bug ([2030d7c](https://github.com/syh-micro-build/mb-admin/commit/2030d7c1fdd0f48be63b97af80d544d71eac4ae9))
* :bug: initModel判断schema对应的field是否存在,兼容null与0等场景 ([5db1c4e](https://github.com/syh-micro-build/mb-admin/commit/5db1c4e8b89a77a80fae4e9eae15f764d768e7c8))
* :bug: videoPlayer 的实例未赋值 ([fbd84c6](https://github.com/syh-micro-build/mb-admin/commit/fbd84c617cde1f1663f0d3c785439ab27314259b))

### [1.3.1](https://github.com/syh-micro-build/mb-admin/compare/v1.3.0...v1.3.1) (2024-08-16)


### ♻️   代码重构 | Code Refactoring

* :recycle: 权限管理=>菜单管理=>按钮权限重构，可以对已添加的权限按钮进行编辑 ([0e2f0a3](https://github.com/syh-micro-build/mb-admin/commit/0e2f0a34a845414de18bb582a979075a6362a7d4))


### 💄  代码格式 | Styles

* **ui:** :lipstick: 修改登录页样式 ([ed048b2](https://github.com/syh-micro-build/mb-admin/commit/ed048b2e15957c189643e67bda2696efda7216d7))


### 📦️   构建相关 | Builds

* **ui:** :package: 新增VITE_HIDE_GLOBAL_SETTING配置，控制全局设置按钮是否隐藏 ([40079fa](https://github.com/syh-micro-build/mb-admin/commit/40079fad074817a793089fc27c239be9f24d17a9))


### 📝  文档更新 | Documentation

* :memo: 项目依赖更新命令优化 ([1ed3b78](https://github.com/syh-micro-build/mb-admin/commit/1ed3b787ca860bbc02adf47b77a0b06b1f98b2d6))


### 🐛  修复缺陷 | Bug Fixes

* :bug: 查询界面：收起和展开功能bug ([180ae87](https://github.com/syh-micro-build/mb-admin/commit/180ae87c8c456fbb1d953ed8d2f7ed26e5eee756))
* :bug: 静态路由添加代码编辑器菜单 ([4e8cec5](https://github.com/syh-micro-build/mb-admin/commit/4e8cec572a83fbdbf40b905e05ccc37ce4d75833))
* :bug: 权限管理=>菜单管理=>编辑菜单名称等需要链表meta的内容失效 ([3b8f425](https://github.com/syh-micro-build/mb-admin/commit/3b8f425508d7f20005a83d0a958061a30ebaf14e))
* :bug: 删除无用代码 ([e861608](https://github.com/syh-micro-build/mb-admin/commit/e861608b3db3e9b63b9139230c85dbd488c50c18))
* :bug: 设置了showExpand参数 会把index在expandField之前不应该显示出来的field也显示出来了 ([e1f897d](https://github.com/syh-micro-build/mb-admin/commit/e1f897d93bbb65f22e8a1d71809092b0d4595545))
* :bug: 修复 search组件的收起展开 和重置 Bug ([1f1d7de](https://github.com/syh-micro-build/mb-admin/commit/1f1d7de0aa7ef77f0b421e06ead197b6e7ad50b1)), closes [element-plus/element-plus#15417](https://github.com/element-plus/element-plus/issues/15417)
* :bug: 修复表格合计报错问题 ([c655733](https://github.com/syh-micro-build/mb-admin/commit/c655733139ce2dc8c97565cc10d2a94e36591988))
* :bug: 修复表格default-expand-all属性无效BUG ([71b38f8](https://github.com/syh-micro-build/mb-admin/commit/71b38f8ea8225785ebe9296d998358dc65cd8e73))
* :bug: 修复富文本编辑器初始化时, 报错 Error: Cannot find a descendant at path [0,1] in node ([4cde358](https://github.com/syh-micro-build/mb-admin/commit/4cde35896afee8d9b0d6716e74139a453abf61d6))
* :bug: 修复权限管理=>菜单管理=>编辑弹窗中新增按钮权限时 id 缺失导致前端判断错误问题 ([e340785](https://github.com/syh-micro-build/mb-admin/commit/e3407852cfafdb03f798ba63b167857efa52baa2))
* :bug: 修复在表格中给按钮添加link属性后，字体颜色变成白色 ([c43c2d7](https://github.com/syh-micro-build/mb-admin/commit/c43c2d7cb99e0f8dd90306671795975b3e0b42fa))
* :bug: 修复css前缀无法应用问题 ([42a400c](https://github.com/syh-micro-build/mb-admin/commit/42a400cb5493c808d8e43dda91f67bcb4016566e))
* :bug: 左侧菜单收起后，组件菜单的子菜单显示不全 ([35e83bf](https://github.com/syh-micro-build/mb-admin/commit/35e83bff6146207a7215cb94c1447e1716ffae04))
* :bug: optionApi方法重复执行，导致接口重复调用 ([c60b8a3](https://github.com/syh-micro-build/mb-admin/commit/c60b8a32254dfe5364eca35cb77ef3ff7dec7826))


### 🔨  其他修改 | Chore

* :hammer: 更新依赖 ([f394b8f](https://github.com/syh-micro-build/mb-admin/commit/f394b8f465bc48b9fdf25dfa60f8becd0c31f3fe))
* :hammer: 更新依赖 ([ccec2c7](https://github.com/syh-micro-build/mb-admin/commit/ccec2c7b26010bba5829b87a908b491a7735de9c))
* :hammer: 更新注释 ([6858c07](https://github.com/syh-micro-build/mb-admin/commit/6858c0787339fb0a59483287d86f4918ae642f97))
* **release:** 1.3.0 ([d25b57b](https://github.com/syh-micro-build/mb-admin/commit/d25b57b8f376b6929afe3ffdbf62bed3c39e0506))

## [1.3.0](https://github.com/syh-micro-build/mb-admin/compare/v1.2.0...v1.3.0) (2024-05-23)


### 📝  文档更新 | Documentation

* :memo: 添加 在线预览 与 官方文档 的国内版地址 ([0ee3e21](https://github.com/syh-micro-build/mb-admin/commit/0ee3e219bd29696145cadde18c55ebdb69c7f325))
* :memo: 文档添加生态分栏 ([762ebaf](https://github.com/syh-micro-build/mb-admin/commit/762ebaf1291fac848729d9141780f34cb162d4cc))


### 🎡  持续集成 | Continuous Integration

* :ferris_wheel: 代码同步至 Gitee 的 GitHub  Action 更换 ([ac50bb9](https://github.com/syh-micro-build/mb-admin/commit/ac50bb950ede49f4ae01eef0db91005643174932))
* :ferris_wheel: 设置自定义域名后的构建参数调整 ([af39733](https://github.com/syh-micro-build/mb-admin/commit/af39733903b52b20369acbcc1bab74093dd34651))
* :ferris_wheel: 添加同步代码至 Gitee 并部署 Gitee pages ([12cffac](https://github.com/syh-micro-build/mb-admin/commit/12cffac320f816940f2c95ddb074c393c81b417b))
* :ferris_wheel: 添加同步至 Gitee 并自动构建部署至 Gitee pages ([ddf8c73](https://github.com/syh-micro-build/mb-admin/commit/ddf8c73c73e1f171ab901fa8cf7102f10f289335))
* :ferris_wheel: 文档 与 在线预览 地址更新 ([d93fb89](https://github.com/syh-micro-build/mb-admin/commit/d93fb89c0743c32dd8862eae8e30116bf0c6f85c))
* :ferris_wheel: gitee 同步报错处理 ([5185390](https://github.com/syh-micro-build/mb-admin/commit/51853902be5ef51b53a9f2cc3860a180471f8449))
* 仓库私钥调整后的调试 ([908456d](https://github.com/syh-micro-build/mb-admin/commit/908456de62d118238274b82fe98f0e58a0b86283))


### ✨  新增功能 | New Feature

* :sparkles: 添加代码编辑器组件 ([eadadd2](https://github.com/syh-micro-build/mb-admin/commit/eadadd208ef62a672deb00fc8e612468028b645b))


### 🐛  修复缺陷 | Bug Fixes

* :bug: 表单的 delSchema 方法在调用后未将对应的 field 值删除 ([34fe393](https://github.com/syh-micro-build/mb-admin/commit/34fe3939ee239ba6bd291dd1653f8c564d735f57))
* :bug: 修复 Transfer 组件 optionApi 不生效 ([36fcea0](https://github.com/syh-micro-build/mb-admin/commit/36fcea0f65d6b905378a5fa2a538433586dd0d5a))
* :bug: 已经是 FormData 对象的不用再次转换 ([6c334cb](https://github.com/syh-micro-build/mb-admin/commit/6c334cb6409d7aa11d5fdf5922c8f05146d3d7d7))

## [1.2.0](https://github.com/syh-micro-build/mb-admin/compare/v1.1.1...v1.2.0) (2024-04-07)


### 🎡  持续集成 | Continuous Integration

* :ferris_wheel: 自动化构建部署至 github pages 测试 ([1684deb](https://github.com/syh-micro-build/mb-admin/commit/1684debf56ae7d4ad0f53c003284d7b1100a2599))
* :ferris_wheel: 自动化构建部署至 github pages 调试 ([25438dc](https://github.com/syh-micro-build/mb-admin/commit/25438dc015e55a1646b09c8dca680f38200fc57d))


### 📦️   构建相关 | Builds

* :package: 根据构建模式选择动态路由或静态路由 ([29f5ad8](https://github.com/syh-micro-build/mb-admin/commit/29f5ad8a735a6b37709a8df903257718ac6368ca))


### 📝  文档更新 | Documentation

* :memo: 添加官方文档地址 ([e03c8d2](https://github.com/syh-micro-build/mb-admin/commit/e03c8d25a74ecdbfd5c80a8d3a2af614794adf4f))
* 📝 添加在线预览，捐赠，交流群 ([456c923](https://github.com/syh-micro-build/mb-admin/commit/456c9233384c676dfe64780814b76841441cbf84))
* **ui:** :memo: 更新在线文档地址 ([27c8f7a](https://github.com/syh-micro-build/mb-admin/commit/27c8f7aed4688003665b7523624ae53cee83c81b))


### ✨  新增功能 | New Feature

* **tool:** :sparkles: 添加微型代码生成器plop ([124dee0](https://github.com/syh-micro-build/mb-admin/commit/124dee09521aed2ff450c0f71dcf7e9f282c544e))

### [1.1.1](https://github.com/syh-micro-build/mb-admin/compare/v1.1.0...v1.1.1) (2024-03-28)


### ⚡️  性能提升 | Performance Improvements

* :zap: 修复启动慢问题 ([963cc95](https://github.com/syh-micro-build/mb-admin/commit/963cc95a9752b61fa1b668ab3b043b4578044a87))


### 💄  代码格式 | Styles

* :lipstick: vscode vue volar 插件下架，已使用新插件替换 ([8832511](https://github.com/syh-micro-build/mb-admin/commit/8832511af87fa32e7a24e0fc541881850d305d64))


### 🔨  其他修改 | Chore

* :hammer: 更新依赖 ([39a3de8](https://github.com/syh-micro-build/mb-admin/commit/39a3de8d14bbb24a5717cb620768c363e87a7b7e))


### 🐛  修复缺陷 | Bug Fixes

* :bug: 登录页存在滚动条问题 ([f083960](https://github.com/syh-micro-build/mb-admin/commit/f0839601e369694fd960807f4e239e24928b8eb8))
* :bug: 删除无用代码 ([223ac99](https://github.com/syh-micro-build/mb-admin/commit/223ac99633a659d54075912c15aa99e773a2bb4d))
* :bug: 修复第四种布局样式层级问题 ([153eb5a](https://github.com/syh-micro-build/mb-admin/commit/153eb5a92586d7cc2c748824404bc61e6275541e))
* :bug: route 设置 meta.affix 固定显示后，图标未展示 ([cceb2f6](https://github.com/syh-micro-build/mb-admin/commit/cceb2f6be2833d118562da2dcea39247fd90309d))
* :bug: useSearch 中 getFormData 方法未给到预期值 ([89e1dc3](https://github.com/syh-micro-build/mb-admin/commit/89e1dc3fb5c3261ad313c59552b26442d129358d))
* **ui:** :bug: 在弹框中使用Echart组件时图表不显示 ([efe9715](https://github.com/syh-micro-build/mb-admin/commit/efe9715c6537b9368005ba9f81d1d6190321647c))


### 📝  文档更新 | Documentation

* :memo: 添加版本更新操作说明 及 更新日志 ([5d85ad9](https://github.com/syh-micro-build/mb-admin/commit/5d85ad96b9191e3d8a042503941342d74279ec8b))
* :memo: 添加项目依赖更新使用方法 ([200ec6f](https://github.com/syh-micro-build/mb-admin/commit/200ec6ff1bc70a4b3993a4a32d8a73502be37249))

## [1.1.0](https://github.com/syh-micro-build/mb-admin/compare/v1.0.0...v1.1.0) (2024-03-06)


### ✨  新增功能 | New Feature

* :sparkles: 添加 standard-version 进行版本更新日志记录 ([da040c4](https://github.com/syh-micro-build/mb-admin/commit/da040c4ee04d8b46b685a90e46090c95a6bbad81))


### 🐛  修复缺陷 | Bug Fixes

* :bug: 修复 类型检查 功能异常问题 ([e1a11e7](https://github.com/syh-micro-build/mb-admin/commit/e1a11e72ca0202fa5a94d12a384343accdab04cc))
* :bug: 修复 lint-staged 中 prettier 以 json 格式美化代码的无效命令问题 ([66cddef](https://github.com/syh-micro-build/mb-admin/commit/66cddef797f28d739ef4aa49498fcc89ac255cec))
* :bug: 修复stylelint对vue文件的支持 ([0308667](https://github.com/syh-micro-build/mb-admin/commit/03086670e2b87fac0e624a28dbcbef3de916bddb))
* :bug: 修复TagsView右键菜单逻辑错误 ([4e72364](https://github.com/syh-micro-build/mb-admin/commit/4e7236460fd0e4edfb451143f4c8f6acaaf3deb2))
* Table组件注册为全局组件报错问题，存在对pinia的提前引用 ([77c0a46](https://github.com/syh-micro-build/mb-admin/commit/77c0a46833235e3bb83733ecb6c6d971cfb57176))
