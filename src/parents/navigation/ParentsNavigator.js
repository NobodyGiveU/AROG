import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../../colors';

// Import screens
import ParentsPortalScreen from '../screens/ParentsPortalScreen';
import HomeTab from '../screens/HomeTab';
import ChildTab from '../screens/ChildTab';
import MessagesTab from '../screens/MessagesTab';
import ResourcesTab from '../screens/ResourcesTab';
import SettingsTab from '../screens/SettingsTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ParentsDashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textPrimary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          headerTitle: 'Guardian Dashboard',
        }}
      />
      <Tab.Screen
        name="Child"
        component={ChildTab}
        options={{
          tabBarLabel: 'Child',
          headerTitle: 'Child Progress',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesTab}
        options={{
          tabBarLabel: 'Messages',
          headerTitle: 'Messages',
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesTab}
        options={{
          tabBarLabel: 'Resources',
          headerTitle: 'Resources',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsTab}
        options={{
          tabBarLabel: 'Settings',
          headerTitle: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const ParentsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParentsPortalScreen" component={ParentsPortalScreen} />
      <Stack.Screen name="ParentsDashboard" component={ParentsDashboardNavigator} />
    </Stack.Navigator>
  );
};

export default ParentsNavigator;

