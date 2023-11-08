export const metadata = {
  title: 'Abluva',
  description: 'Page description',
}

import LandingPage from '@/components/pages/LandingPage'
import Layers from '@/components/pages/second page/layers'
import Parallax from '@/components/pages/parallax/parallax'
import TopHeader from '@/components/Layout/TopHeader'
import Header from '@/components/Layout/Header'
import Card from '@/components/pages/card'
import MobileHeader from '@/components/Layout/MobileMenu'





export default function Home() {
  return (
    <>
    <TopHeader/>
    <Header/>
    <LandingPage/>
    <Layers/>
    <Card/>
    <Parallax/>
    </>
  )
}
