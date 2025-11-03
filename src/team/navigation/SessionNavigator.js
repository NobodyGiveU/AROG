import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SessionScreen from '../screens/SessionScreen';
import VideoAnalysisScreen from '../screens/VideoAnalysisScreen';
import LiveSessionScreen from '../screens/LiveSessionScreen';
import SessionSummaryScreen from '../screens/SessionSummaryScreen';

const Stack = createStackNavigator();

const SessionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SessionMain" component={SessionScreen} />
      <Stack.Screen name="VideoAnalysis" component={VideoAnalysisScreen} />
      <Stack.Screen name="LiveSession" component={LiveSessionScreen} />
      <Stack.Screen name="SessionSummary" component={SessionSummaryScreen} />
    </Stack.Navigator>
  );
};

export default SessionNavigator;