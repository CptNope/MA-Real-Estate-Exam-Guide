import React from 'react';

export interface TocItem {
  id: string;
  label: string;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface SubSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export type ModuleType = 'guide' | 'quiz' | 'flashcards' | 'calculator' | 'market' | 'glossary' | 'cram-sheet';

export interface BaseModule {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  type: ModuleType;
}

export interface GuideModule extends BaseModule {
  type: 'guide';
  sections: SubSection[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizModule extends BaseModule {
  type: 'quiz';
  questions: QuizQuestion[];
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category?: string;
}

export interface FlashcardModule extends BaseModule {
  type: 'flashcards';
  cards: Flashcard[];
}

export interface CalculatorModule extends BaseModule {
  type: 'calculator';
  toolType: 'cma' | 'transfer-tax' | 'amortization' | 'proration';
}

export interface MarketDataPoint {
  label: string;
  value: number;
  formattedValue?: string;
  detail?: string;
}

export interface MarketDataset {
  id: string;
  name: string;
  color: string;
  unit: string;
  data: MarketDataPoint[];
}

export interface MarketModule extends BaseModule {
  type: 'market';
  datasets: MarketDataset[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface GlossaryModule extends BaseModule {
  type: 'glossary';
  terms: GlossaryTerm[];
}

export interface CramItem {
  label: string;
  value: string;
  context: string;
}

export interface CramSection {
  title: string;
  items: CramItem[];
}

export interface CramSheetModule extends BaseModule {
  type: 'cram-sheet';
  sections: CramSection[];
}

export type Chapter = GuideModule | QuizModule | FlashcardModule | CalculatorModule | MarketModule | GlossaryModule | CramSheetModule;