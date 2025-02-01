import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const hostname = "https://srcnsvr.com";

const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/stack", changefreq: "monthly", priority: 0.8 },
  { url: "/workspace", changefreq: "monthly", priority: 0.8 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  urls.forEach((entry) => sitemap.write(entry));
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  createWriteStream("./public/sitemap.xml").write(sitemapData);

  console.log("✅ Sitemap oluşturuldu: public/sitemap.xml");
}

generateSitemap();
