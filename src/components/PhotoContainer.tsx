import Image from 'next/image';
import path from "path";

export default function PhotoContainer ({photos}: {photos: string[]}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={photo}
                alt={path.parse(photo).name.replaceAll('_', ' ')}
                fill
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 50vw,
                      (max-width: 1024px) 33vw,
                      25vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
    )
}