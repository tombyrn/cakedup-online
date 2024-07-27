import fs from "fs";
import path from "path";

export default function getPhotos (category: string): string[] {
    const folderPath = path.join(process.cwd(), 'public/cakes', category);
    const filenames = fs.readdirSync(folderPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    return filenames.map(name => `/${category}/${name}`);
};