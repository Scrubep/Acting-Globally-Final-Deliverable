/**
 * Converts literal px lengths in .css files to rem (1rem = 16px).
 * Run from repo root: node scripts/px-to-rem-css.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "src");

function pxToRem(_match, numStr) {
  const num = parseFloat(numStr);
  if (num === 0) return "0";
  const rem = num / 16;
  if (Number.isInteger(rem)) return `${rem}rem`;
  const s = rem.toFixed(4).replace(/\.?0+$/, "");
  return `${s}rem`;
}

function convert(content) {
  return content.replace(/(\d+(?:\.\d+)?)px/g, pxToRem);
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.name.endsWith(".css")) out.push(p);
  }
  return out;
}

let n = 0;
for (const file of walk(root)) {
  const before = fs.readFileSync(file, "utf8");
  const after = convert(before);
  if (before !== after) {
    fs.writeFileSync(file, after, "utf8");
    n++;
    console.log("updated:", path.relative(root, file));
  }
}
console.log(`Done. ${n} file(s) changed.`);
