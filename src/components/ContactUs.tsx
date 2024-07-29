import { Grid, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FacebookLogo from "./FacebookLogo";
import InstagramLogo from "./InstagramLogo";

const googleAddress = "https://www.google.com/maps/place/Caked+Up+Cafe/@41.1460676,-73.9894787,15z/data=!4m2!3m1!1s0x0:0xc2a3e250b35b93f3";

export default function ContactUs() {
    return (
        <section className="m-8 text-center">
            <Paper className="w-full p-8">
                <Grid container spacing={3} direction="column">
                    <Grid item className="text-pink-300 font-bold text-5xl"> 
                        CONTACT US
                    </Grid>

                    <Grid item ><Link href={googleAddress} className="italic hover:text-pink-300">40 S. Main Street, New City, NY 10956</Link></Grid>

                    <Grid item container justifyContent="center">
                        <Grid item container spacing={6} direction="row" justifyContent="center" className="mb-12">
                            <Grid item  container spacing={1} direction="column">
                            <Grid item className="text-3xl">Store Hours</Grid>
                            <Grid item>Sunday - Closed</Grid>
                            <Grid item>Monday - Closed</Grid>
                            <Grid item>Tuesday - 10am to 6pm</Grid>
                            <Grid item>Wednesday - 10am to 6pm</Grid>
                            <Grid item>Thursday - 10am to 6pm</Grid>
                            <Grid item>Friday - 10am to 6pm</Grid>
                            <Grid item>Saturday - 10am to 5pm</Grid>
                            </Grid>
                        <Grid item container spacing={1} direction="column">
                            <Grid item className="text-3xl">Social Media</Grid>
                            <Grid item container spacing={2} direction="column">
                                <Grid item container justifyContent="center" >
                                    <Link href="https://www.instagram.com/cakedupcafe/">
                                        <Grid item container spacing={1} direction="row" justifyContent="center" alignItems="center" className="hover:text-pink-300 fill-black hover:fill-pink-300">
                                                <Grid item>Instagram </Grid>
                                                <Grid item><InstagramLogo/></Grid>
                                        </Grid>
                                    </Link>
                                </Grid>

                                <Grid item container justifyContent="center" >
                                    <Link href="https://www.facebook.com/Cakedupcafe/">
                                        <Grid item container spacing={1} direction="row" justifyContent="center" alignItems="center" className="hover:text-pink-300 fill-black hover:fill-pink-300">
                                                <Grid item>Facebook</Grid>
                                                <Grid item><FacebookLogo/></Grid>
                                        </Grid>
                                    </Link>
                                </Grid>
                                <Grid item>(845) 499-2929</Grid>
                                <Grid item>cakedupcafe@gmail.com</Grid>
                            </Grid>

                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
      </section>
    )
}