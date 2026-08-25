import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = join(root, "dist", "client");
const pagesDir = join(root, "docs");
const rootAssetsDir = join(root, "assets");
const pagesUrl = "https://embodied-ai-with-videos.github.io/";

await rm(pagesDir, { force: true, recursive: true });
await mkdir(pagesDir, { recursive: true });
await cp(clientDir, pagesDir, { recursive: true });

const workerUrl = new URL(`../dist/server/index.js?pages=${Date.now()}`, import.meta.url);
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    passThroughOnException() {},
    waitUntil() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?\s*>/gi, "")
  .replace(/https?:\/\/localhost(?::\d+)?\/og\.png/g, `${pagesUrl}og.png`)
  .replace(/(href|src)="\/(?!\/)/g, '$1="./')
  .replace(/url\(\/assets\//g, "url(./assets/");

if (/(?:href|src)="\/(?!\/)|url\(\/assets\//.test(html)) {
  throw new Error("Static HTML still contains root-relative asset paths");
}

const assetsDir = join(pagesDir, "assets");
for (const filename of await readdir(assetsDir)) {
  if (!filename.endsWith(".css")) continue;

  const cssPath = join(assetsDir, filename);
  const css = (await readFile(cssPath, "utf8")).replace(/url\(\/assets\//g, "url(./");
  await writeFile(cssPath, css);
}

await Promise.all([
  writeFile(join(pagesDir, "index.html"), html),
  writeFile(join(pagesDir, "404.html"), html),
  writeFile(join(pagesDir, ".nojekyll"), ""),
]);

await rm(rootAssetsDir, { force: true, recursive: true });
await cp(assetsDir, rootAssetsDir, { recursive: true });

for (const filename of ["favicon.svg", "og.png", "university.shield.rgb.blue.png"]) {
  await cp(join(pagesDir, filename), join(root, filename));
}

await Promise.all([
  writeFile(join(root, "index.html"), html),
  writeFile(join(root, "404.html"), html),
  writeFile(join(root, ".nojekyll"), ""),
]);

console.log(`GitHub Pages site generated at ${pagesDir} and repository root`);
