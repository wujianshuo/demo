const fs = require('fs');
const path = require('path');

const files = [
    '1_首页.html',
    '2_关于四航三.html',
    '3_新闻中心.html',
    '4_公司业务.html',
    '5_党的建设.html',
    '6_科技创新.html',
    '7_人力资源.html',
    'article.html'
];

const footerBlock = [
    '<div style="flex:22;min-width:0;" id="footer-quick">',
    '    <h4 style="color:#fff;margin-bottom:12px;font-size:16px;">快速链接</h4>',
    '    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:15px;" class="footer-links">',
    '        <li><a href="./2_关于四航三.html" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="关于四航三">关于四航三</a></li>',
    '        <li><a href="./3_新闻中心.html" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="新闻中心">新闻中心</a></li>',
    '        <li><a href="./4_公司业务.html" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="公司业务">公司业务</a></li>',
    '    </ul>',
    '</div>',
    '<div style="flex:22;min-width:0;padding-top:37.6px;" id="footer-nav">',
    '    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:15px;" class="footer-links">',
    '        <li><a href="./5_党的建设.html" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="党的建设">党的建设</a></li>',
    '        <li><a href="./6_科技创新.html" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="科技创新">科技创新</a></li>',
    '        <li><a href="./7_人力资源.html" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="人力资源">人力资源</a></li>',
    '    </ul>',
    '</div>',
    '<div style="flex:22;min-width:0;padding-top:37.6px;" id="footer-friend">',
    '    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:15px;" class="footer-links">',
    '        <li><a href="https://www.ccccltd.cn/" target="_blank" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="中国交建">中国交建</a></li>',
    '        <li><a href="https://www.ccccltd.cn/" target="_blank" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="中交四航局">中交四航局</a></li>',
    '        <li><a href="https://www.ccccltd.cn/" target="_blank" style="color:rgba(255,255,255,0.6);display:block;max-width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="中交集团">中交集团</a></li>',
    '    </ul>',
    '</div>'
].join('\n');

// 页脚：替换 footer-quick 开头 到 footer-contact-wrap 之前 的整块
const footerRe = /<div style="flex:22;min-width:0;" id="footer-quick">[\s\S]*?(?=<div style="flex:34;min-width:0;" id="footer-contact-wrap">)/;

// 信访举报导航链接指向错误页面
const reportOld = './2_关于四航三.html?cat=party-report';
const reportNew = './5_党的建设.html?cat=party-report';

for (const f of files) {
    const p = path.join(process.cwd(), f);
    if (!fs.existsSync(p)) { console.log('SKIP (not found):', f); continue; }
    let s = fs.readFileSync(p, 'utf8');
    const before = s;
    s = s.replace(footerRe, footerBlock);
    s = s.split(reportOld).join(reportNew);
    if (s !== before) {
        fs.writeFileSync(p, s, 'utf8');
        console.log('UPDATED:', f);
    } else {
        console.log('NOCHANGE:', f);
    }
}
console.log('DONE');
