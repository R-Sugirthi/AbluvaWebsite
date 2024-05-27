"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface CardProps {
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function shuffleArray(array: string[]) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function News({ tag1, tag2, tag3, tag4, section, date, link, description }: CardProps) {
  const patterns = shuffleArray([
    'pattern-1',
    'pattern-2',
    'pattern-3',
    'pattern-4',
    'pattern-5',
    'pattern-6',
    'pattern-7',
    'pattern-8',
    'pattern-9',
  ]);

  const [patternIndex, setPatternIndex] = useState(0);

  useEffect(() => {
    setPatternIndex((prevIndex) => (prevIndex + 1) % patterns.length);
  }, []);

  const pattern = patterns[patternIndex];

  return (
    <div className='py-5'>
      <div
        className={`image-container rounded-lg ${pattern}`}
        style={{
          background: pattern,
          height:"200px",
          width:"100%",
        }}
      >
        <div className='image-overlay rounded-lg'></div>
      </div>
      <div className="py-4">
        <div className='flex text-xs font-semibold'>
          <div className="text-gray-400">{section}<span className='ml-2 text-gray-500 square'>&#9642;</span> </div>
          <div className='ml-2'>
            {tag1 && <span className='tag'>{tag1}</span>}
            {tag2 && <span className=' mx-2 tag'>{tag2}</span>}
            {tag3 && <span className=' tag'>{tag3}</span>}
            {tag4 && <span className='mx-2 tag'>{tag4}</span>}
          </div>
        </div>
      </div>
      <p className="text-xl fonttext-white gradient-text py-5">
        <Link href={link}>{description}</Link>
      </p>
      <div>
        <span className="inline-block rounded-full text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <section className='mt-30 px-5 md:px-52 py-20'>
      <div>
      {/* <div><p className='text-gray-600 text-xl font-semibold pb-10'>All News</p></div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center  mx-auto ">
          <News
            tag1="AWS"
            tag2="Security Community"
            section="News"
            description="Abluva Initiates AWS Security User Group APAC"
            date="04 Dec 2023"
            link="/company/news/abluva-initiates-aws-security-ug-apac"
          /> 
           <News
            tag1="ISO27001"
            tag2="Information
            Security"
            section="News"
            description="Abluva Attains ISO 27001 Certification"
            date="15 Oct 2023"
            link="/company/news/abluva-attains-iso-27001-certification"
          /> 
        </div>
      </div>
    </section>
  );
}
