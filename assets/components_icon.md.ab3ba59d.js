import{o as n,c as a,a as s}from"./app.7e863e47.js";const t='{"title":"Icon 图标组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"useIcon","slug":"useicon"},{"level":2,"title":"Icon 属性","slug":"icon-属性"}],"relativePath":"components/icon.md","lastUpdated":1709192290587}',o={},p=s('<h1 id="icon-图标组件"><a class="header-anchor" href="#icon-图标组件" aria-hidden="true">#</a> Icon 图标组件</h1><p>用于项目内组件的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标），支持使用本地 svg 和 Iconify 图标。</p><p>Icon 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Icon" target="_blank" rel="noopener noreferrer">src/components/Icon</a> 内</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 <a href="https://iconify.design" target="_blank" rel="noopener noreferrer">Iconify</a> 上，你可以查询到你想要的所有图标并使用，不管是不是 <code>element-plus</code> 的图标库。</p></div><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p>如果以<code>svg-icon:</code> 开头，则会在本地中找到该 <code>svg</code> 图标，否则，会加载 <code>Iconify</code> 图标。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 加载本地 svg --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svg-icon:peoples<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n  <span class="token comment">&lt;!-- 加载 Iconify --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ep:aim<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="useicon"><a class="header-anchor" href="#useicon" aria-hidden="true">#</a> useIcon</h3><p>如果需要在其他组件中如 <code>ElButton</code> 传入 <code>icon</code> 属性，可以使用 <code>useIcon</code></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useIcon&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n\n<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token function">useIcon</span><span class="token punctuation">(</span><span class="token punctuation">{</span> icon<span class="token operator">:</span> <span class="token string">&#39;svg-icon:save&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> button <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h4 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h4><div class="language-ts"><pre><code><span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token function">useIcon</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n</code></pre></div><p><strong>props</strong></p><p><a href="#Icon">详见</a></p><h2 id="icon-属性"><a class="header-anchor" href="#icon-属性" aria-hidden="true">#</a> Icon 属性<span id="Icon"></span></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>图标名</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>size</td><td>图标大小</td><td><code>number</code></td><td>-</td><td>16</td></tr><tr><td>hoverColor</td><td>hover颜色</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>',17);o.render=function(s,t,o,e,c,l){return n(),a("div",null,[p])};export default o;export{t as __pageData};
