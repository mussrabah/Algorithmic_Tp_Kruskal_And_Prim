import React from 'react';
import { ThemeProvider } from './src/components/ThemeProvider';
import { Calculator } from './src/components/Calculator';

export default function App() {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
}

