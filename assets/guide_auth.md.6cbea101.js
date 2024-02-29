import{o as n,c as s,a}from"./app.7e863e47.js";const t='{"title":"权限","description":"","frontmatter":{},"headers":[{"level":2,"title":"前端控制权限","slug":"前端控制权限"},{"level":2,"title":"后台动态获取","slug":"后台动态获取"},{"level":2,"title":"实现","slug":"实现"},{"level":3,"title":"前端控制实现","slug":"前端控制实现"},{"level":3,"title":"后台动态获取","slug":"后台动态获取-1"},{"level":3,"title":"公用部分修改","slug":"公用部分修改"},{"level":2,"title":"静态路由（无权限）","slug":"静态路由（无权限）"}],"relativePath":"guide/auth.md","lastUpdated":1709192290587}',p={},o=a('<h1 id="权限"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h1><p>项目中集成了 2 种权限处理方式：</p><ol><li>第一种是由前端来控制菜单，即服务端只返回有权限的 keys，由前端自行去匹配</li><li>第二种是通过服务端返回的路由数据结构来动态生成路由表</li></ol><p>目前项目中提供了测试的帐号：</p><p><strong>admin/admin</strong></p><h2 id="前端控制权限"><a class="header-anchor" href="#前端控制权限" aria-hidden="true">#</a> 前端控制权限</h2><p><strong>实现原理：</strong> 在前端固定写死路由的权限，指定路由有哪些权限可以查看。只初始化通用的路由，需要权限才能访问的路由没有被加入路由表内。在登陆后或者其他方式获取对应的路由 keys 后，遍历路由表去匹配 keys，过滤生成可以访问的路由表，再通过 <code>router.addRoutes</code> 添加到路由实例，实现权限的过滤。</p><p><strong>缺点：</strong> 权限相对不自由，因为路由表的控制在前端，不管是要排序还是修改，都需要前端去修改，服务端只提供有权限的路由 keys</p><h2 id="后台动态获取"><a class="header-anchor" href="#后台动态获取" aria-hidden="true">#</a> 后台动态获取</h2><p><strong>实现原理：</strong> 是通过接口动态生成路由表，且遵循一定的数据结构返回。前端根据需要处理该数据为可识别的结构，再通过 <code>router.addRoutes</code> 添加到路由实例，实现权限的动态生成。</p><p><strong>优点：</strong> 所有的菜单控制都是通过服务端的接口返回，前端只负责渲染，后期维护成本降低，优先推荐此方式。</p><h2 id="实现"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><ol><li>在<a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/store/modules/permission.ts" target="_blank" rel="noopener noreferrer">src/store/modules/permission.ts</a> 中 <code>generateRoutes()</code> 进行更改。</li></ol><p>接收的 <code>type</code> 参数，目前只是针对于本项目的模拟情况，如果不需要或者不适用，可自行改动。</p><div class="language-ts"><pre><code><span class="token function">generateRoutes</span><span class="token punctuation">(</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;server&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;frontEnd&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">,</span>\n  routers<span class="token operator">?</span><span class="token operator">:</span> AppCustomRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> routerMap<span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;server&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 模拟后端过滤菜单</span>\n      routerMap <span class="token operator">=</span> <span class="token function">generateRoutesByServer</span><span class="token punctuation">(</span>routers <span class="token keyword">as</span> AppCustomRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;frontEnd&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 模拟前端过滤菜单</span>\n      routerMap <span class="token operator">=</span> <span class="token function">generateRoutesByFrontEnd</span><span class="token punctuation">(</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>asyncRouterMap<span class="token punctuation">)</span><span class="token punctuation">,</span> routers <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 直接读取静态路由表</span>\n      routerMap <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>asyncRouterMap<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 动态路由，404一定要放到最后面</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>addRouters <span class="token operator">=</span> routerMap<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;/:path(.*)*&#39;</span><span class="token punctuation">,</span>\n        redirect<span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;404Page&#39;</span><span class="token punctuation">,</span>\n        meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n          hidden<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          breadcrumb<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token comment">// 渲染菜单的所有路由</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>routers <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>constantRouterMap<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>routerMap<span class="token punctuation">)</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="前端控制实现"><a class="header-anchor" href="#前端控制实现" aria-hidden="true">#</a> 前端控制实现</h3><ol start="2"><li>在<a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/utils/routerHelper.ts" target="_blank" rel="noopener noreferrer">src/utils/routerHelper.ts</a> 中 <code>generateRoutesByFrontEnd ()</code> 进行更改。目前本项目的前端权限控制，是根据 <code>path</code> 是否相同来进行过滤演示的，如果不符合需求，需要手动更改以下判断逻辑。</li></ol><div class="language-ts"><pre><code><span class="token comment">// 前端控制路由生成</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> generateRoutesByFrontEnd  <span class="token operator">=</span> <span class="token punctuation">(</span>\n  routes<span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  keys<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  basePath <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res<span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> route <span class="token keyword">of</span> routes<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> meta <span class="token operator">=</span> route<span class="token punctuation">.</span>meta <span class="token keyword">as</span> RouteMeta<span class="token punctuation">;</span>\n    <span class="token comment">// skip some route</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>meta<span class="token punctuation">.</span>hidden <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>meta<span class="token punctuation">.</span>showMainRoute<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">continue</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">let</span> data<span class="token operator">:</span> Nullable<span class="token operator">&lt;</span>AppRouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">let</span> onlyOneChild<span class="token operator">:</span> Nullable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>meta<span class="token punctuation">.</span>alwaysShow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      onlyOneChild <span class="token operator">=</span> <span class="token punctuation">(</span>\n        <span class="token function">isUrl</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span>\n          <span class="token operator">?</span> route<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path\n          <span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token function">pathResolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">,</span> route<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span>\n      <span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 开发者可以根据实际情况进行扩展</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 通过路径去匹配</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isUrl</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>onlyOneChild <span class="token operator">===</span> item <span class="token operator">||</span> route<span class="token punctuation">.</span>path <span class="token operator">===</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        data <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> routePath <span class="token operator">=</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> onlyOneChild <span class="token operator">||</span> route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>routePath <span class="token operator">===</span> item <span class="token operator">||</span> meta<span class="token punctuation">.</span>followRoute <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          data <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> route<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// recursive child routes</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      data<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">generateRoutesByFrontEnd</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span>basePath<span class="token punctuation">,</span> data<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data <span class="token keyword">as</span> AppRouteRecordRaw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="后台动态获取-1"><a class="header-anchor" href="#后台动态获取-1" aria-hidden="true">#</a> 后台动态获取</h3><ol start="3"><li>在<a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/utils/routerHelper.ts" target="_blank" rel="noopener noreferrer">src/utils/routerHelper.ts</a> 中 <code>generateRoutesByServer ()</code> 进行更改。</li></ol><div class="language-ts"><pre><code><span class="token comment">// 后端控制路由生成</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> generateRoutesByServer  <span class="token operator">=</span> <span class="token punctuation">(</span>routes<span class="token operator">:</span> AppCustomRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res<span class="token operator">:</span> AppRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> route <span class="token keyword">of</span> routes<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data<span class="token operator">:</span> AppRouteRecordRaw <span class="token operator">=</span> <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> route<span class="token punctuation">.</span>path<span class="token punctuation">,</span>\n      name<span class="token operator">:</span> route<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n      redirect<span class="token operator">:</span> route<span class="token punctuation">.</span>redirect<span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> comModule <span class="token operator">=</span>\n        modules<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">../</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.vue</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span> <span class="token operator">||</span> modules<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">../</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.tsx</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> component <span class="token operator">=</span> route<span class="token punctuation">.</span>component <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>comModule <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>component<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">未找到</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.vue文件或</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>component<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.tsx文件，请创建</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 动态加载路由文件，可根据实际情况进行自定义逻辑</span>\n        data<span class="token punctuation">.</span>component <span class="token operator">=</span>\n          component <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">?</span> Layout <span class="token operator">:</span> component<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;##&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> comModule<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// recursive child routes</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      data<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">generateRoutesByServer</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data <span class="token keyword">as</span> AppRouteRecordRaw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="公用部分修改"><a class="header-anchor" href="#公用部分修改" aria-hidden="true">#</a> 公用部分修改</h3><ol start="4"><li>在<a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/views/Login/components/LoginForm.vue" target="_blank" rel="noopener noreferrer">src/views/Login/components/LoginForm.vue</a> 中 <code>getRole()</code> 进行更改。</li></ol><p>需要开发者自行根据需求进行代码变更。</p><div class="language-ts"><pre><code><span class="token comment">// 获取角色信息</span>\n<span class="token keyword">const</span> <span class="token function-variable function">getRole</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">getFormData</span><span class="token generic class-name"><span class="token operator">&lt;</span>UserType<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>\n    roleName<span class="token operator">:</span> formData<span class="token punctuation">.</span>username\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span>\n    appStore<span class="token punctuation">.</span>getDynamicRouter <span class="token operator">&amp;&amp;</span> appStore<span class="token punctuation">.</span>getServerDynamicRouter\n      <span class="token operator">?</span> <span class="token keyword">await</span> <span class="token function">getAdminRoleApi</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>\n      <span class="token operator">:</span> <span class="token keyword">await</span> <span class="token function">getTestRoleApi</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> routers <span class="token operator">=</span> res<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token string">&#39;roleRouters&#39;</span><span class="token punctuation">,</span> routers<span class="token punctuation">)</span>\n    appStore<span class="token punctuation">.</span>getDynamicRouter <span class="token operator">&amp;&amp;</span> appStore<span class="token punctuation">.</span>getServerDynamicRouter\n      <span class="token operator">?</span> <span class="token keyword">await</span> permissionStore<span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token string">&#39;server&#39;</span><span class="token punctuation">,</span> routers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token operator">:</span> <span class="token keyword">await</span> permissionStore<span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token string">&#39;frontEnd&#39;</span><span class="token punctuation">,</span> routers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    permissionStore<span class="token punctuation">.</span>getAddRouters<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">addRoute</span><span class="token punctuation">(</span>route <span class="token keyword">as</span> RouteRecordRaw<span class="token punctuation">)</span> <span class="token comment">// 动态添加可访问路由表</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    permissionStore<span class="token punctuation">.</span><span class="token function">setIsAddRouters</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n    <span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> redirect<span class="token punctuation">.</span>value <span class="token operator">||</span> permissionStore<span class="token punctuation">.</span>addRouters<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>path <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="5"><li>在<a href="https://github.com/kailong321200875/vue-element-plus-admin/blob/master/src/permission.ts" target="_blank" rel="noopener noreferrer">src/permission.ts</a>，以下这种情况，是考虑到手动刷新，所以需要获取到缓存中的动态菜单重新渲染。</li></ol><div class="language-ts"><pre><code><span class="token comment">// 开发者可根据实际情况进行修改</span>\n<span class="token keyword">const</span> roleRouters <span class="token operator">=</span> <span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token string">&#39;roleRouters&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token comment">// 是否使用动态路由</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>appStore<span class="token punctuation">.</span>getDynamicRouter<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  appStore<span class="token punctuation">.</span>serverDynamicRouter\n    <span class="token operator">?</span> <span class="token keyword">await</span> permissionStore<span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token string">&#39;server&#39;</span><span class="token punctuation">,</span> roleRouters <span class="token keyword">as</span> AppCustomRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token operator">:</span> <span class="token keyword">await</span> permissionStore<span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token string">&#39;frontEnd&#39;</span><span class="token punctuation">,</span> roleRouters <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> permissionStore<span class="token punctuation">.</span><span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\npermissionStore<span class="token punctuation">.</span>getAddRouters<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span>route <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> RouteRecordRaw<span class="token punctuation">)</span> <span class="token comment">// 动态添加可访问路由表</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> redirectPath <span class="token operator">=</span> from<span class="token punctuation">.</span>query<span class="token punctuation">.</span>redirect <span class="token operator">||</span> to<span class="token punctuation">.</span>path\n<span class="token keyword">const</span> redirect <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>redirectPath <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> nextData <span class="token operator">=</span> to<span class="token punctuation">.</span>path <span class="token operator">===</span> redirect <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>to<span class="token punctuation">,</span> replace<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span> path<span class="token operator">:</span> redirect <span class="token punctuation">}</span>\npermissionStore<span class="token punctuation">.</span><span class="token function">setIsAddRouters</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n<span class="token function">next</span><span class="token punctuation">(</span>nextData<span class="token punctuation">)</span>\n</code></pre></div><h2 id="静态路由（无权限）"><a class="header-anchor" href="#静态路由（无权限）" aria-hidden="true">#</a> 静态路由（无权限）</h2><p>有时候，我们并不需要动态路由，那么可以在 <code>src/config/app.ts</code> 中把 <code>dynamicRouter</code> 设置为 <code>false</code>，这样我们取得都是项目中的静态路由表了。</p><p>内部逻辑已经处理了静态路由的部分，所以可以无需关心其他。</p>',30);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
