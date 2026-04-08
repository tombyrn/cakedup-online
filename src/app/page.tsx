import Link from "next/link";
import Image from "next/image";
import getPhotos from "@/lib/getPhotos";
import { LCAM_INTERNET_ADDRESS, MERCH_INTERNET_ADDRESS, TOTC_INTERNET_ADDRESS } from "@/lib/links";

export default function Home() {
  const clientPhotos: string[] = getPhotos('/clients');
  return (
    <>
      {/* SPLASH */}
      <section className="mt-24 overflow-hidden flex justify-center items-center flex-col bg-transparent">
        {/* WNSB DESIGN */}
        <div className="overflow-hidden w-[2300px] h-[600px] relative flex justify-center">
          <div className="scroll-track"></div>

          <div className="w-screen flex flex-col justify-center items-center border-debug">

            <div className="">
              <div className="min-w-[30rem] min-h-[30rem]  rb_container">
                <Link href={LCAM_INTERNET_ADDRESS}>
                <div
                  style={{ backgroundImage: `url("/lcam.png")` }}
                  className=" absolute inset-0 my-10 bg-contain scale-95 hover:scale-110 bg-no-repeat bg-center opacity-100"
                />
                </Link>
              </div>
            </div>

            <div className="relative stroke-outline3 text-2xl text-center">A collection of custom cakes ready in five days notice.</div>
          </div>

        </div>


        {/* CARD DECK */}
        <div className="min-w-full  my-10 p-2 flex flex-col text-center">
            
            {/* HEADER */}
          <div>
            <h3 className="text-4xl italic font-bold text-pink-300"> A family owned bakery serving the community since 2013.</h3>
            <p className="text-xl italic text-gray-400"> Explore our online options </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* TOP OF THE CRUMB */}
            <div className="bg-white min-h-[25rem] rounded-2xl shadow-md hover-glow hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">

              <div className="flex flex-col lg:flex-row flex-grow gap-4 m-4">

                {/* TEXT */}
                <div className="flex flex-col lg:w-1/2">
                  <h2 className="text-3xl font-semibold text-pink-300 text-center">
                    Top of the Crumb
                  </h2>

                  <p className="mt-2 text-lg text-gray-400 lg:text-left">
                    Our signature sugar covered streusal is now available for shipping nationwide.
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative lg:w-1/2 aspect-square">
                  <Image
                    src="/totc.jpg"
                    fill
                    unoptimized
                    alt="Top of the Crumb product"
                    className="object-cover rounded-xl"
                  />
                </div>

              </div>


              <Link
                href={TOTC_INTERNET_ADDRESS}
                className="cool-button cool-button--pink w-full text-centerborder-debug"
              >
                Shop Now
              </Link>

            </div>



            {/* LETS CAKE A MEMORY */}
            <div className="bg-white min-h-[25rem] rounded-2xl shadow-md hover-glow hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">

              <h2 className="text-3xl font-semibold text-pink-300 m-4 text-center">
                Let's Cake a Memory!
              </h2>

              <div className="relative aspect-[4/3] w-full mb-4 flex-grow">
                <Image
                  src="/monster.jpg"
                  fill
                  alt="Custom cakes available in Let's Cake a Memory section"
                  className="object-cover rounded-xl"
                />
              </div>

              <Link
                href={LCAM_INTERNET_ADDRESS}
                className="cool-button cool-button--pink w-full text-center mt-auto"
              >
                Browse Our Collection
              </Link>

            </div>



            {/* MERCH */}
            <div className="bg-white min-h-[25rem] rounded-2xl shadow-md hover-glow hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">

              <div className="flex flex-row flex-grow gap-4 m-4">

                {/* IMAGE LEFT */}
                <div className="relative w-1/2 aspect-square">
                  <Image
                    src="/wnsb_merch.png"
                    fill
                    alt="Caked Up merchandise hoodies and shirts"
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* TEXT RIGHT */}
                <div className="flex flex-col w-1/2 text-left">
                  <h2 className="text-3xl font-semibold text-pink-300">
                    Shop Our Merch
                  </h2>

                  <p className="mt-2 text-lg text-gray-400">
                    Pink and black hoodies and t-shirts available online and in store.
                  </p>
                </div>

              </div>

              <Link
                href={MERCH_INTERNET_ADDRESS}
                className="cool-button cool-button--pink w-full text-center mt-6"
              >
                Shop Now
              </Link>

            </div>

          </div>



        </div>
      </section>

      {/* CLIENTS */}
      <section className="flex flex-col justify-center text-center">

        <div className="w-full flex flex-row justify-center flex-wrap flex-grow"> 

          {clientPhotos.map((clientPhoto) => <div key={clientPhoto} className="relative w-24 md:w-48 aspect-square hover-glow">
          <Image fill unoptimized alt={clientPhoto} src={clientPhoto}/>
          </div>)}
        </div>

      </section>

      {/* CONTACT US */}
      <section className="w-5/6 py-16 px-6 m-16 bg-pink-50 flex justify-center rounded-xl justify-self-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-pink-300">
              Contact Us
            </h2>
            {/* 
            <p className="text-gray-600">
              We'd love to hear from you! Whether you're placing a custom order,
              asking about availability, or just saying hello — reach out anytime within our hours.
            </p> */}

            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <h3 className="text-xl font-semibold text-pink-300">
                Best Way To Reach Us
              </h3>

              <p className="text-gray-400">
                To inquire about an order for custom cakes or large cupcake batches, please email us
                and follow the instructions in the <span className="font-semibold">automatic response</span>.
              </p>

              <div className="space-y-2 text-gray-600">
                <div><a href="mailto:cakedupcafe@gmail.com"  className="hover:text-pink-300">📧 cakedupcafe@gmail.com</a></div>
                <div><a href="tel:+18454992929"  className="hover:text-pink-300">📞 (845) 499-2929</a></div>
                <div><a href="https://www.google.com/maps/place/40+S+Main+St,+New+City,+NY+10956/@41.1460661,-73.9943604,17z"  className="hover:text-pink-300">📍 40 S Main Street, New City NY</a></div>
              </div>
            </div>
          </div>


          {/* RIGHT */}
          <div className="space-y-6">

            {/* HOURS */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-300 mb-4">
                Hours
              </h3>

              <div className="space-y-2 text-gray-400">

                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-gray-600">10am – 6pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-gray-600">10am – 5pm</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>

                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>


            {/* SOCIAL MEDIA */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-pink-300 mb-4">
                Follow Us
              </h3>

              <div className="flex gap-4">

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/cakedupcafe/"
                  className="bg-pink-100 hover:bg-pink-200 transition p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-pink-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1"/>
                  </svg>
                </a>

                {/* TIK TOK */}
                <a
                  href="https://www.tiktok.com/@cakedupcafe"
                  className="bg-pink-100 hover:bg-pink-200 transition p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-pink-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 8.5a7.5 7.5 0 01-4.4-1.4v6.6a5.7 5.7 0 11-5-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 10 2.1 2.9V2h2.7a4.8 4.8 0 003.7 3.2v3.3z"/>
                  </svg>
                </a>

                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/Cakedupcafe/"
                  className="bg-pink-100 hover:bg-pink-200 transition p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-pink-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 3h4V0h-4c-3.3 0-6 2.7-6 6v3H6v4h3v11h4V13h3l1-4h-4V6c0-1.1.9-2 2-2z"/>
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
