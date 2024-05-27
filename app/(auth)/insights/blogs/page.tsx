
import React, { useState } from 'react';
import BlogPage from '@/components/pages/blogs';
import Link from 'next/link';
import LatestInsights from '@/components/widgets/latestInsight';

export const metadata = {
  title: 'Blogs | ABLUVA',
  description:'Discover ABLUVA\'s latest blogs covering cutting-edge topics',
};

export default function Blogs() {
  return (
    <>
     <LatestInsights
     latest="Latest insights"
       category='Blog'
        blogLink='/insights/blogs/key-datasets-anomalous-intrusion-detection-systems-2024'
        blogTitle='Key Datasets for Anomalous Intrusion Detection Systems in 2024'
        blogDate='16 Feb 2024'
        tags={['AI', 'ML', 'IDS', 'Datasets']}
      />
      <BlogPage/>
    
      
    </>
  );
}
