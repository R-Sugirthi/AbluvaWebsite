"use client"

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../glossary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const GlossaryPage: React.FC = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopyText = () => {
    const textToCopy = mainTerm.description;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  const glossaryMeta = {
    "title": "Policy Management | Abluva Glossary",
    "description": "Expand your knowledge with our glossary term for Policy Management."
  };
  
  const mainTerm = {
    "title": "Policy Management",
    "description": "Policy management is the process of developing, communicating, and maintaining policies and procedures within an organization. This encompasses various steps, including the creation of policies to outline rules, guidelines, and expectations for employee behavior and organizational practices. Additionally, policy management involves ongoing maintenance and updates to ensure that policies remain current, aligned with regulatory requirements, and reflective of evolving organizational needs and priorities."
  };
  const relatedTerms = [
    {
      "title": "PHI",
      "description": "Protected health information (PHI) is a specific category of sensitive data linked to an individual's health and healthcare. Subject to strict regulations to protect patient confidentiality, PHI is crucial for delivering healthcare, processing insurance claims, and conducting medical research."
    },
    {
      "title": "Sensitive Data",
      "description": "Sensitive data refers to information protected due to legal, ethical, privacy, financial, or other concerns. Examples include health data, personal information, trade secrets, etc."
    }
  ];
  
  
  const mainRelatedTerms = relatedTerms.filter(term => term.title !== mainTerm.title);

  return (
    <>
      <Helmet>
        <title>{glossaryMeta.title}</title>
        <meta name="description" content={glossaryMeta.description} />
      </Helmet>
      <div className='glossary__page'>
        <div className='navToGlossary'>
          <a href="/resources/glossary" className='glossary__backLink'>Glossary</a>
          <p><FontAwesomeIcon icon={faAngleRight} className="right__angle" /></p>
          <p className='title__backLink'>{mainTerm.title}</p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 '>
          <div className="md:col-span-3 main__term">
            <div>
              <h1 className='glossary__title'><img src="/icons/words.png" className='glossary__img' /><span className='glossary__word'>{mainTerm.title}</span></h1>
              <p className='glossary__description'>{mainTerm.description}</p>
              <div>
                <button onClick={handleCopyText} className='glossary__copyButton'>
                  {isCopied ? 'Copied' : 'Copy text'}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='py-5 glossary__relatedTerms'>
              <p>Related Terms</p>
            </div>
            {mainRelatedTerms.map((term, index) => {
              const href = `/resources/glossary/${term.title.replace(/\s+/g, '-').toLowerCase()}`;
              return (
                <div key={index} className='pt-12'>
                  <h1 className='relatedTerm__title'>{term.title}</h1>
                  <p className='relatedTerm__description'>{term.description.substring(0, 100)}...</p>
                                    <a href={href}>
                    <img src="/icons/link3.png" className="h-5 learnMoreLink" alt="link"/>
                  </a>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
};

export default GlossaryPage;
