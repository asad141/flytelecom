import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public/favicon.svg"));

const sizes = [
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "src/app/icon.png", size: 32 },
  { file: "src/app/apple-icon.png", size: 180 },
];

for (const { file, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(root, file));
  console.log(`Created ${file}`);
}

// favicon.ico for legacy browsers and /favicon.ico requests
const favicon32Path = join(root, "public/favicon-32x32.png");
const faviconIco = await pngToIco(favicon32Path);
writeFileSync(join(root, "public/favicon.ico"), faviconIco);
console.log("Created public/favicon.ico");

console.log("Favicon assets generated.");
