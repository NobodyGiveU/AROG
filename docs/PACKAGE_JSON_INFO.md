# Package.json Information - Arog App

## Complete package.json

The `package.json` file includes all necessary dependencies for the Arog React Native app with Expo.

## Installation Command

```bash
npm install
```

This will install all dependencies listed in the `package.json` file.

## Run Command

```bash
npx expo start
```

Or use the npm script:

```bash
npm start
```

## Available Scripts

```bash
npm start       # Start Expo development server
npm run android # Run on Android device/emulator
npm run ios     # Run on iOS device/simulator
npm run web     # Run in web browser
```

## Dependencies Included

### Core Dependencies
- **expo** (~49.0.0) - Expo framework
- **react** (18.2.0) - React library
- **react-native** (0.72.6) - React Native framework

### Navigation Dependencies
- **@react-navigation/native** (^6.1.9) - Core navigation library
- **@react-navigation/stack** (^6.3.20) - Stack navigator
- **@react-navigation/bottom-tabs** (^6.5.11) - Bottom tab navigator
- **react-native-screens** (~3.22.0) - Native screen components
- **react-native-safe-area-context** (4.6.3) - Safe area handling

### UI Dependencies
- **expo-status-bar** (~1.6.0) - Status bar component

## Expo Go Compatibility

✅ This package.json is fully compatible with **Expo Go**:
- Uses Expo SDK 49
- All dependencies are compatible with Expo managed workflow
- No native code compilation required
- Can run directly in Expo Go app

## Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd /Users/sujalthapa/Desktop/Arog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Scan QR code with Expo Go:**
   - **iOS**: Use Camera app to scan QR code
   - **Android**: Use Expo Go app to scan QR code

## Verification

After installation, verify packages are installed:

```bash
npm list --depth=0
```

You should see all dependencies listed.

## Notes

- All versions are compatible with Expo SDK 49
- No additional native linking required
- Ready to use with Expo Go app
- Compatible with iOS, Android, and Web platforms

