// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const dynamicPages = []; 

const stream = new SitemapStream({ hostname: 'https://srcnsvr.com' });
const data = [...links, ...dynamicPages];

streamToPromise(Readable.from(data).pipe(stream))
  .then((sitemap) => 
    createWriteStream('./public/sitemap.xml').write(sitemap.toString())
  );