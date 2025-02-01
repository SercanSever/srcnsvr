// scripts/generate-image-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, readdirSync } from "fs";
import { Readable } from "stream";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];

const IMAGE_DIRECTORIES = [
  join(__dirname, "../public"),
  join(__dirname, "../src/assets"),
  join(__dirname, "../public"),
];

function findImages(dir) {
  let images = [];
  try {
    const files = readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
      const path = join(dir, file.name);

      if (file.isDirectory()) {
        images = [...images, ...findImages(path)];
      } else if (IMAGE_EXTENSIONS.includes(extname(file.name).toLowerCase())) {
        const relativePath = path.replace(join(__dirname, "../public"), "");
        images.push({
          url: relativePath,
          fileName: file.name,
        });
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }
  return images;
}

async function generateImageSitemap() {
  const images = [];

  IMAGE_DIRECTORIES.forEach((dir) => {
    images.push(...findImages(dir));
  });

  const stream = new SitemapStream({ hostname: "https://srcnsvr.com" });

  const sitemapImages = images.map((image) => ({
    url: "/",
    img: [
      {
        url: `https://srcnsvr.com${image.url}`,
        caption: image.fileName.split(".")[0].replace(/-/g, " "),
        title: image.fileName.split(".")[0].replace(/-/g, " "),
      },
    ],
    changefreq: "monthly",
    priority: 0.7,
  }));

  try {
    const sitemap = await streamToPromise(
      Readable.from(sitemapImages).pipe(stream)
    );
    createWriteStream(join(__dirname, "../public/image-sitemap.xml")).write(
      sitemap.toString()
    );
    console.log("Image sitemap successfully generated!");
  } catch (error) {
    console.error("Error generating image sitemap:", error);
  }
}

generateImageSitemap();
