import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainNavigator from './src/common/navigation/MainNavigator';

/**
 * Arog - Recovery and Health Management App
 * 
 * Main App Entry Point
 * 
 * Navigation Structure:
 * 1. MainNavigator (Stack Navigator)
 *    - Login Screen
 *    - Signup Screen
 *    - Portal Selection Screen
 *    - User Portal Navigator (Bottom Tab Navigator)
 *      * Home Screen
 *      * Sessions Screen
 *      * Plan Screen
 *      * Community Screen
 *      * Settings Screen
 *    - Parents Portal Screen
 *    - Team Portal Navigator (Bottom Tab Navigator)
 *      * Home Screen
 *      * Sessions Screen
 *      * Plan Screen
 *      * Team Screen
 *      * Settings Screen
 * 
 * Navigation Flow:
 * Login → Signup ↔ Login → Portal Selection → User/Parents/Team Portal
 * 
 * Required React Navigation Dependencies:
 * - @react-navigation/native (Core navigation library)
 * - @react-navigation/stack (Stack navigator for main flow)
 * - @react-navigation/bottom-tabs (Tab navigator for portals)
 * - react-native-screens (Native screen components)
 * - react-native-safe-area-context (Safe area handling)
 * 
 * Additional Dependencies:
 * - expo-status-bar (Status bar component)
 */

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;

