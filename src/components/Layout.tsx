import { Container } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Header/>
            <Container maxWidth="sm" className="min-w-full mt-32 p-0 bg-gray-50">
                {children}
            </Container>
            <Footer/>
        </main>
    )
}