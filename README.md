# Multi-Project Repository

This repository contains two distinct projects showcasing different programming paradigms and technologies:

## 📊 Java Graph Algorithms

Implementation of classic graph algorithms for finding minimum spanning trees.

**Location**: `java-algorithms/`

**Technologies**: Java

**Algorithms Implemented**:
- 🌳 **Kruskal's Algorithm**: Greedy algorithm for finding minimum spanning tree
- 🌲 **Prim's Algorithm**: Another approach to minimum spanning tree construction

[📖 View Java Algorithms Documentation](./java-algorithms/README.md)

### Quick Start (Java)
```bash
cd java-algorithms
javac src/Main.java
java -cp src Main
```

---

## 🧮 Fancy Calculator - React Native

A beautiful, cross-platform calculator app with modern UI and smooth animations.

**Location**: `react-native-calculator/`

**Technologies**: React Native, Expo, TypeScript

**Features**:
- 📱 **Cross-Platform**: Web, iOS, Android support
- 🎨 **Multiple Themes**: Light, Dark, and Neon themes
- ⚡ **Smooth Animations**: Modern UI with transitions
- 🧮 **Full Calculator**: Complete arithmetic functionality

[📖 View Calculator Documentation](./react-native-calculator/README.md)

### Quick Start (React Native)
```bash
cd react-native-calculator
npm install
npm start
```

**Platform Commands**:
- `npm run web` - Run in browser
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS

---

## 🚀 Live Demo

Try the calculator online: [Launch Web Calculator](https://your-calculator-url.com) *(Deploy the web build to see this in action)*

## 📁 Repository Structure

```
├── java-algorithms/          # Graph algorithms in Java
│   ├── src/                 # Java source files
│   │   ├── Main.java
│   │   ├── Kruskal.java
│   │   ├── Prim.java
│   │   └── graph/
│   └── README.md
├── react-native-calculator/ # Cross-platform calculator
│   ├── src/                 # React Native source
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── types/
│   ├── App.tsx
│   ├── package.json
│   └── README.md
└── README.md               # This file
```

## 🛠️ Development Setup

### Prerequisites
- **Java**: JDK 8 or later
- **Node.js**: v14 or later  
- **Expo CLI**: `npm install -g @expo/cli`

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/mussrabah/Algorithmic_Tp_Kruskal_And_Prim
   cd Algorithmic_Tp_Kruskal_And_Prim
   ```

2. **For Java Algorithms**
   ```bash
   cd java-algorithms
   javac src/Main.java
   java -cp src Main
   ```

3. **For React Native Calculator**
   ```bash
   cd react-native-calculator
   npm install
   npm start
   ```

## 🎯 Project Goals

This repository demonstrates:

- **Algorithm Implementation**: Classic computer science algorithms in Java
- **Modern Mobile Development**: Cross-platform app development with React Native
- **UI/UX Design**: Beautiful, animated user interfaces
- **Code Organization**: Clean project structure and documentation

## 🤝 Contributing

Contributions are welcome for both projects! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding!** 🚀 Whether you're exploring graph algorithms or building beautiful mobile apps, this repository has something for everyone!

