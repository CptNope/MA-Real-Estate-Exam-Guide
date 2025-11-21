
import React, { useState } from 'react';
import { GlossaryModule } from '../types';
import { DictionaryIcon, SearchIcon } from './Icons';

const GlossaryView: React.FC<{ module: GlossaryModule }> = ({ module }) => {
  const [filter, setFilter] = useState('');
  
  // Group terms by first letter
  const sortedTerms = [...module.terms].sort((a, b) => a.term.localeCompare(b.term));
  
  const filteredTerms = sortedTerms.filter(t => 
    t.term.toLowerCase().includes(filter.toLowerCase()) || 
    t.definition.toLowerCase().includes(filter.toLowerCase())
  );

  const groupedTerms = filteredTerms.reduce((groups, term) => {
    const letter = term.term[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(term);
    return groups;
  }, {} as Record<string, typeof module.terms>);

  const letters = Object.keys(groupedTerms).sort();

  const scrollToLetter = (letter: string) => {
    const el = document.getElementById(`letter-${letter}`);
    if (el) {
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-8 pb-20 px-4 md:px-8">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-pink-500/10 text-pink-400 rounded-lg">
            <DictionaryIcon size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-50">{module.title}</h1>
        </div>
        <p className="text-slate-400 mb-6">{module.description}</p>

        {/* Local Search */}
        <div className="relative max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text"
            placeholder="Filter terms..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-pink-500 outline-none"
          />
        </div>
      </div>

      {/* Alpha Navigation (Sticky) */}
      <div className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 py-3 mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 px-1">
          {letters.map(letter => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-colors font-bold text-sm"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Terms List */}
      <div className="space-y-10">
        {letters.length === 0 && (
          <div className="text-center text-slate-500 py-10">
            No definitions found for "{filter}"
          </div>
        )}

        {letters.map(letter => (
          <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-pink-500 mb-4 border-b border-slate-800 pb-2">{letter}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {groupedTerms[letter].map(term => (
                <div key={term.term} className="bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-slate-700 transition-colors">
                  <h3 className="font-bold text-slate-100 mb-2">{term.term}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryView;
