# WaveDrom Editor 3.7.3-dsh

[中文](README.md) | **English**

**Unofficial fork** — based on upstream [wavedrom/wavedrom.github.io](https://github.com/wavedrom/wavedrom.github.io)
**v3.7.0** (`adb503d`), MIT licensed.

Desktop package: `wavedrom-editor-v3.7.3-dsh-win-x64.zip` (Windows x64, portable, nw.js v0.115.0).

> ### Disclaimer
>
> Maintained by [Reval-cai](https://github.com/Reval-cai). This is an **unofficial fork** of
> WaveDrom Editor, **not affiliated with, nor endorsed by** the original author or the WaveDrom
> project: please do not report this fork's issues upstream, and do not present it as the original
> work.
>
> Upstream is MIT licensed; this repository **keeps** the original [LICENSE](LICENSE) and copyright
> notice (`Copyright (c) 2011-2026 Aliaksei Chapyzhenka`), and its own changes are MIT as well.
> Any redistribution — **including the desktop application zip built below** — must keep `LICENSE`,
> this notice and the upstream copyright notice, and must state what was changed.

---

## How to read this document

| Tag | Meaning |
|---|---|
| 🟦 **Upstream** | present upstream, **unchanged** here |
| 🟩 **Added** | added by this fork |
| 🟨 **Changed** | an upstream feature whose behaviour changed here |

> Chinese version: [README.md](README.md).

---

## 1. What this is

WaveDrom Editor is the real-time editor for the WaveDrom engine: type WaveJSON on the left, see the
diagram immediately on the right. This repository holds both the **web editor** (`editor.html`) and
the scripts that build the **desktop app** (nw.js). This fork additionally ships a **full-feature
built-in example**, upgrades the bundled engine to this fork's `3.7.3-dsh` (with `latency`,
`config.cursor`, lettered macaron colours) and publishes a **Windows x64 portable zip**.

---

## 2. Upstream features

All upstream v3.7.0, **unchanged** here.

| 🟦 Feature | Notes |
|---|---|
| **Online editor** | `editor.html`: live WaveJSON editing and rendering (via the [WaveDrom](https://github.com/wavedrom/wavedrom) engine) |
| **Tutorial** | `tutorial.html` with many examples |
| **Code editor** | bundled CodeMirror for highlighting and editing |
| **Bundled engine and skins** | `wavedrom.min.js` + `skins/*.js` are vendored copies of the `wavedrom` package |
| **Browser support** | Firefox 4+ / Chrome 10+ / Safari 5.1+ / Opera 12+ / IE 11+ |
| **Desktop app** | packaged with [NW.js](https://nwjs.io/) for Windows / macOS / Linux, driven by `build-wde.sh` |
| **Build outputs** | `wavedrom-editor-v<version>-{win-x64,osx-x64,osx-arm64}.zip`, `-linux-x64.tar.gz` |
| **Release flow** | bump version → `npm run build` → `git tag` → `gh release create` (below) |
| **Development commands** | `npm install`, `npm test` (`eslint editor.js init.js`) |
| **Community** | [WaveDrom user group](http://groups.google.com/group/wavedrom) |

---

## 3. Added or changed in this fork

| Tag | Item | Notes |
|---|---|---|
| 🟩 | **A full-feature built-in example** | the editor opens with a demo that exercises the whole format: wave characters, gaps and repeaters, groups, `period`/`phase`, `over`/`under`, `node`/`edge` arrows, `head`/`foot` rich text, every colour code, the six macaron colours, `config.cursor` cursors, `latency` lanes and equal-letter connectors |
| 🟨 | **One-time upgrade for old built-ins** | an installation still holding the *previous built-in example* is upgraded once; **user-authored content is left untouched** |
| 🟩 | **Bundled engine upgraded to `3.7.3-dsh`** | `wavedrom.min.js` is this fork's build (the npm dependency stays the upstream `^3.7.0`: pointing it at the fork git URL breaks `npm install` on the `prepare` script), so `editor.html` served from a checkout gets the new features too |
| 🟨 | **Version** | `package.json` and `WaveDromEditor/package.json` are versioned `3.7.x-dsh` |
| 🟨 | **Window title** | `editor.html` title restored to the upstream value `WaveDrom Editor` |
| 🟩 | **Licence files in the app package** | the built zip carries `LICENSE` and `THIRD-PARTY.md` at its **top level** |
| 🟩 | **Windows x64 portable zip** | `wavedrom-editor-v3.7.3-dsh-win-x64.zip` is published in [Releases](https://github.com/Reval-cai/wavedrom.github.io/releases) |
| 🟩 | **Build prefers the local core library** | when `../wavedrom/wavedrom.min.js` exists it is used, otherwise the npm `wavedrom` package (as upstream) |

---

## 4. Quick start

### Web editor

```sh
# open editor.html directly; wavedrom.min.js, skins/ and scripts/ must sit next to it
```

The upstream online editor is at [wavedrom.com/editor.html](http://wavedrom.com/editor.html)
(⚠️ it does **not** include this fork's features).

### Desktop (Windows x64)

1. Download `wavedrom-editor-v3.7.3-dsh-win-x64.zip` from
   [Releases](https://github.com/Reval-cai/wavedrom.github.io/releases);
2. unzip anywhere and run `wavedrom-editor.exe` (portable, no installer);
3. it can also render from the command line:
   `wavedrom-editor.exe source demo.json svg out.svg`.

---

## 5. Building the desktop application

🟦 Upstream flow:

```sh
npm install
npm run build          # same as ./build-wde.sh
```

* Stages the app sources into `src/`, downloads the matching NW.js runtimes and writes the packages
  under `build/`: `wavedrom-editor-v<version>-win-x64.zip`, `-osx-x64.zip`, `-osx-arm64.zip`,
  `-linux-x64.tar.gz`.
* The NW.js version and the app version are set at the end of `build-wde.sh`:
  `bash build.sh --name wavedrom-editor --nwversion v0.115.0 --version v<version>`.

🟨 Differences in this fork:

* The desktop app uses **this fork's core library** (`../wavedrom/wavedrom.min.js`) so it carries
  `latency`, `config.cursor` and the lettered colours; if that file is absent it falls back to the
  npm `wavedrom` package.
* The archive is written by Python's `zipfile` (Info-ZIP compatible): a `bsdtar`-produced zip is
  rejected by Chromium and the app dies at startup.
* `LICENSE` and `THIRD-PARTY.md` are copied to the **top level** of the archive.

---

## 6. Releasing the desktop application (CLI)

🟦 Upstream flow:

```sh
# 1) bump the version in package.json, WaveDromEditor/package.json and build-wde.sh
# 2) build
npm run build
# 3) tag and push
git tag v3.7.3-dsh && git push origin v3.7.3-dsh
# 4) publish (needs the gh CLI)
gh release create v3.7.3-dsh \
  build/wavedrom-editor-v3.7.3-dsh-win-x64.zip \
  build/wavedrom-editor-v3.7.3-dsh.nw \
  --title "WaveDrom Editor 3.7.3-dsh (Windows x64)" \
  --notes-file RELEASE_NOTES.md
```

🟩 What this fork actually publishes: both repositories share the tag name — the core library
`Reval-cai/wavedrom` publishes four build artifacts, this repository publishes the Windows x64 zip
and the `.nw`. Older releases are marked as superseded in their notes.

---

## 7. Repository layout

| Path | Notes |
|---|---|
| `editor.html` | 🟦 the web editor |
| `editor.js` | 🟦 editor logic (init, render, export) |
| `init.js` | 🟨 default document (🟩 now the full-feature demo) |
| `tutorial.html` | 🟦 tutorial |
| `wavedrom.min.js`, `skins/` | 🟨 bundled engine and skins (engine upgraded to this fork's `3.7.3-dsh`) |
| `scripts/` | 🟦 bundled front-end libs: CodeMirror, Lo-Dash, Underscore, SyntaxHighlighter |
| `WaveDromEditor/package.json` | 🟨 desktop app manifest (window size, version) |
| `build-wde.sh` | 🟦 upstream build script |
| `build/` | build outputs (not committed, see `.gitignore`) |
| `LICENSE`, `THIRD-PARTY.md`, `CHANGES.md` | licence, third-party notices, fork changelog |

---

## 8. Diff at a glance

| Kind | Content |
|---|---|
| 🟩 Added | full-feature built-in example, Windows x64 portable zip, top-level licence files in the app package |
| 🟨 Changed | bundled engine `3.7.3-dsh`, `package.json` dependency and `3.7.x-dsh` version, `init.js` default document, window title |
| 🟦 Untouched | all upstream editor behaviour, the build flow, `build-wde.sh`, the skin files, the `scripts/` front-end libs |

---

## 9. Licence & attribution

* Based on upstream **WaveDrom Editor v3.7.0**, **MIT licensed**, keeping the original copyright
  notice `Copyright (c) 2011-2026 Aliaksei Chapyzhenka` **in full**; this fork's changes are MIT as
  well.
* Redistribution (including the desktop zip) must keep `LICENSE`, the upstream copyright notice and
  the unofficial-fork notice in this README, and must state what was changed.
* This fork is **not affiliated with, nor endorsed by** the original author.

### Third-party components shipped with the app

| Component | Version | Licence |
|---|---|---|
| WaveDrom engine (this fork's build) | `3.7.3-dsh` (upstream 3.7.0) | MIT |
| bit-field / json5 / logidrom / onml / tspan | bundled in the engine | MIT |
| CodeMirror | 5.65.21 | MIT |
| Lo-Dash / Underscore.js | 2.4.1 / 1.5.2 | MIT |
| SyntaxHighlighter (bundles XRegExp 2.0.0) | 3.0.9 | MIT or GPL (dual licensed; used here under MIT) |
| NW.js (desktop runtime) | v0.115.0 | MIT |
| Chromium / Node.js (embedded in NW.js) | as shipped | BSD-3-Clause and others / MIT |

Full notices: [THIRD-PARTY.md](THIRD-PARTY.md).

---

## 10. Changelog & links

* Fork changelog: [CHANGES.md](CHANGES.md) · Releases: [v3.7.3-dsh](https://github.com/Reval-cai/wavedrom.github.io/releases/tag/v3.7.3-dsh)
* Core library fork: [Reval-cai/wavedrom](https://github.com/Reval-cai/wavedrom) · Upstream engine: [wavedrom/wavedrom](https://github.com/wavedrom/wavedrom)
* Upstream editor / tutorial: [wavedrom.com/editor.html](http://wavedrom.com/editor.html) | [tutorial.html](http://wavedrom.com/tutorial.html)
* WaveJSON spec: [wavedrom/schema](https://github.com/wavedrom/schema/blob/master/WaveJSON.md)

---

[中文](README.md) | **English**
