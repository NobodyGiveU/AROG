import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../../colors';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import PortalSelectionScreen from '../screens/PortalSelectionScreen';

// Portal navigators
import UserNavigator from '../../user/navigation/UserNavigator';
import ParentsNavigator from '../../parents/navigation/ParentsNavigator';
import TeamNavigator from '../../team/navigation/TeamNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
            },
          },
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="PortalSelection" component={PortalSelectionScreen} />
      <Stack.Screen
        name="UserPortal"
        component={UserNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ParentsPortal"
        component={ParentsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TeamPortal"
        component={TeamNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

