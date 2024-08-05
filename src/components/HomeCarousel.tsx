import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const carouselItems = [
    {
      image: '/case2.jpg',
      component: <></>,
    },
    {
      image: '/bc.png',
      alt: 'Slide 2',
      component: <div className="text-5xl text-pink-300 font-bold sm:-translate-x-24 lg:-translate-x-96">
        <div className="text-left text-lg text-gray-500 italic">Unique Sweets</div>
        <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=407#2"><div className="italic stroke-outline2"> Order Online </div></Link>
      </div>,
    },
    {
      image: '/cutout_cupcakes.png',
      component: <></>,
    },
    {
      image: '/jars.jpg',
      component: <div className="text-5xl text-pink-300 font-bold -translate-y-14 sm:translate-x-48 ">
        <div className="text-left text-lg text-gray-100 italic">Cookie and Cake Jars</div>
        <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=593#4"><div className="stroke-outline"> ORDER NOW </div></Link>
      </div>,
    },
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