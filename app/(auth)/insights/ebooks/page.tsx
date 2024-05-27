import React, { useState } from 'react';
import ResourcesCard from '@/components/pages/resourcesCard';
import Ebook1 from './ebook-how-to-make-data-security-policy/page';
import Ebook2 from './ebook-implementing-principles-least-privilege-cybersecurity/page';
import Ebook3 from './ebook-common-sense-collaborative-approach-to-information-and-cyber-security/page';



export const metadata = {
  title: 'eBooks | ABLUVA',
  description: 'Discover ABLUVA\'s eBooks – a treasure trove of insights into modern data security. Stay informed, stay secure. Dive in now!',
};

export default function Ebooks() {
  return (
    <>
      <Ebook3/>
      <Ebook2/>
      <Ebook1/>
    </>
  );
}

