# 傻吊 ID 生成器

硬编码词库 + 纯随机抽取，给你一个不正经的 ID。没有 AI、没有接口、没有后端，刷新即失忆。

线上地址：<https://ohmyid.baicaizhale.top>

## 两种格式

**格式一 · 心情流**：`心情 + 的 + 颜色 + 物品 + 5~6 位数字`

> 冷静的白键盘39023
> 冷静的白色键盘39023（“色”字随机出现）
> 精神内耗的彩虹色空气炸锅918347

**格式二 · 动作流**：`不及物动作 + 的 + 名词 + 将 + 及物动词 + 名词`

> 狂笑的蛇将写散文
> 摸鱼的卡皮巴拉将点评红头文件

词库全部写在 [`app.js`](app.js) 的 `WORDS` 里，想加词直接加，没有别的入口。

## 功能

- 三个胶囊：心情流 / 动作流 / 我全都要（每次随机抽一种）
- 点结果卡片、摇骰子、按 `R` 或空格，都可以重新生成
- 右上角切换深色 / 浅色主题（默认深色，主题参考 Google 翻译深色模式）
- 「历史记录」保存在本地 `localStorage`，点一条即复制
- 「复制」写入剪贴板，`iframe` 与不安全上下文自动退回 `execCommand`

## 本地预览

```bash
npx serve .          # 或者 python -m http.server 5173
```

直接双击 `index.html` 也能跑。

## 部署（Cloudflare Workers）

线上地址 <https://ohmyid.baicaizhale.top>：一个纯静态的 Workers 站点，配置都在 [`wrangler.toml`](wrangler.toml) 里——
`dist/`（`npm run build` 生成，只含三个静态文件）作为静态资源目录，`ohmyid.baicaizhale.top` 作为自定义域名，
wrangler 会自动建好 DNS 记录并签发证书。

手动发布：

```bash
npm run deploy        # 等价于 node scripts/build.mjs && wrangler deploy
```

首次在本机部署需要 `npx wrangler login`，或者在环境变量里配好 `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`。

自动发布（push 到 `main` 就上线）：

1. 到 <https://dash.cloudflare.com/profile/api-tokens> 用 “Edit Cloudflare Workers” 模板建一个 API Token；
2. `gh secret set CLOUDFLARE_API_TOKEN`（`CLOUDFLARE_ACCOUNT_ID` 已经配好了）；
3. 之后每次 push 由 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 自动部署。

没配 Token 时工作流会跳过部署而不是报错。

## License

[MIT](LICENSE)
