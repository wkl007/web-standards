# 测试规范

测试是保障代码质量的重要手段，但是很少有人愿意在这里花太多时间。

比如笔者，我很少会去给业务代码和组件写单元测试，除非自己对代码非常没有信心，按照我的理念写测试不如将代码写得更简单一点，比如把一个函数拆分为更小的函数，保持单一职责。

但是**对于一些底层、共享的代码模块还是有测试的必要的**。

在[不知道测试什么？这些是你需要知道的软件测试类型和常识](https://juejin.im/post/5d2c515d6fb9a07ead5a2bbe)中，列举了一些开发者需要关注的测试类型和常识, 如果按照测试的阶段进行分类，大概是这样子的:

![chapter8_1](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103160041.png)

其中前端开发者需要关注的主要有以下几种测试类型:

- 单元测试: 对独立的软件模块进行测试
  - **UI组件测试**: 包括了快照(Snapshot)测试
- **集成测试**: 在单元测试的基础上，将模块组合起来，测试它们的组合性
- **E2E测试**: 在完整、真实的运行环境下模拟真实用户对应用进行测试。**主要测试前端和后端的协调性**
- **兼容性测试**: 上面提到了浏览器兼容规范，在将版本提交给测试/发布之前，需要确保能符合兼容性要求
- **性能测试**: 测试和分析是否存在性能问题
- 其他:
  - 安全测试
  - SEO测试

因为对于小公司来说整个软件开发流程可能没有那么规范，比如很难构建一个完整的端对端测试环境，这些都不是前端团队可以操作的范围, 所以自动化测试很难推行。但是可以根据团队和业务情况逐步进行开展。

可实施性比较高的, 也比较简单是单元测试，所以本节也重点关注单元测试.

## 测试流程

首先要定义一个合适的软件测试流程, 合适的测试流程可以降低开发和测试团队之间的沟通协作成本、提高测试效率。例如推荐的测试流程:

![chapter8_2](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103160057.png)

## 单元测试

单元测试有很多**好处**, 比如:

- **提高信心，适应变化和迭代**. 如果现有代码有较为完善的单元测试，在代码重构时，可以检验模块是否依然可以工作, 一旦变更导致错误，单元测试也可以帮助我们快速定位并修复错误
- **单元测试是集成测试的基础**
- **测试即文档**。如果文档不能解决你的问题，在你打算看源码之前，可以查看单元测试。通过这些测试用例，开发人员可以直观地理解程序单元的基础API
- **提升代码质量。易于测试的代码，一般都是好代码**



**测什么?**

业务代码或业务组件是比较难以实施单元测试的，一方面它们比较多变、另一方面很多团队很少有精力维护这部分单元测试。所以**通常只要求对一些基础/底层的组件、框架或者服务进行测试, 视情况考虑是否要测试业务代码**



**测试的准则**:

- 推荐Petroware的[Unit Testing Guidelines](https://petroware.no/unittesting.html), 总结了27条单元测试准则，非常受用.
- 另外<阿里巴巴的Java开发手册>中总结的[单元测试准则](https://github.com/alibaba/p3c/blob/master/p3c-gitbook/单元测试.md), 也不错，虽然书名是Java，准则是通用的.



**单元测试指标**:

一般使用[`测试覆盖率`](https://zh.wikipedia.org/wiki/代碼覆蓋率)来量化，尽管对于覆盖率能不能衡量单元测试的有效性存在较多争议。

大部分情况下还是推荐尽可能提高覆盖率, 比如要求`语句覆盖率达到70%；核心模块的语句覆盖率和分支覆盖率都要达到100%`. 视团队情况而定

扩展:

- [测试覆盖（率）到底有什么用？](https://www.infoq.cn/article/test-coverage-rate-role)



**相关工具**

- Headless Browsers: 无头浏览器是网页自动化的重要运行环境。 常用于功能测试、单元测试、网络爬虫

  - [puppeteer](https://github.com/GoogleChrome/puppeteer)
  - [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)

- 测试框架

  - Jest

     🔥Facebook的单元测试框架. 零配置, 支持组件快照测试、模块Mock、Spy. 一般场景, 单元测试学它一个就行了

    - 组件测试
      - [testing-library](https://github.com/testing-library) 🔥
      - [Enzyme](https://github.com/airbnb/enzyme)

  - [Intern](https://theintern.github.io/)

- 单元测试

  - [AVA](https://github.com/avajs/ava)
  - [Jasmine](http://jasmine.github.io/)
  - [Mocha](http://mochajs.org/)
  - [Tape](https://github.com/substack/tape)

- 断言库

  - [Chai](http://chaijs.com/)
  - [expect.js](https://github.com/Automattic/expect.js)
  - [should.js](http://shouldjs.github.io/)

- Mock/Stubs/Spies

  - [sinon.js](http://sinonjs.org/)

- 代码覆盖率

  - [istanbul](https://github.com/gotwarlost/istanbul)

- 基准测试

  - [benchmark.js](http://benchmarkjs.com/)
  - [jsperf.com](https://jsperf.com/)