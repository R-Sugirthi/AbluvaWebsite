
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-gray-800">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
