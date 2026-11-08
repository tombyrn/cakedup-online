// app/photos/religious/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function ReligiousPage() {
  const photos: string[] = getPhotos('/cakes/religious');
  
  return (
    <div className="pt-48 flex flex-col bg-slate-50">
      <div className="text-3xl text-center p-6 py-12 my-3">Religious Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};

