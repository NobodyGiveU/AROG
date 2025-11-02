import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import colors from '../../../colors';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  // Dummy profile data
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 32,
    memberSince: 'January 2024',
  };

  const settingsSections = [
    {
      title: 'Profile',
      items: [
        { id: 1, label: 'Name', value: profileData.name, editable: true },
        { id: 2, label: 'Email', value: profileData.email, editable: true },
        { id: 3, label: 'Age', value: profileData.age.toString(), editable: true },
        { id: 4, label: 'Member Since', value: profileData.memberSince, editable: false },
      ],
    },
    {
      title: 'Notifications',
      items: [
        { id: 5, label: 'Push Notifications', toggle: true, value: notificationsEnabled },
        { id: 6, label: 'Email Notifications', toggle: true, value: emailNotifications },
      ],
    },
    {
      title: 'Privacy',
      items: [
        { id: 7, label: 'Private Profile', toggle: true, value: privacyMode },
        { id: 8, label: 'Share Progress', value: 'Friends only', editable: true },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile</Text>
          {settingsSections[0].items.map((item) => (
            <View key={item.id} style={styles.settingItem}>
              <Text style={styles.settingLabel}>{item.label}</Text>
              <View style={styles.settingValueContainer}>
                <Text style={styles.settingValue}>{item.value}</Text>
                {item.editable && (
                  <TouchableOpacity>
                    <Text style={styles.editButton}>Edit</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Notifications Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          {settingsSections[1].items.map((item) => (
            <View key={item.id} style={styles.settingItem}>
              <Text style={styles.settingLabel}>{item.label}</Text>
              <Switch
                value={item.value}
                onValueChange={(value) => {
                  if (item.id === 5) {
                    setNotificationsEnabled(value);
                  } else if (item.id === 6) {
                    setEmailNotifications(value);
                  }
                }}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
              />
            </View>
          ))}
        </View>

        {/* Privacy Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy</Text>
          {settingsSections[2].items.map((item) => (
            <View key={item.id} style={styles.settingItem}>
              <Text style={styles.settingLabel}>{item.label}</Text>
              {item.toggle ? (
                <Switch
                  value={item.value}
                  onValueChange={setPrivacyMode}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor={colors.white}
                />
              ) : (
                <View style={styles.settingValueContainer}>
                  <Text style={styles.settingValue}>{item.value}</Text>
                  <TouchableOpacity>
                    <Text style={styles.editButton}>Edit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Additional Options */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionButton, styles.logoutButton]}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingLabel: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  settingValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  editButton: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  optionButton: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionButtonText: {
    fontSize: 16,
    color: colors.text,
  },
  logoutButton: {
    borderBottomWidth: 0,
    marginTop: 8,
  },
  logoutButtonText: {
    fontSize: 16,
    color: colors.error,
    fontWeight: '600',
  },
});

export default SettingsScreen;

