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
    "title": "Opt Out | Abluva Glossary",
    "description": "Expand your knowledge with our glossary term for opt-out."
  };
  
  const mainTerm = {
    "title": "Opt Out",
    "description": "An individual's choice to stop receiving information or sharing data with an organization, either explicitly requested or implied through inaction (e.g., not unchecking a pre-checked box)."
  };
  
  const relatedTerms = [
    {
      "title": "Opt In",
      "description": "An active action taken by an individual to consent to sharing their information with third parties, like checking a box indicating willingness."
    },
    {
      "title": "OWASP",
      "description": "The Open Web Application Security Project (OWASP) is a prominent online community dedicated to enhancing understanding of web technologies and vulnerabilities."
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
