// app/photos/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function WeddingPage() {
  const photos: string[] = getPhotos('wedding');
  
  return (
    <div className="mt-48 flex flex-col">
      <div className="text-3xl text-center p-6 py-12 my-3">Wedding/Engagement Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};
