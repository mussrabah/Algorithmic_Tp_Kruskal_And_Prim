import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from './ThemeProvider';

interface DisplayProps {
  value: string;
  hasOperation?: boolean;
}

const { width } = Dimensions.get('window');

export const Display: React.FC<DisplayProps> = ({ value, hasOperation = false }) => {
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate when value changes
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0.7,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.98,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [value, fadeAnim, scaleAnim]);

  const getFontSize = () => {
    const length = value.length;
    if (length <= 6) return 48;
    if (length <= 8) return 40;
    if (length <= 10) return 32;
    return 24;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.displayBackground, theme.displayBackground]}
        style={[
          styles.display,
          {
            shadowColor: theme.shadowColor,
          },
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Text
            style={[
              styles.displayText,
              {
                color: theme.displayText,
                fontSize: getFontSize(),
              },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.5}
          >
            {value}
          </Text>
          {hasOperation && (
            <View
              style={[
                styles.operationIndicator,
                {
                  backgroundColor: theme.operationBackground,
                },
              ]}
            />
          )}
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  display: {
    width: width - 40,
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    paddingVertical: 20,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  displayText: {
    fontWeight: '300',
    textAlign: 'right',
    flex: 1,
  },
  operationIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 10,
  },
});

