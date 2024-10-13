import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.BV61Qrc0.js";const g=JSON.parse('{"title":"控制台","description":"","frontmatter":{},"headers":[],"relativePath":"hardhat/console.md","filePath":"hardhat/console.md"}'),n={name:"hardhat/console.md"},h=t(`<h1 id="控制台" tabindex="-1">控制台 <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台&quot;">​</a></h1><p>这个东西其实没什么好讲的，不好用，关键时候还得是编写脚本而不是在控制台瞎写。</p><h2 id="什么是控制台" tabindex="-1">什么是控制台 <a class="header-anchor" href="#什么是控制台" aria-label="Permalink to &quot;什么是控制台&quot;">​</a></h2><p><code>Hardhat</code> 内置了一个交互式 <code>JavaScript</code> 控制台</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> console</span></span></code></pre></div><p>注意: 编译任务将在打开控制台提示之前被调用，但您可以使用 <code>--no</code> 编译参数跳过此操作。</p><p>控制台的执行环境与任务、脚本和测试的执行环境相同。这意味着配置已经被处理，并且 <code>Hardhat</code> 运行时环境已经被初始化并注入到全局范围中。</p><h2 id="控制台执行脚本" tabindex="-1">控制台执行脚本 <a class="header-anchor" href="#控制台执行脚本" aria-label="Permalink to &quot;控制台执行脚本&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scriptResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts/deploy.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scriptResult);</span></span></code></pre></div><h2 id="控制台合约交互" tabindex="-1">控制台合约交互 <a class="header-anchor" href="#控制台合约交互" aria-label="Permalink to &quot;控制台合约交互&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> hre</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hardhat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hre.ethers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deployContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Add&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">waitForDeployment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Add deployed to \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div>`,11),e=[h];function l(p,k,d,r,o,c){return a(),i("div",null,e)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
