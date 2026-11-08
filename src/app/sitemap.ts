import type { MetadataRoute } from 'next'

import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPath = path.join(process.cwd(), "public", "/cakes");

  const categories = fs.readdirSync(publicPath);

  const modifyDate = new Date()
  const urls: {url: string; lastModified: Date}[] = [
    { url: "https://cakedupcafe.com", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/about", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/birthday", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/celebrity", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/graduation", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/pull-apart", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/religious", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/shower", lastModified: modifyDate },
    { url: "https://cakedupcafe.com/photos/wedding", lastModified: modifyDate },
  ];

  categories.forEach((category) => {
    const categoryPath = path.join(publicPath, category);

    // each category
    if(fs.statSync(categoryPath).isDirectory()) {
      const images = fs.readdirSync(categoryPath);

      // each image
      images.forEach((img) => {
        const imageName = img.replace(/\.[^/.]+$/, "");

        urls.push({
          url: `https://cakedupcafe.com/photos/${category}/${imageName}`,
          lastModified: new Date(),
        });
      });
    }
  });

  return urls;
}