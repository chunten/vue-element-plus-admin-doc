import{o as t,c as n,a}from"./app.7e863e47.js";const s='{"title":"Infotip 信息提示组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Infotip 属性","slug":"infotip-属性"},{"level":2,"title":"Infotip 事件","slug":"infotip-事件"}],"relativePath":"components/infotip.md","lastUpdated":1709192290587}',p={},e=a('<h1 id="infotip-信息提示组件"><a class="header-anchor" href="#infotip-信息提示组件" aria-hidden="true">#</a> Infotip 信息提示组件</h1><p>基于 <code>Highlight</code> 组件封装。</p><p>Infotip 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Infotip" target="_blank" rel="noopener noreferrer">src/components/Infotip</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Infotip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Infotip&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Infotip</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>推荐使用Iconify组件<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n      {\n        label: <span class="token punctuation">&#39;</span>Iconify组件基本包含所有的图标，你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。<span class="token punctuation">&#39;</span>,\n        keys: [<span class="token punctuation">&#39;</span>Iconify<span class="token punctuation">&#39;</span>]\n      },\n      {\n        label: <span class="token punctuation">&#39;</span>访问地址<span class="token punctuation">&#39;</span>,\n        keys: [<span class="token punctuation">&#39;</span>访问地址<span class="token punctuation">&#39;</span>]\n      }\n    ]<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="infotip-属性"><a class="header-anchor" href="#infotip-属性" aria-hidden="true">#</a> Infotip 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>schema</td><td>展示的数据内容</td><td><code>string[]</code>/<code>TipSchema[]</code></td><td>-</td><td>[]</td></tr><tr><td>showIndex</td><td>显示序号</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>highlightColor</td><td>高亮颜色</td><td><code>string</code></td><td>-</td><td>var(--el-color-primary)</td></tr></tbody></table><h2 id="infotip-事件"><a class="header-anchor" href="#infotip-事件" aria-hidden="true">#</a> Infotip 事件</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>关键字点击事件</td><td>key: string</td></tr></tbody></table>',9);p.render=function(a,s,p,o,c,l){return t(),n("div",null,[e])};export default p;export{s as __pageData};
