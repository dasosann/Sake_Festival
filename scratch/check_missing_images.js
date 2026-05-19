/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const files = ['src/app/data/hall1.ts', 'src/app/data/hall2.ts'];

function findMatching(src, start, open, close) {
  let depth = 0;
  let inS = false, inD = false, inT = false, esc = false;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (esc) { esc = false; continue; }
    if (c === '\\') { esc = true; continue; }
    if (inS) { if (c === "'") inS = false; continue; }
    if (inD) { if (c === '"') inD = false; continue; }
    if (inT) { if (c === '`') inT = false; continue; }
    if (c === "'") { inS = true; continue; }
    if (c === '"') { inD = true; continue; }
    if (c === '`') { inT = true; continue; }
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function lineOf(src, idx) {
  let n = 1;
  for (let i = 0; i < idx; i++) if (src[i] === '\n') n++;
  return n;
}

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  let idx = 0;
  const booths = [];

  while (true) {
    const idPos = src.indexOf('id: "', idx);
    if (idPos === -1) break;

    const objStart = src.lastIndexOf('{', idPos);
    if (objStart === -1) { idx = idPos + 1; continue; }

    const objEnd = findMatching(src, objStart, '{', '}');
    if (objEnd === -1) { idx = idPos + 1; continue; }

    const block = src.slice(objStart, objEnd + 1);
    const idm = block.match(/id:\s*"([^"]+)"/);
    const namem = block.match(/name:\s*"([^"]+)"/);

    if (idm && namem) {
      const pIdx = block.indexOf('products:');
      if (pIdx !== -1) {
        const arrStart = block.indexOf('[', pIdx);
        if (arrStart !== -1) {
          const arrEnd = findMatching(block, arrStart, '[', ']');
          if (arrEnd !== -1) {
            const arr = block.slice(arrStart, arrEnd + 1);
            const hasImage = /image\s*:/.test(arr);
            if (!hasImage) {
              booths.push({ id: idm[1], name: namem[1], line: lineOf(src, objStart) });
            }
          }
        }
      }
    }

    idx = objEnd + 1;
  }

  console.log('\n' + file);
  console.log('count=' + booths.length);
  for (const b of booths) {
    console.log(` - ${b.id} | ${b.name} | line ${b.line}`);
  }
}
