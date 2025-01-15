import { createContext } from 'react';

interface ContextType {
  name: string;
}

export const ContextApi = createContext<ContextType | null>(null);
