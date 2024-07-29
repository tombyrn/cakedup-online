import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import Logo from "@/components/Logo";
import PhotosMenu from "@/components/PhotosMenu";

export default function Header() {

    return (
            <header className='m-0 pt-2 fixed w-full h-28 top-0 z-50 flex flex-col items-center bg-white'>
                <div className="w-full p-4 px-8 flex justify-between items-end text-gray-400">
                    <div className="flex flex-row">
                        <Link href={'/about'} className="hidden sm:flex">
                            <div className="m-2 hover-pink">
                                ABOUT
                            </div>
                        </Link>
                        <Link href={'https://cakedup-cafe.square.site/?location=11eb042e23766710b101ac1f6bbbcc9c'}>
                            <div className="m-2 hover-pink">
                                ORDER NOW
                            </div>
                        </Link>
                        <Link href={'/flavors'} className="hidden lg:flex">
                            <div className="m-2 hover-pink">
                                FLAVORS
                            </div>
                        </Link>
                        <Link href={'https://www.ezcater.com/catering/caked-up-cafe-3'} className="hidden lg:flex">
                            <div className="m-2 hover-pink">
                                CATERING
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-row">
                        <PhotosMenu/>
                    </div>
                </div>

                <div className="w-full header-bg translate-y-8 bg-transparent">
                    <div className="w-full h-12 scrolling-triangles"/>
                </div>

                <Logo/>

                {/* <div className="border"></div>
                <div className="main-element"></div> */}

            </header>

    )
}