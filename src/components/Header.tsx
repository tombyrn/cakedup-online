import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import Logo from "@/components/Logo";
import PhotosMenu from "@/components/PhotosMenu";
import FrostedGlass from "@/components/FrostedGlass";

export default function Header() {

    return (
        <header className='m-0 h-16 fixed w-full top-0 z-50 flex flex-col items-center bg-slate-50'>
            <div className="min-w-full p-4 md:p-8 flex items-center justify-between content-between text-gray-400 bg-slate-50">
                <div className="flex flex-row ">
                    <Link href={'/about'} className="hidden sm:flex">
                        <div className="m-2 text-xl hover-pink">
                            ABOUT
                        </div>
                    </Link>
                    <Link href='https://cakedup-cafe.square.site/'>
                        <div className="m-2 text-xl hover-pink">
                            ORDER NOW
                        </div>
                    </Link>
                    {/* <Link href={'/flavors'} className="hidden lg:flex">
                        <div className="m-2 hover-pink">
                            FLAVORS
                        </div>
                    </Link> */}
                    <Link href={'https://www.ezcater.com/catering/caked-up-cafe-3'} className="hidden lg:flex" target="_blank">
                        <div className="m-2 text-xl hover-pink">
                            CATERING
                        </div>
                    </Link>
                </div>

                <div className="flex flex-row ">
                    <PhotosMenu/>
                </div>
            </div>

            <div className="w-full header-bg bg-slate-50">
                <div className="w-full h-12 scrolling-triangles bg-slate-50"/>
            </div>

            <FrostedGlass/>

            <Logo/>

            {/* <div className="border"></div>
            <div className="main-element"></div> */}

        </header>

    )
}