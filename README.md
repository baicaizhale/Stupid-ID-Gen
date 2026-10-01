<div align="center">

<img src="docs/logo.svg" width="84" height="84" alt="傻吊 ID 生成器">

# 傻吊 ID 生成器

**硬编码词库 + 纯随机抽取，给你一个不正经的 ID。**

没有输入框，没有开关，没有自定义——点一下，闭眼乱抽。

[![Stars](https://img.shields.io/github/stars/baicaizhale/Stupid-ID-Gen?style=flat-square&logo=github&label=Star&color=0842a0)](https://github.com/baicaizhale/Stupid-ID-Gen/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/baicaizhale/Stupid-ID-Gen?style=flat-square&color=0b57d0)](https://github.com/baicaizhale/Stupid-ID-Gen/commits/main)
[![License](https://img.shields.io/github/license/baicaizhale/Stupid-ID-Gen?style=flat-square&color=a8c7fa)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fohmyid.baicaizhale.top&style=flat-square&label=ohmyid.baicaizhale.top)](https://ohmyid.baicaizhale.top)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=ffffff)](https://workers.cloudflare.com/)

[**在线体验 →**](https://ohmyid.baicaizhale.top) ｜ [两种格式](#两种格式) ｜ [本地运行](#本地运行) ｜ [部署](#部署) ｜ [提词 / 反馈](https://github.com/baicaizhale/Stupid-ID-Gen/issues/new)

<img src="docs/preview-dark.png" width="760" alt="深色模式（默认）">
<br>
<img src="docs/preview-light.png" width="760" alt="浅色模式">

</div>

---

## 这是什么

一个只会干一件事的网页：**随机拼一个傻吊 ID 给你**。

你可能会得到 `冷静的白键盘39023`，也可能得到 `狂笑的蛇将写散文`。
词库一共 339 条，全部硬编码在 [`app.js`](app.js) 的 `WORDS` 里，生成过程就是 `Math.random()` 乱抓，没有 AI、没有接口、没有后端、没有登录。

## 两种格式

### 格式一 · 心情流

```
心情 + 的 + 颜色 + 物品 + 5~6 位数字
```

| 片段 | 词库 | 数量 | 说明 |
| --- | --- | --- | --- |
| 心情 | `moods` | 50 | 冷静、狂喜、精神内耗、假装镇定…… |
| 的 | — | — | 硬编码连接词 |
| 颜色 | `colors` | 28 | **「色」字随机出现**：`白` 或 `白色` |
| 物品 | `items` | 74 | 键盘、微波炉、筋膜枪、扫地机器人…… |
| 数字 | — | 990000 | 5 或 6 位，首位不为 0 |

> 冷静的白键盘39023 · 冷静的白色键盘39023 · 精神内耗的彩虹色空气炸锅918347

约 **2051 亿**种组合。

### 格式二 · 动作流

```
不及物动作 + 的 + 名词 + 及物动词 + 名词
```

| 片段 | 词库 | 数量 | 说明 |
| --- | --- | --- | --- |
| 不及物动作 | `actions` | 50 | 狂笑、摸鱼、翻白眼、碎碎念…… |
| 的 | — | — | 硬编码连接词 |
| 名词 | `nouns` | 48 | 蛇、蛇将、卡皮巴拉、食堂阿姨…… |
| 及物动词 | `verbs` | 42 | 写、炖、手搓、格式化…… |
| 名词 | `objects` | 47 | 散文、泡面、年终奖、红头文件…… |

> 狂笑的蛇将写散文 · 静坐的水母炖泡面 · 摸鱼的卡皮巴拉点评红头文件

约 **474 万**种组合。注意「蛇将」本身就是一个名词，这一档里没有连接词。

## 特性

- 🎲 **三个胶囊**：心情流 / 动作流 / 我全都要（每次从两种格式里随机抽一种）
- ⌨️ **顺手就能重摇**：点结果卡片、按 `R` 或空格，都会重新生成（带代码乱序动画）
- 📋 **一键复制**：优先 `navigator.clipboard`，不安全上下文自动退回 `execCommand`
- 🕘 **本地历史**：最近 15 条存在 `localStorage`，页面底部默认展开，点一条即复制
- 🌗 **两套主题**：默认深色，视觉参考 Google 翻译深色模式；可切浅色，选择会记住
- 📱 **响应式**：窄屏自动单列，手机上也能摇
- 🪶 **零依赖**：没有框架、没有打包、没有字体之外的第三方请求；图标全是手写内联 SVG
- ♿ **可访问**：语义化标签、`aria-label`、键盘可达、尊重 `prefers-reduced-motion`
- ☁️ **一条命令上线**：Cloudflare Workers 静态资源 + 自定义域名

## 本地运行

不需要装任何依赖，静态三件套：

```bash
npx serve .                 # 或者 python -m http.server 5173
```

也可以直接双击 `index.html`。

> 想改词库就改 `app.js` 里的 `WORDS`，刷新即生效——没有别的入口，这是设计如此。

## 项目结构

```
Stupid-ID-Gen/
├── index.html                  # 页面结构 + 内联 SVG 图标 sprite
├── style.css                   # 深浅两套主题变量 + 布局
├── app.js                      # 词库 WORDS、格式 FORMATS、生成与交互逻辑
├── scripts/
│   └── build.mjs               # 把三个静态文件拷进 dist/（无第三方依赖）
├── docs/                       # logo 与 README 预览图
├── wrangler.toml               # Cloudflare Workers：静态资源目录 + 自定义域名
├── .github/workflows/deploy.yml# push 到 main 自动部署
├── package.json                # 只有 dev / build / deploy 三个脚本
└── LICENSE
```

## 部署

线上跑在 Cloudflare Workers 上，配置全在 [`wrangler.toml`](wrangler.toml)：`dist/` 作为静态资源目录，`ohmyid.baicaizhale.top` 作为自定义域名——wrangler 部署时会自动建好 DNS 记录并签发证书。

```bash
npm run deploy                # = node scripts/build.mjs && wrangler deploy
```

首次在本机部署需要 `npx wrangler login`，或者在环境里配好 `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`。

**自动部署**：push 到 `main` 时由 [`deploy.yml`](.github/workflows/deploy.yml) 自动发布。

1. 到 <https://dash.cloudflare.com/profile/api-tokens> 用 “Edit Cloudflare Workers” 模板建一个 API Token；
2. `gh secret set CLOUDFLARE_API_TOKEN`（`CLOUDFLARE_ACCOUNT_ID` 已经配好了）；
3. 之后每次 push 就自动上线。

没配 Token 时工作流会跳过部署而不是报错。

## 词库与贡献

想把谁的 ID 写进词库？欢迎开 [issue](https://github.com/baicaizhale/Stupid-ID-Gen/issues/new) 或者直接提 PR。

加词的规矩只有两条：

1. **必须是纯中文词条**——`BUG`、`PPT`、`U盘` 这类夹字母的词条很突兀（已换成 `八阿哥`、`幻灯片`、`优盘`）；
2. **词性要对上**：`actions` 放不及物动作，`nouns` 放名词（「蛇将」这种算名词），`verbs` 放能带宾语的及物动词。

改完可以用下面这段脚本自检一遍：

```bash
node -e "
const src = require('fs').readFileSync('app.js','utf8');
const block = src.slice(src.indexOf('const WORDS'), src.indexOf('const FORMATS'));
const bad = [...block.matchAll(/'([^']*)'/g)].map(m => m[1]).filter(w => /[A-Za-z0-9]/.test(w));
console.log(bad.length ? '混进了非中文词条：' + bad.join('、') : '词库干净，全是中文');
"
```

## 设计说明

- 配色直接取自 Google 翻译深色模式的截图取样：背景 `#131314`、描边 `#444746`、选中胶囊 `#0842a0` / `#d3e3fd`、填充卡片 `#1e1f20`、浅蓝强调 `#a8c7fa`；
- 字体 [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) + Noto Sans SC，来自 Google Fonts，系统字体兜底；
- 左上角是手写的 SVG 笑脸方块（[`docs/logo.svg`](docs/logo.svg)），图标的描边风格统一为 1.7px 圆头；
- 拆解里的每个片段有自己的颜色，心情是蓝、颜色是橙、物品是绿、数字是紫。

## FAQ

**为什么不让我自定义词库？**
设计目标就是「硬编码 + 随机」，没有自定义入口是特性不是缺陷。想改就直接改 `app.js` 再部署，或者提 PR 把词贡献给所有人。

**数字为什么是 5~6 位？**
最初的需求就是这么定的：`冷静的白(色)键盘39023`。

**会收集数据吗？**
不会。历史记录只存在你自己的浏览器 `localStorage` 里，清空按钮一按就没了。

## License

[MIT](LICENSE) © 2026 [baicaizhale](https://github.com/baicaizhale)
