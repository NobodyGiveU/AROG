# Mobile App Setup Guide - Arog

Quick guide to get your Arog mobile app running on iOS and Android devices.

## Prerequisites

1. **Node.js** installed (v16 or higher)
2. **Expo Go app** installed on your mobile device:
   - iOS: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: Download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Quick Start (3 Steps)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Expo Development Server

```bash
npx expo start
```

### Step 3: Scan QR Code

- **iOS**: Open Camera app → Point at QR code → Tap notification
- **Android**: Open Expo Go app → Tap "Scan QR code" → Point at QR code

## Running on Specific Platforms

### Run on iOS Simulator (Mac only)

```bash
npm run ios
```

### Run on Android Emulator

```bash
npm run android
```

*(Make sure you have Android Studio and an emulator set up)*

### Run on Web Browser

```bash
npm run web
```

## Troubleshooting

### App won't load on device

1. **Check internet connection** - Your phone and computer must be on the same network
2. **Clear Expo cache:**
   ```bash
   npx expo start --clear
   ```
3. **Restart Expo Go app** on your device
4. **Restart development server:**
   ```bash
   # Press Ctrl+C to stop
   npx expo start
   ```

### "Unable to resolve module" errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Navigation not working

Make sure all React Navigation packages are installed:

```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

### QR Code not scanning

1. Make sure both devices are on the same Wi-Fi network
2. Try switching to "Tunnel" mode in Expo:
   ```bash
   npx expo start --tunnel
   ```
3. If using tunnel, press `s` in terminal to manually enter URL

## Testing the App

### Navigation Flow to Test:

1. ✅ **Login Screen** - Should appear first
2. ✅ **Signup Screen** - Tap "Sign Up" link
3. ✅ **Portal Selection** - After login/signup
4. ✅ **User Portal** - 5 tabs (Home, Sessions, Plan, Community, Settings)
5. ✅ **Parents Portal** - Single screen
6. ✅ **Team Portal** - 5 tabs (Home, Sessions, Plan, Team, Settings)

## Development Tips

- **Hot Reload**: Changes appear automatically (no need to restart)
- **Reload App**: Shake device → Tap "Reload" or press `r` in terminal
- **Open Developer Menu**: Shake device on iOS, or press `Cmd+D` (Mac) / `Ctrl+M` (Windows/Linux) on Android
- **Clear cache**: Press `Ctrl+C` then `npx expo start --clear`

## Network Issues

If you can't connect:

1. **Use Tunnel mode** (works across networks):
   ```bash
   npx expo start --tunnel
   ```
2. **Use LAN IP directly**: 
   - Find your computer's IP address
   - In Expo Go, tap "Enter URL manually"
   - Enter: `exp://YOUR_IP:8081`

## Build for Production

When ready to build standalone apps:

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for iOS (requires Apple Developer account)
eas build --platform ios

# Build for Android
eas build --platform android
```

## Current Status

✅ All screens created  
✅ Navigation configured  
✅ Dummy data loaded  
✅ Ready for mobile testing  
✅ Compatible with Expo Go  

## Next Steps

1. Test all navigation flows
2. Connect to backend API (when ready)
3. Replace dummy data with real API calls
4. Add authentication logic
5. Build production apps

## Support

For issues:
- Check [Expo Documentation](https://docs.expo.dev/)
- Check [React Navigation Docs](https://reactnavigation.org/)
- Review error messages in terminal

