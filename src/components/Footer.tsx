import Link from "next/link";
import { Container } from "@mui/material";


export default function Footer() {
    return (
        <footer className="mt-4 px-3  py-8 bg-white">

            <div className="w-full header-bg rotate-180 -translate-y-16">
                <div className="w-full h-12 scrolling-triangles"/>
            </div>
            <Container className="w-full text-center">

                    &copy; 2024 Caked Up Cafe

                <div className="flex justify-center mt-4">
                    {/* <Link href="https://www.facebook.com/Cakedupcafe/" passHref>
                    <div className="mx-2 hover-pink">Facebook</div>
                    </Link> */}
                    <Link href="https://www.instagram.com/cakedupcafe/" passHref>
                    <div className="mx-2 hover-pink">Instagram</div>
                    </Link>
                    <Link href="https://www.tiktok.com/@cakedupcafe" passHref>
                    <div className="mx-2 hover-pink">Tik-Tok</div>
                    </Link>
                    <Link href="https://cakedup-cafe.square.site/" passHref>
                    <div className="mx-2 hover-pink">Order Now</div>
                    </Link>
                </div>
            </Container>
      </footer>
    )
}