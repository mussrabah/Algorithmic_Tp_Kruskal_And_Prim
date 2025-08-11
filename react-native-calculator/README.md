# 🧮 Fancy Calculator - React Native

A beautiful, cross-platform calculator app built with React Native and Expo. Features modern UI design, smooth animations, and multiple themes.

## ✨ Features

- 🎨 **Multiple Themes**: Light, Dark, and Neon themes
- 📱 **Cross-Platform**: Runs on iOS, Android, and Web
- ⚡ **Smooth Animations**: Button press animations and display transitions
- 🎯 **Responsive Design**: Adapts to different screen sizes
- 🧮 **Full Calculator Functionality**: Basic arithmetic operations
- 🎪 **Modern UI**: Gradient backgrounds, shadows, and rounded corners
- 🔢 **Smart Display**: Auto-adjusting font size and number formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

```bash
# Navigate to the calculator directory
cd react-native-calculator

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Different Platforms

```bash
# Run on web browser
npm run web

# Run on Android (requires Android Studio/emulator)
npm run android

# Run on iOS (requires Xcode - macOS only)
npm run ios
```

## 📱 Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| 🌐 Web | ✅ Full Support | Runs in any modern browser |
| 🤖 Android | ✅ Full Support | Requires Android Studio or physical device |
| 🍎 iOS | ✅ Full Support | Requires Xcode (macOS only) or Expo Go app |

## 🎨 Themes

The calculator includes three beautiful themes:

1. **Light Theme**: Clean and bright with blue gradients
2. **Dark Theme**: Elegant dark mode with subtle colors  
3. **Neon Theme**: Futuristic cyberpunk-inspired design

Switch themes by tapping the theme button in the top-right corner.

## 🏗️ Project Structure

```
react-native-calculator/
├── src/
│   ├── components/
│   │   ├── Calculator.tsx      # Main calculator component
│   │   ├── Display.tsx         # Calculator display
│   │   ├── Button.tsx          # Animated button component
│   │   └── ThemeProvider.tsx   # Theme management
│   ├── hooks/
│   │   └── useCalculator.ts    # Calculator logic hook
│   ├── utils/
│   │   └── calculator.ts       # Calculator utilities
│   ├── styles/
│   │   └── themes.ts           # Theme definitions
│   └── types/
│       └── calculator.ts       # TypeScript types
├── App.tsx                     # App entry point
├── app.json                    # Expo configuration
└── package.json               # Dependencies
```

## 🛠️ Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe JavaScript
- **Expo Linear Gradient**: Beautiful gradient backgrounds
- **React Hooks**: Modern state management
- **Animated API**: Smooth animations and transitions

## 🎯 Features in Detail

### Calculator Operations
- ➕ Addition
- ➖ Subtraction  
- ✖️ Multiplication
- ➗ Division
- 📊 Percentage calculations
- 🔢 Decimal number support
- ⌫ Backspace functionality
- 🗑️ Clear operations

### UI/UX Features
- 🎭 Animated button presses with scale and opacity effects
- 📺 Dynamic display with fade transitions
- 🎨 Gradient backgrounds and modern styling
- 📏 Responsive button sizing
- 🔤 Auto-adjusting text size
- 💫 Platform-specific shadows and elevations

## 🚀 Building for Production

### Web Deployment
```bash
npm run build:web
# Deploy the web-build folder to your hosting service
```

### Mobile App Builds
```bash
# Build for Android
expo build:android

# Build for iOS  
expo build:ios
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple platforms
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Enjoy Your Fancy Calculator!

Experience the smooth, beautiful calculator that works seamlessly across all your devices! 🚀

