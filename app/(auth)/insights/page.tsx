import React, { useState } from 'react';
import Link from 'next/link';
import ResourcesCard from '@/components/pages/resourcesCard';
import LatestInsights from '@/components/widgets/latestInsight';


export const metadata = {
  title: 'Insights | ABLUVA',
  description: 'Explore the latest insights on data security at ABLUVA.',
};

export default function Insights() {
  return (
    <>
  <LatestInsights
      latest="Latest insights"
       category='ebook'
        blogLink='/insights/ebooks/ebook-common-sense-collaborative-approach-to-information-and-cyber-security'
        blogTitle='A Common Sense & Collaborative Approach to Information and Cyber Security'
        blogDate='18 Mar 2024'
        tags={['Cybersecurity', 'Best Practices']}
      />
      <ResourcesCard/>


    </>
  );
}
