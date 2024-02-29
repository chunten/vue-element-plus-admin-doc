import{o as t,c as a,a as s}from"./app.7e863e47.js";const n='{"title":"Sticky 黏性组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Sticky 属性","slug":"sticky-属性"}],"relativePath":"components/sticky.md","lastUpdated":1709192290587}',p={},e=s('<h1 id="sticky-黏性组件"><a class="header-anchor" href="#sticky-黏性组件" aria-hidden="true">#</a> Sticky 黏性组件</h1><p><code>1.2.4</code> 新增</p><p>Sticky 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Search" target="_blank" rel="noopener noreferrer">src/components/Sticky</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Sticky <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Sticky&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sticky</span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>90<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Sticky 距离顶部90px <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Sticky</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="sticky-属性"><a class="header-anchor" href="#sticky-属性" aria-hidden="true">#</a> Sticky 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>offset</td><td>距离顶部或者底部的距离</td><td><code>number</code></td><td>-</td><td>0</td></tr><tr><td>zIndex</td><td>设置元素的堆叠顺序</td><td><code>number</code></td><td>-</td><td>999</td></tr><tr><td>className</td><td>设置指定的class</td><td><code>string</code>/<code>number</code></td><td>-</td><td>-</td></tr><tr><td>position</td><td>定位方式，默认为(top)，表示距离顶部位置，可以设置为top或者bottom</td><td><code>string</code></td><td>top/bottom</td><td>top</td></tr></tbody></table>',7);p.render=function(s,n,p,o,c,l){return t(),a("div",null,[e])};export default p;export{n as __pageData};
