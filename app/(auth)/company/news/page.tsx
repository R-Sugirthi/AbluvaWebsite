import NewsPage from '@/components/pages/newscard';
import React from 'react';
import Link from 'next/link';
import LatestInsights from '@/components/widgets/latestInsight';
export const metadata = {
  title: 'News & Events | Abluva',
  description: 'Stay updated with the latest news and events from Abluva.',
};
export default function News() {

  return (
    <> 
    <LatestInsights
     latest="Latest News"
       category='Blog'
        blogLink='/company/news/abluva-initiates-aws-security-ug-apac'
        blogTitle='Abluva Initiates AWS Security User Group APAC'
        blogDate='04 Dec 2023'
        tags={['AWS', 'Security Community']}
      />
      <NewsPage />
    </>
  );
}