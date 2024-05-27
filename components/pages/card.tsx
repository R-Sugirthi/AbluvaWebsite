import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
  section: string;
  date: string;
  link: string;
  description: string;
}

const patterns = ['pattern-1', 'pattern-2', 'pattern-3', 'pattern-4', 'pattern-5'];

function shuffleArray(array: string[]) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Card({ tag1, tag2, tag3, tag4, section, date, link, description }: CardProps) {
  const shuffledPatterns = shuffleArray(patterns);
  const pattern = shuffledPatterns[0]; 

  return (
    <div>
      <div className={`image-container rounded-2xl ${pattern}`} style={{ height: '250px', width: '100%' }}>
        <div className='image-overlay rounded-2xl'></div>
      </div>
      <div className="py-4">
        <div className='flex text-xs font-semibold'>
          <div className="text-gray-400">{section}<span className='ml-2 text-gray-500 square'>&#9642;</span> </div>
          <div className='ml-2'>
            {tag1 && <span className='tag'>{tag1}</span>}
            {tag2 && <span className='mx-2 tag'>{tag2}</span>}
            {tag3 && <span className='tag'>{tag3}</span>}
            {tag4 && <span className='mx-2 tag'>{tag4}</span>}
          </div>
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

export default function BlogPage() {
  return (
    <section className='mt-30 px-5 md:px-52 py-20'>
      <div>
        <div className='flex flex-col md:flex-row justify-between md:items-center py-5'>
          <div className='text-3xl founder'>Latest</div>
          <div><Link href="/insights" className='text-sm boldfont '>All insights <span className='text-xs'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        <Card
            tag1="Cybersecurity"
            tag2="Best Practices"
            section="eBook"
            description="A Common Sense & Collaborative Approach to Information and Cyber Security"
            date="18 Mar 2024"
            link="/insights/ebooks/ebook-common-sense-collaborative-approach-to-information-and-cyber-security"
          />
          <Card
            tag1="AI"
            tag2="ML"
            tag3="IDS"
            tag4="Datasets"
            section="Blog"
            description="Key Datasets for Anomalous Intrusion Detection Systems in 2024"
            date="16 Feb 2024"
            link="/insights/blogs/key-datasets-anomalous-intrusion-detection-systems-2024"
          />
        
        </div>
      </div>
    </section>
  );
}
