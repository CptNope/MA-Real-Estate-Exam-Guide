
import React, { useState } from 'react';
import { Chapter } from '../types';
import { XIcon, BookIcon, BrainIcon, CalculatorIcon, SearchIcon, DictionaryIcon, ToggleLeftIcon, ToggleRightIcon } from './Icons';
import { useSettings } from '../contexts/SettingsContext';

interface SidebarProps {
  chapters: Chapter[];
  activeChapterId: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  chapters, 
  activeChapterId, 
  isOpen, 
  onClose, 
  onSelectChapter 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isVocabEnabled, toggleVocab } = useSettings();

  // Filter logic
  const filteredChapters = chapters.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const guideChapters = filteredChapters.filter(c => c.type === 'guide');
  const practiceChapters = filteredChapters.filter(c => c.type === 'quiz' || c.type === 'flashcards');
  const toolChapters = filteredChapters.filter(c => c.type === 'calculator' || c.type === 'market');
  const referenceChapters = filteredChapters.filter(c => c.type === 'glossary');

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-72 
          bg-slate-900 border-r border-slate-800 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <BookIcon size={18} />
            </div>
            <h1 className="font-bold text-slate-100 tracking-tight">Exam Prep</h1>
          </div>
          <button 
            onClick={onClose} 
            className="lg:hidden text-slate-400 hover:text-white"
            aria-label="Close sidebar"
          >
            <XIcon size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-4 pt-4 pb-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text"
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          
          {/* Empty State */}
          {filteredChapters.length === 0 && (
            <div className="text-center text-slate-500 text-sm py-8">
              No modules found for "{searchTerm}"
            </div>
          )}

          {/* Reference Section (Glossary) */}
          {referenceChapters.length > 0 && (
            <div>
              <div className="px-3 mb-2 text-xs font-bold text-pink-500 uppercase tracking-wider flex items-center space-x-2">
                 <DictionaryIcon size={12} />
                 <span>Reference</span>
              </div>
              <div className="space-y-1">
                {referenceChapters.map((chapter) => {
                  const isActive = activeChapterId === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        onSelectChapter(chapter.id);
                        onClose();
                      }}
                      className={`
                        w-full text-left flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                        group
                        ${isActive 
                          ? 'bg-slate-800 text-pink-400' 
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-pink-200'
                        }
                      `}
                    >
                      <span className={`opacity-80 ${isActive ? 'text-pink-400' : 'text-slate-500 group-hover:text-pink-400'}`}>
                        {chapter.icon}
                      </span>
                      <span className="block font-medium text-sm truncate">{chapter.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Study Guide Section */}
          {guideChapters.length > 0 && (
            <div>
              <div className="px-3 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>Course Materials</span>
              </div>
              <div className="space-y-1">
                {guideChapters.map((chapter) => {
                  const isActive = activeChapterId === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        onSelectChapter(chapter.id);
                        onClose();
                      }}
                      className={`
                        w-full text-left flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                        group
                        ${isActive 
                          ? 'bg-slate-800 text-blue-400' 
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                        }
                      `}
                    >
                      <span className={`opacity-80 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'}`}>
                        {chapter.icon}
                      </span>
                      <span className="block font-medium text-sm truncate">{chapter.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Separator */}
          {guideChapters.length > 0 && practiceChapters.length > 0 && (
             <div className="h-px bg-slate-800 mx-3"></div>
          )}

          {/* Practice Section */}
          {practiceChapters.length > 0 && (
            <div>
              <div className="px-3 mb-2 text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center space-x-2">
                 <BrainIcon size={12} />
                 <span>Practice Center</span>
              </div>
              <div className="space-y-2">
                {practiceChapters.map((chapter) => {
                  const isActive = activeChapterId === chapter.id;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        onSelectChapter(chapter.id);
                        onClose();
                      }}
                      className={`
                        w-full text-left flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 border
                        group
                        ${isActive 
                          ? 'bg-blue-900/20 border-blue-500/50 text-blue-200 shadow-lg shadow-blue-900/10' 
                          : 'bg-slate-800/30 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700 hover:text-white'
                        }
                      `}
                    >
                      <div className={`
                        p-2 rounded-lg transition-colors
                        ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300'}
                      `}>
                        {chapter.icon}
                      </div>
                      <div>
                        <span className="block font-bold text-sm">{chapter.title}</span>
                        <span className="block text-xs opacity-60 mt-0.5">
                          {chapter.type === 'quiz' ? 'Quiz Mode' : 'Flashcards'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tools Section */}
          {toolChapters.length > 0 && (
            <div>
               <div className="px-3 mb-2 mt-2 text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center space-x-2">
                  <CalculatorIcon size={12} />
                  <span>Tools & Resources</span>
               </div>
               <div className="space-y-1">
                  {toolChapters.map((chapter) => {
                    const isActive = activeChapterId === chapter.id;
                    return (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          onSelectChapter(chapter.id);
                          onClose();
                        }}
                        className={`
                          w-full text-left flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                          group
                          ${isActive 
                            ? 'bg-slate-800 text-emerald-400' 
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-emerald-200'
                          }
                        `}
                      >
                         <span className={`opacity-80 ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'}`}>
                          {chapter.icon}
                        </span>
                        <span className="block font-medium text-sm truncate">{chapter.title}</span>
                      </button>
                    );
                  })}
               </div>
            </div>
          )}

        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          {/* Vocab Toggle */}
          <div className="flex items-center justify-between mb-4">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vocab Highlights</span>
             <button 
               onClick={toggleVocab}
               className={`flex items-center transition-colors ${isVocabEnabled ? 'text-yellow-400' : 'text-slate-600'}`}
               aria-label={isVocabEnabled ? "Disable Vocabulary Highlights" : "Enable Vocabulary Highlights"}
             >
               {isVocabEnabled ? (
                  <ToggleRightIcon size={28} />
               ) : (
                  <ToggleLeftIcon size={28} />
               )}
             </button>
          </div>

          <div className="text-xs text-slate-500 flex justify-between items-center">
            <span>v2025.1.5</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
