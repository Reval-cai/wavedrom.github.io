'use strict';

(function(){

    var e, val;

    function ssvg () {
        var svg, ser;

        svg = document.getElementsByTagName('svg')[0]; // document.getElementById('svgcontent_0');
        ser = new XMLSerializer();
        return '<?xml version="1.0" standalone="no"?>\n'
            + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
            + '<!-- Created with WaveDrom -->\n'
            + ser.serializeToString(svg);
    }

    function pngdata () {
        var svgdata, img, canvas, context;

        svgdata = 'data:image/svg+xml;base64,' + btoa(ssvg());
        img = new Image();
        img.src = svgdata;
        canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        return canvas.toDataURL('image/png');
    }

    // die if Enternet Explorer
    function killBill () {
        if (navigator.appName.indexOf('Explorer') >= 0) {
            var content;

            content = document.getElementById('content');
            content.parentNode.removeChild(e);
            document.write('<h1>Sorry, Internet Explorer is not supported.</h1>');
            document.body.style.backgroundColor = '#ffdddd';
            window.stop();
        }
    }

    // built-in example document, kept in sync with demo/demo.json by
    // tools/sync-default.js
    // >>> DEMO
    var DEMO = [
        '// ===========================================================================',
        '// WaveDrom 完整功能演示',
        '// ---------------------------------------------------------------------------',
        '// 【波形字符】',
        '//   p n P N        时钟（正沿/负沿，两种相位）',
        '//   h l H L        高/低电平边沿',
        '//   0 1            低/高电平',
        '//   x z u d        未知 / 高阻 / 上拉 / 下拉',
        '//   2 3 4 5 6 7 8 9   数值数据格（原有色码）',
        '//   a b c e f g       数值数据格（本次新增的 6 个低饱和马卡龙色；d 已被占用）',
        '//   =              数据格（与色码 2 同色）',
        '//   .              上一个状态再延长一个周期',
        '//   |              波形断开（空隙）',
        '// 【结构】',
        '//   {}             空行（间隔）',
        '//   [\'名字\', ...]   分组，可嵌套',
        '//   period/phase   每 lane 的周期数与相位',
        '//   over/under     总线上的上/下标记',
        '//   node/edge      箭头：~ 曲线、- 直线、> < 箭头、可带文字',
        '//   head/foot      时间轴刻度(tick/tock/every) 与标题，文字支持 tspan 富文本',
        '//   config         图级设置：hscale / skin / marks / hbounds',
        '// 【数值格的形状】',
        '//   数值格两侧的"斜坡"来自它相邻的字符：',
        '//     x.5x   两侧是 x（未知）→ 斜边梯形，像这里的 mosi/bus',
        '//     5x6    两边直接相邻    → 竖直分界，像这里的 macaron 之外那种方块',
        '//   想让形状一致，就在数值之间插入 x 或 .（本例 macaron 行就是这样）',
        '// ---------------------------------------------------------------------------',
        '// 【本次新增】',
        '//   latency        延迟，单位是「一个周期的百分比」，可正可负：',
        '//                    100 = 延后整整一个周期， 25 = 四分之一周期， -50 = 提前半周期',
        '//                  位移不再量化到「半个周期」：图纸内部按「1 个周期 = 100 单位」',
        '//                  排布（viewBox 等比放大、width/height 不变，所以图片尺寸不变），',
        '//                  于是 1% = 1 单位 = 0.4px —— 可以精确到像素，例如 12 → 4.8px。',
        '//                  各 lane 左边界始终对齐：正延迟把波形整体推出、起始区用波形自身',
        '//                  回绕填充；负延迟把头部裁掉，裁掉的部分不会画进左侧名字列。',
        '//   config.cursor  竖直游标线 + 文字标注，可写一条或一个数组：',
        '//                    x         百分比 \'25%\'，或格数（如 9）',
        '//                    text      标注文字（可省略，只画线）',
        '//                    color     线色，textColor 字色',
        '//                              取值与数据色码完全一致：2-9、a b c e f g，',
        '//                              也可以直接写 \'#rrggbb\'',
        '// ===========================================================================',
        '{',
        '  config: {',
        '    hscale: 1,          // 横向比例：1(默认) / 2 / 3',
        '    // skin: \'narrow\',  // 换皮肤：default(默认) narrow narrower narrowerer dark lowkey',
        '    // marks: false,    // 关掉竖直的周期虚线',
        '    // hbounds: [1, 12],// 只显示第 1..12 个周期',
        '',
        '    // 游标：x 用格数或百分比。刻度数字每 2 个周期（4 格）出现一次，',
        '    // 把游标放在数字之间的空隙里就不会打架（第 5、13 格，以及 90%）',
        '    cursor: [',
        '      { x: 5,     text: \'tSU\',    color: 3,      textColor: 3 },',
        '      { x: 13,    text: \'sample\', color: \'a\',    textColor: \'a\' },',
        '      { x: \'90%\', text: \'tH\',     color: \'#c00\', textColor: \'#c00\' }',
        '    ]',
        '  },',
        '',
        '  head: {',
        '    text: [\'tspan\',',
        '      [\'tspan\', {class: \'info\'},    \'WaveDrom \'],',
        '      [\'tspan\', {class: \'success\'}, \'full \'],',
        '      [\'tspan\', {class: \'warning\'}, \'feature \'],',
        '      [\'tspan\', {class: \'muted\'},   \'demo\']',
        '    ],',
        '    tick: 0,',
        '    every: 2',
        '  },',
        '  foot: { text: \'latency: 100% = one period (1% = 0.4 px)\', tock: 0 },',
        '',
        '  signal: [',
        '    { name: \'clk\',  wave: \'p.............\' },',
        '    { name: \'cs_n\', wave: \'10..........1.\' },',
        '    {},',
        '    [\'SPI\',',
        '      { name: \'sck\',  wave: \'01010101010...\' },',
        '      { name: \'mosi\', wave: \'x.3x=x.x......\', data: \'A5 3C\' },',
        '      { name: \'miso\', wave: \'x..4x=x.......\', data: \'9F\', latency: 50 }',
        '    ],',
        '    {},',
        '    { name: \'bus\',   wave: \'x.5x=xx.......\', data: \'CMD ST\', over: \'..1.0.........\', under: \'...1.0........\' },',
        '    { name: \'late\',  wave: \'x.5x=xx.......\', data: \'CMD ST\', latency: 100 },',
        '    { name: \'half\',  wave: \'x.5x=xx.......\', data: \'CMD ST\', latency: 50 },',
        '    { name: \'fine\',  wave: \'x.5x=xx.......\', data: \'CMD ST\', latency: 12 },',
        '    { name: \'early\', wave: \'x.5x=xx.......\', data: \'CMD ST\', latency: -50 },',
        '    { name: \'tri\',   wave: \'z.u.d.x.......\' },',
        '    {},',
        '    { name: \'macaron\', wave: \'x.axbxcxexfxgx\', data: \'a1 b1 c1 e1 f1 g1\' },',
        '    { name: \'macaron2\', wave: \'x.axbxccefgx\', data: \'a b c e f g\' },',
        '    { name: \'phased\',  wave: \'x.3x=x........\', data: \'PH\', phase: 0.5 },',
        '    { name: \'period2\', wave: \'P......\', period: 2 },',
        '    {},',
        '    { name: \'req\', wave: \'0.1..0........\', node: \'..a..b........\' },',
        '    { name: \'ack\', wave: \'0....1..0.....\', node: \'.....c..d.....\' }',
        '  ],',
        '',
        '  edge: [',
        '    \'a~>c tSU\',',
        '    \'b->d tH\'',
        '  ]',
        '}'
    ].join('\n');
    // <<< DEMO

    // the example that shipped before this one: an existing installation picks
    // up the new demo once, without overwriting anything the user wrote
    var PREVIOUS_DEMO = '{signal: [\n  {name: \'clk\', wave: \'p.....|...\'},\n  {name: \'dat\', wave: \'x.345x|=.x\', data: [\'head\', \'body\', \'tail\', \'data\']},\n  {name: \'req\', wave: \'0.1..0|1.0\'},\n  {},\n  {name: \'ack\', wave: \'1.....|01.\'}\n]}\n';

    function nodeWebkit () {
        // node-webkit detection
        val = localStorage.waveform;
        if (val === undefined || val === '' || val === null || val === PREVIOUS_DEMO) {
            val = DEMO;
            localStorage.waveform = val;
        }

        if (typeof process !== 'object') {
            return;
        }

        var gui = require('nw.gui'),
            fs = require('fs'),
            path = require('path');

        var args = gui.App.argv,
            data,
            rawdata;

        if (args[0] && args[0] === 'source' && args[1]) {
            val = fs.readFileSync(
                path.resolve(process.env.PWD, args[1]),
                {encoding: 'utf8'}
            );
            localStorage.waveform = val;
        } else {
            return;
        }

        if (args[2] && args[3]) {
            e.value = val;
            WaveDrom.EditorRefresh();

            if (args[2] === 'svg') {
                data = ssvg();
            }
            if (args[2] === 'png') {
                rawdata = pngdata().replace(/^data:image\/\w+;base64,/, '');
                data = new Buffer(rawdata, 'base64');
            }

            fs.writeFileSync(
                path.resolve(process.env.PWD, args[3]),
                data,
                {encoding: 'utf8'}
            );
            gui.App.quit();
        }
    }

    killBill();

    e = document.getElementById('InputJSON_0');

    nodeWebkit();

    e.value = val;

    var cm = CodeMirror.fromTextArea(
        e,
        {
            lineNumbers: true,
            mode: {
                name: 'javascript',
                json: true
            },
            matchBrackets: true,
            autoCloseBrackets: true,
            highlightSelectionMatche: true,
            autofocus: true
        }
    );
    cm.on('change', function (cmm) {
        function c () {
            var v = cmm.getValue();
            e.value = v;
            var scroller = document.getElementById('SVGScroll');
            var state = {
                left: scroller.scrollLeft,
                top: scroller.scrollTop
            };
            WaveDrom.EditorRefresh();
            scroller.scrollTop = state.top;
            scroller.scrollLeft = state.left;
            localStorage.waveform = v;
        }
        setTimeout(c, 750);
    });

    WaveDrom.cm = cm;

    window.addEventListener('load', () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js');
        }
    });

    document.getElementById('version').innerHTML = 'v' + WaveDrom.version;

})();

/* eslint-env browser */
/* global CodeMirror, WaveDrom */
