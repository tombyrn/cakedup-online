// app/custom-cakes

import Image from "next/image";
import Link from "next/link";

export default function LCAMPage() {
    let cakes = [
        {name: 'Gender Reveal', img: 'gender_reveal.webp', description: 'Decorated with baby pink and blue sprinkles and a decorative plaque!', url: 'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=638'},
        {name: 'Winnie the Pooh', img: 'winnie_the_pooh.webp', description: 'Decorated with pooh and piglet, bees, handmade flowers and sculpted honey pot on top!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=637'},
        {name: 'Drunk Barbie', img: 'drunk_barbie.webp', description: 'Pink ombre buttercream with a white drip, french macarons (contain nuts), and sugar flowers! *Bottles and barbie must be provided by the customer the day before*', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=634'},
        {name: 'Unicorn', img: 'unicorn.webp', description: 'Decorated with a pink, blue, and purple mane, sugar flowers, horn and ears, and glitter to look like a unicorn!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=633'},
        {name: 'Character Cake', img: 'char_cake.jpeg', description: 'Decorated with balloons, piping, ice cream cones, sprinkles and the characters from your favorite show, movie, or video game! Colors will change with the character, click to see more pictures!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=632'},
        {name: 'What\'s funnier than 24?', img: 'wft24.webp', description: 'A cake decorated with handmade sea life from the show and a sugar topper of SpongeBobs and Patrick with the iconic phrase!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=631'},
        {name: 'Evil Eye', img: 'evil_eye.webp', description: 'A cake decorated with hand cut evil eyes, handmade inscription topper, and gold leaf!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=630'},
        {name: 'Golf Lovers', img: 'golf_lovers.webp', description: 'A golf cake decorated with handmade gold clubs, flag, small golf course on top, and fondant outside to look like a golf ball! Perfect for the golf lover in your life!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=628'},
        {name: 'Graduation Cake', img: 'graduation.webp', description: 'Decorated with a fondant hand made graduation cap, diploma, and school logo!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=605'},
        {name: 'School Sprinkle', img: 'school_sprinkle.webp', description: 'Sprinkle covered cake with school logo, perfect for bed parties!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=733'},
        {name: 'French Toast Lovers', img: 'french_toast.webp', description: 'French toast flavored cake with vanilla buttercream filling and maple syrup!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=506'},
        {name: 'Party Monster', img: 'party_monster.webp', description: 'A cake decorated to look like a cartoon monster with a handmade face and rice krispie party hat!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=503'},
        {name: 'Balloons & Butterflies', img: 'b&b.webp', description: 'A cake decorated with watercolor buttercream, balloons, and ethereal butterflies!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=502'},
        {name: 'Sports Drip', img: 'sports_drip.webp', description: 'Customize the sport and team! Colors will reflect the team colors. Ombre buttercream, chocolate drip, decorative standing plaque, candies, handmade stars, and handmade fondant ball!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=635'},
        {name: 'Starbucks Drip', img: 'starbucks.webp', description: 'A classic drip cake topped with gold dusted candies, mini cupcakes, sprinkles, edible logo, and real cup iced with buttercream to resemble coffee!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=710'},
        {name: 'Dunkin Drip Cake', img: 'dunkin.webp', description: 'A cake decorated with a striped buttercream, chocolate drip, donuts, munchkins, and a coffee cup, perfect for the Dunkin lover in your life!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=499'},
        {name: 'Aged to Perfection', img: 'atp.webp', description: 'A drip cake topped with gold dusted candies, and edible customizable logo on the front! *Bottles must be provided by customer the night before*', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=712'},
        {name: 'S\'mores Drip', img: 'smores.webp', description: 'A chocolate cake with marshmallow buttercream, chocolate ganache, and graham cracker inside, and topped with a ganache drip and s\'mores!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=696'},
        {name: 'Sushi Roll', img: 'sushi.webp', description: 'A cake decorated to look like a sushi roll, equipped with handmade sugar chopsticks, ginger, wasabi, and soy sauce! Perfect for the sushi lover in your life!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=497'},
        {name: 'Breakfast Lovers', img: 'breakfast_lovers.webp', description: 'A cake decorated to look like a sushi roll, equipped with handmade sugar chopsticks, ginger, wasabi, and soy sauce! Perfect for the sushi lover in your life!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=496'},
        {name: 'Fortnite', img: 'fortnite.webp', description: 'A cake decorated with handmade pieces from the game!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=682'},
        {name: 'Hand Piped Hearts', img: 'hph.webp', description: 'Simple hand piped hearts with an inscription on top, and edible glitter!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=728'},
        {name: 'Barbie', img: 'barbie.webp', description: 'A pink buttercream cake with hot pink stripes, handmade bow, and an image of barbie and her logo!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=694'},
        {name: 'Flowers & Scrollwork', img: 'f&s.webp', description: 'Handmade sugar flowers in spring colors, hand piped scrollwork and a decorative standing plaque!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=695'},
        {name: 'Harry Potter\'s Birthday Cake', img: 'harry_potter.webp', description: 'A cake decorated like the one Hagrid makes Harry Potter in the classic movie!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=731'},
        {name: 'Cars & Cash', img: 'c&c.webp', description: 'Black buttercream cake with standing edible car topper, scattered money and balloons!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=732'},
        {name: 'Gold & White with Vintage Piping', img: 'g&w.webp', description: 'Vintage buttercream hand piping with a gold painted inscription and white and gold flowers!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=727'},
        {name: 'Black and Gold Drip', img: 'b&g.webp', description: 'Black buttercream outside, black chocolate drip, gold splatter and black and gold balloons, this design lends itself to a topper!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=729'},
        {name: 'Star Wars', img: 'star_wars.webp', description: 'Perfect for the Star Wars lover in your life! Decorated with galaxy buttercream, silver splatter, handmade stars, white chocolate movie themed pieces, and hand cut paper toppers. Give us a call if you\d like to customize the characters on top!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=704'},
        {name: 'Pink Bow', img: 'pink_bow.webp', description: 'Oversized handmade fondant pink bow on top of a cake!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=4V3AB4KHLENFWDBQ7CTBK4EL'},
        {name: 'Fast One', img: 'fast_one.webp', description: 'A cake decorated with a fondant handmade number one to look like a road, hand cut fondant checkers, with non edible balloons!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=4GDUYTZIQLAMB7FBCAP5A4DO'},
        {name: 'Superman', img: 'superman.webp', description: 'A cake equipped with a handmade fondant cape, logo and edible custom topper! *A clear picture of the person must be emailed to cakedupcafe@gmail.com 5 days before the pickup, if one is not emailed a picture of the cartoon version of Superman will be used in place*', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=XYOFDRD3GQBS6SUBRGS7JDHG'},
        {name: 'Doggy Cake', img: 'dog.webp', description: 'A 4" cake for dogs made with peanut butter, flour, and milk with a peanut butter and cream cheese frosting! Can be enjoyed by up to 6 dogs depending on their size, inscription can be added but must be removed before pup enjoy!', url:'https://cakedup-cafe.square.site/?menu=&location=A8C68XT80AVX1&item=677'},
    ]


    return (
        <div className="container min-w-full pt-52 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-4 gap-6">
                {cakes.map((cake) => (
                    <Link key={cake.name} href={cake.url}>
                        <div
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col overflow-hidden"
                        >
                            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-100">
                                <Image
                                    src={`/cakes/lcam/${cake.img}`}
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

