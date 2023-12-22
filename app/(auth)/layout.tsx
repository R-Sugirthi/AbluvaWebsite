import Head from 'next/head';
import Header from "@/components/Layout/Header";
import "../(default)/globals.css";
import Footer from "@/components/Layout/Footer";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main className="grow">
      <Header/>
      {children}
      <Footer/>
    </main>
    </>
  )
}
