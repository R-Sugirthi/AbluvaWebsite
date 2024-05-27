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
    "title": "Attack Path | Abluva Glossary",
    "description": "Expand your Knowledge with our Glossary"
  };
  
  const mainTerm = {
    "title": "Attack Path",
    "description": "An attack path refers to the sequence of steps that an adversary follows or could potentially follow in planning, preparing for, and executing an attack. This path outlines the various stages and actions taken by the attacker to achieve their objectives, which may include identifying vulnerabilities, exploiting weaknesses, gaining access to systems or networks, and ultimately carrying out malicious activities. Understanding and analyzing attack paths is essential for cybersecurity professionals to anticipate and mitigate potential threats effectively, as it enables them to identify critical points of vulnerability and implement appropriate countermeasures to defend against attacks."
  };
  
  const relatedTerms = [
    {
      "title": "Attack Surface",
      "description": "The attack surface refers to the collection of potential entry points and vulnerabilities within a system that could be exploited by an adversary to gain unauthorized access or cause damage. It encompasses the various characteristics, components, and interfaces of an information system that provide opportunities for attackers to probe, infiltrate, or maintain a presence within the system. This includes aspects such as network interfaces, software applications, protocols, hardware devices, and configurations that may be susceptible to exploitation. Understanding and managing the attack surface is critical for effectively mitigating risks and strengthening the overall security posture of an information system. By identifying and minimizing vulnerabilities within the attack surface, organizations can reduce the likelihood and impact of successful cyberattacks."
    },
    {
      "title": "APT",
      "description": "APT (Advanced Persistent Threat) denotes a security breach wherein an attacker infiltrates a system, securing access or control over it for an extended duration, often without the system owner's detection. Typically, an APT capitalizes on various undisclosed vulnerabilities or zero-day attacks, enabling the attacker to sustain access to the target, notwithstanding attempts to block certain attack vectors."
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
