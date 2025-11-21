
import React from 'react';
import { referenceModules } from '../data/modules/reference';
import Term from './Term';
import { useSettings } from '../contexts/SettingsContext';

interface TextHighlighterProps {
  children: React.ReactNode;
}

// --- Optimization: Build Regex Once ---
// Since referenceModules is static data, we don't need to rebuild the regex on every render.
const getRegexPattern = () => {
    const allTerms = referenceModules
      .flatMap(m => m.terms)
      .map(t => t.term)
      .filter(t => t.length > 2); // Skip short words
    
    const uniqueTerms = Array.from(new Set(allTerms))
      .sort((a, b) => b.length - a.length);

    const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`\\b(${uniqueTerms.map(escapeRegExp).join('|')})\\b`, 'gi');
};

const regexPattern = getRegexPattern();

export const TextHighlighter: React.FC<TextHighlighterProps> = ({ children }) => {
  const { isVocabEnabled } = useSettings();

  if (!isVocabEnabled) {
    return <>{children}</>;
  }
  
  // Recursive function to traverse React tree
  const highlight = (node: React.ReactNode, keyPrefix = 'node'): React.ReactNode => {
    // Case 1: String - Perform replacement
    if (typeof node === 'string') {
      // Optimization: Quick check if the string contains ANY potential match before running heavy split
      // This isn't perfect (case sensitivity) but regex.test is fast.
      if (!regexPattern.test(node)) return node;
      
      // Reset lastIndex because 'g' flag keeps state
      regexPattern.lastIndex = 0;

      const parts = node.split(regexPattern);
      if (parts.length === 1) return node;

      return parts.map((part, i) => {
        // Odd indices are matches (due to capturing group in regex)
        if (i % 2 === 1) {
          return <Term key={`${keyPrefix}-${i}`}>{part}</Term>;
        }
        return part;
      });
    }

    // Case 2: React Element - Recurse into children
    if (React.isValidElement(node)) {
      // Skip matching inside existing Terms or interactive elements
      const typeName = typeof node.type === 'string' ? node.type : (node.type as any).name || '';
      
      if (
        node.type === Term || 
        typeName === 'Term' ||
        node.type === 'button' || 
        node.type === 'a' || 
        node.type === 'input' || 
        node.type === 'select' || 
        node.type === 'textarea'
      ) {
        return node;
      }

      const { children } = node.props as any;
      if (!children) return node;

      return React.cloneElement(node, {
        key: node.key || `${keyPrefix}-el`,
        children: React.Children.map(children, (child, i) => highlight(child, `${keyPrefix}-${i}`))
      } as any);
    }

    // Case 3: Array
    if (Array.isArray(node)) {
      return node.map((child, i) => highlight(child, `${keyPrefix}-${i}`));
    }

    return node;
  };

  return <>{highlight(children)}</>;
};

export default TextHighlighter;
