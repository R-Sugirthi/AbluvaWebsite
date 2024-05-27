// DownArrowButton.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface DownArrowButtonProps {
  onClick?: () => void;
  id?: string;
}

const DownArrowButton: React.FC<DownArrowButtonProps> = ({ onClick, id }) => {
  const handleScrollDown = () => {
    const section = document.getElementById(id || '');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={onClick || handleScrollDown} className='down-arrow'>
      <div className="circle">
        <span><FontAwesomeIcon icon={faAngleDown} /></span>
      </div>
    </button>
  );
};

export default DownArrowButton;
