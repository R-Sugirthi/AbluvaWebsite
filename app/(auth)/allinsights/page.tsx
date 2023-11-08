import ProductCard from '@/components/pages/productcard';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Abluva-Product',
  description: 'Page description',
};

export default function Product() {
  return (
    <>
      <Header />
      <div className='bg-[#f2f3f5] px-4 sm:px-20 py-8'>
        <div className='container mx-auto flex flex-col sm:flex-row items-center'>
          <div className='w-full sm:w-1/2'>
            <img
              src='https://img.freepik.com/premium-photo/portrait-capturing-student_931878-178337.jpg?w=360'
              alt='Product Image'
              className='w-full rounded-2xl'
            />
          </div>
          <div className='w-full sm:w-1/2 mt-4 sm:mt-0 sm:px-10 text-black'>
            <div className='py-4'>
              <div className='text-black pb-4 font-semibold'>
                kdcjshc . <a href='' className='allsightlink'>
                  consectetur
                </a>
              </div>
            </div>
            <p className='text-2xl sm:text-4xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className='mt-2 sm:mt-4 text-base sm:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              molestiae?
            </p>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 h-20'>
        <p className='text-black pt-5 pl-4 sm:pl-20 text-2xl'>All Insights</p>
      </div>
      <ProductCard />
      <Footer />
    </>
  );
}
