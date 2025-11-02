import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../colors';

const BottomNavBar = ({ navigation, currentScreen }) => {
const navItems = [
    { name: 'Home', icon: 'home-outline', activeIcon: 'home' },
    { name: 'Session', icon: 'play-outline', activeIcon: 'play' },
    { name: 'Plan', icon: 'calendar-outline', activeIcon: 'calendar' },
    { name: 'Community', icon: 'people-outline', activeIcon: 'people' },
  ];  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={styles.navItem}
          onPress={() => {}}
        >
          <Ionicons
            name={currentScreen === item.name.toLowerCase() ? item.activeIcon : item.icon}
            size={24}
            color={currentScreen === item.name.toLowerCase() ? colors.primary : colors.textSecondary}
          />
          <Text
            style={[
              styles.navText,
              currentScreen === item.name.toLowerCase() && styles.activeNavText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: 12,
    paddingBottom: 28,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    marginTop: 6,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  activeNavText: {
    color: colors.primary,
    fontWeight: '600',
  },
});

export default BottomNavBar;