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
    "title": "Behaviour Monitoring | Abluva Glossary",
    "description": "Expand your Knowledge with our Glossary"
  };
  
  const mainTerm = {
    "title": "Behaviour Monitoring",
    "description": "Behavior monitoring entails the systematic recording of events and activities within a system and among its users. These recorded events are then assessed against security policies and behavioral norms to ascertain compliance and detect any deviations. Behavioral monitoring encompasses various practices such as trend tracking, threshold setting, and response definition. Trend tracking allows for the identification of patterns over time, highlighting instances such as escalating errors necessitating technical support, abnormal load levels indicative of malicious activity, or increased production work signifying a need for capacity expansion. Thresholds establish benchfont s for acceptable levels of activity or events, triggering responses when surpassed, while events below the threshold are recorded for reference but do not prompt immediate action. Responses to detected anomalies may involve conflict resolution, violation handling, downtime prevention, or capability enhancement."
  };
  
  const relatedTerms = [
    {
      "title": "Blackhat",
      "description": "A black hat hacker is an individual who engages in unauthorized activities with the intent to exploit computer systems, networks, or software for personal gain, financial profit, or malicious purposes. Unlike ethical hackers or white hat hackers, who work to identify and remediate security vulnerabilities, black hat hackers use their skills to compromise systems for illegal activities such as stealing sensitive information, disrupting services, spreading malware, or committing fraud."
    },
    {
      "title": "Block Cipher",
      "description": "A block cipher is a symmetric encryption algorithm that operates by dividing data into fixed-length blocks before performing encryption or decryption on each block individually. This division of data into blocks allows the algorithm to process data of any size, making it versatile for encrypting varying amounts of information."
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
