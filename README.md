# WaveDrom Editor 3.7.3-dsh

**非官方分支 · Unofficial fork** — 基于上游 [wavedrom/wavedrom.github.io](https://github.com/wavedrom/wavedrom.github.io)
**v3.7.0**（`adb503d`），采用 **MIT** 许可 · based on upstream **v3.7.0**, MIT licensed.

桌面包：`wavedrom-editor-v3.7.3-dsh-win-x64.zip`（Windows x64 便携版，nw.js v0.115.0）。
· Desktop package: `wavedrom-editor-v3.7.3-dsh-win-x64.zip` (Windows x64, portable, nw.js v0.115.0).

> ### 免责声明 / Disclaimer
>
> **中文** — 本仓库由 [Reval-cai](https://github.com/Reval-cai) 维护，是 WaveDrom Editor 的**非官方分支**，
> 与原作者 Aliaksei Chapyzhenka 及 WaveDrom 项目**无从属关系，也未获其背书**：请勿把本分支的问题
> 反馈给上游，也请勿以原作者名义宣传本分支。
> 上游以 **MIT 许可证**发布，本仓库**完整保留**原始 [LICENSE](LICENSE) 与版权声明
> （`Copyright (c) 2011-2026 Aliaksei Chapyzhenka`），本分支新增与修改的部分同样以 **MIT** 发布。
> 任何再分发（**包括下面打出的桌面应用压缩包**）都必须保留 `LICENSE`、本说明与上游版权声明，
> 并注明修改内容。
>
> **English** — Maintained by [Reval-cai](https://github.com/Reval-cai). This is an **unofficial
> fork** of WaveDrom Editor, **not affiliated with, nor endorsed by** the original author or the
> WaveDrom project: please do not report this fork's issues upstream, and do not present it as the
> original work.
> Upstream is MIT licensed; this repository **keeps** the original [LICENSE](LICENSE) and copyright
> notice (`Copyright (c) 2011-2026 Aliaksei Chapyzhenka`), and its own changes are MIT as well. Any
> redistribution — **including the desktop application zip built below** — must keep `LICENSE`,
> this notice and the upstream copyright notice, and must state what was changed.

---

## 阅读约定 / How to read this document

| 标记 / Tag | 含义 / Meaning |
|---|---|
| 🟦 **上游 / Upstream** | 上游 v3.7.0 已有，本分支**未修改** · present upstream, unchanged here |
| 🟩 **本分支新增 / Added** | 本分支新增 · added by this fork |
| 🟨 **本分支修改 / Changed** | 上游功能但行为被改动 · upstream feature whose behaviour changed here |

---

## 1. 这是什么 / What this is

**中文** — WaveDrom Editor 是 WaveDrom 引擎的**实时编辑器**：左边写 WaveJSON，右边立刻出波形图；
本仓库同时提供**网页版**（`editor.html`）与**桌面应用**（nw.js 打包）的构建脚本。本分支在此之上：
把编辑器**内置示例**换成覆盖全部语法的综合演示、把内置引擎升级到本分支的 `3.7.3-dsh`
（含 `latency`、`config.cursor`、字母马卡龙色码），并提供 **Windows x64 便携包**。

**English** — WaveDrom Editor is the real-time editor for the WaveDrom engine: type WaveJSON on the
left, see the diagram immediately on the right. This repository holds both the **web editor**
(`editor.html`) and the scripts that build the **desktop app** (nw.js). This fork additionally
ships a **full-feature built-in example**, upgrades the bundled engine to this fork's
`3.7.3-dsh` (with `latency`, `config.cursor`, lettered macaron colours) and publishes a
**Windows x64 portable zip**.

---

## 2. 上游原项目功能 / Upstream features

以下全部来自上游 v3.7.0，本分支未作修改。· All upstream v3.7.0, unchanged here.

| 🟦 功能 / Feature | 中文说明 | English notes |
|---|---|---|
| **在线编辑器** | `editor.html`：实时编辑 + 渲染 WaveJSON（基于 [WaveDrom](https://github.com/wavedrom/wavedrom) 引擎） | `editor.html`: live WaveJSON editing/rendering |
| **教程页** | `tutorial.html`，含大量示例 | `tutorial.html` with examples |
| **代码编辑器** | 内置 CodeMirror 提供语法高亮与编辑体验 | bundled CodeMirror |
| **内置引擎与皮肤** | `wavedrom.min.js` + `skins/*.js` 是 `wavedrom` 包的 vendored 副本 | vendored engine + skins |
| **浏览器支持** | Firefox 4+ / Chrome 10+ / Safari 5.1+ / Opera 12+ / IE 11+ | same |
| **桌面应用** | 用 [NW.js](https://nwjs.io/) 打包 Windows / macOS / Linux，由 `build-wde.sh` 驱动 | desktop app via nw.js + `build-wde.sh` |
| **构建产物** | `wavedrom-editor-v<版本>-{win-x64,osx-x64,osx-arm64}.zip`、`-linux-x64.tar.gz` | same artifact matrix |
| **发布流程** | 改版本号 → `npm run build` → `git tag` → `gh release create`（见下文） | documented release flow with the `gh` CLI |
| **开发命令** | `npm install`、`npm test`（`eslint editor.js init.js`） | `npm install`, `npm test` |
| **社区** | [WaveDrom user group](http://groups.google.com/group/wavedrom) | same |

---

## 3. 本分支新增或修改的内容 / Added or changed in this fork

| 标记 | 项目 / Item | 中文说明 | English notes |
|---|---|---|---|
| 🟩 | **内置示例换成完整功能演示** | 编辑器打开即是一份覆盖全部语法的演示：波形字符、间隙与重复、分组、`period`/`phase`、`over`/`under`、`node`/`edge` 箭头、`head`/`foot` 富文本、全部色码、6 个马卡龙色、`config.cursor` 游标、`latency` 延迟通道、同色相邻的字母相连格 | the editor opens with a demo that exercises the whole format: wave characters, gaps/repeaters, groups, `period`/`phase`, `over`/`under`, `node`/`edge`, `head`/`foot` rich text, every colour code, the six macaron colours, `config.cursor`, `latency` lanes, equal-letter connectors |
| 🟨 | **已装旧版示例的机器升级一次** | 若本机保存的文档仍是**上一个内置示例**，会被替换成新演示；**用户自己写的内容不动** | an installation still holding the *previous built-in example* is upgraded once; user-authored content is left untouched |
| 🟩 | **内置引擎升级到 `3.7.3-dsh`** | `wavedrom.min.js` 是本分支引擎的构建，`package.json` 依赖指向 `github:Reval-cai/wavedrom#v3.7.3-dsh`，所以**直接打开本仓库的 `editor.html`** 也能用新功能 | the vendored engine is this fork's build and the dependency points at `github:Reval-cai/wavedrom#v3.7.3-dsh`, so `editor.html` served from a checkout gets the new features too |
| 🟨 | **版本号** | `package.json` 与 `WaveDromEditor/package.json` 标为 `3.7.x-dsh` | version suffixed `3.7.x-dsh` |
| 🟨 | **窗口标题** | `editor.html` 标题恢复为 `WaveDrom Editor`（上游值） | title restored to the upstream value |
| 🟩 | **桌面包带许可文件** | 打出的应用压缩包**顶层**包含 `LICENSE` 与 `THIRD-PARTY.md` | the built app package carries `LICENSE` + `THIRD-PARTY.md` at its top level |
| 🟩 | **Windows x64 便携包** | 在 [Releases](https://github.com/Reval-cai/wavedrom.github.io/releases) 提供 `wavedrom-editor-v3.7.3-dsh-win-x64.zip` | a ready-to-run Windows x64 zip is published in Releases |
| 🟩 | **构建脚本保留本地核心库** | 当 `../wavedrom/wavedrom.min.js` 存在时优先使用它，否则回退到 npm 上的 `wavedrom` 包（与上游一致） | prefers the sibling checkout's core library when present, otherwise the npm package (as upstream) |

---

## 4. 快速开始 / Quick start

### 网页版 / Web editor

```sh
# 直接打开 editor.html 即可（同目录需要 wavedrom.min.js / skins/ / scripts/）
# open editor.html directly; wavedrom.min.js, skins/ and scripts/ must sit next to it
```

也可以访问上游的在线版本：[wavedrom.com/editor.html](http://wavedrom.com/editor.html)
（⚠️ 上游在线版**不含**本分支的新功能）。· The upstream online editor does **not** include this
fork's features.

### 桌面版（Windows x64）/ Desktop (Windows x64)

1. 从 [Releases](https://github.com/Reval-cai/wavedrom.github.io/releases) 下载
   `wavedrom-editor-v3.7.3-dsh-win-x64.zip`；
2. 解压到任意目录后运行 `wavedrom-editor.exe`（便携，无需安装）；
3. 命令行也可直接出图：`wavedrom-editor.exe source demo.json svg out.svg`。

* **English** — 1) download the zip from Releases; 2) unzip anywhere and run
  `wavedrom-editor.exe` (portable, no installer); 3) it can also render from the command line:
  `wavedrom-editor.exe source demo.json svg out.svg`.

---

## 5. 构建桌面应用 / Building the desktop application

🟦 上游流程 / upstream flow：

```sh
npm install
npm run build          # 等价于 ./build-wde.sh
```

* 把应用源码 stage 到 `src/`，下载对应 NW.js 运行时，产出 `build/` 下的分发包：
  `wavedrom-editor-v<版本>-win-x64.zip`、`-osx-x64.zip`、`-osx-arm64.zip`、`-linux-x64.tar.gz`。
* NW.js 版本与应用版本在 `build-wde.sh` 末尾指定：
  `bash build.sh --name wavedrom-editor --nwversion v0.115.0 --version v<版本>`。

🟨 本分支的构建差异 / differences in this fork：

* 桌面应用使用**本分支的核心库**（`../wavedrom/wavedrom.min.js`）以带上 `latency`、`config.cursor`
  与字母色码；若该文件不存在则回退到 npm 上的 `wavedrom` 包。
* 压缩包用 Python 的 `zipfile` 写出（Info-ZIP 兼容）：`bsdtar` 产出的 zip 会被 Chromium 拒绝，
  应用会启动即崩。
* `LICENSE` 与 `THIRD-PARTY.md` 会被复制到压缩包**顶层**。

---

## 6. 发布桌面应用（CLI）/ Releasing the desktop application

🟦 上游流程 / upstream flow：

```sh
# 1) 改版本号：package.json、WaveDromEditor/package.json、build-wde.sh
# 2) 构建
npm run build
# 3) 打 tag 并推送
git tag v3.7.3-dsh && git push origin v3.7.3-dsh
# 4) 发布（需要 gh CLI）
gh release create v3.7.3-dsh \
  build/wavedrom-editor-v3.7.3-dsh-win-x64.zip \
  build/wavedrom-editor-v3.7.3-dsh.nw \
  --title "WaveDrom Editor 3.7.3-dsh (Windows x64)" \
  --notes-file RELEASE_NOTES.md
```

🟩 本分支实际发布的内容 / what this fork actually publishes：两个仓库同一 tag 名 ——
核心库 `Reval-cai/wavedrom` 发布四个构建产物，本仓库发布 Windows x64 的 zip 与 `.nw`；
旧版本会在说明里标注「已被取代」。

---

## 7. 目录结构 / Repository layout

| 路径 / Path | 说明（中文） | Notes (English) |
|---|---|---|
| `editor.html` | 🟦 网页版编辑器 | the web editor |
| `editor.js` | 🟦 编辑器逻辑（初始化、渲染、导出） | editor logic |
| `init.js` | 🟨 默认文档（🟩 已换成完整功能演示） | default document (now the full-feature demo) |
| `tutorial.html` | 🟦 教程页 | tutorial |
| `wavedrom.min.js`, `skins/` | 🟨 内置引擎与皮肤（引擎已升级到本分支 `3.7.3-dsh`） | bundled engine/skins |
| `scripts/` | 🟦 CodeMirror、Lo-Dash、Underscore、SyntaxHighlighter 等前端依赖 | bundled front-end libs |
| `WaveDromEditor/package.json` | 🟨 桌面应用清单（窗口尺寸、版本号） | desktop app manifest |
| `build-wde.sh` | 🟦 上游构建脚本 | upstream build script |
| `build/` | 构建产物（不提交，见 `.gitignore`） | build outputs (ignored) |
| `LICENSE`, `THIRD-PARTY.md`, `CHANGES.md` | 许可、第三方组件、本分支变更 | licence, third-party notices, fork changelog |

---

## 8. 与上游的差异一览 / Diff at a glance

| 分类 / Kind | 内容 / Content |
|---|---|
| 🟩 新增 | 完整功能内置示例、Windows x64 便携包、桌面包顶层许可文件 |
| 🟨 修改 | 内置引擎 `3.7.3-dsh`、`package.json` 依赖与版本号 `3.7.x-dsh`、`init.js` 默认文档、窗口标题 |
| 🟦 未动 | 上游的全部编辑器功能、构建流程、`build-wde.sh`、皮肤文件、`scripts/` 前端依赖 |

---

## 9. 许可与署名 / Licence & attribution

* **中文** — 本仓库基于上游 **WaveDrom Editor v3.7.0**，采用 **MIT 许可证**，原始版权声明
  `Copyright (c) 2011-2026 Aliaksei Chapyzhenka` **完整保留**；本分支新增与修改的部分同样以 MIT 发布。
  再分发（含桌面应用压缩包）时必须保留 `LICENSE`、上游版权声明与本 README 顶部的非官方分支说明，
  并注明修改内容。本分支与原作者**无从属关系，也未获其背书**。
* **English** — Based on upstream **WaveDrom Editor v3.7.0**, **MIT licensed**, keeping the
  original copyright notice `Copyright (c) 2011-2026 Aliaksei Chapyzhenka` in full; this fork's
  changes are MIT as well. Redistribution (including the desktop zip) must keep `LICENSE`, the
  upstream copyright notice and the unofficial-fork notice in this README, and must state what was
  changed. This fork is **not affiliated with, nor endorsed by** the original author.

### 随包分发的第三方组件 / Third-party components shipped with the app

| 组件 / Component | 版本 / Version | 许可 / Licence |
|---|---|---|
| WaveDrom 引擎（本分支构建） | `3.7.3-dsh`（上游 3.7.0） | MIT |
| bit-field / json5 / logidrom / onml / tspan | 随引擎打包 | MIT |
| CodeMirror | 5.65.21 | MIT |
| Lo-Dash / Underscore.js | 2.4.1 / 1.5.2 | MIT |
| SyntaxHighlighter（内置 XRegExp 2.0.0） | 3.0.9 | MIT 或 GPL（双许可，本项目按 MIT 使用） |
| NW.js（桌面运行时） | v0.115.0 | MIT |
| Chromium / Node.js（由 NW.js 内嵌） | 随 NW.js | BSD-3-Clause 及其他 / MIT |

完整说明见 [THIRD-PARTY.md](THIRD-PARTY.md)。· Full notices: [THIRD-PARTY.md](THIRD-PARTY.md).

---

## 10. 变更记录与链接 / Changelog & links

* 本分支变更：[CHANGES.md](CHANGES.md) · Releases：[v3.7.3-dsh](https://github.com/Reval-cai/wavedrom.github.io/releases/tag/v3.7.3-dsh)
* 核心库分支：[Reval-cai/wavedrom](https://github.com/Reval-cai/wavedrom) · 上游引擎：[wavedrom/wavedrom](https://github.com/wavedrom/wavedrom)
* 上游编辑器 / 教程：[wavedrom.com/editor.html](http://wavedrom.com/editor.html) | [tutorial.html](http://wavedrom.com/tutorial.html)
* WaveJSON 规范：[wavedrom/schema](https://github.com/wavedrom/schema/blob/master/WaveJSON.md)
