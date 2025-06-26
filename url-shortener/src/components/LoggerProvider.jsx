import React, { createContext, useContext } from 'react';
import { useLogger } from '../services/logger';

const LoggerContext = createContext();

export const LoggerProvider = ({ children }) => {
  const logger = useLogger();
  return (
    <LoggerContext.Provider value={logger}>
      {children}
    </LoggerContext.Provider>
  );
};

export const useAppLogger = () => useContext(LoggerContext);