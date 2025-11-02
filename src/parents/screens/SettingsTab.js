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

const SettingsTab = () => {
  const [riskAlerts, setRiskAlerts] = useState(true);
  const [reminderAlerts, setReminderAlerts] = useState(true);
  const [messageAlerts, setMessageAlerts] = useState(true);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(false);
  const [quietHoursStart, setQuietHoursStart] = useState('22:00');
  const [quietHoursEnd, setQuietHoursEnd] = useState('07:00');

  // Profile data
  const profileData = {
    name: 'Sujal Thapa',
    email: 'sujal124suj@gmail.com',
    phone: '(555) 123-4567',
  };

  // Children list
  const children = [
    { id: 1, name: 'Emma Johnson', age: 14, primary: true },
    { id: 2, name: 'Alex Johnson', age: 16, primary: false },
  ];

  // Guardians list
  const guardians = [
    { id: 1, name: 'Sujal Thapa', relationship: 'Parent', email: 'sujal124suj@gmail.com', primary: true },
    { id: 2, name: 'Partner Name', relationship: 'Parent', email: 'partner@example.com', primary: false },
  ];

  // Emergency contacts
  const emergencyContacts = [
    { id: 1, name: 'Emergency Services', phone: '911', relationship: 'Emergency' },
    { id: 2, name: 'Grandparent Name', phone: '(555) 987-6543', relationship: 'Grandparent' },
    { id: 3, name: 'Family Friend', phone: '(555) 555-5555', relationship: 'Family Friend' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Account Profile */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account</Text>
          <View style={styles.profileSection}>
            <Text style={styles.profileName}>{profileData.name}</Text>
            <Text style={styles.profileEmail}>{profileData.email}</Text>
            <Text style={styles.profilePhone}>{profileData.phone}</Text>
          </View>
        </View>

        {/* Manage Children */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Manage Children</Text>
          {children.map((child) => (
            <View key={child.id} style={styles.childItem}>
              <View style={styles.childInfo}>
                <Text style={styles.childName}>{child.name}</Text>
                <Text style={styles.childAge}>Age: {child.age}</Text>
                {child.primary && (
                  <Text style={styles.primaryBadge}>Primary</Text>
                )}
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Child</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.sectionSubtitle}>Choose what alerts you get</Text>
          
          <View style={styles.notificationItem}>
            <View style={styles.notificationLabel}>
              <Text style={styles.notificationText}>Risk Alerts</Text>
              <Text style={styles.notificationDesc}>Get notified about risk score changes</Text>
            </View>
            <Switch
              value={riskAlerts}
              onValueChange={setRiskAlerts}
              trackColor={{ false: colors.border, true: colors.secondary }}
              thumbColor={colors.white}
            />
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationLabel}>
              <Text style={styles.notificationText}>Reminders</Text>
              <Text style={styles.notificationDesc}>Exercise reminders and check-ins</Text>
            </View>
            <Switch
              value={reminderAlerts}
              onValueChange={setReminderAlerts}
              trackColor={{ false: colors.border, true: colors.secondary }}
              thumbColor={colors.white}
            />
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationLabel}>
              <Text style={styles.notificationText}>Messages</Text>
              <Text style={styles.notificationDesc}>New messages from coaches/providers</Text>
            </View>
            <Switch
              value={messageAlerts}
              onValueChange={setMessageAlerts}
              trackColor={{ false: colors.border, true: colors.secondary }}
              thumbColor={colors.white}
            />
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationLabel}>
              <Text style={styles.notificationText}>Emergencies</Text>
              <Text style={styles.notificationDesc}>Always enabled for safety</Text>
            </View>
            <Switch
              value={emergencyAlerts}
              onValueChange={setEmergencyAlerts}
              trackColor={{ false: colors.border, true: colors.secondary }}
              thumbColor={colors.white}
              disabled={true}
            />
          </View>

          <View style={styles.quietHoursSection}>
            <View style={styles.quietHoursHeader}>
              <View style={styles.notificationLabel}>
                <Text style={styles.notificationText}>Quiet Hours</Text>
                <Text style={styles.notificationDesc}>Set quiet hours (emergencies always come through)</Text>
              </View>
              <Switch
                value={quietHoursEnabled}
                onValueChange={setQuietHoursEnabled}
                trackColor={{ false: colors.border, true: colors.secondary }}
                thumbColor={colors.white}
              />
            </View>
            {quietHoursEnabled && (
              <View style={styles.quietHoursTime}>
                <Text style={styles.quietHoursText}>
                  {quietHoursStart} - {quietHoursEnd}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.changeTimeText}>Change</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* Privacy & Consents */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Privacy & Consents</Text>
          <Text style={styles.sectionSubtitle}>View what data you can see, request changes</Text>
          
          <TouchableOpacity style={styles.privacyItem}>
            <Text style={styles.privacyLabel}>View Data Access</Text>
            <Text style={styles.privacyArrow}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.privacyItem}>
            <Text style={styles.privacyLabel}>Request Changes</Text>
            <Text style={styles.privacyArrow}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.privacyItem}>
            <Text style={styles.privacyLabel}>Privacy Policy</Text>
            <Text style={styles.privacyArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Guardians */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Guardians</Text>
          <Text style={styles.sectionSubtitle}>Manage other guardians (add spouse, grandparent, etc.)</Text>
          
          {guardians.map((guardian) => (
            <View key={guardian.id} style={styles.guardianItem}>
              <View style={styles.guardianInfo}>
                <Text style={styles.guardianName}>{guardian.name}</Text>
                <Text style={styles.guardianRelationship}>{guardian.relationship}</Text>
                <Text style={styles.guardianEmail}>{guardian.email}</Text>
                {guardian.primary && (
                  <Text style={styles.primaryBadge}>Primary</Text>
                )}
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Guardian</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Contacts */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Emergency Contacts</Text>
          <Text style={styles.sectionSubtitle}>Add people who should be notified for high-risk events</Text>
          
          {emergencyContacts.map((contact) => (
            <View key={contact.id} style={styles.emergencyItem}>
              <View style={styles.emergencyInfo}>
                <Text style={styles.emergencyName}>{contact.name}</Text>
                <Text style={styles.emergencyRelationship}>{contact.relationship}</Text>
                <Text style={styles.emergencyPhone}>📞 {contact.phone}</Text>
              </View>
              <TouchableOpacity style={styles.callButton}>
                <Text style={styles.callButtonText}>Call</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add Emergency Contact</Text>
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
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  profileSection: {
    marginTop: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  childItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  childInfo: {
    flex: 1,
  },
  childName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  childAge: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  primaryBadge: {
    fontSize: 11,
    color: colors.secondary,
    fontWeight: '600',
    marginTop: 4,
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '600',
  },
  addButton: {
    marginTop: 12,
    paddingVertical: 12,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  notificationLabel: {
    flex: 1,
    marginRight: 16,
  },
  notificationText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  notificationDesc: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  quietHoursSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  quietHoursHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  quietHoursTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
  },
  quietHoursText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  changeTimeText: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '600',
  },
  privacyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  privacyLabel: {
    fontSize: 16,
    color: colors.text,
  },
  privacyArrow: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  guardianItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  guardianInfo: {
    flex: 1,
  },
  guardianName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  guardianRelationship: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  guardianEmail: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  emergencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  emergencyRelationship: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  emergencyPhone: {
    fontSize: 14,
    color: colors.text,
  },
  callButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
  callButtonText: {
    color: colors.white,
    fontSize: 14,
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

export default SettingsTab;

