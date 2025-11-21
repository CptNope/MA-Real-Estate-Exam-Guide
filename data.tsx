import { Chapter } from './types';
import { guideModules } from './data/modules/guides';
import { quizModules, flashcardModules } from './data/modules/practice';
import { toolModules } from './data/modules/tools';
import { referenceModules } from './data/modules/reference';

// Combine all modules into a single chapters array for the app
export const chapters: Chapter[] = [
  ...guideModules,
  ...referenceModules,
  ...quizModules,
  ...flashcardModules,
  ...toolModules
];