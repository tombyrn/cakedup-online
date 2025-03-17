import { Grid, Paper } from "@mui/material"
import Image from 'next/image';
import Link from "next/link"

const flavors = [
    {
        name: "Jelly Donut",
        photo: "jelly_donut.jpg",
        description: "Vanilla cake filled with raspberry jelly, topped with vanilla buttercream and a mini jelly donut!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=426#2"
    },
    {
        name: "Cookie Dough",
        photo: "cookie_dough.jpg",
        description: "Vanilla cake with a cookie dough buttercream topping and a mini cookie!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=421#2"
    },
    {
        name: "Cookies and Cream",
        photo: "cookies_cream.jpg",
        description: "Chocolate cake with a cookies and cream buttercream topping!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=420#2"
    },
    {
        name: "Reese's",
        photo: "pb.jpg",
        description: "Chocolate or vanilla cake filled with reese's pieces, topped with peanut butter buttercream, more reese's pieces, and a mini peanut butter cup!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=414#2"
    },
    {
        name: "Cannoli",
        photo: "cannoli.jpg",
        description: "Vanilla cake with a cannoli cream, chocolate chips, and a whole mini cannoli on top!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=413#2"
    },
    {
        name: "Hostess",
        photo: "hostess.jpg",
        description: "Chocolate cake with vanilla buttercream, dipped in chocolate ganache!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=412#2"
    },
    {
        name: "Death by Chocolate",
        photo: "dbc.jpg",
        description: "Chocolate cake with a milk chocolate buttercream topping, chocolate sprinkles, chocolate drizzle, and a Hershey bar!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=406#2"
    },
    {
        name: "Vanilla Coconut",
        photo: "van_coconut.jpg",
        description: "Vanilla cake filled and topped with a coconut buttercream and rolled in coconut shavings!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=404#2"
    },
    {
        name: "Confetti",
        photo: "confetti.jpg",
        description: "Confetti cake with vanilla buttercream topping and rainbow sprinkles!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=411#2"
    },
    {
        name: "Coconut Samoa",
        photo: "coconut.jpg",
        description: "Chocolate cake filled with caramel and topped with a coconut buttercream, toasted coconut, caramel and chocolate drizzle, and a coconut samoa cookie!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=403#2"
    },
    {
        name: "Red Velvet",
        photo: "red_velvet.jpg",
        description: "Classic red velvet cupcake with a cream cheese buttercream!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=402#2"
    },
    {
        name: "Carrot",
        photo: "carrot.jpg",
        description: "Carrot cake with a classic cream cheese buttercream!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=401#2"
    },
    {
        name: "Half Baked",
        photo: "half_baked.jpg",
        description: "Vanilla or chocolate cake filled with a cookie dough buttercream and topped with vanilla buttercream, a mini brownie, and cookie!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=400#2"
    },
    {
        name: "Strawberry Shortcake",
        photo: "strawberry.jpg",
        description: "Vanilla cake filled with strawberry buttercream and topping with a vanilla cream and strawberry streusel!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=399#2"
    },
    {
        name: "Pumpkin Cookie Butter",
        photo: "pumpkin_cookie.jpg",
        description: "A pumpkin cake filled with cookie butter, topped with cream cheese, biscoff cookie and crumbs, and more cookie butter!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=679#2"
    },
    {
        name: "Mallomar",
        photo: "mallomar.jpg",
        description: "Chocolate cupcake with marshmallow buttercream, graham cracker, and chocolate ganache and a mallomar cookie!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=690#2"
    },
    {
        name: "Apple Cobbbler",
        photo: "apple_cobbler.jpg",
        description: "Apple cake with apple pie filling, vanilla buttercream and cinnamon streusel topping!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=461#2"
    },
    {
        name: "Strawberry Cheesecake",
        photo: "strawberry_cheesecake.jpg",
        description: "Vanilla cake with a graham cracker cookie bottom, strawberry filling, and cream cheese buttercream toppping!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=463#2"
    },
    {
        name: "Maple Bacon",
        photo: "maple_bacon.jpg",
        description: "Maple cake with a vanilla buttercream topping, bacon pieces, a mini stack of pancakes, and drizzled with maple syrup!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=407#2"
    },
    {
        name: "French Toast",
        photo: "french_toast.jpg",
        description: "A cinnamon sugar cake filled with maple syrup and topped with vanilla buttercream, cinnamon sugar, and maple syrup!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=405#2"
    },
    {
        name: "Dinosaur",
        photo: "dino.jpg",
        description: "Confetti Cake with vanilla buttercream topping, candies, and a white chocolate dinosaur on top!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=410#2"
    },
    {
        name: "Over the Rainbow",
        photo: "rainbow.jpg",
        description: "Blue velvet cake with blue buttercream, sprinkles, and a candy rainbow!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=592#2"
    },
    {
        name: "Unicorn",
        photo: "unicorn.jpg",
        description: "Confetti cake with a vanilla buttercream topping, sprinkles, a unicorn horn, and glitter!",
        link: "https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=409#2"
    },
]

