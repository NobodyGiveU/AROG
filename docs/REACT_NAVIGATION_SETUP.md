# React Navigation Setup Guide for Arog App

This guide will help you set up React Navigation for the Arog React Native app.

## Required Packages

The following React Navigation packages are required for the Arog app:

1. **@react-navigation/native** - Core navigation library
2. **@react-navigation/stack** - Stack navigator for authentication flow
3. **@react-navigation/bottom-tabs** - Bottom tab navigator for portals
4. **react-native-screens** - Native screen components (required dependency)
5. **react-native-safe-area-context** - Safe area handling (required dependency)

## Installation

### Step 1: Install Core Navigation Package

```bash
npm install @react-navigation/native
```

### Step 2: Install Navigator Packages

```bash
npm install @react-navigation/stack @react-navigation/bottom-tabs
```

### Step 3: Install Required Peer Dependencies

```bash
npm install react-native-screens react-native-safe-area-context
```

### One-Line Installation (All Packages)

You can install all packages at once:

```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

## Installation with Expo

If you're using Expo (recommended for this project), the packages are already included in `package.json`. Run:

```bash
npm install
```

This will install all dependencies including React Navigation packages.

## Additional Setup

### For React Native CLI Projects (Not Using Expo)

If you're not using Expo, you may need to link native modules:

```bash
# iOS
cd ios && pod install && cd ..

# Android
# No additional steps needed for Android
```

### For Expo Projects (This App)

No additional linking is required! Expo handles all native module linking automatically.

## Verification

After installation, verify that all packages are installed correctly:

```bash
npm list @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

You should see all packages listed with their versions.

## Package Versions (Compatible with Expo ~49.0.0)

The app uses these specific versions (already in `package.json`):

```json
{
  "@react-navigation/native": "^6.1.9",
  "@react-navigation/stack": "^6.3.20",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "react-native-screens": "~3.22.0",
  "react-native-safe-area-context": "4.6.3"
}
```

## Navigation Structure in Arog App

```
NavigationContainer (App.js)
└── MainNavigator (Stack Navigator)
    ├── Login Screen
    ├── Signup Screen
    ├── Portal Selection Screen
    ├── User Portal (Bottom Tab Navigator)
    │   ├── Home
    │   ├── Sessions
    │   ├── Plan
    │   ├── Community
    │   └── Settings
    ├── Parents Portal Screen
    └── Team Portal (Bottom Tab Navigator)
        ├── Home
        ├── Sessions
        ├── Plan
        ├── Team
        └── Settings
```

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the app:**
   ```bash
   npx expo start
   ```

3. **Test navigation:**
   - The app should start on the Login screen
   - Navigate through: Login → Signup → Portal Selection → Portals

## Troubleshooting

### Issue: "Unable to resolve module @react-navigation/native"

**Solution:**
```bash
npm install
# or
rm -rf node_modules package-lock.json
npm install
```

### Issue: Navigation not working on Android

**Solution:**
Make sure `react-native-screens` and `react-native-safe-area-context` are installed:
```bash
npm install react-native-screens react-native-safe-area-context
```

### Issue: Expo Go crashes

**Solution:**
1. Clear Expo cache:
   ```bash
   npx expo start --clear
   ```
2. Restart Expo Go app on your device
3. Scan QR code again

## Additional Resources

- [React Navigation Documentation](https://reactnavigation.org/)
- [Stack Navigator Guide](https://reactnavigation.org/docs/stack-navigator)
- [Bottom Tab Navigator Guide](https://reactnavigation.org/docs/bottom-tab-navigator)
- [Expo Navigation Setup](https://reactnavigation.org/docs/getting-started)

## Notes

- All navigation setup is already configured in the app
- The `NavigationContainer` is set up in `App.js`
- Main navigator is in `src/common/navigation/MainNavigator.js`
- Portal navigators are in their respective folders (`src/user/navigation/`, `src/team/navigation/`)

## Check Installation

Verify installation by checking `package.json`:

```bash
cat package.json | grep react-navigation
```

You should see all packages listed in the dependencies section.

