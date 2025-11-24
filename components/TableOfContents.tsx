import React, { useState } from 'react';
import { ListIcon, ChevronUpIcon, ChevronDownIcon } from './Icons';
import { TocItem } from '../types';

interface TableOfContentsProps {
  items: TocItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, activeId, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 mb-8" aria-label="Table of contents">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 hover:bg-slate-800/50 transition-colors text-slate-200"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="toc-list"
        aria-label={isOpen ? "Collapse table of contents" : "Expand table of contents"}
      >
        <div className="flex items-center space-x-3">
          <ListIcon className="text-slate-400" size={20} />
          <h3 className="font-semibold text-sm tracking-wide uppercase">Table of Contents</h3>
        </div>
        {isOpen ? <ChevronUpIcon size={20} className="text-slate-400" /> : <ChevronDownIcon size={20} className="text-slate-400" />}
      </button>

      <div
        id="toc-list"
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
        role="region"
      >
        <ul className="p-2 space-y-1 border-t border-slate-800" role="list">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={`relative w-full text-left px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-800/80 text-blue-400 font-medium pl-5'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r-full"></span>
                  )}
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;