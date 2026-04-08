import fs from "fs";
import path from "path";

// Returns array of filenames for every photo in provided directory
export default function getPhotos (category: string): string[] {
    const folderPath = path.join(process.cwd(), 'public', category);
    const filenames = fs.readdirSync(folderPath).filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    return filenames.map(name => `${category}/${name}`);
};