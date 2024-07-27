import { Container } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Header/>
            <Container fixed className="min-w-full m-0 p-0 bg-gray-50">
                {children}
            </Container>
            <Footer/>
        </main>
    )
}