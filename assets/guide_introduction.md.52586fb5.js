import{o as e,c as r,e as t,a as n}from"./app.7e863e47.js";const a='{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介"},{"level":2,"title":"需要掌握的基础知识","slug":"需要掌握的基础知识"},{"level":2,"title":"目录结构","slug":"目录结构"},{"level":2,"title":"浏览器支持","slug":"浏览器支持"},{"level":2,"title":"IDE推荐","slug":"ide推荐"}],"relativePath":"guide/introduction.md","lastUpdated":1709192290587}',o={},s=n('<h1 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>如果需要 v1 版本的文档，请到 <a href="https://github.com/kailong321200875/vue-element-plus-admin-doc/tree/v1" target="_blank" rel="noopener noreferrer">v1</a> 分支进行 clone ，目前文档仅支持 v2 版本</li></ul></div><h2 id="简介"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><a href="https://github.com/kailong321200875/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">vue-element-plus-admin</a> 是一个基于 <a href="https://element-plus.org/" target="_blank" rel="noopener noreferrer">element-plus</a> 免费开源的中后台模版。使用了最新的 <a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener noreferrer">Vue3</a>，<a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite</a>，<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a>等主流技术开发，开箱即用的中后台前端解决方案，可以用来作为项目的启动模版，也可用于学习参考。并且时刻关注着最新技术动向，尽可能的第一时间更新。</p><p><a href="https://github.com/kailong321200875/vue-element-plus-admin" target="_blank" rel="noopener noreferrer">vue-element-plus-admin</a> 的定位是后台集成方案，因为集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不关注这方面的问题，也可以直接基于它进行二次开发。</p>',5),i=n('<p>如需要基础模版，请切换到 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/mini" target="_blank" rel="noopener noreferrer">mini</a> 分支，<a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/mini" target="_blank" rel="noopener noreferrer">mini</a> 只简单集成了一些如：布局、动态菜单等常用布局功能，更适合开发者进行二次开发。</p><h2 id="需要掌握的基础知识"><a class="header-anchor" href="#需要掌握的基础知识" aria-hidden="true">#</a> 需要掌握的基础知识</h2><p>本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。</p><p>为了能快速上手本项目，请先大致浏览一遍文档及在线示例。</p><p>建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:</p><ul><li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3</a></li><li><a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">Pinia</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li><li><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue-router</a></li><li><a href="https://element-plus.org/" target="_blank" rel="noopener noreferrer">Element-plus</a></li><li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">Es6</a></li><li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vitejs</a></li><li><a href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">unocss</a></li><li><a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">Axios</a></li></ul><h2 id="目录结构"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-"><pre><code>.\n├── .github # github workflows 相关\n├── .husky # husky 配置\n├── .vscode # vscode 配置\n├── mock # 自定义 mock 数据及配置\n├── public # 静态资源\n├── src # 项目代码\n│   ├── api # api接口管理\n|   |── axios # axios配置\n│   ├── assets # 静态资源\n│   ├── components # 公用组件\n│   ├── constants # 存放常量\n│   ├── hooks # 常用hooks\n│   ├── layout # 布局组件\n│   ├── locales # 语言文件\n│   ├── plugins # 外部插件\n│   ├── router # 路由配置\n│   ├── store # 状态管理\n│   ├── styles # 全局样式\n│   ├── utils # 全局工具类\n│   ├── views # 路由页面\n│   ├── App.vue # 入口vue文件\n│   ├── main.ts # 主入口文件\n│   └── permission.ts # 路由拦截\n├── types # 全局类型\n├── .env.base # 本地开发环境 环境变量配置\n├── .env.dev # 打包到开发环境 环境变量配置\n├── .env.gitee # 针对 gitee 的环境变量 可忽略\n├── .env.pro # 打包到生产环境 环境变量配置\n├── .env.test # 打包到测试环境 环境变量配置\n├── .eslintignore # eslint 跳过检测配置\n├── .eslintrc.js # eslint 配置\n├── .gitignore # git 跳过配置\n├── .prettierignore # prettier 跳过检测配置\n├── .stylelintignore # stylelint 跳过检测配置\n├── .versionrc 自动生成版本号及更新记录配置\n├── CHANGELOG.md # 更新记录\n├── commitlint.config.js # git commit 提交规范配置\n├── index.html # 入口页面\n├── package.json\n├── .postcssrc.js # postcss 配置\n├── prettier.config.js # prettier 配置\n├── README.md # 英文 README\n├── README.zh-CN.md # 中文 README\n├── stylelint.config.js # stylelint 配置\n├── tsconfig.json # typescript 配置\n├── vite.config.ts # vite 配置\n└── uno.config.ts # unocss 配置\n</code></pre></div><h2 id="浏览器支持"><a class="header-anchor" href="#浏览器支持" aria-hidden="true">#</a> 浏览器支持</h2><p><strong>本地开发</strong>推荐使用<code>Chrome 最新版</code>浏览器。</p><p>由于 Vue 3 不再支持 IE11，本项目也不支持 IE。</p><table><thead><tr><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"></a>IE</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px"></a>Edge</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th></tr></thead><tbody><tr><td style="text-align:center;">not support</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td></tr></tbody></table><h2 id="ide推荐"><a class="header-anchor" href="#ide推荐" aria-hidden="true">#</a> IDE推荐</h2><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a></li></ul>',14);o.render=function(n,a,o,l,p,h){return e(),r("div",null,[s,t(" ::: warning 注意\n\n- 由于精力有限，[template](https://github.com/kailong321200875/vue-element-plus-admin/tree/template) 分支将不再维护，如果需要精简版，请自行删除不需要的文件及代码。\n\n::: "),i])};export default o;export{a as __pageData};
