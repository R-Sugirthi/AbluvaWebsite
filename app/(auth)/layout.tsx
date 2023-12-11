import Header from "@/components/Layout/Header";
import "../(default)/globals.css";
import Footer from "@/components/Layout/Footer";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}
