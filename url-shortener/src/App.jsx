import React from 'react';
import AppRoutes from './routes';
import { LoggerProvider } from './components/LoggerProvider';

export default function App() {
  return (
    <LoggerProvider>
      <AppRoutes />
    </LoggerProvider>
  );
}