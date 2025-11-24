import React from 'react';
import { Chapter, CalculatorModule } from '../types';
import ChapterContent from './ChapterContent';
import QuizView from './QuizView';
import FlashcardView from './FlashcardView';
import CMACalculatorView from './CMACalculatorView';
import TransferTaxView from './TransferTaxView';
import AmortizationView from './AmortizationView';
import ProrationCalculatorView from './ProrationCalculatorView';
import MarketTrendsView from './MarketTrendsView';
import GlossaryView from './GlossaryView';
import CramSheetView from './CramSheetView';

// Calculator subtype component map
const calculatorComponents: Record<string, React.FC<{ module: CalculatorModule }>> = {
  'cma': CMACalculatorView as React.FC<{ module: CalculatorModule }>,
  'transfer-tax': TransferTaxView as React.FC<{ module: CalculatorModule }>,
  'amortization': AmortizationView as React.FC<{ module: CalculatorModule }>,
  'proration': ProrationCalculatorView as React.FC<{ module: CalculatorModule }>,
};

/**
 * Get component for a given chapter/module
 * This replaces the large switch statement with a cleaner lookup pattern
 */
export const getComponentForModule = (chapter: Chapter): React.ReactNode => {
  switch (chapter.type) {
    case 'guide':
      return <ChapterContent chapter={chapter} />;
    case 'quiz':
      return <QuizView module={chapter} />;
    case 'flashcards':
      return <FlashcardView module={chapter} />;
    case 'market':
      return <MarketTrendsView module={chapter} />;
    case 'glossary':
      return <GlossaryView module={chapter} />;
    case 'cram-sheet':
      return <CramSheetView module={chapter} />;
    case 'calculator': {
      const Calculator = calculatorComponents[chapter.toolType];
      if (Calculator) {
        return <Calculator module={chapter} />;
      }
      console.warn(`Unknown calculator tool type: ${chapter.toolType}`);
      return <div>Unknown calculator type</div>;
    }
    default: {
      const _exhaustiveCheck: never = chapter;
      console.warn(`No component registered for module type:`, _exhaustiveCheck);
      return <div>Unknown module type</div>;
    }
  }
};

export default getComponentForModule;
