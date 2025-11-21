
import React, { useState, useRef, useEffect } from 'react';
import { referenceModules } from '../data/modules/reference';

interface TermProps {
  children: string;
  className?: string;
}

const Term: React.FC<TermProps> = ({ children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Find definition
  // We assume the first module in referenceModules is the main glossary
  const glossary = referenceModules.find(m => m.id === 'glossary-main');
  const entry = glossary?.terms.find(
    t => t.term.toLowerCase() === children.toLowerCase() || 
         t.term.toLowerCase() === children.toLowerCase().slice(0, -1) // Handle plurals simply
  );

  const definition = entry?.definition || "Definition not found.";

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current && 
        !triggerRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Accessibility ID
  const tooltipId = `tooltip-${children.replace(/\s+/g, '-').toLowerCase()}`;

  if (!entry) {
      // Fallback if word isn't in glossary - render normally but maybe warn in console
      return <span>{children}</span>;
  }

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-describedby={isOpen ? tooltipId : undefined}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`
          cursor-help 
          border-b-2 border-dotted border-yellow-500 
          text-yellow-200 hover:text-yellow-400 hover:border-yellow-400 
          transition-colors font-medium
          ${className}
        `}
      >
        {children}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 z-50 animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="bg-slate-800 border border-slate-600 text-slate-200 text-sm p-3 rounded-lg shadow-xl relative">
            <strong className="block text-yellow-400 border-b border-slate-700 pb-1 mb-1">
                {entry.term}
            </strong>
            {definition}
            
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      )}
    </span>
  );
};

export default Term;
