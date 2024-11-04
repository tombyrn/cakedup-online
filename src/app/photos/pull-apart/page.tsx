// app/photos/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function HolidayPage() {
  const photos: string[] = getPhotos('pull_apart');
  
  return (
    <div className="mt-48 flex flex-col">
      <div className="text-3xl text-center p-6 py-12 my-3">Pull-Apart Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};
