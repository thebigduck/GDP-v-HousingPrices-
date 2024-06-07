"use client";

import React, { useState, ReactNode } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 mt-4">
      <h3 
        className="section-heading text-left cursor-pointer flex items-center justify-between" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h3>
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
