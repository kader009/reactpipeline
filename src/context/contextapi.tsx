import { ReactNode } from 'react';
import { ContextApi } from './Context';

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const obj = {
    age: 29,
    hobby: 'education',
  };
  const name = 'kader';
  const passingData = { name, obj };
  return (
    <ContextApi.Provider value={passingData}>{children}</ContextApi.Provider>
  );
};

export default ContextProvider;
