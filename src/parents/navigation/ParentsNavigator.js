import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

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
        tabBarActiveTintColor: '#8B5CF6', // Purple color from the design
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
          marginTop: -5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          headerTitle: 'Guardian Dashboard',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={24} 
              color={color} 
            />
          ),
          tabBarActiveTintColor: '#8B5CF6', // Purple for Home
          tabBarInactiveTintColor: '#6B7280',
        }}
      />
      <Tab.Screen
        name="Child"
        component={ChildTab}
        options={{
          tabBarLabel: 'Child',
          headerTitle: 'Child Progress',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? 'happy' : 'happy-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesTab}
        options={{
          tabBarLabel: 'Messages',
          headerTitle: 'Messages',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? 'chatbubble' : 'chatbubble-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesTab}
        options={{
          tabBarLabel: 'Resources',
          headerTitle: 'Resources',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons 
              name={focused ? 'book' : 'book-outline'} 
              size={24} 
              color={color} 
            />
          ),
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

