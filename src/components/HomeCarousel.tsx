"use client"
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const carouselItems = [
    {
      image: '/cake_a_memory.jpg',
      component: 
        <div>
          <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&item=503#19" target="_blank">
            <div className="text-7xl hover:font-bold stroke-outline3"> Lets Cake a Memory! </div>
          </Link>
          <div className="stroke-outline3 italic text-xl text-white"> Order from our online collection of Custom Cakes </div>
        </div>,
    },
    {
      image: '/cutout_cupcakes.jpg',
      component: 
        <div className="font-bold md:-translate-x-24 xl:-translate-x-96">
          <div className="md:text-left text-lg text-white italic">Unique Sweets</div>
          <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=#2" target="_blank"><div className="italic stroke-outline2 text-6xl"> Order Online </div></Link>
        </div>,
    },
    {
      image: '/totc.webp',
      component: 
        <div className="text-5xl text-pink-300 font-bold ">
          <div className="text-2xl text-gray-100 italic">Top of the Crumb!</div>
          <Link href="https://cakedup-cafe.square.site/?item=718&shipping=true" target="_blank"><div className="stroke-outline"> NOW SHIPPING </div></Link>
        </div>,
    },
    // {
    //   image: '/mallomar_cupcakes.jpg',
    //   component: 
    //     <div className="text-5xl text-pink-300 font-bold lg:translate-x-64">
    //       <div className="md:text-left text-2xl text-gray-100 italic">Mallomar Cupcakes!</div>
    //       <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=690#2" target="_blank"><div className="stroke-outline"> AVAILABLE NOW </div></Link>
    //     </div>,
    // },
  ];

export default function HomeCarousel() {
      return (
        <section className="mt-24 h-[40rem] flex justify-center">
          <Carousel
              autoPlay
              swipe
              indicators={false}
              animation="slide"
              interval={50000}
              className="w-full z-0"
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="w-full h-[40rem] bg-cover bg-center text-center items-center flex justify-center object-fill bg-transparent"
              >{item.component}</div>
            ))}
          </Carousel>
        </section>
      )
}