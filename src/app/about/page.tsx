import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Image from 'next/image';

export default function Page() {
    return (
        <Grid container spacing={12} justifyContent="center" alignContent="center" className="mt-16">
            <Grid item direction="column" className="mt-16 text-center">
                <div className="text-5xl text-pink-300 font-bold"> OUR HISTORY </div>
                <div className="text-xl italic"> The Story of Caked Up Cafe </div>
            </Grid>

            <Grid container item spacing={0} direction="row" className="text-left" justifyContent="center">
                <Grid item xl={3} container justifyContent="center">
                    <Image src="/flower_cake.jpg" width={3456} height={5184} alt="Vanilla Cake on a Gold Board with Buttercream Flowers" priority className="p-8"/>
                </Grid>
                <Grid item container md={4} spacing={2} className="p-8">
                    <Grid item container direction="column" spacing={3}>
                        <Grid item xs={1} className="text-3xl text-pink-300 font-semibold">From Humble Beginnings</Grid>
                        <Grid item xs={1} className="">
                        Caked Up Cafe began with one woman who had a small bakery and big dreams. <br/> Those dreams became reality and now everyone’s buzzing about Caked Up Cafe.
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" spacing={3}>
                        <Grid item className=" text-3xl text-pink-300 font-semibold">
                            So what’s our secret?
                        </Grid>
                        <Grid item className="">
                            Our secret is simple.<br/>
                        </Grid>
                        <Grid item className="">
                            We don’t believe in compromises, so why should you?<br/>
                            And that’s why we’ve focused on creating the best tasting treats using nothing but all-natural ingredients.
                            Whether it’s a cupcake, wedding cake, or parfait – we see each creation as more than just a mouth-watering treat for your tastebuds; we see it as a work of art.
                        </Grid>
                        <Grid item className="">
                            Which is why we focus on every detail and only use the finest quality ingredients. So what does that mean for you? Well that means there are no artificial flavors, fillers, or coloring – Just amazing treats made from the best ingredients on earth.
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container spacing={0} direction="column" className=" m-4 text-center" justifyContent="center" alignItems="center">
                <Grid item container direction="column" >
                    <Grid item className="text-3xl text-pink-300"> WHY CHOOSE CAKED UP CAFE? </Grid>
                    <Grid item className="italic text-gray-300"> What makes us different </Grid>
                </Grid>

                <Grid item container spacing={0} justifyContent="center" direction="row">
                    <Paper elevation={10} className="w-80 p-8 m-8 hover-glow flex justify-center items-center" >
                        <Grid item container spacing={2} justifyContent="start" direction="column">
                                <Grid item className="text-2xl text-pink-300">BEST <br/> SERVICE</Grid> 
                                <Grid item className="p-4 text-left">At Caked Up Cafe, we love our guests. Which is why we are dedicated to provide the best experience and service possible.</Grid>
                        </Grid>
                    </Paper>

                    <Paper elevation={10} className="w-80 p-8 m-8 hover-glow flex justify-center items-center" >
                        <Grid item container spacing={2} justifyContent="start">
                                <Grid item className="text-2xl text-pink-300">SIMPLY IRRESISTIBLE</Grid> 
                                <Grid item className="p-4 text-left">We’re convinced that you will fall in love with our tasty treats. Each one of our desserts has been hand-crafted with love and tastes out of this world.</Grid>
                        </Grid>
                    </Paper>

                    <Paper elevation={10} className="w-80 p-8 m-8 hover-glow flex justify-center items-center" >
                        <Grid item container spacing={2} justifyContent="start">
                                <Grid item className="text-2xl text-pink-300">ALL NATURAL INGREDIENTS</Grid> 
                                <Grid item className="p-4 text-left">We create everything from scratch and don’t use any artificial ingredients, fillers, or flavoring.</Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
            </Grid>



        </Grid>
    )
}