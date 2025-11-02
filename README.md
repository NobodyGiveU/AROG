# Arog - Recovery and Health Management App

A React Native mobile application built with Expo for managing recovery, health monitoring, and team-based rehabilitation programs.

## Features

- **User Portal**: Personal recovery tracking, exercise plans, sessions, and community features
- **Parents Portal**: Monitor child's progress, communicate with healthcare providers, access resources
- **Team Portal**: Team-based recovery programs, group sessions, and collaborative features

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device (iOS or Android)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npx expo start
```

3. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

## Project Structure

```
Arog/
├── App.js                    # Main app entry point
├── colors.js                 # App color scheme
├── package.json              # Dependencies and scripts
├── src/
│   ├── common/               # Shared components and navigation
│   │   ├── components/       # Reusable components (Button, Card, Header, Input)
│   │   ├── navigation/       # Main navigation setup
│   │   ├── screens/          # Authentication screens
│   │   ├── hooks/            # Custom hooks
│   │   └── utils/            # Utility functions
│   ├── user/                 # User Portal
│   │   ├── navigation/       # User tab navigator
│   │   ├── screens/          # User portal screens
│   │   └── data/             # User dummy data
│   ├── parents/              # Parents Portal
│   │   ├── screens/          # Parents portal screens
│   │   └── data/            # Parents dummy data
│   └── team/                 # Team Portal
│       ├── navigation/       # Team tab navigator
│       ├── screens/          # Team portal screens
│       └── data/             # Team dummy data
└── assets/                   # Images, fonts, etc.
```

## Navigation Flow

1. **Login/Signup** → Authentication screens
2. **Portal Selection** → Choose User, Parents, or Team portal
3. **Portal Navigation** → Bottom tab navigator with 5 screens each

## Dependencies

### Core
- `expo` - Expo framework
- `react` - React library
- `react-native` - React Native framework

### Navigation
- `@react-navigation/native` - Navigation library
- `@react-navigation/stack` - Stack navigator
- `@react-navigation/bottom-tabs` - Bottom tab navigator
- `react-native-screens` - Native screen components
- `react-native-safe-area-context` - Safe area handling

### UI
- `expo-status-bar` - Status bar component

## Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## Notes

- All authentication is dummy (no real backend)
- All data is mock/dummy data
- Ready for backend integration
- Designed for mobile-first experience

## License

Private project

