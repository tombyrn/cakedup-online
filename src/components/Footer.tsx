import Link from "next/link";
import InstagramLogo from "./InstagramLogo";
import TikTokLogo from "./TikTokLogo";


export default function Footer() {
    return (
        <footer className=" px-3 py-8 bg-slate-50">

            <div className="w-full header-bg">
                {/* <div className="w-full h-12 scrolling-triangles"/>  */}
                <div className="w-full h-20"/>
            </div>
            <div className="w-full text-center text-gray-400 ">

                <div className="flex justify-center mb-4 font-bold">
                    {/* <Link href="https://www.facebook.com/Cakedupcafe/" passHref>
                    <div className="mx-2 hover-pink">Facebook</div>
                    </Link> */}
                    <Link href="/about" className="hover-pink" passHref>
                        <div className="mx-2 hover-pink">About</div>
                    </Link>
                    <Link href="https://cakedup-cafe.square.site/" className="hover-pink" passHref>
                        <div className="mx-2 hover-pink">Order Now</div>
                    </Link>
                    <Link href="https://www.instagram.com/cakedupcafe/"className="hover-pink"  passHref>
                        <div className="mx-2 flex justify-center hover-pink">Instagram</div>
                        {/* <InstagramLogo/> */}
                    </Link>
                    <Link href="https://www.tiktok.com/@cakedupcafe" className="hover-pink" passHref>
                        <div className="mx-2 flex justify-center ">Tik-Tok</div>

                        {/* <TikTokLogo/> */}
                    </Link>
                </div>
                <div>
                    40 S. Main St New City, NY 10956<br/>
                    &copy; 2026 Caked Up Cafe
                </div>


            </div>
      </footer>
    )
}