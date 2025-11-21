import React, { useState, useEffect } from 'react';
import { FlashcardModule } from '../types';
import { ChevronRightIcon, RefreshIcon } from './Icons';

interface FlashcardViewProps {
  module: FlashcardModule;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ module }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Reset when module changes
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [module.id]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % module.cards.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + module.cards.length) % module.cards.length);
    }, 200);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = module.cards[currentIndex];

  return (
    <div className="w-full max-w-3xl mx-auto pt-8 pb-20 px-4 md:px-8 flex flex-col items-center min-h-[calc(100vh-60px)]">
      
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-50 mb-2">{module.title}</h1>
        <p className="text-slate-400">{module.description}</p>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-xl perspective-1000 h-80 cursor-pointer group" onClick={handleFlip}>
        <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front */}
          <div className="absolute inset-0 backface-hidden w-full h-full bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-8 flex flex-col items-center justify-center text-center group-hover:border-blue-500/50 transition-colors">
            <span className="absolute top-6 right-6 text-xs font-bold text-slate-500 uppercase tracking-widest">Term</span>
            <h3 className="text-3xl font-bold text-slate-100">{currentCard.front}</h3>
            <span className="absolute bottom-6 text-xs text-slate-500">Click to flip</span>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden w-full h-full bg-slate-900 rounded-2xl shadow-xl border border-blue-900/50 p-8 flex flex-col items-center justify-center text-center rotate-y-180">
            <span className="absolute top-6 right-6 text-xs font-bold text-blue-500 uppercase tracking-widest">Definition</span>
            <p className="text-xl text-slate-200 leading-relaxed">{currentCard.back}</p>
            {currentCard.category && (
               <span className="absolute bottom-6 inline-block px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">{currentCard.category}</span>
            )}
          </div>

        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-8 mt-10">
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="p-4 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
          aria-label="Previous card"
        >
          <ChevronRightIcon className="rotate-180" size={24} />
        </button>
        
        <span className="font-mono text-slate-400">
          {currentIndex + 1} / {module.cards.length}
        </span>

        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="p-4 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
          aria-label="Next card"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>

      {/* Additional styles for 3D flip which might not be in default tailwind config without plugin */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

    </div>
  );
};

export default FlashcardView;