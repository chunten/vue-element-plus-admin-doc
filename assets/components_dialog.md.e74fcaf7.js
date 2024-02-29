import{o as a,c as n,a as t}from"./app.7e863e47.js";const s='{"title":"Dialog 弹窗组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Dialog 属性","slug":"dialog-属性"},{"level":2,"title":"Dialog 插槽","slug":"dialog-插槽"}],"relativePath":"components/dialog.md","lastUpdated":1709192290583}',p={},o=t('<h1 id="dialog-弹窗组件"><a class="header-anchor" href="#dialog-弹窗组件" aria-hidden="true">#</a> Dialog 弹窗组件</h1><p>对 <code>element-plus</code> 的 <code>Dialog</code> 组件进行封装。</p><p>Dialog 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Dialog" target="_blank" rel="noopener noreferrer">src/components/Dialog</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Dialog&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> dialogVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogVisible = !dialogVisible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    open\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogVisible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v in 10000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ v }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogVisible = false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="dialog-属性"><a class="header-anchor" href="#dialog-属性" aria-hidden="true">#</a> Dialog 属性</h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Dialog</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/dialog.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>是否显示弹窗，支持v-model</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>fullscreen</td><td>是否显示全屏按钮</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>title</td><td>弹窗标题</td><td><code>string</code></td><td>-</td><td>Dialog</td></tr><tr><td>maxHeight</td><td>弹窗内容最大高度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>500px</td></tr></tbody></table><h2 id="dialog-插槽"><a class="header-anchor" href="#dialog-插槽" aria-hidden="true">#</a> Dialog 插槽</h2><table><thead><tr><th>插槽名</th><th>说明</th><th>子标签</th></tr></thead><tbody><tr><td>-</td><td>弹窗内容</td><td>-</td></tr><tr><td>title</td><td>弹窗标题内容</td><td>-</td></tr><tr><td>footer</td><td>弹窗底部内容</td><td>-</td></tr></tbody></table>',10);p.render=function(t,s,p,e,l,c){return a(),n("div",null,[o])};export default p;export{s as __pageData};
