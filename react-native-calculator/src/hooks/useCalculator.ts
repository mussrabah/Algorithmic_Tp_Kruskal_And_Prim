import { useState, useCallback } from 'react';
import { CalculatorState, Operation } from '../types/calculator';
import { 
  calculate, 
  formatDisplay, 
  isValidNumber, 
  limitDecimalPlaces, 
  handleDecimalInput 
} from '../utils/calculator';

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
};

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const inputNumber = useCallback((num: string) => {
    setState(prevState => {
      if (prevState.waitingForNewValue) {
        return {
          ...prevState,
          display: num,
          waitingForNewValue: false,
        };
      }

      const newDisplay = prevState.display === '0' ? num : prevState.display + num;
      
      // Limit display length to prevent overflow
      if (newDisplay.length > 12) {
        return prevState;
      }

      return {
        ...prevState,
        display: newDisplay,
      };
    });
  }, []);

  const inputDecimal = useCallback(() => {
    setState(prevState => {
      if (prevState.waitingForNewValue) {
        return {
          ...prevState,
          display: '0.',
          waitingForNewValue: false,
        };
      }

      return {
        ...prevState,
        display: handleDecimalInput(prevState.display),
      };
    });
  }, []);

  const inputOperation = useCallback((nextOperation: Operation) => {
    setState(prevState => {
      const inputValue = parseFloat(prevState.display);

      if (prevState.previousValue === null) {
        return {
          ...prevState,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForNewValue: true,
        };
      }

      if (prevState.operation && prevState.waitingForNewValue) {
        return {
          ...prevState,
          operation: nextOperation,
        };
      }

      try {
        const result = calculate(
          prevState.previousValue,
          inputValue,
          prevState.operation!
        );

        const formattedResult = limitDecimalPlaces(result);

        return {
          display: formatDisplay(formattedResult),
          previousValue: result,
          operation: nextOperation,
          waitingForNewValue: true,
        };
      } catch (error) {
        return {
          ...initialState,
          display: 'Error',
        };
      }
    });
  }, []);

  const performCalculation = useCallback(() => {
    setState(prevState => {
      const inputValue = parseFloat(prevState.display);

      if (prevState.previousValue === null || !prevState.operation) {
        return prevState;
      }

      try {
        const result = calculate(
          prevState.previousValue,
          inputValue,
          prevState.operation
        );

        const formattedResult = limitDecimalPlaces(result);

        return {
          display: formatDisplay(formattedResult),
          previousValue: null,
          operation: null,
          waitingForNewValue: true,
        };
      } catch (error) {
        return {
          ...initialState,
          display: 'Error',
        };
      }
    });
  }, []);

  const clear = useCallback(() => {
    setState(initialState);
  }, []);

  const clearEntry = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      display: '0',
    }));
  }, []);

  const backspace = useCallback(() => {
    setState(prevState => {
      if (prevState.display.length <= 1 || prevState.display === 'Error') {
        return {
          ...prevState,
          display: '0',
        };
      }

      const newDisplay = prevState.display.slice(0, -1);
      return {
        ...prevState,
        display: newDisplay || '0',
      };
    });
  }, []);

  return {
    display: state.display,
    inputNumber,
    inputDecimal,
    inputOperation,
    performCalculation,
    clear,
    clearEntry,
    backspace,
    hasOperation: state.operation !== null,
    currentOperation: state.operation,
  };
};

