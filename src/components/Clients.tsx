import { Grid, Paper } from "@mui/material";
import Image from 'next/image'; 

const clients = [
    {
        url: "/clients/1oak.png"
    },
    {
        url: "/clients/abc.png"
    },
    {
        url: "/clients/cosmo.png"
    },
    {
        url: "/clients/hvm.png"
    },
    {
        url: "/clients/insider.png"
    },
    {
        url: "/clients/nyy.png"
    },
    {
        url: "/clients/rihanna.png"
    },
    {
        url: "/clients/spoon.png"
    },
    {
        url: "/clients/thechew.png"
    },
  ]

export default function Clients() {
    return (
        <section className="m-8 p-4">
          <Grid container spacing={3}>

            <Grid item container xs={12}>
                <Paper className="w-full h-fit p-6 m-2 bg-gray-50" elevation={0}>
                    <Grid item container xs={12}>

                    <Grid item container xs={0}  md={5} className="h-full" alignItems="center">
                        <Image src="/celebs.png" alt="Celebrities" width={504} height={334} />
                    </Grid>
                    
                    <Grid item container xs={0}  md={7} direction="column" className="h-full">
                        <Grid item xs={1} className="font-bold text-pink-200 text-2xl lg:text-5xl mb-3">CELEBRITY BUZZ</Grid>
                        <Grid item xs={1} className="font-bold text-pink-300 text-4xl lg:text-7xl text-right">WORLD FAMOUS.</Grid>
                        <Grid item xs={9} className="text-ellipsis">
                            “Our first celebrity cake was for Scott Disick from ‘Keeping Up with the Kardashians’,” says Denise. “The 1 Oak club contacted us for that, and since then we’ve made cakes for Kevin Durant, Odell Beckham, Jr., A-Rod’s retirement cake, Rihanna … television production crews, the list goes on.”
                        </Grid>
                        <Grid item container xs={5}>
                                <Grid item container columns={9}>
                                    {clients.map((c, i) => 
                                        <Grid item key={i} xs={1}><Image key={i} src={c.url} height={200} width={200} alt="client"/></Grid>
                                        )}
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>

          </Grid>
        </section>
    )
}