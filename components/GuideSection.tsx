import React from 'react';
import { SectionProps } from '../types';
import TextHighlighter from './TextHighlighter';

const GuideSection: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24 mb-10">
      <h4 className="text-lg font-bold mb-4 text-slate-50">{title}</h4>
      <div className="space-y-3 text-slate-300 leading-relaxed">
        <TextHighlighter>
          {children}
        </TextHighlighter>
      </div>
    </section>
  );
};

export default GuideSection;