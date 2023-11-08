'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'


import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
{/* 
        <PageIllustration /> */}
        {children}

      </main>

      <Footer />
    </>
  )
}
