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
    "title": "Adequate Level Of Protection | Abluva Glossary",
    "description": "Expand your Knowledge with our Glossary"
  };
  
  const mainTerm = {
    "title": "Adequate Level Of Protection",
    "description": "Under the GDPR, 'Adequate Level of Protection' refers to a rigorous standard for data protection upheld by a third-party country or organization. This standard, evaluated by the European Commission, encompasses robust data protection laws, stringent security measures, and a commitment to human rights. This ensures the secure cross-border transfer of personal data without compromising its integrity or confidentiality."
  };
  
  const relatedTerms = [
    {
      "title": "Attack Surface",
      "description": "The attack surface refers to the collection of potential entry points and vulnerabilities within a system that could be exploited by an adversary to gain unauthorized access or cause damage. It encompasses the various characteristics, components, and interfaces of an information system that provide opportunities for attackers to probe, infiltrate, or maintain a presence within the system."
    },
    {
      "title": "Authentication",
      "description": "Authentication refers to the process of verifying the identity of a user or system. It ensures that the entity attempting to access a system or application is who it claims to be. Authentication mechanisms include passwords, biometric scans, security tokens, and two-factor authentication (2FA)."
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
