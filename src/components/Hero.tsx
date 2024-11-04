import { Grid, Paper } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {
    return (
        <section className="m-0 scale-y-110 -translate-y-2">
              <Paper className="border p-8 w-full flex justify-center items-center text-center rounded-t-3xl z-40">
                <Grid container spacing={0} direction="row" justifyContent="center" alignItems="center" className="p-8 bg-white rounded-3xl">
                      <Grid md={4} item className="p-8">
                        <Image src="/case4.jpg" alt="Cake Happens" width={3456} height={5184} className="rounded-xl" priority/>
                      </Grid>
                      <Grid item container spacing={5} direction="column" justifyContent="center" className="max-w-[500px]">
                        <Grid item className="font-bold text-pink-300 text-6xl text-right">ABOUT CAKED UP CAFE</Grid>
                        <Grid item className="font-bold text-pink-200 text-3xl mb-3 text-right">OUR STORY</Grid>
                        <Grid item className="text-left">
                            Since opening its doors over 10 years ago, Caked Up has cultivated a following among locals, celebrities and professional athletes with its wildly flavored cupcakes and custom designed celebration cakes. See what everyone’s buzzing about!
                        </Grid>
                        <Grid item >  <Link href="/about" className="cool-button cool-button--pink"> Read More </Link></Grid>
                      </Grid>
                </Grid>
              </Paper>
        </section>
    )
}