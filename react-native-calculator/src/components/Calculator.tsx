import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Display } from './Display';
import { Button } from './Button';
import { useTheme } from './ThemeProvider';
import { useCalculator } from '../hooks/useCalculator';
import { getOperationSymbol } from '../utils/calculator';
import { ButtonConfig } from '../types/calculator';

const { width, height } = Dimensions.get('window');

export const Calculator: React.FC = () => {
  const { theme, toggleTheme, themeName } = useTheme();
  const {
    display,
    inputNumber,
    inputDecimal,
    inputOperation,
    performCalculation,
    clear,
    backspace,
    hasOperation,
    currentOperation,
  } = useCalculator();

  const buttonConfigs: ButtonConfig[] = [
    { label: 'C', value: 'clear', type: 'clear' },
    { label: '⌫', value: 'backspace', type: 'clear' },
    { label: '%', value: '%', type: 'operation' },
    { label: getOperationSymbol('/'), value: '/', type: 'operation' },
    
    { label: '7', value: '7', type: 'number' },
    { label: '8', value: '8', type: 'number' },
    { label: '9', value: '9', type: 'number' },
    { label: getOperationSymbol('*'), value: '*', type: 'operation' },
    
    { label: '4', value: '4', type: 'number' },
    { label: '5', value: '5', type: 'number' },
    { label: '6', value: '6', type: 'number' },
    { label: getOperationSymbol('-'), value: '-', type: 'operation' },
    
    { label: '1', value: '1', type: 'number' },
    { label: '2', value: '2', type: 'number' },
    { label: '3', value: '3', type: 'number' },
    { label: getOperationSymbol('+'), value: '+', type: 'operation' },
    
    { label: '0', value: '0', type: 'number', span: 2 },
    { label: '.', value: '.', type: 'decimal' },
    { label: getOperationSymbol('='), value: '=', type: 'equals' },
  ];

  const handleButtonPress = (config: ButtonConfig) => {
    switch (config.type) {
      case 'number':
        inputNumber(config.value);
        break;
      case 'decimal':
        inputDecimal();
        break;
      case 'operation':
        if (config.value === '%') {
          // Handle percentage
          const currentValue = parseFloat(display);
          inputNumber((currentValue / 100).toString());
        } else {
          inputOperation(config.value as any);
        }
        break;
      case 'equals':
        performCalculation();
        break;
      case 'clear':
        if (config.value === 'clear') {
          clear();
        } else if (config.value === 'backspace') {
          backspace();
        }
        break;
    }
  };

  const renderButtons = () => {
    const rows: ButtonConfig[][] = [];
    let currentRow: ButtonConfig[] = [];
    
    buttonConfigs.forEach((config, index) => {
      currentRow.push(config);
      
      // Check if we need to start a new row
      const currentRowWidth = currentRow.reduce((sum, btn) => sum + (btn.span || 1), 0);
      
      if (currentRowWidth >= 4 || index === buttonConfigs.length - 1) {
        rows.push([...currentRow]);
        currentRow = [];
      }
    });

    return rows.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.buttonRow}>
        {row.map((config, buttonIndex) => (
          <Button
            key={`${rowIndex}-${buttonIndex}`}
            label={config.label}
            onPress={() => handleButtonPress(config)}
            type={config.type}
            span={config.span}
          />
        ))}
      </View>
    ));
  };

  const getBackgroundColors = () => {
    switch (themeName) {
      case 'light':
        return ['#667eea', '#764ba2'];
      case 'dark':
        return ['#2c3e50', '#34495e'];
      case 'neon':
        return ['#0c0c0c', '#1a1a1a'];
      default:
        return ['#667eea', '#764ba2'];
    }
  };

  return (
    <LinearGradient
      colors={getBackgroundColors()}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style={themeName === 'light' ? 'dark' : 'light'} />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
          <Text style={[styles.themeButtonText, { color: theme.displayText }]}>
            🎨 {themeName.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calculatorContainer}>
        <Display 
          value={display} 
          hasOperation={hasOperation}
        />
        
        <View style={styles.buttonsContainer}>
          {renderButtons()}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  themeButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  themeButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  calculatorContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: width - 40,
  },
});
