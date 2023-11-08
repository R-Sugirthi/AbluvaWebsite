
import ProductCard from '@/components/pages/productcard'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Link from 'next/link'

export const metadata = {
  title: 'Abluva-Product',
  description: 'Page description',
}

export default function Product() {
  return (
    <>
      <Header />
      <div className='bg-black p-6 md:p-10 lg:p-20'>
  <div className='container mx-auto py-4 md:py-8 flex flex-col md:flex-row items-center'>
   
    <div className='w-full md:w-1/2 text-white md:pr-6'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p className='text-sm md:text-base lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestiae provident nisi nemo mollitia aperiam quod sed esse dolor, voluptates sit inventore nihil ex quis nostrum exercitationem necessitatibus neque repellendus?</p>
    </div>
    <div className='w-full md:w-1/2 mt-4 md:mt-0'>
      <img src='https://img.freepik.com/free-photo/neon-c-colorolor-ribbons-illustration_211682-200.jpg?w=900&t=st=1698309712~exp=1698310312~hmac=6e787a3170ec5edd8a692d0e4bc7d40031d5ced8f1dbf692428b01912083fdb3' alt='Product Image' className='w-full rounded-lg' />
    </div>
  </div>
</div>

      <ProductCard/>
      <Footer/>
    </>
  )
}
