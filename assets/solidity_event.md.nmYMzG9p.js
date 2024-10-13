import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.BV61Qrc0.js";const g=JSON.parse('{"title":"事件","description":"","frontmatter":{},"headers":[],"relativePath":"solidity/event.md","filePath":"solidity/event.md"}'),n={name:"solidity/event.md"},t=e(`<h1 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h1><p>在 <code>Solidity</code> 智能合约中，事件是一个重要的特性，可以用于在合约中触发事件通知，使外部应用程序监听到一些操作的变化或状态变更。</p><p>事件通常用于与外部系统的协调，同时还可以用于跟踪某些状态变化或错误发生。</p><p>一个事件通常有一个名称和一组参数，事件的参数定义了事件中要传递的数据类型。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><p>在 <code>Solidity</code> 中，我们可以使用event关键字来定义事件，例如：</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">event</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NewUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> indexed</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> userAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这个事件名为 <code>NewUser</code>，有两个参数：一个是地址类型的 <code>userAddress</code>，另一个是字符串类型的 <code>name</code>。</p><p><code>userAddress</code> 参数被索引为了允许外部应用程序更快地搜索该事件。</p><p>我们可以在合约中使用 <code>emit</code> 关键字来发出事件，例如：</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> calldata</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">external</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 添加一个用户到系统中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    emit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NewUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">msg.sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个合约中，当有人调用 <code>addUser()</code> 方法时，以合约调用者的地址和传入的用户名作为参数，发出 <code>NewUser</code> 事件。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>以下是一个简单的 <code>Solidity</code> 合约，它展示了一个事件在<code> Solidity</code> 中是如何定义和使用的：</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    event</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NewUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> indexed</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> userAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> calldata</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">external</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 添加一个用户到系统中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        emit</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NewUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">msg.sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上面的合约中，我们定义了一个名为 <code>NewUser</code> 的事件，它接受一个地址参数（用于索引）和一个字符串参数（用户名称）。</p><p>在 <code>addUser()</code> 函数中，我们使用 <code>emit</code> 关键字来发出 <code>NewUser</code> 事件，以便当有新用户添加到合约时通知外部应用程序。</p><p>请注意，<code>Solidity</code> 不支持直接在本地运行事件，因此对事件进行测试需要使用<code>truffle</code> 或其他类似的测试框架。</p>`,18),h=[t];function l(p,k,d,r,o,c){return a(),i("div",null,h)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
