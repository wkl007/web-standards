(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{453:function(r,t,e){"use strict";e.r(t);var n=e(28),o=Object(n.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"测试规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试规范"}},[r._v("#")]),r._v(" 测试规范")]),r._v(" "),e("p",[r._v("测试是保障代码质量的重要手段，但是很少有人愿意在这里花太多时间。")]),r._v(" "),e("p",[r._v("比如笔者，我很少会去给业务代码和组件写单元测试，除非自己对代码非常没有信心，按照我的理念写测试不如将代码写得更简单一点，比如把一个函数拆分为更小的函数，保持单一职责。")]),r._v(" "),e("p",[r._v("但是"),e("strong",[r._v("对于一些底层、共享的代码模块还是有测试的必要的")]),r._v("。")]),r._v(" "),e("p",[r._v("在"),e("a",{attrs:{href:"https://juejin.im/post/5d2c515d6fb9a07ead5a2bbe",target:"_blank",rel:"noopener noreferrer"}},[r._v("不知道测试什么？这些是你需要知道的软件测试类型和常识"),e("OutboundLink")],1),r._v("中，列举了一些开发者需要关注的测试类型和常识, 如果按照测试的阶段进行分类，大概是这样子的:")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103160041.png",alt:"chapter8_1"}})]),r._v(" "),e("p",[r._v("其中前端开发者需要关注的主要有以下几种测试类型:")]),r._v(" "),e("ul",[e("li",[r._v("单元测试: 对独立的软件模块进行测试\n"),e("ul",[e("li",[e("strong",[r._v("UI组件测试")]),r._v(": 包括了快照(Snapshot)测试")])])]),r._v(" "),e("li",[e("strong",[r._v("集成测试")]),r._v(": 在单元测试的基础上，将模块组合起来，测试它们的组合性")]),r._v(" "),e("li",[e("strong",[r._v("E2E测试")]),r._v(": 在完整、真实的运行环境下模拟真实用户对应用进行测试。"),e("strong",[r._v("主要测试前端和后端的协调性")])]),r._v(" "),e("li",[e("strong",[r._v("兼容性测试")]),r._v(": 上面提到了浏览器兼容规范，在将版本提交给测试/发布之前，需要确保能符合兼容性要求")]),r._v(" "),e("li",[e("strong",[r._v("性能测试")]),r._v(": 测试和分析是否存在性能问题")]),r._v(" "),e("li",[r._v("其他:\n"),e("ul",[e("li",[r._v("安全测试")]),r._v(" "),e("li",[r._v("SEO测试")])])])]),r._v(" "),e("p",[r._v("因为对于小公司来说整个软件开发流程可能没有那么规范，比如很难构建一个完整的端对端测试环境，这些都不是前端团队可以操作的范围, 所以自动化测试很难推行。但是可以根据团队和业务情况逐步进行开展。")]),r._v(" "),e("p",[r._v("可实施性比较高的, 也比较简单是单元测试，所以本节也重点关注单元测试.")]),r._v(" "),e("h2",{attrs:{id:"测试流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试流程"}},[r._v("#")]),r._v(" 测试流程")]),r._v(" "),e("p",[r._v("首先要定义一个合适的软件测试流程, 合适的测试流程可以降低开发和测试团队之间的沟通协作成本、提高测试效率。例如推荐的测试流程:")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103160057.png",alt:"chapter8_2"}})]),r._v(" "),e("h2",{attrs:{id:"单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[r._v("#")]),r._v(" 单元测试")]),r._v(" "),e("p",[r._v("单元测试有很多"),e("strong",[r._v("好处")]),r._v(", 比如:")]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("提高信心，适应变化和迭代")]),r._v(". 如果现有代码有较为完善的单元测试，在代码重构时，可以检验模块是否依然可以工作, 一旦变更导致错误，单元测试也可以帮助我们快速定位并修复错误")]),r._v(" "),e("li",[e("strong",[r._v("单元测试是集成测试的基础")])]),r._v(" "),e("li",[e("strong",[r._v("测试即文档")]),r._v("。如果文档不能解决你的问题，在你打算看源码之前，可以查看单元测试。通过这些测试用例，开发人员可以直观地理解程序单元的基础API")]),r._v(" "),e("li",[e("strong",[r._v("提升代码质量。易于测试的代码，一般都是好代码")])])]),r._v(" "),e("p",[e("strong",[r._v("测什么?")])]),r._v(" "),e("p",[r._v("业务代码或业务组件是比较难以实施单元测试的，一方面它们比较多变、另一方面很多团队很少有精力维护这部分单元测试。所以"),e("strong",[r._v("通常只要求对一些基础/底层的组件、框架或者服务进行测试, 视情况考虑是否要测试业务代码")])]),r._v(" "),e("p",[e("strong",[r._v("测试的准则")]),r._v(":")]),r._v(" "),e("ul",[e("li",[r._v("推荐Petroware的"),e("a",{attrs:{href:"https://petroware.no/unittesting.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Unit Testing Guidelines"),e("OutboundLink")],1),r._v(", 总结了27条单元测试准则，非常受用.")]),r._v(" "),e("li",[r._v("另外<阿里巴巴的Java开发手册>中总结的"),e("a",{attrs:{href:"https://github.com/alibaba/p3c/blob/master/p3c-gitbook/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("单元测试准则"),e("OutboundLink")],1),r._v(", 也不错，虽然书名是Java，准则是通用的.")])]),r._v(" "),e("p",[e("strong",[r._v("单元测试指标")]),r._v(":")]),r._v(" "),e("p",[r._v("一般使用"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%A2%BC%E8%A6%86%E8%93%8B%E7%8E%87",target:"_blank",rel:"noopener noreferrer"}},[e("code",[r._v("测试覆盖率")]),e("OutboundLink")],1),r._v("来量化，尽管对于覆盖率能不能衡量单元测试的有效性存在较多争议。")]),r._v(" "),e("p",[r._v("大部分情况下还是推荐尽可能提高覆盖率, 比如要求"),e("code",[r._v("语句覆盖率达到70%；核心模块的语句覆盖率和分支覆盖率都要达到100%")]),r._v(". 视团队情况而定")]),r._v(" "),e("p",[r._v("扩展:")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.infoq.cn/article/test-coverage-rate-role",target:"_blank",rel:"noopener noreferrer"}},[r._v("测试覆盖（率）到底有什么用？"),e("OutboundLink")],1)])]),r._v(" "),e("p",[e("strong",[r._v("相关工具")])]),r._v(" "),e("ul",[e("li",[e("p",[r._v("Headless Browsers: 无头浏览器是网页自动化的重要运行环境。 常用于功能测试、单元测试、网络爬虫")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer",target:"_blank",rel:"noopener noreferrer"}},[r._v("puppeteer"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("Headless Chromium"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[e("p",[r._v("测试框架")]),r._v(" "),e("ul",[e("li",[e("p",[r._v("Jest")]),r._v(" "),e("p",[r._v("🔥Facebook的单元测试框架. 零配置, 支持组件快照测试、模块Mock、Spy. 一般场景, 单元测试学它一个就行了")]),r._v(" "),e("ul",[e("li",[r._v("组件测试\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/testing-library",target:"_blank",rel:"noopener noreferrer"}},[r._v("testing-library"),e("OutboundLink")],1),r._v(" 🔥")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/airbnb/enzyme",target:"_blank",rel:"noopener noreferrer"}},[r._v("Enzyme"),e("OutboundLink")],1)])])])])]),r._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://theintern.github.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Intern"),e("OutboundLink")],1)])])])]),r._v(" "),e("li",[e("p",[r._v("单元测试")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/avajs/ava",target:"_blank",rel:"noopener noreferrer"}},[r._v("AVA"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://jasmine.github.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Jasmine"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Mocha"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/substack/tape",target:"_blank",rel:"noopener noreferrer"}},[r._v("Tape"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[e("p",[r._v("断言库")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://chaijs.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Chai"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Automattic/expect.js",target:"_blank",rel:"noopener noreferrer"}},[r._v("expect.js"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://shouldjs.github.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("should.js"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[e("p",[r._v("Mock/Stubs/Spies")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://sinonjs.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("sinon.js"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[e("p",[r._v("代码覆盖率")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/gotwarlost/istanbul",target:"_blank",rel:"noopener noreferrer"}},[r._v("istanbul"),e("OutboundLink")],1)])])]),r._v(" "),e("li",[e("p",[r._v("基准测试")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://benchmarkjs.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("benchmark.js"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://jsperf.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("jsperf.com"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);