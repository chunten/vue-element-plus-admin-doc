import{o as t,c as a,a as n}from"./app.7e863e47.js";const s='{"title":"IAgree 我同意","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"Avatars 属性","slug":"avatars-属性"},{"level":3,"title":"link","slug":"link"}],"relativePath":"components/i-agree.md","lastUpdated":1709192290587}',e={},d=n('<h1 id="iagree-我同意"><a class="header-anchor" href="#iagree-我同意" aria-hidden="true">#</a> IAgree 我同意</h1><p>用于同意协议选项</p><p>IAgree 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/IAgree" target="_blank" rel="noopener noreferrer">src/components/IAgree</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IAgree</span>\n    <span class="token attr-name">:link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n      {\n        text: <span class="token punctuation">&#39;</span>《隐私政策》<span class="token punctuation">&#39;</span>,\n        url: <span class="token punctuation">&#39;</span>https://www.baidu.com<span class="token punctuation">&#39;</span>\n      }\n    ]<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>我同意《隐私政策》<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="avatars-属性"><a class="header-anchor" href="#avatars-属性" aria-hidden="true">#</a> Avatars 属性<span id="Avatars"></span></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>文案</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>link</td><td>需要跳转的高亮数据，<a href="#link">详见</a></td><td><code>LinkItem[]</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="link"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link<span id="link"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>跳转地址，非必填</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>text</td><td>高亮文案</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>onClick</td><td>点击高亮文案执行的方法，非必填</td><td><code>() =&gt; void</code></td><td>-</td><td>-</td></tr></tbody></table>',9);e.render=function(n,s,e,p,o,r){return t(),a("div",null,[d])};export default e;export{s as __pageData};
