import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from './ThemeProvider';
import { ButtonType } from '../types/calculator';

interface ButtonProps {
  label: string;
  onPress: () => void;
  type: ButtonType;
  span?: number;
  disabled?: boolean;
}

const { width } = Dimensions.get('window');
const buttonSize = (width - 60) / 4;

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  type,
  span = 1,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 0.95,
        useNativeDriver: true,
        tension: 300,
        friction: 10,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 300,
        friction: 10,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const getButtonColors = () => {
    switch (type) {
      case 'operation':
        return [theme.operationBackground, theme.operationBackground];
      case 'clear':
        return [theme.clearBackground, theme.clearBackground];
      case 'equals':
        return [theme.equalsBackground, theme.equalsBackground];
      default:
        return [theme.buttonBackground, theme.buttonBackground];
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'operation':
        return theme.operationText;
      case 'clear':
        return theme.clearText;
      case 'equals':
        return theme.equalsText;
      default:
        return theme.buttonText;
    }
  };

  const buttonWidth = buttonSize * span + (span - 1) * 10;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: buttonWidth,
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        style={styles.touchable}
        activeOpacity={1}
      >
        <LinearGradient
          colors={getButtonColors()}
          style={[
            styles.button,
            {
              shadowColor: theme.shadowColor,
              opacity: disabled ? 0.5 : 1,
            },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: getTextColor(),
                fontSize: type === 'operation' ? 28 : 24,
              },
            ]}
          >
            {label}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  touchable: {
    flex: 1,
  },
  button: {
    flex: 1,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    }),
  },
  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

