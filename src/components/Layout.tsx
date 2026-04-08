import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
    <>
        <Header/>
            <main className="min-w-full m-0 p-0 bg-transparent">
                {children}
            </main>
        <Footer/>
    </>
    )
}