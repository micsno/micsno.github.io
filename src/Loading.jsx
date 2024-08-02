import React, { useState, useEffect } from 'react';
import './Loading.scss';

const Loading = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [onLoaded]);

  return (
    <div className="loading">
      <div className="loading-text">
        <span className="loading-text-words">L</span>
        <span className="loading-text-words">O</span>
        <span className="loading-text-words">A</span>
        <span className="loading-text-words">D</span>
        <span className="loading-text-words">I</span>
        <span className="loading-text-words">N</span>
        <span className="loading-text-words">G</span>
      </div>
    </div>
  );
};

export default Loading;