const otherFlavors = [
    "Amaretto Crunch*",

"Apple Cobbler*",

"Banana Caramel",

"Banana Cream Pie",

"Banana Nutella",

"Banana Split*",

"Banana Streusel",

"Blue Velvet",

"Blueberry Cobbler*",

"Blueberry Pancake*",

"Boston Creme*",

"Brownie Sundae",

"Cannoli*",

"Caramel Apple*",

"Caramel Macchiato",

"Carrot Cake",

"Champagne*",

"Cheesecake",

"Chicken and Waffles",

"Chocolate Chip Pancake",

"Chocolate Chocolate",

"Chocolate Confetti",

"Chocolate Covered Strawberry*",

"Chocolate Peanut Butter",

"Chocolate Raspberry",

"Cake Batter",

"Chocolate Salted Caramel",

"Chocolate Truffle",

"Chocolate Vanilla",

"Churro*",

"Cinnamon Bun",

"Cinnamon Streusel",

"Coconut Samoa",

"Cookie Dough",

"Coquito*",

"Dulce de Leche",

"Eggnog*",

"Espresso Brownie",

"Fluffernutter",

"French Toast",

"Ginger Bread*",

"Guinness and Baileys*",

"Half Baked",

"Hostess",

"Key Lime Pie*",

"Lemon Blueberry*",

"Lemon Drop*",

"Lemon Meringue*",

"M&M",

"Mallomar*",

"Maple Bacon",

"Margarita*",

"Milky Way",

"Mint Chocolate Chip",

"Mocha Latte",

"Neapolitan*",

"Nutella Cheesecake",

"Nutella Hazelnut",

"Orange Creamsicle",

"Oreo",

"Pay Day",

"Peach Cobbler*",

"Peanut Butter & Jelly*",

"Pink Velvet",

"Pumpkin Cheesecake*",

"Pumpkin Pancake*",

"Pumpkin Spice*",

"Rainbow Sherbet*",

"Raspberry Cheesecake",

"Raspberry Coconut",

"Raspberry Lemonade*",

"Red Velvet",

"Rocky Road*",

"S’mores*",

"Shamrock Shake*",

"Snickerdoodle",

"Speculoos*",

"Strawberry Cheesecake",

"Strawberry Shortcake*",

"The King",

"Tiramisu",

"Triple Berry Cheesecake*",

"Vanilla Caramel",

"Vanilla Chocolate",

"Vanilla Coconut",

"Vanilla Confetti",

"Vanilla Raspberry",

"Vanilla Strawberry",

"Vanilla Vanilla",

"White Chocolate Peppermint​​*",
]
export default function Page() {
    return (
        <Grid container spacing={6} direction="column" className="py-64 text-center" justifyContent="center" >
            <Grid item className="text-5xl font-bold text-pink-300">Flavors</Grid>
            <Grid item container direction="row" justifyContent="center" alignContent="center">
                {flavors.map((flavor, i) => 
                    <Paper key={i} className="h-[30rem] w-[20rem] m-5 p-0 bg-white rounded-xl flex flex-col">
                        <div className="h-[20rem] flex rounded-xl relative"> 
                            <Image src={`/cakes/cupcakes/${flavor.photo}`} fill className="rounded-t-xl object-cover object-top"  alt={flavor.description} priority/>
                        </div>

                        <div className="h-[10rem] p-8 flex flex-col text-center justify-center items-center"> 
                            <div className="m-1 text-sm">{flavor.name}</div>
                            <div className="m-1 text-xs">{flavor.description}</div>
                            <div className="m-1 rounded-xl border-pink-300 border-2 p-2 text-pink-300 hover:bg-pink-300 hover:text-white text-xs">
                                <Link target="_blank" href={flavor.link || '/about'} prefetch={false}> ORDER </Link>
                            </div>

                        </div>
                    </Paper>
                )}
            </Grid>
            <Grid item container direction="column">
                <Grid item className="font-bold text-black">All Flavors</Grid>
                <Grid item className="font-bold italic text-pink-300">Seasonal flavors marked in pink</Grid>
            </Grid>

            <Grid item className="m-8 text-black">
                {otherFlavors.map((f: string, i: number) => <span key={i} className={`m-2 ${f.includes("*") ? "text-pink-300" : "text-black"}`}>{f}</span>)}
            </Grid>
        </Grid>
    )
}