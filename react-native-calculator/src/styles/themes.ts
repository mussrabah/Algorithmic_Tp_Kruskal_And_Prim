import { Theme } from '../types/calculator';

export const lightTheme: Theme = {
  name: 'light',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  displayBackground: 'rgba(255, 255, 255, 0.95)',
  displayText: '#2c3e50',
  buttonBackground: 'rgba(255, 255, 255, 0.9)',
  buttonText: '#2c3e50',
  operationBackground: '#ff6b6b',
  operationText: '#ffffff',
  clearBackground: '#feca57',
  clearText: '#2c3e50',
  equalsBackground: '#48dbfb',
  equalsText: '#ffffff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
};

export const darkTheme: Theme = {
  name: 'dark',
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  displayBackground: 'rgba(52, 73, 94, 0.95)',
  displayText: '#ecf0f1',
  buttonBackground: 'rgba(52, 73, 94, 0.9)',
  buttonText: '#ecf0f1',
  operationBackground: '#e74c3c',
  operationText: '#ffffff',
  clearBackground: '#f39c12',
  clearText: '#2c3e50',
  equalsBackground: '#3498db',
  equalsText: '#ffffff',
  shadowColor: 'rgba(0, 0, 0, 0.3)',
};

export const neonTheme: Theme = {
  name: 'neon',
  background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
  displayBackground: 'rgba(0, 0, 0, 0.8)',
  displayText: '#00ff88',
  buttonBackground: 'rgba(20, 20, 20, 0.9)',
  buttonText: '#00ff88',
  operationBackground: '#ff0080',
  operationText: '#ffffff',
  clearBackground: '#ffaa00',
  clearText: '#000000',
  equalsBackground: '#00aaff',
  equalsText: '#ffffff',
  shadowColor: 'rgba(0, 255, 136, 0.3)',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  neon: neonTheme,
};

export type ThemeName = keyof typeof themes;

