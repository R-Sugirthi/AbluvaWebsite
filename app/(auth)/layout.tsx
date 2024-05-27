
import Header from "@/components/Layout/Header";
import "../(default)/globals.css";
import Footer from "@/components/Layout/Footer";
import HexagonContainer from "@/components/Layout/hexagon";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
    <main className="grow">
      <Header/>
      {children}
      <HexagonContainer/>
      <Footer/>
    </main>
    </>
  )
}
