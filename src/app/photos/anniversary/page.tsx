// app/photos/page.tsx
import { ImageList, ImageListItem } from '@mui/material';
import fs from 'fs';
import Image from 'next/image';
import path from 'path';

const getPhotos = () => {
  const folderPath = path.join(process.cwd(), 'public/cakes', 'anniversary');
  const filenames = fs.readdirSync(folderPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
  return filenames.map(name => `/anniversary/${name}`);
};

const PhotosPage = () => {
  const photos = getPhotos();
  
  return (
    <div className="flex flex-col">
      <div className="text-3xl text-left p-6 py-12 my-3">Anniversary/Retirement Cakes</div>
      <div className="w-full flex justify-center p-4">
        <ImageList variant="woven" gap={8} cols={7} className="w-fit">
          {photos.map((photo, i) => (
            <ImageListItem key={i}>
                <Image
                src={`/cakes${photo}`}
                alt={photo}
                width={164}
                height={164}
                />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default PhotosPage;
