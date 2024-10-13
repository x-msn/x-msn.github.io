import{_ as s,c as i,o as a,a2 as h}from"./chunks/framework.BV61Qrc0.js";const y=JSON.parse('{"title":"任务与插件","description":"","frontmatter":{},"headers":[],"relativePath":"hardhat/task.md","filePath":"hardhat/task.md"}'),n={name:"hardhat/task.md"},k=h(`<h1 id="任务与插件" tabindex="-1">任务与插件 <a class="header-anchor" href="#任务与插件" aria-label="Permalink to &quot;任务与插件&quot;">​</a></h1><p>在 <code>Hardhat</code> 中，任务（<code>task</code>）是一种自定义命令或脚本，可用于执行各种开发任务和操作。</p><h2 id="什么是任务" tabindex="-1">什么是任务 <a class="header-anchor" href="#什么是任务" aria-label="Permalink to &quot;什么是任务&quot;">​</a></h2><p>当在终端输入</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span></span></code></pre></div><p>输出:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.17.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [GLOBAL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OPTIONS]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [TASK </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OPTIONS]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GLOBAL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OPTIONS:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AVAILABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TASKS:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 Check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whatever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> need</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  clean</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 Clears</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deletes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  compile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Compiles</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> entire</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> building</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  console</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Opens</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> console</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  coverage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Generates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coverage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  flatten</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Flattens</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> their</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> If</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passed,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flattened.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  gas-reporter:merge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Starts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> top</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Network</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   Runs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user-defined</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compiling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Runs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mocha</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  typechain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             Generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Typechain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typings</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compiled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  verify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Verifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Etherscan</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">To</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specific</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [task]</span></span></code></pre></div><p><code>AVAILABLE TASKS</code> 栏目下的内容即为任务。</p><p>这种东西简单来说就是可以看作为一些自动化的脚本，可以帮我们完成一些繁琐的事情，比如打印当前节点控制的地址列表这些。</p><p>比如，我们之前用的<code>npx hardhat test</code>就是运行一个测试任务。</p><p><code>Hardhat</code>内置的常用任务:</p><ul><li><code>npx hardhat compile</code> ：编译 <code>Solidity</code> 合约代码。</li><li><code>npx hardhat test</code> ：运行测试脚本。</li><li><code>npx hardhat run [path/to/script.js]</code> ：运行一个脚本。</li><li><code>npx hardhat clean</code> ：清除构建输出和缓存文件。</li><li><code>npx hardhat accounts</code> ：列出可用的账户信息。</li><li><code>npx hardhat node</code> ：启动本地开发节点。</li></ul><h2 id="创建任务" tabindex="-1">创建任务 <a class="header-anchor" href="#创建任务" aria-label="Permalink to &quot;创建任务&quot;">​</a></h2><p>创建自定义任务，其实本质就是往 <code>hardhat.config.js</code> 添加一段代码罢了</p><p>下面是一个名为 <code>accounts</code> 的任务，作用是打印当前节点所控制的地址列表</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">task</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Prints the list of accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">taskArgs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hre</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> accounts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hre.ethers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSigners</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> account</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> accounts) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(account.address);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>解释:</p><ul><li>第一个参数是任务名 具有任务参数的对象</li><li>第二个参数是该任务的描述 是Hardhat运行时环境，包含Hardhat及其插件的所有功能。您还可以在任务执行过程中找到注入全局命名空间的所有属性。</li><li>第三个参数是一个异步函数，它在运行任务时执行</li></ul><h2 id="运行任务" tabindex="-1">运行任务 <a class="header-anchor" href="#运行任务" aria-label="Permalink to &quot;运行任务&quot;">​</a></h2><p>如果我们添加了上面的代码到 <code>hardhat.config.js</code> 那么在终端运行 <code>npx hardhat</code>将会输出</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.17.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [GLOBAL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OPTIONS]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [TASK </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">OPTIONS]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GLOBAL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OPTIONS:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AVAILABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TASKS:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  accounts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accounts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 Check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whatever</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> need</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  clean</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 Clears</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deletes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  compile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Compiles</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> entire</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> building</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifacts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  console</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Opens</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> console</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  coverage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Generates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coverage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> report</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  flatten</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Flattens</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> their</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> If</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passed,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flattened.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  gas-reporter:merge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Starts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSON-RPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> top</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Network</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   Runs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user-defined</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compiling</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Runs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mocha</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  typechain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             Generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Typechain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typings</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compiled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contracts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  verify</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                Verifies</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Etherscan</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">To</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> specific</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [task]</span></span></code></pre></div><p>可以发现多了一行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  accounts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              Prints</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accounts</span></span></code></pre></div><p>这就是我们自定义的命令。事实上运行 <code>npx hardhat</code> 会自动扫描 <code>hardhat.config.js</code> 下的任务并添加到 <code>Hardhat</code> 中</p><p>运行任务:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hardhat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accounts</span></span></code></pre></div><p>输出</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x70997970C51812dc3A010C7d01b50e0d17dc79C8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x90F79bf6EB2c4f870365E785982E1f101E93b906</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x976EA74026E726554dB657fA54763abd0C3a0aa9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x14dC79964da2C08b23698B3D3cc7Ca32193d9955</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xa0Ee7A142d267C1f36714E4a8F75612F20a79720</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xBcd4042DE499D14e55001CcbB24a551F3b954096</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x71bE63f3384f5fb98995898A86B02Fb2426c5788</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xFABB0ac9d68B0B445fB7357272Ff202C5651694a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xcd3B766CCDd6AE721141F452C550Ca635964ce71</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x2546BcD3c84621e976D8185a91A922aE77ECEc30</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xbDA5747bFD65F08deb54cb465eB87D40e51B197E</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0xdD2FD4581271e230360230F9337D5c0430Bf44C0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199</span></span></code></pre></div><p>成功打印当前节点所控制的地址列表</p>`,29),t=[k];function p(l,F,e,d,r,g){return a(),i("div",null,t)}const E=s(n,[["render",p]]);export{y as __pageData,E as default};