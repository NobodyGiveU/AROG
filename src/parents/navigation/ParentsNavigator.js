import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../../colors';

// Import screens
import HomeTab from '../screens/HomeTab';
import ChildTab from '../screens/ChildTab';
import MessagesTab from '../screens/MessagesTab';
import ResourcesTab from '../screens/ResourcesTab';
import SettingsTab from '../screens/SettingsTab';

const Tab = createBottomTabNavigator();

const ParentsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.textSecondary,
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

export default ParentsNavigator;

