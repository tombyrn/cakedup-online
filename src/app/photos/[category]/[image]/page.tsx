// app/photos/[category]/[image]/page.tsx
import Image from "next/image";
import fs from "fs";
import path from "path";

export const dynamicParams = false; // dynamic route segments not included in generateStaticParams will return a 404.

// statically generate pages for each image in each folder in /public/cakes/
// returns the name of the folder (category) and the image file basename (image)
// as array of objects {category:string; image:string}[]
export async function generateStaticParams() {
    const basePath = path.join(process.cwd(), "public","/cakes");
    const categories = fs.readdirSync(basePath);


    const paths: { category: string; image: string }[] = [];

    categories.forEach((category) => {
        const categoryPath = path.join(basePath, category);

        if (fs.statSync(categoryPath).isDirectory()) {
            const images = fs.readdirSync(categoryPath);

            images.forEach((img) => {
                paths.push({
                    category,
                    image:img
                });
             });
        }
    });

    return paths;
}

export async function generateMetadata({ params }: {params: {category:string; image: string}}) {
  const { category, image } = await params;

  const title = `${image.replaceAll("_", " ")} | ${category}`;
  const description = `View ${title} from our ${category} collection.`;

  return {
    metadataBase: new URL("https://cakedupcafe.com"),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`/${category}/${image}.jpg`], // adjust if needed
    },
  };
}

export default async function ImagePage({params,}: {params: { category: string; image: string }}) {
    const { category, image } = await params;
    
    const cwd = process.cwd()
    if(!cwd || !category || !image) return <div className="m-48">Image not found1</div>;

    const categoryPath = path.join(cwd, "public", "/cakes/",category);
    const files = fs.readdirSync(categoryPath);

    const file = files.find((f) => image.startsWith(f));

    if (!file) return <div className="m-48">Image not found2</div>;

    const imageSrc = `/cakes/${category}/${file}`;

    return (
        <div className="relative mt-48 flex flex-col items-center">
            <h1 className="absolute text-sm z-0 mb-4 capitalize text-white">{image.replaceAll("_", " ")}</h1>
            <Image
                src={imageSrc}
                alt={image}
                width={800}
                height={800}
                loading="eager"
                className="h-auto z-10"
            />

            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ImageObject",
                contentUrl: imageSrc,
                name: image,
                description: image,
                }),
            }}
            />
        </div>
    );
}
