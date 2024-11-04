import Image from 'next/image';

export default function PhotoContainer ({photos}: {photos: string[]}) {
    return (
        <div className="w-full flex flex-wrap justify-center p-4 overflow-auto">
                {photos.map((photo, index) => (
                  <div key={index} className="m-4 w-96 h-96 relative">
                    <Image
                      src={`/cakes${photo}`}
                      alt={photo}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
        </div>
    )
}