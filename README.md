![alt text](images/logo.png "logo")

# WaveDrom editor

> ### 非官方分支 / Unofficial fork
>
> **中文** — 本仓库是 [WaveDrom Editor](https://github.com/wavedrom/wavedrom.github.io) 的
> **非官方分支**，基于上游 **v3.7.0**（`adb503d`），由 **Deerczl** 维护，版本号标为
> `3.7.1-dsh`。它与原作者 Aliaksei Chapyzhenka 及 WaveDrom 项目**无从属关系，也未获其背书**：
> 请勿把本分支的问题反馈给上游，也请勿以原作者名义宣传本分支。
>
> 上游以 **MIT 许可证**发布，本分支**完整保留**原始 [LICENSE](LICENSE) 与版权声明
> （`Copyright (c) 2011-2026 Aliaksei Chapyzhenka`），本分支新增与修改的部分同样以 **MIT** 发布。
> 任何再分发（含下面打出的桌面应用 zip）都必须保留 `LICENSE`、本说明与上游版权声明，并注明
> 修改内容。
>
> **本分支的改动**：编辑器内置示例换成覆盖完整语法的综合演示（波形字符、间隙与重复、分组、
> `period`/`phase`、`over`/`under`、`node`/`edge` 箭头、`head`/`foot` 富文本、全部色码、新增的
> 6 个马卡龙色、`config.cursor` 游标与 `latency` 延迟通道），并配套 `wavedrom` 引擎的
> `3.7.1-dsh`（`latency` 像素级精度、`config.cursor`、字母色码 `a b c e f g`）。详见
> [CHANGES.md](CHANGES.md)；随包分发的第三方组件及其许可（NW.js/Chromium/Node、CodeMirror、
> Lo-Dash、Underscore、SyntaxHighlighter、WaveDrom 引擎及其依赖）见
> [THIRD-PARTY.md](THIRD-PARTY.md) —— 该文件也会被一起打进应用包。
>
> **English** — This repository is an **unofficial fork** of
> [WaveDrom Editor](https://github.com/wavedrom/wavedrom.github.io), based on upstream
> **v3.7.0** (`adb503d`), maintained by **Deerczl** and versioned `3.7.1-dsh`. It is
> **not affiliated with, nor endorsed by** the original author or the WaveDrom
> project: please do not report this fork's issues upstream, and do not present it
> as the original work.
>
> Upstream is released under the **MIT licence**; this fork **keeps** the original
> [LICENSE](LICENSE) and copyright notice
> (`Copyright (c) 2011-2026 Aliaksei Chapyzhenka`), and its own changes are MIT as
> well. Any redistribution — including the desktop application zip built below —
> must keep `LICENSE`, this notice and the upstream copyright notice, and must
> state what was changed.
>
> **What this fork changes**: the editor's built-in example is now a full-feature
> demo (wave characters, gaps and repeaters, groups, `period`/`phase`,
> `over`/`under`, `node`/`edge` arrows, `head`/`foot` with tspan styles, every
> colour code, the six new macaron colours, `config.cursor` cursors and `latency`
> lanes), together with the `wavedrom` engine fork `3.7.1-dsh` (pixel-precise
> `latency`, `config.cursor`, lettered colour codes `a b c e f g`). See
> [CHANGES.md](CHANGES.md); the third-party components shipped with the app
> (NW.js/Chromium/Node, CodeMirror, Lo-Dash, Underscore, SyntaxHighlighter, the
> WaveDrom engine and its dependencies) and their licences are listed in
> [THIRD-PARTY.md](THIRD-PARTY.md) — that file is bundled into the application
> package as well.

[WaveDromEditor](http://wavedrom.com/editor.html) is real-time editor of digital timing diagrams based on [WaveDrom](https://github.com/wavedrom/wavedrom) engine and [WaveJSON](https://github.com/wavedrom/schema/blob/master/WaveJSON.md) format.

See [Tutorial](http://wavedrom.com/tutorial.html) for more examples.

[Online editor](http://wavedrom.com/editor.html)

![alt text](images/firefox_22.gif "firefox") 4+
![alt text](images/chrome_22.gif "chrome") 10+
![alt text](images/safari_22.gif "safari") 5.1+
![alt text](images/opera_22.gif "opera") 12+
![alt text](images/ie_22.gif "ie") 11+

[Download editor](https://github.com/wavedrom/wavedrom.github.io/releases)  (Windows, Mac, Linux)

## Development

* Install `nodejs` (v18+ recommended) from https://nodejs.org/ or via [nvm](https://github.com/nvm-sh/nvm)
* `npm install` to install the development environment
* `npm test` to lint `editor.js` and `init.js`

### Updating the bundled WaveDrom engine

The rendering engine (`wavedrom.min.js`) and skins (`skins/*.js`) served by
`editor.html` are vendored copies of the `wavedrom` npm package. After bumping
the `wavedrom` dependency in `package.json`, refresh the vendored copies:

```sh
npm install
cp node_modules/wavedrom/wavedrom.min.js wavedrom.min.js
cp node_modules/wavedrom/skins/*.js skins/
```

## How to Build the Desktop Application

The desktop app is packaged with [NW.js](https://nwjs.io/) for Windows, Mac
and Linux.

* `npm run build` (or `./build-wde.sh`) stages the app sources into `src/`,
  downloads the matching NW.js runtimes, and produces distributable packages
  under `build/`:
  * `wavedrom-editor-v<version>-linux-x64.tar.gz`
  * `wavedrom-editor-v<version>-win-x64.zip`
  * `wavedrom-editor-v<version>-osx-x64.zip`
  * `wavedrom-editor-v<version>-osx-arm64.zip`

The NW.js version and app version are set at the bottom of `build-wde.sh`:

```sh
bash build.sh --name wavedrom-editor --nwversion v0.115.0 --version v3.7.0
```

Update both values when bumping versions.

## Releasing the Desktop Application (CLI)

1. Bump the version in `package.json` and `WaveDromEditor/package.json`, and
   update the `--version` (and `--nwversion` if needed) in `build-wde.sh`.
2. Build the packages:
   ```sh
   npm run build
   ```
3. Tag the release:
   ```sh
   git tag v3.7.0
   git push origin v3.7.0
   ```
4. Publish the artifacts to [GitHub Releases](https://github.com/wavedrom/wavedrom.github.io/releases)
   using the [`gh` CLI](https://cli.github.com/):
   ```sh
   gh release create v3.7.0 \
     build/wavedrom-editor-v3.7.0-*.tar.gz \
     build/wavedrom-editor-v3.7.0-*.zip \
     --title "v3.7.0" \
     --notes "Release notes here"
   ```

## Community

Please use [WaveDrom user group](http://groups.google.com/group/wavedrom) for discussions, questions, ideas, whatever.

## License

See [LICENSE](LICENSE).
