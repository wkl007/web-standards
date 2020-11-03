# 文档规范

文档对于项目开发和维护、学习、重构、以及知识管理非常重要。

和写测试一样、大部分开发人员会觉得写文档是一件痛苦的事情，不过只有时间能够证明它的价值。比如对于人员流动比较大的公司，如果有规范的文档体系，转交工作就会变动非常轻松。

**广义的文档不单指‘说明文件’本身，它有很多形式、来源和载体，可以描述一个知识、以及知识形成和迭代的过程**。例如版本库代码提交记录、代码注释、决策和讨论记录、CHANGELOG、示例代码、规范、传统文档等等。

## 文档格式

对于开发者来说，[Markdown](https://zh.wikipedia.org/wiki/Markdown)是最适合的、最通用的文档格式。支持版本库在线预览和变更历史跟踪。

下面这些工具可以提高Markdown的开发效率:

- 可视化编辑器
  - **Visual Code**: 大部分代码编辑都支持Markdown编辑和预览
  - [**typora**](https://typora.io): 跨平台的Markdown编辑器，推荐
- **markdownlint**: 编码检查器
- 扩展(Visual Studio Code):
  - **Markdown All in One**: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
  - **Markdown TOC**: markdown 目录生成，我最常用的markdown插件
- 图表绘制工具:
  - [**drawio**](https://www.draw.io) 基于Web的图表绘制工具、也有离线客户端
  - **KeyNote/PPT** 临时绘图也不错

## 注释即文档

**必要和适量的注释对阅读源代码的人来说就是一个路牌, 可以少走很多弯路**.

关于注释的一些准则，[<阿里巴巴Java开发手册>](https://github.com/alibaba/p3c/blob/master/p3c-gitbook/编程规约/注释规约.md)总结得非常好, 推荐基于这个来建立注释规范。另外通过ESlint是可以对注释进行一定程度的规范。

## 代码即文档

现在有很多种工具支持从代码中解析和生成文档, 这可以给开发者简化很多文档维护的工作。

举个例子，我们经常会遇到修改了代码，但是文档忘记同步的情况。通过‘代码即文档’的方式至少可以**保持文档和代码同步更新**；另外**很多工具会分析代码的数据类型**，自动帮我们生成参数和返回值定义，这也可以减少很多文档编写工作以及出错率。

比如可以通过下面注释方式来生成组件文档:

```javascript
import * as React from 'react';
import { Component } from 'react';

/**
 * Props注释
 */
export interface ColumnProps extends React.HTMLAttributes<any> {
  /** prop1 description */
  prop1?: string;
  /** prop2 description */
  prop2: number;
  /**
   * prop3 description
   */
  prop3: () => void;
  /** prop4 description */
  prop4: 'option1' | 'option2' | 'option3';
}

/**
 * 对组件进行注释
 */
export class Column extends Component<ColumnProps, {}> {
  render() {
    return <div>Column</div>;
  }
}

```

相关的工具有:

- API文档
  - Typescript
    - [tsdoc](https://github.com/microsoft/tsdoc) Typescript官方的注释文档标准
    - [typedoc](https://github.com/TypeStrong/typedoc) 基于tsdoc标准的文档生成器
  - Javascript
    - [jsdoc](https://github.com/jsdoc/jsdoc) Javascript文档注释标准和生成器
- 后端接口文档
  - [Swagger](https://swagger.io) Restful接口文档规范
  - GraphQL: 这个有很多工具，例如[graphiql](https://github.com/graphql/graphiql), 集成了Playground和文档，很先进
  - [Easy Mock](https://easy-mock.com/login) 一个可视化，并且能快速生成模拟数据的服务
- 组件文档
  - [StoryBook](https://storybook.js.org) 通用的组件开发、测试、文档工具
  - React
    - [Docz](http://docz.site)
    - [Styleguidist](https://github.com/styleguidist/react-styleguidist)
  - Vue
    - [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist)


