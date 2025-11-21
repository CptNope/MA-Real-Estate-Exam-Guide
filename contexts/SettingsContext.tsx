
import React, { createContext, useState, useContext } from 'react';

interface SettingsContextType {
  isVocabEnabled: boolean;
  toggleVocab: () => void;
}

const SettingsContext = createContext<SettingsContextType>({
  isVocabEnabled: true,
  toggleVocab: () => {},
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVocabEnabled, setIsVocabEnabled] = useState(true);

  const toggleVocab = () => {
    setIsVocabEnabled(prev => !prev);
  };

  return (
    <SettingsContext.Provider value={{ isVocabEnabled, toggleVocab }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
