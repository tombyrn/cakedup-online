// app/photos/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function CelebrityPage () {
  const photos: string[] = getPhotos('celebrity');
  
  return (
    <div className="mt-48 flex flex-col">
      <div className="text-3xl text-center p-6 py-12 my-3">Celebrity Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};

