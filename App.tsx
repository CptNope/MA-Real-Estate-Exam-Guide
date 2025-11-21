
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChapterContent from './components/ChapterContent';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView';
import CMACalculatorView from './components/CMACalculatorView';
import TransferTaxView from './components/TransferTaxView';
import AmortizationView from './components/AmortizationView';
import ProrationCalculatorView from './components/ProrationCalculatorView';
import MarketTrendsView from './components/MarketTrendsView';
import GlossaryView from './components/GlossaryView';
import CramSheetView from './components/CramSheetView';
import { MenuIcon } from './components/Icons';
import { chapters } from './data';
import { SettingsProvider } from './contexts/SettingsContext';

const App: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];

  // Render content based on module type
  const renderContent = () => {
    switch (activeChapter.type) {
      case 'guide':
        return <ChapterContent chapter={activeChapter} />;
      case 'glossary':
        return <GlossaryView module={activeChapter} />;
      case 'quiz':
        return <QuizView module={activeChapter} />;
      case 'flashcards':
        return <FlashcardView module={activeChapter} />;
      case 'market':
        return <MarketTrendsView module={activeChapter} />;
      case 'cram-sheet':
        return <CramSheetView module={activeChapter} />;
      case 'calculator':
        if (activeChapter.toolType === 'cma') {
          return <CMACalculatorView module={activeChapter} />;
        }
        if (activeChapter.toolType === 'transfer-tax') {
          return <TransferTaxView module={activeChapter} />;
        }
        if (activeChapter.toolType === 'amortization') {
          return <AmortizationView module={activeChapter} />;
        }
        if (activeChapter.toolType === 'proration') {
          return <ProrationCalculatorView module={activeChapter} />;
        }
        return <div>Unknown calculator type</div>;
      default:
        return <div>Unknown module type</div>;
    }
  };

  return (
    <SettingsProvider>
      <div className="min-h-screen bg-slate-950 flex font-sans text-slate-50">
        
        {/* Sidebar Navigation */}
        <Sidebar 
          chapters={chapters}
          activeChapterId={activeChapterId}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectChapter={setActiveChapterId}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Mobile Header */}
          <div className="lg:hidden sticky top-0 z-20 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="font-semibold text-slate-200">
              MA Real Estate Guide
            </div>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -mr-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            >
              <MenuIcon size={24} />
            </button>
          </div>

          {/* Content Scroll Area */}
          <main className="flex-1 relative">
            {renderContent()}
          </main>

        </div>
      </div>
    </SettingsProvider>
  );
};

export default App;
