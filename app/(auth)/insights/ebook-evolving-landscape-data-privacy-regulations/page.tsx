import Link from 'next/link';


export const metadata = {
  title: 'eBook | ABLUVA',
  description: 'Explore ABLUVA\'s eBook on \'The Evolving Landscape of Data Privacy Regulations.\' Dive into the intricate world of privacy and compliance regulations to navigate the complexities. ',
};


export default function Product() {
  const pdfLink = "/The Evolving Landscape of Data Privacy Regulations.pdf"; 

  return (
    <>
      
      <div className="bg-black py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
        
        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 text-white">
            <div className="py-4">
              <div className="text-[#d9dbe2] pb-2 font-semibold text-sm">Ebook . <span className="link">Privacy</span> <span className="link">Compliance</span></div>
            </div>
            <p className="text-4xl md:text-5xl founder text-gradient">The Evolving Landscape of Data Privacy Regulations</p>
            <p className="text-xl md:text-2xl founder pt-2">Complex web of data privacy regulations has emerged, designed to safeguard the interests of individuals and organizations alike.</p>
            <p className="mark pt-7 text-sm text-[#d9dbe2]">Abluva . 14 Dec 2023</p>

            {/* View and Download Links */}
            <p className="text-2xl text-violet-300 mt-4 founder">
              <Link href={pdfLink} target="_blank" rel="noopener noreferrer" className='pr-5 hover:text-white'>View PDF</Link> <span className='text-violet-500'>|</span>
              <Link href={pdfLink} download target="_blank" rel="noopener noreferrer " className='px-5 hover:text-white'>Download PDF</Link>
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}
