const fs=require('fs');
const BR=String.fromCharCode(13,10);
const f='4_business.html';
let L=fs.readFileSync(f,'utf8').split(BR);
const i=L.findIndex(l=>l.indexOf('var selfPage =')>=0);
if(i<0)throw new Error('anchor');
const want=[
  '                var selfPage = String(location.pathname.split(String.fromCharCode(47)).pop() || \'\').toLowerCase();',
  '                var targetPath = String(targetCat.page_url).split(\'?\')[0].split(String.fromCharCode(47)).pop().toLowerCase();',
  '                if (targetPath !== selfPage) {',
  '                    location.replace(targetCat.page_url);',
  '                    return;',
  '                }'
];
let end=i;
while(end<L.length && L[end].trim()!=='}') end++;
console.log('new block spans L'+(i+1)+'..L'+(end+1));
let k=end+1;
let removed=0;
while(k<L.length && removed<3){
  const t=L[k].trim();
  if(t.indexOf('location.replace(targetCat.page_url);')===0 || t==='return;' || t==='}')
  { L.splice(k,1); removed++; continue; }
  break;
}
console.log('removedOrphans='+removed);
L.splice(i, end-i+1, ...want);
const out=L.join(BR);
fs.writeFileSync(f,out,'utf8');
const s2=fs.readFileSync(f,'utf8');
const re=/<script>([\s\S]*?)<\/script>/g;
let m,n=0,bad=0;
while((m=re.exec(s2))){n++;try{new Function(m[1]);}catch(e){bad++;console.log('INLINE '+n+' ERROR '+String(e.message).slice(0,100));}}
console.log('inlineScripts='+n+' syntaxErrors='+bad);
const L2=s2.split(BR);
for(let q=749;q<764;q++)console.log('  L'+(q+1)+'|'+L2[q].replace(/[^\x00-\x7F]/g,'?').slice(0,140));
if((s2.match(/\r/g)||[]).length!==(s2.match(/\n/g)||[]).length)console.log('CRLF BAD');
try{fs.unlinkSync('zz_view.js');}catch(e){}

