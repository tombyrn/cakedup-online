import HomeCarousel from '@/components/HomeCarousel';
import Delish from '@/components/Delish';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Clients from '@/components/Clients';
import ContactUs from '@/components/ContactUs';

export default function Home() {

  return (
    <>
      <HomeCarousel/>
      <Hero/>
      <Clients/>
      <Delish/>
      <Reviews/>
      <ContactUs/>

      {/* 
      <section className="m-8">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className="p-4">Content for Section 3</Paper>
          </Grid>
        </Grid>
      </section> 
      */
      }
    </>
  );
};


