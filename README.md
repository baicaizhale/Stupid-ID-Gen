<div align="center">

<img src="docs/logo.svg" width="84" height="84" alt="傻吊 ID 生成器">

# 傻吊 ID 生成器

点一下，摇一个不正经的 ID。

[![Stars](https://img.shields.io/github/stars/baicaizhale/Stupid-ID-Gen?style=flat-square&logo=github&label=Star&color=0842a0)](https://github.com/baicaizhale/Stupid-ID-Gen/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/baicaizhale/Stupid-ID-Gen?style=flat-square&color=0b57d0)](https://github.com/baicaizhale/Stupid-ID-Gen/commits/main)
[![License](https://img.shields.io/github/license/baicaizhale/Stupid-ID-Gen?style=flat-square&color=a8c7fa)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fohmyid.baicaizhale.top&style=flat-square&label=ohmyid.baicaizhale.top)](https://ohmyid.baicaizhale.top)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=ffffff)](https://workers.cloudflare.com/)

[在线体验](https://ohmyid.baicaizhale.top) ｜ [两种格式](#两种格式) ｜ [本地运行](#本地运行) ｜ [加词](CONTRIBUTING.md)

<img src="docs/preview-dark.png" width="760" alt="深色模式（默认）">
<br>
<img src="docs/preview-light.png" width="760" alt="浅色模式">

</div>

---

## 这是什么

一个随机起网名的网页。点一下出一条，比如：

> 迷茫的橙色拍立得942413
> 蛰伏的考拉将烤毛线

不满意就再点。词库 339 条全写在 `app.js` 里，生成过程就是 `Math.random()` 乱抽。没有后端，刷新即忘，历史记录只存在你自己的浏览器里。

## 两种格式

### 心情流

```
心情 + 的 + 颜色 + 物品 + 5~6 位数字
```

> 冷静的白键盘39023
> 冷静的白色键盘39023
> 精神内耗的彩虹色空气炸锅918347

颜色后面的「色」字随机出现，所以两种都会摇到。50 个心情、28 个颜色、74 个物品，数字是 5 位或 6 位、首位不为 0，合起来大约 2051 亿种组合。

### 动作流

```
不及物动作 + 的 + 名词 + 及物动词 + 名词
```

> 狂笑的蛇将写散文
> 静坐的水母炖泡面
> 摸鱼的卡皮巴拉点评红头文件

50 个动作、48 个名词、42 个动词、47 个宾语，大约 474 万种组合。

## 特性

- 三个格式按钮：心情流、动作流、我全都要（每次随机二选一）
- 点结果卡片、按 R 或空格，重新摇
- 复制按钮直接进剪贴板
- 历史记录保留最近 15 条，点一条复制一条
- 深色浅色两套主题，默认深色
- 手机上能用；除了 Google Fonts 没有别的第三方请求

## 本地运行

```bash
npx serve .
```

或者 `python -m http.server 5173`，或者直接双击 `index.html`。想改词就改 `app.js` 里的 `WORDS`，刷新生效。

## 加词

词库越大，摇出来的越好笑。怎么加、词性怎么分，看 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 设计说明

配色取自 Google 翻译深色模式的截图：背景 `#131314`，描边 `#444746`，选中胶囊 `#0842a0` 和 `#d3e3fd`，卡片 `#1e1f20`。字体 Noto Sans 和 Noto Sans SC，来自 Google Fonts。左上角是手绘线条小丑（透明底白线，浅色主题自动换成深色线条），点一下他会伸手捏自己的鼻子，源文件在 `docs/logo.svg`。拆解里每个片段一个颜色：心情蓝、颜色橙、物品绿、数字紫。

## License

[MIT](LICENSE) © 2026 [baicaizhale](https://github.com/baicaizhale)
