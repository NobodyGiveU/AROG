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
  const [sensorTracking, setSensorTracking] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  // Dummy data
  const profileData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    team: 'Recovery Team A',
    role: 'Team Member',
    memberSince: 'December 2023',
  };

  const sensors = [
    { id: 1, name: 'Motion Sensor', status: 'Connected', battery: 85 },
    { id: 2, name: 'Posture Tracker', status: 'Connected', battery: 92 },
    { id: 3, name: 'Heart Rate Monitor', status: 'Disconnected', battery: 0 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Name</Text>
            <View style={styles.settingValueContainer}>
              <Text style={styles.settingValue}>{profileData.name}</Text>
              <TouchableOpacity>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Email</Text>
            <View style={styles.settingValueContainer}>
              <Text style={styles.settingValue}>{profileData.email}</Text>
              <TouchableOpacity>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Team</Text>
            <Text style={styles.settingValue}>{profileData.team}</Text>
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Role</Text>
            <Text style={styles.settingValue}>{profileData.role}</Text>
          </View>
        </View>

        {/* Sensors Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Connected Sensors</Text>
          {sensors.map((sensor) => (
            <View key={sensor.id} style={styles.sensorItem}>
              <View style={styles.sensorLeft}>
                <Text style={styles.sensorName}>{sensor.name}</Text>
                <View style={styles.sensorStatusRow}>
                  <View
                    style={[
                      styles.statusDot,
                      sensor.status === 'Connected'
                        ? styles.statusConnected
                        : styles.statusDisconnected,
                    ]}
                  />
                  <Text style={styles.sensorStatus}>{sensor.status}</Text>
                  {sensor.status === 'Connected' && (
                    <Text style={styles.sensorBattery}>
                      • Battery: {sensor.battery}%
                    </Text>
                  )}
                </View>
              </View>
              <TouchableOpacity style={styles.connectButton}>
                <Text style={styles.connectButtonText}>
                  {sensor.status === 'Connected' ? 'Disconnect' : 'Connect'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Notifications Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>
        </View>

        {/* Privacy Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy</Text>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Private Profile</Text>
            <Switch
              value={privacyMode}
              onValueChange={setPrivacyMode}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Sensor Tracking</Text>
            <Switch
              value={sensorTracking}
              onValueChange={setSensorTracking}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>
        </View>

        {/* Parent Link Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Parent Link</Text>
          <Text style={styles.parentLinkDescription}>
            Share your progress with your parent or guardian
          </Text>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Generate Link</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Manage Access</Text>
          </TouchableOpacity>
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
  sensorItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sensorLeft: {
    flex: 1,
  },
  sensorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  sensorStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusConnected: {
    backgroundColor: colors.success,
  },
  statusDisconnected: {
    backgroundColor: colors.textSecondary,
  },
  sensorStatus: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  sensorBattery: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  connectButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  connectButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  parentLinkDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  linkButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  linkButtonText: {
    color: colors.white,
    fontSize: 16,
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

