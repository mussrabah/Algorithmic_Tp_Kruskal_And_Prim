import { Operation } from '../types/calculator';

export const formatDisplay = (value: string): string => {
  // Remove leading zeros but keep decimal point
  if (value === '0' || value === '') return '0';
  
  // Handle decimal numbers
  if (value.includes('.')) {
    const [integer, decimal] = value.split('.');
    const formattedInteger = integer.replace(/^0+/, '') || '0';
    return `${formattedInteger}.${decimal}`;
  }
  
  // Handle integers
  const num = parseFloat(value);
  if (isNaN(num)) return '0';
  
  // Format large numbers with commas
  if (Math.abs(num) >= 1000) {
    return num.toLocaleString();
  }
  
  return num.toString();
};

export const calculate = (
  previousValue: number,
  currentValue: number,
  operation: Operation
): number => {
  switch (operation) {
    case '+':
      return previousValue + currentValue;
    case '-':
      return previousValue - currentValue;
    case '*':
      return previousValue * currentValue;
    case '/':
      if (currentValue === 0) {
        throw new Error('Cannot divide by zero');
      }
      return previousValue / currentValue;
    default:
      return currentValue;
  }
};

export const isValidNumber = (value: string): boolean => {
  const num = parseFloat(value);
  return !isNaN(num) && isFinite(num);
};

export const limitDecimalPlaces = (value: number, places: number = 10): string => {
  if (Number.isInteger(value)) {
    return value.toString();
  }
  
  const rounded = parseFloat(value.toFixed(places));
  return rounded.toString();
};

export const handleDecimalInput = (currentDisplay: string): string => {
  // Don't add decimal if it already exists
  if (currentDisplay.includes('.')) {
    return currentDisplay;
  }
  
  // Add decimal point
  return currentDisplay + '.';
};

export const getOperationSymbol = (operation: Operation): string => {
  switch (operation) {
    case '+':
      return '+';
    case '-':
      return '−';
    case '*':
      return '×';
    case '/':
      return '÷';
    case '=':
      return '=';
    default:
      return '';
  }
};

