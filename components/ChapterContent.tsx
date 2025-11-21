import React, { useState, useEffect, useRef } from 'react';
import { GuideModule, TocItem } from '../types';
import TableOfContents from './TableOfContents';
import GuideSection from './GuideSection';
import { ChevronUpIcon } from './Icons';

interface ChapterContentProps {
  chapter: GuideModule;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ chapter }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRefs = useRef<Map<string, IntersectionObserverEntry>>(new Map());
  
  // Construct TOC items from chapter sections
  const tocItems: TocItem[] = chapter.sections.map(s => ({
    id: s.id,
    label: s.title
  }));

  // Reset scroll when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setActiveSectionId('');
    observerRefs.current.clear();
  }, [chapter.id]);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        observerRefs.current.set(entry.target.id, entry);
      });

      const visibleSections = Array.from<IntersectionObserverEntry>(observerRefs.current.values())
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

      if (visibleSections.length > 0) {
        setActiveSectionId(visibleSections[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-10% 0px -70% 0px',
      threshold: [0, 0.25]
    });

    chapter.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [chapter.sections]); // Re-run when sections change

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header if we had one, but here standard scroll is fine
      const yOffset = -20; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-8 pb-20 px-4 md:px-8">
      {/* Header */}
      <div className="mb-10 pb-6 border-b border-slate-800">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4 leading-tight">
          {chapter.title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          {chapter.description}
        </p>
      </div>

      {/* Module Table of Contents */}
      <TableOfContents 
        items={tocItems} 
        activeId={activeSectionId} 
        onItemClick={scrollToSection} 
      />

      {/* Content */}
      <div className="relative mt-12">
        {/* Vertical Line Decoration */}
        <div className="absolute left-[-20px] md:left-[-30px] top-4 bottom-0 w-px bg-slate-800/50 hidden lg:block"></div>

        {chapter.sections.map((section) => (
          <GuideSection 
            key={section.id} 
            id={section.id} 
            title={section.title}
          >
            {section.content}
          </GuideSection>
        ))}
      </div>

      {/* Footer for this module */}
      <div className="mt-20 pt-10 border-t border-slate-800/50 text-center">
        <p className="text-slate-500 text-sm">
          End of Module: {chapter.title}
        </p>
      </div>

       {/* Floating Action Button */}
       <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-900/40 transition-all duration-300 transform z-30 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon size={24} />
      </button>
    </div>
  );
};

export default ChapterContent;