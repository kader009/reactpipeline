import { ReactNode } from 'react';
import { ContextApi } from './Context';

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const name = 'kader';
  const passingData = { name };
  return (
    <ContextApi.Provider value={passingData}>{children}</ContextApi.Provider>
  );
};

export default ContextProvider; 