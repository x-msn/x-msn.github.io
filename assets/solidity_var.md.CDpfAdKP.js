import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BV61Qrc0.js";const y=JSON.parse('{"title":"变量","description":"","frontmatter":{},"headers":[],"relativePath":"solidity/var.md","filePath":"solidity/var.md"}'),l={name:"solidity/var.md"},t=n(`<h1 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h1><p>在 <code>Solidity</code> 中，有三种类型的变量：状态变量、局部变量和全局变量。</p><ul><li>状态变量是指变量值永久保存在智能合约的存储空间中的变量；</li><li>局部变量是指变量值仅在函数执行期间有效的变量，在函数退出后无效；</li><li>全局变量保存在全局命名空间中，是一种特殊变量，用于获取整个区块链相关信息，与当前合约无关，例如时间戳和块高等。</li></ul><p><code>Solidity</code> 在变量声明时指定变量类型。每个变量声明时都有一个基于其类型的默认值，例如 <code>int</code> 类型的默认值为 <code>0</code>，不存在 <code>undefined</code> 或 <code>null</code> 的概念。</p><h2 id="_1-状态变量" tabindex="-1">1. 状态变量 <a class="header-anchor" href="#_1-状态变量" aria-label="Permalink to &quot;1. 状态变量&quot;">​</a></h2><p>状态变量的值可以被多次访问和修改，且在合约生命周期内保持不变。它们可以被用于存储重要的数据和状态信息，例如存储用户账户信息或者记录合约历史状态。</p><p>示例</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myUint; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明一个公共的无符号整数状态变量，名为 myUint</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setUint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _myUint) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        myUint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _myUint; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置 myUint 的值为函数传入的参数 _myUint</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个示例程序中，我们定义了一个名为 <code>MyContract</code> 的合约，并在其中声明了一个公共的无符号整数状态变量 myUint。我们同时为这个合约定义了一个名为 <code>setUint</code> 的函数，用于设置 <code>myUint</code> 变量的值。</p><p>在 <code>Solidity</code> 中，公共变量可以被合约内外的所有人访问。在这个示例中，<code>myUint</code> 变量使用了 <code>public</code> 关键字，因此可以在合约外部访问这个变量，并查询它的值。同时，我们也可以调用 <code>setUint</code> 函数来修改 <code>myUint</code> 变量的值。</p><h2 id="_2-局部变量" tabindex="-1">2. 局部变量 <a class="header-anchor" href="#_2-局部变量" aria-label="Permalink to &quot;2. 局部变量&quot;">​</a></h2><p>与状态变量不同，局部变量是在 <code>Solidity</code> 函数内部和生命周期期内有效，主要用于函数内部运算和临时数据存储，例如简单的数学运算或临时转换数据类型。</p><p>示例</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> exampleFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明一个无符号整数局部变量，名为num1，赋初值为10</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明一个无符号整数局部变量，名为num2，赋初值为5</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num2; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明一个无符号整数局部变量，名为sum，值为num1和num2的和</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回sum的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个示例程序中，我们定义了一个名为 <code>exampleFunction</code> 的函数，在函数中声明了三个无符号整数类型的局部变量 <code>num1、num2 和 sum</code>。在函数执行过程中，我们将 <code>num1</code> 和 <code>num2</code> 的和赋值给了 <code>sum</code>，并返回了 <code>sum</code> 的值。</p><p>需要注意的是，局部变量的作用域只限于当前函数中。在示例函数 <code>exampleFunction</code> 内部执行完成后，局部变量<code>num1、num2和sum</code> 的值会被销毁。</p><h2 id="_3-全局变量" tabindex="-1">3. 全局变量 <a class="header-anchor" href="#_3-全局变量" aria-label="Permalink to &quot;3. 全局变量&quot;">​</a></h2><p>全局变量通常是一个只读的变量，可以用于获取区块链的相关信息，例如区块高度、当前时间戳、消息发送者地址等信息。以下是一些常见的 <code>Solidity</code> 内置全局变量：</p><ul><li><code>block.number</code>: 当前块的块号。</li><li><code>block.timestamp</code>: 当前块的时间戳。</li><li><code>msg.sender</code>: 消息发送者的地址。</li><li><code>msg.value</code>: 以 <code>wei</code> 为单位的消息 <code>value</code> 植。</li><li><code>now</code>: 当前区块时间戳（等同于 <code>block.timestamp</code>）。</li></ul><p>示例</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyContract</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> blockNumber; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明一个公共的无符号整数状态变量，名为blockNumber</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getCurrentBlockNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        blockNumber </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.number; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将当前块的块号赋值给blockNumber</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个示例程序中，我们定义了一个名为 <code>MyContract</code> 的合约，并声明了一个公共的无符号整数状态变量 <code>blockNumber</code>。</p><p>在 <code>getCurrentBlockNumber</code> 函数中，我们将全局变量 <code>block.number</code> 的值赋给了 <code>blockNumber</code> 变量。</p><p>需要注意的是，全局变量通常是只读的，不允许修改。因此，我们只能将全局变量的值赋给其他变量，而不能修改全局变量的值。</p>`,24),e=[t];function p(h,k,d,c,o,r){return a(),i("div",null,e)}const g=s(l,[["render",p]]);export{y as __pageData,g as default};