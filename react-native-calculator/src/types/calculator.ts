export type Operation = '+' | '-' | '*' | '/' | '=';

export type ButtonType = 'number' | 'operation' | 'clear' | 'equals' | 'decimal';

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: Operation | null;
  waitingForNewValue: boolean;
}

export interface ButtonConfig {
  label: string;
  value: string;
  type: ButtonType;
  span?: number;
  color?: string;
  textColor?: string;
}

export interface Theme {
  name: string;
  background: string;
  displayBackground: string;
  displayText: string;
  buttonBackground: string;
  buttonText: string;
  operationBackground: string;
  operationText: string;
  clearBackground: string;
  clearText: string;
  equalsBackground: string;
  equalsText: string;
  shadowColor: string;
}

