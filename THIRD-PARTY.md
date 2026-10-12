# 第三方组件与许可 / Third-party components and licences

本仓库基于上游 **WaveDrom Editor v3.7.0**（MIT，`Copyright (c) 2011-2026 Aliaksei
Chapyzhenka`）。下表列出本仓库包含、以及桌面应用 zip 内**随包分发**的第三方组件；中文说明见表格
之后，English follows.

| 组件 / Component | 版本 / Version | 许可 / Licence | 出处 / Source |
|---|---|---|---|
| WaveDrom 引擎（本分支 / this fork） | 3.7.1-dsh（上游 3.7.0） | MIT | <https://github.com/wavedrom/wavedrom> |
| bit-field / json5 / logidrom / onml / tspan | 见引擎依赖 / bundled in the engine | MIT | 见 `wavedrom` 仓库的 THIRD-PARTY.md |
| CodeMirror | 5.65.21 | MIT | <https://codemirror.net/5/> |
| Lo-Dash | 2.4.1 | MIT | <https://lodash.com/> |
| Underscore.js | 1.5.2 | MIT | <https://underscorejs.org/> |
| SyntaxHighlighter（含内置 XRegExp 2.0.0，MIT） | 3.0.9 | MIT 或 GPL（双许可，本项目按 MIT 使用） | <http://alexgorbatchev.com/SyntaxHighlighter> |
| NW.js（桌面应用运行时 / app runtime） | v0.115.0 | MIT | <https://nwjs.io/> |
| Chromium（由 NW.js 内嵌 / embedded in NW.js） | 随 NW.js / as shipped | BSD-3-Clause 及其他 / and others | <https://www.chromium.org/> |
| Node.js（由 NW.js 内嵌 / embedded in NW.js） | 随 NW.js / as shipped | MIT | <https://nodejs.org/> |

**中文** — 桌面应用包（`wavedrom-editor-v3.7.1-dsh-win-x64.zip`）内**再分发了 NW.js 运行时**，
而 NW.js 自身内嵌 Chromium 与 Node.js；这三者的许可分别是 MIT、BSD-3-Clause（及其他）与 MIT，
其完整声明随官方 NW.js / Chromium / Node.js 分发提供。本分支**未修改**上述任何组件，只是把它们与
本项目的代码打在一起。

如果你再分发本仓库源码或应用包，请保留：本文件、`LICENSE`（含上游版权声明）、README 顶部的分支
说明（注明这是修改过的非官方分支），以及包内 NW.js/Chromium/Node 自带的许可文件。

**English** — The desktop package (`wavedrom-editor-v3.7.1-dsh-win-x64.zip`)
**redistributes the NW.js runtime**, which itself embeds Chromium and Node.js.
Those three are MIT, BSD-3-Clause (and others) and MIT respectively; their full
notices ship with the official NW.js / Chromium / Node.js distributions. This fork
does **not** modify any of them — it only bundles them with this project's code.

If you redistribute this repository or the application package, keep this file,
the `LICENSE` (with the upstream copyright notice), the fork notice at the top of
the README (stating that this is a modified, unofficial fork) and the licence files
that NW.js/Chromium/Node bring along in the package.
