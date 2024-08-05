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
        <Grid container spacing={12} direction="column" className="my-32 py-8 text-center" justifyContent="center" alignContent="center" >
            <Grid item container spacing={6} xs={2} direction="column">
                <Grid item className="text-4xl text-pink-300">Flavors</Grid>
                <Grid item className="text-2xl">
                    Our cakes, cupcakes, cake jars, can be made
                    into any one of our delicious flavors!
                </Grid>
                <Grid item className="text-xl">
                    *Notice: we have over 90 flavors and some are seasonal and won’t
                    be available every day, so call ahead or stop by to see which cupcakes we have that day!*
                </Grid>
                <Grid item className="text-lg text-pink-300">**Seasonal flavors are marked**</Grid>
            </Grid>
            <Grid item xs={10} className="flex justify-center">
                <div className=" w-4/6 flex flex-row flex-wrap justify-center ">
                    {flavors.map((flavor, i) => (
                        <div key={i} className="m-2 text-center ">{flavor.endsWith('*') ? <div className="text-pink-300">{flavor}</div> : flavor}</div>
                    ))}
                </div>
            </Grid>
        </Grid>
    )
}