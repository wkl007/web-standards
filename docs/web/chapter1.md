# 工作流规范

## 开发

### 版本规范

项目的版本号应该根据某些规则进行迭代，这里推荐使用[语义化版本](https://semver.org/lang/zh-CN/)规范。 **通过这个规范，用户可以了解版本变更的影响范围**。 规则如下：

- 主版本号：当你做了不兼容的 API 修改，
- 次版本号：当你做了向下兼容的功能性新增，
- 修订号：当你做了向下兼容的问题修正。

### 版本控制系统规范

大部分团队都使用`git`作为版本库，管理好代码也是一种学问。尤其是涉及多人并发协作、需要管理多个软件版本的情况下，定义良好的版本库管理规范，可以让大型项目更有组织性，也可以提高成员协作效率。

比较流行的`git`分支模型/工作流是[git-flow](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)，但是大部分团队会根据自己的情况制定自己的git工作流规范。目前公司前端研发`git`分支模型如下：

```
├── release
├── master
├── dev
├── member1
└── member2
```

#### release分支

`release`分支表示一个已发布版本【用户正在使用的版本】。

- 场景：`master`分支测试完毕后会合并到`release`分支， 并使用`Tag`标记应用版本和对应的工作版本。
- `Tag`规范：`v{主版本号}.{次版本号}.{修订号}`， 例如v0.1.0。
- 人员：由项目负责人进行审核合并、普通开发者没有权限。

#### master分支

`master`分支表示一个预发布版本【测试人员使用的版本】。

- 场景：前端应用会跟随工作版本迭代，在`dev`分支自测稳定后，会合并到`master`分支， 并使用`Tag`标记应用版本和对应的工作版本。
- `Tag`规范：`v{主版本号}.{次版本号}.{修订号}`， 例如v0.1.0。
- 人员：由项目负责人进行审核合并、普通开发者没有权限。

#### dev分支

`dev`分支表示正在开发中的版本。 

最新的特性或`Bug`修复都会提交到这个分支，开发者如果在该分支进行了提交，在`push`到远程之前应该先`pull`一下， 并尽量使用`rebase`模式，保证分支的简洁。

- 命名规范：`dev`。
- `Tag`规范：在dev分支中也可能会经历发布过程， 例如`Bug`修复版本. 这里同样使用`Tag`来标记这些发布. 例如v0.1.1。
- 人员：项目负责人、普通开发者。

#### member分支

`member`分支表示项目成员各自的分支。

开发者对应模块开发完毕要提交到项目成员各自分支上并同步到`dev`分支上。

- 场景：
  - 涉及多人协作：团队多个成员在同一个项目下负责开发不同的功能，这时候每个成员在自己的member分支独立开发。
  - 大功能开发：大功能开发跨越周期比较长，需要多次迭代才会稳定。这时候应该在独立的分支上开发，方便跟踪历史记录，也免于干扰`dev`分支的迭代和发布。

- 命名规范：`{项目成员英文姓名}` 如：`zhangsan`。
- 提交规范：如果是在开发分支上进行开发，在推送到远程之前，应该使用`git rebase`形式更新本地分支。
- 人员：普通开发者。

### 提交信息规范

组织好的提交信息， 可以提高项目的整体质量. 至少具有下面这些优点：

- **格式统一的提交信息有助于自动化生成CHANGELOG**。
- **版本库不只是存放代码的仓库，它记录项目的开发日志，它应该要清晰表达这次提交的做了什么**。 这些记录应该可以帮助后来者快速地学习和回顾代码， 也应该方便其他协作者review你的代码。
- **规范化提交信息可以促进提交者提交有意义的、粒度合适的'提交'**。提交者要想好要怎么描述这个提交，这样被动促进了他们去把控**提交的粒度**。



社区上比较流行的提交信息规范是[Angular的提交信息规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)， 除此之外，这些也很不错：

- [Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages)
- [Ember](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-ember)
- [Eslint](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint)
- [JQuery](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-jquery)



另外这些工具可以帮助你检验提交信息， 以及生成CHANGELOG：

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) - 从项目的提交信息中生成CHANGELOG和发布信息
- [commitlint](https://github.com/conventional-changelog/commitlint) - 检验提交信息
- [commitizen](https://github.com/commitizen/cz-cli) - 🔥简单的提交规范和提交帮助工具，推荐
- [standard-changelog](https://github.com/conventional-changelog/commitlint) - angular风格的提交命令行工具


目前公司前端研发采用[Angular的提交信息规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)，它的`message`格式如下：

```
<type>(<scope>)： <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

说明：

- 标题行：必填，描述主要修改类型和内容
- 主题内容：选填，描述为什么修改， 做了什么样的修改， 以及开发的思路等等
- 页脚注释：选填，放 Breaking Changes 或 Closed Issues

我们可以通过`git-cz`插件可视化界面填写`message`信息，也可以通过`commmit -m 'feat： 新增xxx功能'`来生成`message`信息。

## 构建规范

对于团队、或者需要维护多个项目场景，统一的构建工具链很重要， **这套工具应该强调"约定大于配置"，让开发者更专注于业务的开发**。

下面是社区上比较流行的构建工具：

- [vue-cli](https://cli.vuejs.org/) - 🔥零配置、渐进增强的项目构建CLI
- [create-react-app](https://github.com/facebook/create-react-app) - 🔥零配置开始React开发
- [parcel](https://parceljs.org/) - 零配置的Web应用打包工具
- [Fusebox](https://github.com/fuse-box/fuse-box) - 高速易用的打包工具
- [microbundle](https://github.com/developit/microbundle) - 零配置， 基于Rollup，适合用于打包‘库’


目前公司前端主要使用[vue-cli](https://cli.vuejs.org/)构建工具进行开发。

## 发布工作流规范

发布工作流指的是将‘软件成品’对外发布(如测试或生产)的一套流程， 将这套流程规范化后，可以实现自动化.

举个例子， 一个典型的发布工作流如下：

![chapter1_1](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103150115.png)

- 代码变更
- 提交代码变更到远程版本库
- 程序通过CI测试(例如Travis CI变绿)
- 提升package.json中的版本
- 生成CHANGELOG
- 提交package.json和CHANGELOG.md文件
- 打上Tag
- 推送

如果你遵循上面的规范，那么就可以利用社区上现有的工具来自动化这个流程. 这些工具有：

- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)
- [conventional-github-releaser](https://github.com/conventional-changelog/conventional-github-releaser)

## 持续集成

将整套开发工作流确定下来之后， 就可以使用`持续集成服务`来自动化执行整个流程。比如一个典型的CI流程：

![chapter1_2](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103150122.png)

**持续集成是什么，有什么意义呢**?

我们需要`持续集成`拆成两个词分别来理解， 什么是`持续`? 什么是`集成`?

**持续(Continuous)， 可以理解为'频繁'或者‘连续性’**. 不管是持续集成还是敏捷开发思维、看板，都认为‘持续’是它们的基础。

举一个通俗的例子，**比如代码检查，‘持续的’的代码检查就是代码一变动(如保存，或者IDE实时检查、或者提交到版本库时)就马上检查代码，而‘非持续’的代码检查就是在完成所有编码后，再进行检查**。对比两者可以发现，持续性的代码检查可以尽早地发现错误，而且错误也比较容易理解和处理，反之非持续性的代码检查，可能会发现一堆的错误，失之毫厘谬以千里，错误相互牵连，最终会变得难以收拾。

**‘持续’的概念，可以用于软件开发的方方面面，本质上就是把传统瀑布式的软件开发流程打碎，形成一个个更小的开发闭环，持续地输出产品，同时产品也持续地给上游反馈和纠正**。

![chapter1_3](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103150126.png)

**那什么是‘集成’呢**？狭义的集成可以简单认为是[‘集成测试’](https://juejin.im/post/5d2c515d6fb9a07ead5a2bbe#heading-26)。集成测试可以对代码静态测试、单元测试、通过单元测试后可以进行集成测试，在应用组成一个整体后在模拟环境中跑E2E测试等等。也就是说，在这里进行一系列的自动化测试来验证软件系统。

广义的持续集成服务，不仅仅是测试，它还衍生出很多概念，例如持续交付、持续部署，如下图

![chapter1_4](https://pic-go-1256738511.cos.ap-chengdu.myqcloud.com/images/20201103150130.png)

OK， **总结一下为什么持续集成的好处**：

- 尽早发现错误，快速试错。越早发现错误，处理错误的成本越低
- 自动化工作流，减少人工干预。人类比机器容易犯错， 而且机器擅长做重复的事情

**对于持续集成规范一般会定义这些内容**：

- 执行的环境. 比如容器、Node版本、操作系统等等
- 触发的条件。比如定时触发、在哪个分支触发、会触发什么任务等等
- 执行的任务
- 划分持续集成的阶段. 比如
  - 检查：包括单元测试和代码lint. 所有push到版本库的代码都会跑这个阶段. 一般可以在提交title中包含[ci skip]来跳过这个阶段
  - 构建： 对前端项目进行构建. 只有打上版本tag的提交或release分支会跑构建任务
  - 发布： 将前端的构建结果进行交付/发布.  只有打上版本tag的提交或者release分支在构建成功后会跑发布任务
- 定义持续集成脚本模板

常用的CI服务：

- GitHub
  - [Travis CI](https://github.com/marketplace/travis-ci)
  - [CircleCI](https://github.com/marketplace/circleci)
  - [完整列表](https://github.com/marketplace/category/continuous-integration)
- GitLab： [Gitlab-CI](https://docs.gitlab.com/ee/ci/)
- 通用
  - [Jenkins](https://jenkins.io)

扩展

- [持续集成是什么](https://juejin.im/post/58f9ee860ce46300611be392)

目前公司前端开发部分未添加持续集成功能。

