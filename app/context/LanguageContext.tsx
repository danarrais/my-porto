"use client";

import React, { createContext, useContext, useSyncExternalStore } from 'react';

export type Language = 'EN' | 'ID';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const STORAGE_KEY = 'portfolio-lang';
const CHANGE_EVENT = 'portfolio-lang-change';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Language {
  return localStorage.getItem(STORAGE_KEY) === 'ID' ? 'ID' : 'EN';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, () => 'EN' as Language);

  const setLang = (newLang: Language) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
