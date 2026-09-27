import { stat } from "node:fs/promises";

// Pages serves only this directory; server bundles cannot render missing pages.
const output = new URL("../dist/client/", import.meta.url);
const requiredFiles = ["index.html", "privacy.html", "404.html", "index.rsc", "privacy.rsc", "_redirects"];

for (const file of requiredFiles) {
  const info = await stat(new URL(file, output)).catch(() => null);
  if (!info?.isFile() || info.size === 0) {
    throw new Error(`Pages output is missing ${file}. Enable output: "export" in next.config.ts before deploying dist/client.`);
  }
}

console.log("Pages output verified: home, privacy, 404, and client navigation payloads.");
