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
    "title": "ISO 27001 | Abluva Glossary",
    "description": "Expand your knowledge with our glossary term for ISO 27001."
  };
  
  const mainTerm = {
    "title": "ISO 27001",
    "description": "This international standard, first published in 2005 and revised in 2013, outlines best practices for managing information security. It helps organizations establish, implement, maintain, and optimize information security management systems to enhance data security."
  };
  
  const relatedTerms = [
    {
      "title": "IAM",
      "description": "Identity and Access Management (IAM) encompasses a framework comprising policies, processes, and technologies utilized by organizations to oversee digital identities and regulate access to their information systems and assets. It stands as a vital component within cybersecurity and data safeguarding, guaranteeing that authorized individuals possess suitable access to designated resources, while thwarting unauthorized entry attempts. IAM systems serve as pivotal tools in upholding an organization’s confidentiality, integrity, and availability of sensitive data. By defining and enforcing access controls, IAM aids in averting data breaches, insider threats, and unauthorized access endeavors, thereby fortifying the security posture of the organization."
    },
    {
      "title": "Information Security Policy",
      "description": "A comprehensive framework outlining directives, rules, regulations, and best practices for managing and safeguarding sensitive information within an organization."
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
