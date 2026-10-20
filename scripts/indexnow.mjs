// Notifies Bing, Yandex and other IndexNow engines of every URL in public/sitemap.xml.
// Run after each deploy: node scripts/indexnow.mjs
import { readFileSync } from "node:fs";

const HOST = "www.be-languages.com";
const KEY = "61a1f615840014d2be3d81503c5fc9d9";

const sitemap = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: ${urlList.length} URLs submitted, HTTP ${res.status}`);
