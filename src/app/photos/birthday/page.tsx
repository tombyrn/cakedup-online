// app/photos/birthday/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function BirthdayPage() {
  const photos: string[] = getPhotos('/cakes/birthday');
  
  return (
    <div className="pt-48 flex flex-col bg-slate-50">
      <div className="text-3xl text-center p-6 py-12 my-3">Birthday Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};

