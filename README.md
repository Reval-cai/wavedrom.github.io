# WaveDrom Editor 3.7.3-dsh

**中文** | [English](README.en.md)

**非官方分支** — 基于上游 [wavedrom/wavedrom.github.io](https://github.com/wavedrom/wavedrom.github.io)
**v3.7.0**（`adb503d`），MIT 许可。

桌面包：`wavedrom-editor-v3.7.3-dsh-win-x64.zip`（Windows x64 便携版，nw.js v0.115.0）。

> ### 免责声明
>
> 本仓库由 [Reval-cai](https://github.com/Reval-cai) 维护，是 WaveDrom Editor 的**非官方分支**，
> 与原作者 Aliaksei Chapyzhenka 及 WaveDrom 项目**无从属关系，也未获其背书**：请勿把本分支的问题
> 反馈给上游，也请勿以原作者名义宣传本分支。
>
> 上游以 **MIT 许可证**发布，本仓库**完整保留**原始 [LICENSE](LICENSE) 与版权声明
> （`Copyright (c) 2011-2026 Aliaksei Chapyzhenka`），本分支新增与修改的部分同样以 **MIT** 发布。
> 任何再分发（**包括下面打出的桌面应用压缩包**）都必须保留 `LICENSE`、本说明与上游版权声明，
> 并注明修改内容。

---

## 阅读约定

| 标记 | 含义 |
|---|---|
| 🟦 **上游** | 上游 v3.7.0 已有，本分支**未修改** |
| 🟩 **本分支新增** | 本分支新增 |
| 🟨 **本分支修改** | 上游功能但行为被改动 |

> 英文版见 [README.en.md](README.en.md)。

---

## 1. 这是什么

WaveDrom Editor 是 WaveDrom 引擎的**实时编辑器**：左边写 WaveJSON，右边立刻出波形图；本仓库同时
提供**网页版**（`editor.html`）与**桌面应用**（nw.js 打包）的构建脚本。本分支在此之上：把编辑器
**内置示例**换成覆盖全部语法的综合演示、把内置引擎升级到本分支的 `3.7.3-dsh`（含 `latency`、
`config.cursor`、字母马卡龙色码），并提供 **Windows x64 便携包**。

---

## 2. 上游原项目功能

以下全部来自上游 v3.7.0，本分支**未作修改**。

| 🟦 功能 | 说明 |
|---|---|
| **在线编辑器** | `editor.html`：实时编辑 + 渲染 WaveJSON（基于 [WaveDrom](https://github.com/wavedrom/wavedrom) 引擎） |
| **教程页** | `tutorial.html`，含大量示例 |
| **代码编辑器** | 内置 CodeMirror 提供语法高亮与编辑体验 |
| **内置引擎与皮肤** | `wavedrom.min.js` + `skins/*.js` 是 `wavedrom` 包的 vendored 副本 |
| **浏览器支持** | Firefox 4+ / Chrome 10+ / Safari 5.1+ / Opera 12+ / IE 11+ |
| **桌面应用** | 用 [NW.js](https://nwjs.io/) 打包 Windows / macOS / Linux，由 `build-wde.sh` 驱动 |
| **构建产物** | `wavedrom-editor-v<版本>-{win-x64,osx-x64,osx-arm64}.zip`、`-linux-x64.tar.gz` |
| **发布流程** | 改版本号 → `npm run build` → `git tag` → `gh release create`（见下文） |
| **开发命令** | `npm install`、`npm test`（`eslint editor.js init.js`） |
| **社区** | [WaveDrom user group](http://groups.google.com/group/wavedrom) |

---

## 3. 本分支新增或修改的内容

| 标记 | 项目 | 说明 |
|---|---|---|
| 🟩 | **内置示例换成完整功能演示** | 编辑器打开即是一份覆盖全部语法的演示：波形字符、间隙与重复、分组、`period`/`phase`、`over`/`under`、`node`/`edge` 箭头、`head`/`foot` 富文本、全部色码、6 个马卡龙色、`config.cursor` 游标、`latency` 延迟通道、同色相邻的字母相连格 |
| 🟨 | **已装旧版示例的机器升级一次** | 若本机保存的文档仍是**上一个内置示例**，会被替换成新演示；**用户自己写的内容不动** |
| 🟩 | **内置引擎升级到 `3.7.3-dsh`** | `wavedrom.min.js` 是本分支引擎的构建，内置文件就是本分支的构建（npm 依赖保持上游 `^3.7.0`：指向本分支的 git 地址会让 `npm install` 因 `prepare` 脚本失败），所以**直接打开本仓库的 `editor.html`** 也能用新功能 |
| 🟨 | **版本号** | `package.json` 与 `WaveDromEditor/package.json` 标为 `3.7.x-dsh` |
| 🟨 | **窗口标题** | `editor.html` 标题恢复为 `WaveDrom Editor`（上游值） |
| 🟩 | **桌面包带许可文件** | 打出的应用压缩包**顶层**包含 `LICENSE` 与 `THIRD-PARTY.md` |
| 🟩 | **Windows x64 便携包** | 在 [Releases](https://github.com/Reval-cai/wavedrom.github.io/releases) 提供 `wavedrom-editor-v3.7.3-dsh-win-x64.zip` |
| 🟩 | **构建脚本保留本地核心库** | 当 `../wavedrom/wavedrom.min.js` 存在时优先使用它，否则回退到 npm 上的 `wavedrom` 包（与上游一致） |

---

## 4. 快速开始

### 网页版

```sh
# 直接打开 editor.html 即可（同目录需要 wavedrom.min.js / skins/ / scripts/）
```

也可以访问上游的在线版本：[wavedrom.com/editor.html](http://wavedrom.com/editor.html)
（⚠️ 上游在线版**不含**本分支的新功能）。

### 桌面版（Windows x64）

1. 从 [Releases](https://github.com/Reval-cai/wavedrom.github.io/releases) 下载
   `wavedrom-editor-v3.7.3-dsh-win-x64.zip`；
2. 解压到任意目录后运行 `wavedrom-editor.exe`（便携，无需安装）；
3. 命令行也可直接出图：`wavedrom-editor.exe source demo.json svg out.svg`。

---

## 5. 构建桌面应用

🟦 上游流程：

```sh
npm install
npm run build          # 等价于 ./build-wde.sh
```

* 把应用源码 stage 到 `src/`，下载对应 NW.js 运行时，产出 `build/` 下的分发包：
  `wavedrom-editor-v<版本>-win-x64.zip`、`-osx-x64.zip`、`-osx-arm64.zip`、`-linux-x64.tar.gz`。
* NW.js 版本与应用版本在 `build-wde.sh` 末尾指定：
  `bash build.sh --name wavedrom-editor --nwversion v0.115.0 --version v<版本>`。

🟨 本分支的构建差异：

* 桌面应用使用**本分支的核心库**（`../wavedrom/wavedrom.min.js`）以带上 `latency`、`config.cursor`
  与字母色码；若该文件不存在则回退到 npm 上的 `wavedrom` 包。
* 压缩包用 Python 的 `zipfile` 写出（Info-ZIP 兼容）：`bsdtar` 产出的 zip 会被 Chromium 拒绝，
  应用会启动即崩。
* `LICENSE` 与 `THIRD-PARTY.md` 会被复制到压缩包**顶层**。

---

## 6. 发布桌面应用（CLI）

🟦 上游流程：

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

🟩 本分支实际发布的内容：两个仓库用同一 tag 名 —— 核心库 `Reval-cai/wavedrom` 发布四个构建产物，
本仓库发布 Windows x64 的 zip 与 `.nw`；旧版本会在说明里标注「已被取代」。

---

## 7. 目录结构

| 路径 | 说明 |
|---|---|
| `editor.html` | 🟦 网页版编辑器 |
| `editor.js` | 🟦 编辑器逻辑（初始化、渲染、导出） |
| `init.js` | 🟨 默认文档（🟩 已换成完整功能演示） |
| `tutorial.html` | 🟦 教程页 |
| `wavedrom.min.js`, `skins/` | 🟨 内置引擎与皮肤（引擎已升级到本分支 `3.7.3-dsh`） |
| `scripts/` | 🟦 CodeMirror、Lo-Dash、Underscore、SyntaxHighlighter 等前端依赖 |
| `WaveDromEditor/package.json` | 🟨 桌面应用清单（窗口尺寸、版本号） |
| `build-wde.sh` | 🟦 上游构建脚本 |
| `build/` | 构建产物（不提交，见 `.gitignore`） |
| `LICENSE`, `THIRD-PARTY.md`, `CHANGES.md` | 许可、第三方组件、本分支变更 |

---

## 8. 与上游的差异一览

| 分类 | 内容 |
|---|---|
| 🟩 新增 | 完整功能内置示例、Windows x64 便携包、桌面包顶层许可文件 |
| 🟨 修改 | 内置引擎 `3.7.3-dsh`、`package.json` 依赖与版本号 `3.7.x-dsh`、`init.js` 默认文档、窗口标题 |
| 🟦 未动 | 上游的全部编辑器功能、构建流程、`build-wde.sh`、皮肤文件、`scripts/` 前端依赖 |

---

## 9. 许可与署名

* 本仓库基于上游 **WaveDrom Editor v3.7.0**，采用 **MIT 许可证**，原始版权声明
  `Copyright (c) 2011-2026 Aliaksei Chapyzhenka` **完整保留**；本分支新增与修改的部分同样以 MIT 发布。
* 再分发（含桌面应用压缩包）时必须保留 `LICENSE`、上游版权声明与本 README 顶部的非官方分支说明，
  并注明修改内容。
* 本分支与原作者**无从属关系，也未获其背书**。

### 随包分发的第三方组件

| 组件 | 版本 | 许可 |
|---|---|---|
| WaveDrom 引擎（本分支构建） | `3.7.3-dsh`（上游 3.7.0） | MIT |
| bit-field / json5 / logidrom / onml / tspan | 随引擎打包 | MIT |
| CodeMirror | 5.65.21 | MIT |
| Lo-Dash / Underscore.js | 2.4.1 / 1.5.2 | MIT |
| SyntaxHighlighter（内置 XRegExp 2.0.0） | 3.0.9 | MIT 或 GPL（双许可，本项目按 MIT 使用） |
| NW.js（桌面运行时） | v0.115.0 | MIT |
| Chromium / Node.js（由 NW.js 内嵌） | 随 NW.js | BSD-3-Clause 及其他 / MIT |

完整说明见 [THIRD-PARTY.md](THIRD-PARTY.md)。

---

## 10. 变更记录与链接

* 本分支变更：[CHANGES.md](CHANGES.md) · Releases：[v3.7.3-dsh](https://github.com/Reval-cai/wavedrom.github.io/releases/tag/v3.7.3-dsh)
* 核心库分支：[Reval-cai/wavedrom](https://github.com/Reval-cai/wavedrom) · 上游引擎：[wavedrom/wavedrom](https://github.com/wavedrom/wavedrom)
* 上游编辑器 / 教程：[wavedrom.com/editor.html](http://wavedrom.com/editor.html) | [tutorial.html](http://wavedrom.com/tutorial.html)
* WaveJSON 规范：[wavedrom/schema](https://github.com/wavedrom/schema/blob/master/WaveJSON.md)

---

**中文** | [English](README.en.md)
