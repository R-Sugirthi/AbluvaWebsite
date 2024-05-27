import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  imageSrc: string;
  tag1?: string; 
  tag2?: string;
  tag3?: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function Research({ imageSrc, tag1,tag2,tag3, section, date, link, description }: CardProps) {
  
  return (
    <div>
      <div className='image-container rounded-2xl'>
        <img
          className="img2 rounded-2xl"
          src={imageSrc}
          alt="latest researches"
        />
        <div className='image-overlay rounded-2xl'></div>
      </div>
      <div className="py-4">
      <div className='flex text-xs font-semibold'>
          <div className="text-gray-400">{section}<span className='ml-2 text-gray-500 square'>&#9642;</span> </div>
          {tag3 ? (
            <div className='ml-2'>
              <span className='tag'>{tag1}</span>
              {tag2 && <span className='mx-2 tag'>{tag2}</span>}
              {tag3 && <span className='tag'>{tag3}</span>}
            </div>
          ) : (
            <div className='ml-2'>
              {tag1 && <span className='tag'>{tag1}</span>}
              {tag2 && <span className='mx-2 tag'>{tag2}</span>}
            </div>
          )}
        </div>
      </div>
        <p className="text-2xl fonttext-white gradient-text py-5">
          <Link href={link}>{description}</Link>
        </p>
      <div>
        <span className="inline-block rounded-full text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <section className='mt-30 px-5 md:px-52 py-20'>
      <div>
        <div className='flex flex-col md:flex-row justify-between md:items-center py-5'>
          <div className='text-3xl founder'>Research</div>
          <div><Link href="/research" className='text-sm boldfont '>All Researches <span className='text-xs'> <FontAwesomeIcon icon={faAngleRight}/> </span></Link></div>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          <Research
            imageSrc="/images/pattern11.jpg"
            tag1="Data Security"
            section="Leaderboards"
            description="PaPS Ensemble leads the Zero Day Intrusion Tasks"
            date="02 Nov 2023"
            link="/research/leaderboards/#paps"
          />
          <Research
            imageSrc="/images/pattern9.jpg"
            tag1="Data Security"
            section="Research Papers"
            description="Take a Glimpse into our research, where ideas flourish and new horizons unfold."
            date="03 Nov 2023"
            link="/research/research-papers"
          />
        </div>
      </div>
    </section>
  );
}
