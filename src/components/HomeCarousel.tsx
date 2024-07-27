import { Paper } from "@mui/material";
import Link from "next/link";
import Carousel from "react-material-ui-carousel";

const carouselItems = [
    {
      image: '/spread.webp',
      alt: 'Slide 1',
      component: <></>,
    },
    {
      image: '/bc.png',
      alt: 'Slide 2',
      component: <div className="text-5xl text-pink-300 font-bold -translate-x-24 lg:-translate-x-96">
        <div className="text-left text-lg text-gray-500 italic">Unique Sweets</div>
        <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=407#2"><div className="italic stroke-outline2"> Order Online </div></Link>
      </div>,
    },
    {
      image: '/goods.jpg',
      alt: 'Slide 3',
      component: <></>,
    },
    {
      image: '/cj.png',
      alt: 'Slide 4',
      component: <div className="text-5xl text-pink-300 font-bold translate-x-24 lg:translate-x-48 -translate-y-14">
        <div className="text-left text-lg text-gray-100 italic">Cookie and Cake Jars</div>
        <Link href="https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c&menu=&item=593#4"><div className="stroke-outline"> ORDER NOW </div></Link>
      </div>,
    },
  ];

export default function HomeCarousel() {
      return (
        <section className="mt-24 h-[30rem] flex justify-center">
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
                className="w-full h-[30rem] bg-cover bg-center text-center items-center flex justify-center bg-transparent"
              >{item.component}</div>
            ))}
          </Carousel>
        </section>
      )
}