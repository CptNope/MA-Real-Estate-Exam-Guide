import React from 'react';

interface FooterProps {
  onNavigate: (page: 'privacy' | 'terms' | 'accessibility') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="text-sm text-slate-400">
            © {currentYear} MA Real Estate Exam Guide. All rights reserved.
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" aria-label="Footer navigation">
            <button
              onClick={() => onNavigate('privacy')}
              className="text-slate-400 hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-slate-400 hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
              aria-label="Terms of Service"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('accessibility')}
              className="text-slate-400 hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
              aria-label="Accessibility Statement"
            >
              Accessibility
            </button>
          </nav>

          {/* Attribution */}
          <div className="text-sm text-slate-500">
            Made for MA Real Estate Students
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
