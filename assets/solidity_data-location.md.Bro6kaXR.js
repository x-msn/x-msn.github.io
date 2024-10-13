import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BV61Qrc0.js";const y=JSON.parse('{"title":"数据位置","description":"","frontmatter":{},"headers":[],"relativePath":"solidity/data-location.md","filePath":"solidity/data-location.md"}'),t={name:"solidity/data-location.md"},l=n(`<h1 id="数据位置" tabindex="-1">数据位置 <a class="header-anchor" href="#数据位置" aria-label="Permalink to &quot;数据位置&quot;">​</a></h1><p>在 <code>Solidity</code> 中，变量可以在三个不同的数据位置中声明：<code>storage</code>、<code>memory</code> 和 <code>calldata</code>。</p><ol><li><p><code>Storage</code> 表示变量在区块链上永久存储的位置，通常用于状态变量。</p></li><li><p><code>Memory</code> 表示存储在内存中的临时变量，通常用于函数参数和局部变量。</p></li><li><p><code>Calldata</code> 是一个特殊的区块链存储区域，用于存储函数调用数据，通常用于外部函数调用。</p></li></ol><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>以下是一个编程示例，演示 <code>Solidity</code> 中不同数据位置的使用：</p><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pragma</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> solidity</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ^0.8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">contract</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] myArray;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addToStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    myArray.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存储数据到 storage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getFromMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">memory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newArray </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myArray;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 复制 storage 数据到 memory</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newArray[index];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getFromCalldata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">calldata</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> pure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> returns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.length; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data[i];  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 读取 calldata</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在上面的示例中，<code>addToStorage</code> 函数将数据存储在 <code>myArray</code> 中，该数组是一个状态变量，存储在 <code>Storage</code> 中。</p><p><code>getFromMemory</code> 函数将 <code>myArray</code> 中的数据复制到一个临时数组中，该数组存储在 <code>Memory</code> 中。</p><p><code>getFromCalldata</code> 函数接受一个包含数据的 <code>calldata</code> 参数，并计算其总和，<code>calldata</code> 存储在 <code>calldata</code> 区域中。</p><p>需要注意的是，在 <code>Solidity</code> 中，从 <code>Storage</code> 复制值到 <code>Memory</code> 是一种昂贵的操作，因此需要格外小心地使用，并尽可能减少这种操作。</p>`,10),h=[l];function p(k,e,d,r,E,o){return a(),i("div",null,h)}const g=s(t,[["render",p]]);export{y as __pageData,g as default};