# Quick Installation Guide - Arog App

## React Navigation Packages

All required packages are already in `package.json`. Simply run:

```bash
npm install
```

## Required React Navigation Packages

| Package | Version | Purpose |
|--------|---------|---------|
| `@react-navigation/native` | ^6.1.9 | Core navigation library |
| `@react-navigation/stack` | ^6.3.20 | Stack navigator for auth flow |
| `@react-navigation/bottom-tabs` | ^6.5.11 | Bottom tab navigator for portals |
| `react-native-screens` | ~3.22.0 | Native screen components |
| `react-native-safe-area-context` | 4.6.3 | Safe area handling |

## Manual Installation (If Needed)

If you need to install packages manually:

```bash
# Install all at once
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

Or install individually:

```bash
# Core package
npm install @react-navigation/native

# Navigators
npm install @react-navigation/stack @react-navigation/bottom-tabs

# Required dependencies
npm install react-native-screens react-native-safe-area-context
```

## Start the App

After installation:

```bash
npm start
# or
npx expo start
```

## Full Setup Guide

For detailed setup instructions, see [REACT_NAVIGATION_SETUP.md](./REACT_NAVIGATION_SETUP.md)

