import { Grid } from "@mui/material"

const flavors = [
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
        <Grid container spacing={2} direction="column" className="pt-16 text-center">
            <Grid item xs={2}>
                <h1 className="text-4xl text-pink-300">Flavors</h1>
                <h2 className="text-2xl">
                    Our cakes, cupcakes, cake jars, can be made
                    into any one of our delicious flavors!
                </h2>
                <h3 className="text-xl">
                    *Notice: we have over 90 flavors and some are seasonal and won’t
                    be available every day, so call ahead or stop by to see which cupcakes we have that day!*
                    <br/>**Seasonal flavors are marked**
                </h3>
            </Grid>
            <Grid item xs={10}>
                <div className="flex flex-row flex-wrap">
                    {flavors.map((flavor, i) => (
                        <div key={i} className="m-2 text-center hover:text-pink-300">{flavor}</div>
                    ))}
                </div>
            </Grid>
        </Grid>
    )
}