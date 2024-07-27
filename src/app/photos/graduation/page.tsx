// app/photos/page.tsx
import PhotoContainer from '@/components/PhotoContainer';
import getPhotos from '@/lib/getPhotos';

export default function GraduationPage () {
  const photos: string[] = getPhotos('graduation');
  
  return (
    <div className="mt-32 flex flex-col">
      <div className="text-3xl text-left p-6 py-12 my-3">Graduation Cakes</div>
      <PhotoContainer photos={photos} />
    </div>
  );
};
