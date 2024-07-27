// app/photos/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function AnniversaryPage() {
  const photos: string[] = getPhotos('anniversary');
  
  return (
    <div className="mt-32 flex flex-cols">
      <div className="text-3xl text-left p-6 py-12 my-3">Anniversary/Retirement Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};