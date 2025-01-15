import { createContext } from 'react';

interface ContextType {
  name: string;
  obj: {
    age: number,
    hobby: string
  }
}

export const ContextApi = createContext<ContextType | null>(null);
