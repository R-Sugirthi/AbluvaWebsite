"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LatestInsightsProps {
  blogLink: string;
  blogTitle: string;
  blogDate: string;
  tags: string[];
  category: string;
  latest: string;
}

function shuffleArray(array: string[]) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const LatestInsights = ({ blogLink, blogTitle, blogDate, tags, category, latest }: LatestInsightsProps) => {
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
    <div className='bg-dark md:px-52 px-5 py-20'>
      <div>
        <p className='text-4xl primary-color-g founder'><span className='primary-color-g'>{latest}</span></p>
      </div>
      <div className='container mx-auto flex flex-col sm:flex-row items-center py-20 grid md:grid-cols-2 grid-cols-1 md:space-x-8'>
        <div className={`image-container rounded-lg ${pattern}`} style={{ background: pattern, height: '300px', width: '100%' }}>
          <div className='image-overlay rounded-lg'></div>
        </div>
        <div className='w-full text-white md:pt-0 pt-10'>
          <div className="text-gray-400 text-xs font-semibold">{category}<span className='ml-2 text-gray-500 square'>&#9642;</span>{tags.map((tag, index) => <span key={index} className='tag ml-2'>{tag}</span>)}</div>
          <p className='text-2xl sm:text-3xl font gradient-text mt-5'><Link href={blogLink}>{blogTitle}</Link></p>
          <p className='py-7 text-xs text-gray-400 font'>{blogDate}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
