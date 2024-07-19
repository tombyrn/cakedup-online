import { Grid, Paper } from "@mui/material";
import CakeIcon from "./CakeIcon";

export default function Poster() {
    return (
        <section className="m-8 mt-0">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className="p-4 bg-pink-200 text-center flex flex-col justify-center items-center text-pretty">
                <CakeIcon/>
                <div className="border-2 border-black m-5 md:mx-32 p-8">
                  Located in the heart of New City, New York, you will find a cake shop unlike any other. Here, sweet, pure ingredients are mixed together to create delicious treats with flavors that change every day! Whether you want to stop in to appease your sweet tooth, or to order a unique custom cake to impress your guests, Caked Up can make it happen! 
                </div>

              </Paper>
            </Grid>
          </Grid>
        </section>
    )
}