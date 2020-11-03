# 编码规范

网络上大部分‘前端规范’指的都是编码规范， 这是一种‘狭义’的前端规范。

**统一的编码规范对团队项目的长远维护不无裨益。一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担**。

最直接的好处就是避免写出糟糕的代码，糟糕的代码与新手和老手关系不大，我也见过好处工作很多年的‘资深’工程师写出恶心的代码。 这样的代码随着项目的迭代会变得难以控制。

**现代的Lint工具已经非常先进，几乎可以约束各种编码行为**。 比如约束一个文件的长度、函数的复杂度、命名规范、注释规范、接口黑名单、DeadCode、检查简单的逻辑错误...

每一个程序员心目中对‘好代码’都有自己的主见，统一的编码规范可以像秦始皇统一战国一样，避免不必要的论战和争议。

**其实与其自己建立前端编码规范，笔者推荐选择社区沉淀下来的规范**。 这方面的资源非常多，所以本节也不武断地提出自己的规范建议。推荐下面这些资源:

## Javascript

- Lint工具

  - [ESLint](https://cn.eslint.org) - 🔥目前是社区最流行的、通用的Javascript Lint工具，Lint界的Babel。支持定制插件、preset。如果不想折腾可以选择它的一些预定义配置。

- 规范
  - [JavaScript Standard Style](https://standardjs.com/readme-zhcn.html#why-should-i-use-javascript-standard-style) - 🔥 零配置的、‘标准’的Javascript编码规范. 底层基于Eslint。目前不支持Typescript。
  - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - Airbnb的编码规范，业界标杆。

- 类型检查. 暂时将它们归类到这里，因为它们同属于[‘静态测试’](https://juejin.im/post/5d2c515d6fb9a07ead5a2bbe#heading-39)
  - [Typescript](https://www.typescriptlang.org) - 🔥 Javascript语言的超集，这是一门‘新’的语言，而不是简单的类型检查器. 不过**它也支持[原生Javascript的类型检查](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)**。
  - [Flow](https://flow.org) - Facebook出品的类型检查器，语法和Typescript类似. 个人推荐使用Typescript。

## HTML

- Lint工具
  - [Htmllint](http://htmllint.github.io/)
- 规范
  - [Code Guide](https://codeguide.co/)

## CSS

- Lint工具

  - [stylelint](https://stylelint.docschina.org) - 🔥 通用的CSS编码检查工具，支持最新的CSS语法、CSS-in-js、以及其他类CSS语法(如SCSS、Less). 它也有预定义配置，推荐使用。
- 规范

  - [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
- [Code Guide](https://codeguide.co)
  - [更多](https://css-tricks.com/css-style-guides/)
- 方法论
  - [BEM](https://css-tricks.com/bem-101/) - 🔥 BEM命名规范
  - [OOCSS](https://github.com/stubbornella/oocss/wiki)
  - [smacss](http://smacss.com/)

## 代码格式化

![chapter5_1](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103161942.png)

- [Prettier](https://prettier.io/) - 🔥 关于代码格式化的所有东西都交给它吧！

基本上，所有代码格式相关的工作都可以交给Prettier来做，在这个基础上再使用Eslint覆盖语义相关的检查。

## 特定框架风格指南

- [vue-style-guide](https://vue.docschina.org/v2/style-guide/)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

## Code Review

![chapter5_2](/assets/web/chapter5_2.png)

上述的Lint工具和类型检查器, 可以约束代码风格、避免低级的语法错误。但是即使通过上面的Lint和类型检查，代码也可能未必是‘好代码’。

**很多代码设计的‘最佳实践’是无法通过具象化的自动化工具或文档覆盖的, 这时候，'经验'或者'群体智慧'就派上用场了**. 比如Code Review阶段会检查这些东西:

- 编程原则、设计思想. 例如符合SOLID原则? 是否足够DRY？接口设计是否简洁易扩展、
- 模块耦合程度、代码重复
- 代码健壮性。是否存在内存泄露、是否线程安全、是否有潜在性能问题和异常、错误是否被处理
- 代码的性能和效率。
- 是否有没有考虑到的场景？

如果你们是第一次推行Code Review, 可以建立一个检查列表，对照着进行检查。熟练后，心中自然无码。



Code Review有很多好处，比如：

- **Code Review可以让其他成员都熟悉代码**。这样保证其他人都可以较快地接手你的工作，或者帮你解决某些问题
- **提高代码质量**。毫无疑问. 一方面是*主动性*的代码质量提升，比如你的代码需要被人Review，会自觉尽量的提高代码质量；另一方面，其他成员可以检查提交方的代码质量
- **检查或提高新成员的编程水平**。培养新人时，由于不信任它们提交的代码，我们会做一次Review检查代码是否过关。另一方面这是一次真实的案例讲解, 可以较快提高他们的能力



**Code Review有两种方式: 一个`提交时`、一个是`定时`**:

- `提交时`. 大部分开源项目采用这种方式。通俗讲就是Pull Request。只有代码通过测试、和其他成员的Review才可以合进正式版本库。这种方式也称为‘阻塞式’代码检查，一般配合GitFlow使用。
- `定时`. 在项目完结后、项目的某个里程碑、或者固定的时间(每天、每个星期..). 团队成员聚在一起，回顾自己写的代码, 让其他成员进行审查

Code Review是比较难以推行的，不过这个也要看你们团队的情况，向我们钱少活多的团队，很少的时间去立马去兼顾其他成员的代码. 这时候`定时Review`会更有用，因为看起来更‘节省时间’.

而`提交时Review`则可以针对新人，比如你不信任他们的代码或者希望帮助他们提高编码能力。



**相关资源**:

- [Code Review最佳实践](https://mp.weixin.qq.com/s?__biz=MzIwMTQwNTA3Nw==&mid=400946871&idx=1&sn=5a125337833768d705f9d87ba8cd9fff&scene=1&srcid=0104FLyeXIS6N0EShgDseIfI&key=41ecb04b051110031290b34976240e650f0169d239c89f125162a89c8d3412f2087198612e71fd7685cae9eebe08e295&ascene=0&uin=MTYyMDMzMTAwMA%3D%3D&devicetype=iMac+MacBookPro11%2C5+OSX+OSX+10.10.5+build(14F1509)&version=11020201&pass_ticket=dc5bBckt1XSthRKTIsukYHIcAvKfv0jninbMlYQ5TWnE6XS%2FrRkdHKlJjNTI2Wsg)
- [是否要做Code Review？与BAT资深架构师争论之后的思考](https://juejin.im/post/5c9740ba6fb9a071090d6a37)
- [一些Code Review工具](https://richardcao.me/2016/09/30/Talk-About-Codereview/)


