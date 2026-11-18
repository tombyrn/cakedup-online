// app/custom-cakes

import Image from "next/image";
import Link from "next/link";

export default function PlatterPage() {
    let platters = [
        {name: 'Classic Platter', img: 'classic.jpeg', description: 'Mini cupcakes, french macarons, rainbow cookies, brownies, & cookies, perfect for parties! *Contains Nuts*', url:'https://cakedup-cafe.square.site/?location=A8C68XT80AVX1&item=334'},
        {name: 'Thanksgiving Platter', img: 'thanks.webp', description: 'Decorated for Thanksgiving! Mini Cupcakes, Almond Rainbow Cookies, Almond French Macarons, Cookies, & Brownies, perfect for Friendsgiving too! Give us a call if you need a “Happy Friendsgiving” plaque added to the top!', url: 'https://cakedup-cafe.square.site/?location=A8C68XT80AVX1&item=224'},
        {name: 'Graduation Platter', img: 'graduation.jpeg', description: 'Decorated with logos and colors from school of choice! Mini cupcakes, french macarons, rainbow cookies, brownies, & cookies, perfect for parties! *Contains Nuts*', url:'https://cakedup-cafe.square.site/?location=A8C68XT80AVX1&item=604'},
        {name: 'Sports Platter', img: 'sports.webp', description: 'Decorated with logos and colors from team of choice! Mini cupcakes, french macarons, rainbow cookies, brownies, & cookies, perfect for parties! *Contains Nuts*', url:'https://cakedup-cafe.square.site/?location=A8C68XT80AVX1&item=730'},
    ]


    return (
        <div className="container min-w-full pt-52 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-6">
                {platters.map((cake) => (
                    <Link key={cake.name} href={cake.url}>
                        <div
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col overflow-hidden"
                        >
                            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-100">
                                <Image
                                    src={`/platters/${cake.img}`}
                                    alt={cake.description}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col flex-grow pt-5">
                                <h2 className="text-xl font-semibold text-slate-800 mb-2">
                                    {cake.name}
                                </h2>

                                <p className="text-sm leading-relaxed text-slate-600">
                                    {cake.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

