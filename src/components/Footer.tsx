import Link from "next/link";
import { Container } from "@mui/material";


export default function Footer() {
    return (
        <footer className="mt-4 px-3 py-2 bg-[#f1f1f1]">
            <Container className="text-center">

                &copy; 2024 Caked Up Cafe

            <div className="flex justify-center mt-4">
                <Link href="https://www.facebook.com/Cakedupcafe/" passHref>
                <div className="mx-2 hover-pink">Facebook</div>
                </Link>
                <Link href="https://www.instagram.com/cakedupcafe/" passHref>
                <div className="mx-2 hover-pink">Instagram</div>
                </Link>
                <Link href="https://cakedup-cafe.square.site/" passHref>
                <div className="mx-2 hover-pink">Order Now</div>
                </Link>
            </div>
            </Container>
      </footer>
    )
}