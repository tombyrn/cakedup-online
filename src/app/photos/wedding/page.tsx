// app/photos/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function WeddingPage() {
  const photos: string[] = getPhotos('wedding');
  
  return (
    <div className="mt-32 flex flex-col">
      <div className="text-3xl text-left p-6 py-12 my-3">Wedding/Groom Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};
