# Arog - Project Structure Documentation

## Project Overview
Arog is a Recovery and Health Management application built with React Native and Expo. The project follows a modular architecture with clear separation of concerns.

## Directory Structure

```
Arog/
├── assets/                  # Static assets
│   ├── images/             # Image assets
│   └── videos/             # Video assets
├── docs/                   # Project documentation
│   ├── COMPLETENESS_CHECK.md
│   ├── DEPLOYMENT.md
│   ├── INSTALL.md
│   └── ... (other documentation)
├── src/                    # Source code
│   ├── common/            # Shared components and utilities
│   │   ├── components/    # Reusable UI components
│   │   ├── navigation/    # Navigation configuration
│   │   └── screens/       # Common screens (auth, etc.)
│   ├── config/           # Configuration files
│   │   ├── colors.js     # App color scheme
│   │   └── app.config.js # Expo configuration
│   ├── parents/          # Parents portal
│   │   ├── data/        # Parent-specific data
│   │   ├── navigation/  # Parent portal navigation
│   │   └── screens/     # Parent portal screens
│   ├── team/            # Team portal
│   │   ├── data/        # Team-specific data
│   │   ├── navigation/  # Team portal navigation
│   │   └── screens/     # Team portal screens
│   ├── user/            # User portal
│   │   ├── data/        # User-specific data
│   │   ├── navigation/  # User portal navigation
│   │   └── screens/     # User portal screens
│   └── utils/           # Utility functions
├── App.js                # Application entry point
├── app.json             # Expo configuration
├── babel.config.js      # Babel configuration
├── package.json         # Dependencies and scripts
├── README.md           # Project overview
└── vercel.json         # Vercel deployment config

## Key Components

### Common Components
- Button.js: Reusable button component
- Card.js: Card component for displaying content
- Header.js: App header component
- Input.js: Form input component
- BottomNavBar.js: Bottom navigation bar

### Navigation Structure
1. MainNavigator (Stack)
   - Login Screen
   - Signup Screen
   - Portal Selection
   - User Portal (Tabs)
   - Parents Portal (Tabs)
   - Team Portal (Tabs)

### Portals

#### User Portal Screens
- HomeScreen
- SessionsScreen
- PlanScreen
- CommunityScreen
- SettingsScreen

#### Parents Portal Screens
- HomeTab
- ChildTab
- MessagesTab
- ResourcesTab
- SettingsTab

#### Team Portal Screens
- HomeScreen
- SessionsScreen
- PlanScreen
- TeamScreen
- SettingsScreen

## Configuration

### Environment Setup
1. Node.js and npm installed
2. Expo CLI installed globally
3. React Native development environment configured

### Available Scripts
- npm start: Start development server
- npm run android: Run on Android
- npm run ios: Run on iOS
- npm run web: Run in web browser

## Best Practices
1. Component-based architecture
2. Proper file naming conventions
3. Consistent styling with shared color scheme
4. Modular code organization
5. Clear separation of concerns

## Dependencies
- react-native
- expo
- @react-navigation/native
- @react-navigation/stack
- @react-navigation/bottom-tabs
- react-native-safe-area-context
- And other essential packages

## Development Guidelines
1. Follow the established folder structure
2. Use shared components from common/components
3. Maintain consistent styling using colors.js
4. Follow React Native best practices
5. Document new features and changes
