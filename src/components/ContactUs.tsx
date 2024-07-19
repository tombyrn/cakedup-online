import { Grid, Paper } from "@mui/material";
import Link from "next/link";

export default function ContactUs() {
    return (
        <section className="m-8 text-center">
            <Paper className="w-full">
                <Grid container spacing={2} direction="column">
                <Grid item className="text-pink-300 font-bold text-5xl"> 
                    CONTACT US
                </Grid>
                <Grid item className="italic"> 40 S. Main Street, New City, NY 10956 </Grid>
                <Grid item container justifyContent="center">
                    <Grid item container spacing={6} direction="row" justifyContent="center" className="mb-12">
                        <Grid item  container spacing={1} direction="column">
                        <Grid item className="text-3xl">Store Hours</Grid>
                        <Grid item>Sunday - 10am to 6pm</Grid>
                        <Grid item>Monday - 10am to 6pm</Grid>
                        <Grid item>Tuesday - 10am to 6pm</Grid>
                        <Grid item>Wednesday - 10am to 6pm</Grid>
                        <Grid item>Thursday - 10am to 6pm</Grid>
                        <Grid item>Friday - 10am to 6pm</Grid>
                        <Grid item>Saturday - 10am to 5pm</Grid>
                        </Grid>
                        <Grid item container spacing={1} direction="column">
                        <Grid item className="text-3xl">Social Media</Grid>
                        <Grid item><Link href="https://www.instagram.com/cakedupcafe/" className="hover-pink">Instagram</Link></Grid>
                        <Grid item><Link href="https://www.facebook.com/Cakedupcafe/" className="hover-pink">Facebook</Link></Grid>
                        <Grid item>(845) 499-2929</Grid>
                        <Grid item>cakedupcafe@gmail.com</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
      </section>
    )
}