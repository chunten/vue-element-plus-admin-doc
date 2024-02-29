import{o as a,c as s,a as n}from"./app.7e863e47.js";const t='{"title":"useStorage（2.1.0+）","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"参数介绍","slug":"参数介绍"}],"relativePath":"hooks/useStorage.md","lastUpdated":1709192290587}',e={},o=n('<h1 id="usestorage（2-1-0-）"><a class="header-anchor" href="#usestorage（2-1-0-）" aria-hidden="true">#</a> useStorage（2.1.0+）</h1><p>用于操作 localStorage 和 sessionStorage</p><p>useStorage 位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useStorage%EF%BC%882.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useStorage.ts</a></p><p>默认使用 <code>sessionStorage</code>，如需要使用 <code>localStorage</code> ，只需要传入 <code>localStorage</code> 即可，如：useStorage(&#39;localStorage&#39;)</p><p>支持非字符串类型存取值</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useStorage&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> setStorage<span class="token punctuation">,</span> getStorage<span class="token punctuation">,</span> removeStorage<span class="token punctuation">,</span> clear <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Jok&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>\n\n<span class="token function">removeStorage</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>\n\n<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> setStorage<span class="token punctuation">,</span> getStorage<span class="token punctuation">,</span> removeStorage<span class="token punctuation">,</span> clear <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;localStorage&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>setStorage</strong></p><p><code>setStorage</code> 存储数据</p><p><strong>getStorage</strong></p><p><code>getStorage</code> 获取某个存储数据</p><p><strong>removeStorage</strong></p><p><code>removeStorage</code> 清除某个存储数据</p><p><strong>clear</strong></p><p><code>clear</code> 清除所有缓存数据，如果需要排除某些数据，可以传入 excludes 来排除，如：clear([&#39;key&#39;])，这样 <code>key</code> 就不会被清除</p>',17);e.render=function(n,t,e,p,c,r){return a(),s("div",null,[o])};export default e;export{t as __pageData};
