# 项目组织规范

项目组织规范定义了如何组织一个前端项目, 例如项目的命名、项目的文件结构、版本号规范等等。尤其对于开源项目，规范化的项目组织就更重要了。

## 通用的项目组织规范

一个典型的项目组织规范如下:

- **dist/**: 项目构建结果输出目录。
- **public/**: HTML 和静态资源。
- **src/**: 源代码目录。
- **.env\***: 项目中我们通常会使用`环境变量`来影响应用在不同运行环境下的行为。可以通过[dotEnv](https://github.com/motdotla/dotenv)来从文件中读取环境变量。通常有三个文件:
  - `.env.dev` 测试生产环境的环境变量 
  - `.env.development` 开发环境的环境变量
  - `.env.production` 正式生成环境的环境变量
- **.gitignore**: 忽略不必要的文件，避免将自动生成的文件提交到版本库。

- **README.md**: 项目说明，可以在这里提供关于项目的关键信息或者相关信息的入口。

- **package.json**: 前端项目必须。描述当前的版本、**可用的命令**、包名、依赖、环境约束、项目配置等信息。

## 目录组织风格

目前前端项目主要基于 `vue-cli` 脚手架二次定制，具体目录结构如下：

```
├── deploy                   # node部署相关配置文件
├── public
│   └── favicon.ico          # LOGO
|   └── index.html           # Vue 入口模板
├── src
│   ├── api                  # Api 模块
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── configs              # 项目基础配置，包含路由守卫、过滤器、UI 库引用等
│   ├── layouts              # 页面Layout组件
│   ├── mixins               # Vue mixins 封装
│   ├── router               # Vue-Router 配置
│   ├── store                # Vuex 配置
│   ├── theme                # UI 库主题配置
│   ├── utils                # 工具库，包含常用工具函数、常量配置、过滤器函数、ajax拦截器封装等
│   ├── views                # 业务页面入口和常用模板
│   ├── App.vue              # Vue 模板入口
│   └── main.js              # Vue 入口 JS
├── .browserslistrc          # 目标浏览器配置
├── .commitlintrc.js         # commitlint 配置
├── .editorconfig            # 编辑器配置
├── .env.dev                 # 测试打包环境变量配置
├── .env.development		 # 开发环境变量配置
├── .env.production          # 正式打包环境变量配置
├── .eslintignore            # eslint 忽略文件配置
├── .eslintrc.js             # eslint 配置
├── .gitignore               # git 忽略文件配置
├── .stylelintrc.js          # stylelint 忽略文件配置
├── .stylelintrc.js          # stylelint 配置
├── alias.config.js          # webpack alias识别文件
├── babel.config.js          # babel 配置
├── deploy.config.js         # node 部署配置文件
├── jsconfig.json            # jsconfig 配置
├── dev.sh                   # 测试打包脚本
├── pro.sh                   # 正式打包脚本
├── package.json             # 项目描述文件
├── postcss.config.js        # postcss 配置
├── README.md                # 项目说明
└── vue.config.js            # Vue CLI 配置
```

## 项目模板

在将项目结构规范确定下来后，可以创建自己的脚手架工具或者项目模板，用于快速初始化一个项目或代码模板。

### 中后台项目模板

[ant-design-vue-admin](https://github.com/wkl007/ant-design-vue-admin)

### 大屏可视化项目模板

[datav-template](https://github.com/wkl007/datav-template)

### uni-app项目模板

[uni-app-template](https://github.com/wkl007/uni-app-template)

### vant项目模板

[vue-vant-template](https://github.com/wkl007/vue-wechat-template)
