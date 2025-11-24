
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { PrivacyPolicy, TermsOfService, AccessibilityStatement } from './components/LegalPages';
import { getComponentForModule } from './components/ComponentRegistry';
import { MenuIcon } from './components/Icons';
import { chapters } from './data';
import { SettingsProvider } from './contexts/SettingsContext';

type LegalPage = 'privacy' | 'terms' | 'accessibility' | null;

const App: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPage>(null);

  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];

  // Render legal pages
  const renderLegalPage = () => {
    switch (activeLegalPage) {
      case 'privacy':
        return <PrivacyPolicy onClose={() => setActiveLegalPage(null)} />;
      case 'terms':
        return <TermsOfService onClose={() => setActiveLegalPage(null)} />;
      case 'accessibility':
        return <AccessibilityStatement onClose={() => setActiveLegalPage(null)} />;
      default:
        return null;
    }
  };

  // Render content using component registry
  const renderContent = () => {
    return getComponentForModule(activeChapter);
  };

  return (
    <SettingsProvider>
      {/* Legal Pages Overlay */}
      {renderLegalPage()}
      
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-50">
        <div className="flex flex-1 min-h-0">
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
                aria-label="Open navigation menu"
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

        {/* Footer */}
        <Footer onNavigate={setActiveLegalPage} />
      </div>
    </SettingsProvider>
  );
};

export default App;
