
import Link from 'next/link';

interface EbookProps {
  title: string;
  description: string;
  pdfLink: string;
  tags: string[];
  date: string;
}

const EbookTemplate: React.FC<EbookProps> = ({ title, description, pdfLink, tags, date }) => {
  return (
    <div className="bg-dark py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
      <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-4/5 text-white">
          <div>
            <div className="text-gray-400 text-xs font-semibold">
              eBook<span className='ml-2 text-gray-500 square'>&#9642;</span>
              {tags && tags.map(tag => <span key={tag} className='tag ml-2'>{tag}</span>)}
            </div>
          </div>
          <p className="insightTitle font primary-color-g pt-2">{title}</p>
          <p className="text-xl md:text-2xl font pt-2 text-gray-300">{description}</p>
          <p className="font pt-7 text-xs text-gray-400">{date}</p>
          <div className='mt-10'>
            <div className='card-bg  md:w-1/2 flex items-center space-x-4 p-5 rounded-lg border border-gray-800'>
              <div><img src="/images/pdf.png" alt="PDF" /></div>
              <div><p className='font text-sm text-gray-100'>{title}<br /><span className='text-gray-400 font text-xs'>PDF</span></p></div>
              <div>
                <Link
                  href={pdfLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className='tag text-md font-semibold h-5'
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EbookTemplate;
