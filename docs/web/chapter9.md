# 异常处理、监控和调试规范

很多开发者常常误用或者轻视异常的处理, 合理有效的异常处理可以提高应用的健壮性和可用性，另外还可以帮助开发者快速定位异常。

## 异常处理

<阿里巴巴的Java开发手册>中总结的[异常处理规范](https://github.com/alibaba/p3c/blob/master/p3c-gitbook/异常日志/异常处理.md)对JavaScript的异常处理也很有参考意义，比如:

- 异常不要用来做流程控制，条件控制。
- 捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容。
- catch时请分清稳定代码和非稳定代码，稳定代码指的是无论如何不会出错的代码。对于非稳定代码的catch尽可能进行区分异常类型，再做对应的异常处理。不要对大段代码进行try-catch
- ...

然后再根据JavaScript本身的异常处理特点总结一些规范行为, 例如:

- 不要throw非Error对象
- 不要忽略异步异常
- 全局监控Javascript异常
- ...



资源:

- [从1000+个项目中总结出来的前10个JavaScript错误, 以及如何避免它们](https://rollbar.com/blog/top-10-javascript-errors/)
- [Javascript异常处理‘权威’指南](https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6)
- [前端异常处理最佳实践](https://zhuanlan.zhihu.com/p/63698500)

## 日志

对于前端来说，日志也不是毫无意义(很多框架性能优化建议在生产环境移除console)。尤其是在**生产现场**调试代码时，这时候可贵的控制台日志可以帮助你快速找到异常的线索。

不过通常我们**只要保留必要的、有意义的日志输出**，比如你不应该将console.log放到一个React渲染函数中、或者放到一个循环中, **DDos式的日志信息并不能帮助我们定位问题，反而会影响运行的性能**. 所以需要一个规范来约束日志输出行为, 比如:

- 避免重复打印日志
- 谨慎地记录日志, 划分日志级别。比如生产环境禁止输出debug日志；有选择地输出info日志；
- 使用前缀对日志进行分类, 例如: `[User] xxxx`
- 只记录关键信息, 这些信息可以帮助你诊断问题
- ...

扩展资源

- [debug](https://github.com/visionmedia/debug) 适合Node.js和浏览器的debug日志工具, 支持动态开启日志打印
- [vConsole](https://github.com/Tencent/vConsole) 移动端调试利器

## 异常监控

因为程序跑在不受控的环境，所以对于客户端应用来说，异常监控在生产环境是非常重要的，它可以收集各种意料之外生产环境问题，帮助开发者快速定位异常。



异常监控通常会通过三种方式来收集异常数据:

1. 全局捕获。例如使用window.onerror, 或者`unhandledrejection`
2. 主动上报。在try/catch中主动上报.
3. 用户反馈。比如弹窗让用户填写反馈信息.

和日志一样，**不是所有‘异常’都应该上报给异常监控系统，譬如一些预料之内的‘异常’**，比如用户输入错误、鉴权失败、网络错误等等. **异常监控主要用来上报一些意料之外的、或者致命性的异常**.



要做好前端的异常监控其实并不容易，它需要处理这些东西:

- 浏览器兼容性。
- 碎片收集(breadcrumbs)。 收集‘灾难’现场的一些线索，这些线索对问题诊断很重要。例如当前用户信息、版本、运行环境、打印的日志、函数调用栈等等
- 调用栈的转换。通常在浏览器运行的压缩优化过的代码，这种调用栈基本没什么可读性，通常需要通过SourceMap映射到原始代码. 可以使用这个库: [source-map](https://github.com/mozilla/source-map#sourcemapconsumer)
- 数据的聚合。后端监控系统需要对前端上报的信息进行分析和聚合



对于小团队未必有能力开发这一套系统，所以推荐使用一些第三方工具。例如

- [Sentry](https://sentry.io/welcome/) 🔥免费基本够用
- [FunDebug](https://www.fundebug.com/price) 付费增强

**扩展**:

- [前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)
- [搭建前端监控系统](https://www.cnblogs.com/warm-stranger/p/9417084.html)

