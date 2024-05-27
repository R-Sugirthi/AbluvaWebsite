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

function Blogs({ tag1, tag2, tag3, tag4, section, date, link, description }: CardProps) {
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
export default function BlogsPage() {
  return (
    <section className='mt-30 px-4 md:px-52 py-20'>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
          <Blogs
            tag1="AI"
            tag2="ML"
            tag3="IDS"
            tag4="Datasets"
            section="Blog"
            description="Key Datasets for Anomalous Intrusion Detection Systems in 2024"
            date="16 Feb 2024"
            link="/insights/blogs/key-datasets-anomalous-intrusion-detection-systems-2024"
          />      
          <Blogs
            tag1="Intrusion Detection"
            tag2="AI"
            tag3="Security"
            section="Blog"
            description="Synthetic Datasets in ML-Based Intrusion Detection"
            date="12 Jan 2024"
            link="/insights/blogs/synthetic-datasets-ml-based-intrusion-detection"
          />
          <Blogs
            tag1="Security"
            tag2="Compliance"
            section="Blog"
            description="Changing Paradigms in Data Security"
            date="14 Dec 2023"
            link="/insights/blogs/changing-paradigms-data-security"
          />
          <Blogs
            tag1="Access"
            tag2="Privacy"
            tag3="Governance"
            section="Blog"
            description="Selecting Right Data Protection Technologies"
            date="10 Dec 2023"
            link="/insights/blogs/selecting-right-data-protection-technologies"
          />
          <Blogs
            tag1="Security"
            tag2="Access"
            section="Blog"
            description="A Comprehensive Guide to Cloud Security"
            date="03 Dec 2023"
            link="/insights/blogs/comprehensive-guide-cloud-security"
          />
          <Blogs
            tag1="Access"
            tag2="Privacy"
            tag3="Governance"
            section="Blog"
            description="Understanding Security Posture: Strengthening Your Cybersecurity Defences"
            date="28 Nov 2023"
            link="/insights/blogs/understanding-security-posture"
          />
        </div>
      </div>
    </section>
  );
  }
