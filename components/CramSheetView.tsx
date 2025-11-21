import React from 'react';
import { CramSheetModule } from '../types';
import { LightningIcon } from './Icons';

const CramSheetView: React.FC<{ module: CramSheetModule }> = ({ module }) => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-8 pb-20 px-4 md:px-8">
      <div className="mb-10 border-b border-slate-800 pb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-xl">
            <LightningIcon size={32} />
          </div>
          <h1 className="text-3xl font-bold text-slate-50">{module.title}</h1>
        </div>
        <p className="text-lg text-slate-400 max-w-2xl">
          {module.description}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {module.sections.map((section, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-slate-700 transition-colors">
            <div className="px-5 py-3 bg-slate-800/80 border-b border-slate-700 flex items-center">
              <h3 className="font-bold text-slate-200 uppercase tracking-wider text-sm">{section.title}</h3>
            </div>
            <div className="divide-y divide-slate-800/50">
              {section.items.map((item, i) => (
                <div key={i} className="p-4 flex justify-between items-center group">
                   <div className="pr-4">
                     <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{item.label}</div>
                     <div className="text-[10px] text-slate-600 uppercase mt-0.5 font-semibold">{item.context}</div>
                   </div>
                   <div className="text-right font-mono font-bold text-lg text-yellow-400 whitespace-nowrap">
                     {item.value}
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-blue-900/20 border border-blue-500/30 rounded-lg text-center">
        <p className="text-blue-300 text-sm">
          <strong>Pro Tip:</strong> Review this page 30 minutes before your exam. These numbers are purely memorization.
        </p>
      </div>
    </div>
  );
};

export default CramSheetView;