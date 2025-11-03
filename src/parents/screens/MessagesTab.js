import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../colors';

const MessagesTab = () => {
  const messages = [
    {
      id: 1,
      sender: {
        initials: 'SM',
        name: 'Dr. Sarah Mitchell',
        role: 'Primary Physician',
        avatar: 'SM',
        color: '#8B5CF6',
      },
      message: "Emma's latest blood work results are in and everything looks normal. Continue with the current treatment plan.",
      time: '2 hours ago',
      isNew: true,
      isReadOnly: true,
    },
    {
      id: 2,
      sender: {
        initials: 'LC',
        name: 'Lisa Chen, PT',
        role: 'Physical Therapist',
        avatar: 'LC',
        color: '#8B5CF6',
      },
      message: "Great progress in today's session! I've updated Emma's exercise plan with some new strengthening exercises.",
      time: '5 hours ago',
      isNew: true,
      canReply: true,
    },
    {
      id: 3,
      sender: {
        initials: 'CC',
        name: 'Care Coordinator Team',
        role: 'Care Coordination',
        avatar: 'CC',
        color: '#6B7280',
      },
      message: 'Reminder: Emma has an appointment with Dr. Mitchell next Tuesday at 2:00 PM.',
      time: 'Yesterday',
      canReply: true,
    },
    {
      id: 4,
      sender: {
        initials: 'MT',
        name: 'Dr. Michael Thompson',
        role: 'Orthopedic Specialist',
        avatar: 'MT',
        color: '#6B7280',
      },
      message: "Follow-up regarding Emma's knee recovery. Schedule a check-up in 2 weeks.",
      time: '2 days ago',
      isReadOnly: true,
    },
  ];

  const alerts = [
    {
      id: 1,
      icon: 'document-text',
      title: 'Plan Updated',
      description: "Lisa Chen updated Emma's exercise plan",
      time: '3 hours ago',
      color: '#E0F2FE',
      iconColor: '#0EA5E9',
    },
    {
      id: 2,
      icon: 'calendar',
      title: 'Appointment Reminder',
      description: 'Dr. Mitchell appointment on Jan 16 at 2:00 PM',
      time: '1 day ago',
      color: '#F5F3FF',
      iconColor: '#8B5CF6',
    },
    {
      id: 3,
      icon: 'warning',
      title: 'Risk Alert',
      description: "Emma's risk score increased to 6.5 (Moderate)",
      time: '2 days ago',
      color: '#FEF3C7',
      iconColor: '#F59E0B',
    },
  ];

  const quickContacts = [
    {
      id: 1,
      initials: 'SM',
      name: 'Dr. Sarah Mitchell',
      role: 'Primary Physician',
      color: '#8B5CF6',
    },
    {
      id: 2,
      initials: 'LC',
      name: 'Lisa Chen, PT',
      role: 'Physical Therapist',
      color: '#8B5CF6',
    },
    {
      id: 3,
      initials: '911',
      name: 'Emergency Line',
      role: 'Emergency Contact',
      color: '#EF4444',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Coach/Provider Messages */}
        <Text style={styles.sectionTitle}>Coach/Provider Messages</Text>
        <View style={styles.messagesContainer}>
          {messages.map((message) => (
            <View key={message.id} style={styles.messageCard}>
              <View style={styles.messageHeader}>
                <View style={styles.senderInfo}>
                  <View style={[styles.avatar, { backgroundColor: message.sender.color }]}>
                    <Text style={styles.avatarText}>{message.sender.initials}</Text>
                  </View>
                  <View style={styles.senderDetails}>
                    <View style={styles.nameContainer}>
                      <Text style={styles.senderName}>{message.sender.name}</Text>
                      {message.isNew && (
                        <View style={styles.newBadge}>
                          <Text style={styles.newBadgeText}>New</Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.senderRole}>{message.sender.role}</Text>
                  </View>
                </View>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <Text style={styles.messageText}>{message.message}</Text>
              <View style={styles.messageFooter}>
                {message.isReadOnly ? (
                  <View style={styles.readOnlyBadge}>
                    <Text style={styles.readOnlyText}>Read-only</Text>
                  </View>
                ) : message.canReply && (
                  <TouchableOpacity style={styles.replyButton}>
                    <Ionicons name="chatbubble-outline" size={20} color="#8B5CF6" />
                    <Text style={styles.replyButtonText}>Reply</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Message Alerts */}
        <Text style={styles.sectionTitle}>Message Alerts</Text>
        <View style={styles.alertsContainer}>
          {alerts.map((alert) => (
            <View key={alert.id} style={styles.alertCard}>
              <View style={[styles.alertIcon, { backgroundColor: alert.color }]}>
                <Ionicons name={alert.icon} size={24} color={alert.iconColor} />
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertDescription}>{alert.description}</Text>
                <Text style={styles.alertTime}>{alert.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Contacts */}
        <View style={styles.quickContactsSection}>
          <Text style={styles.sectionTitle}>Quick Contacts</Text>
          <Text style={styles.contactsDescription}>
            Reach out for questions or updates about your child's progress.
          </Text>
          {quickContacts.map((contact) => (
            <View key={contact.id} style={styles.contactCard}>
              <View style={styles.contactHeader}>
                <View style={[styles.avatar, { backgroundColor: contact.color }]}>
                  <Text style={styles.avatarText}>{contact.initials}</Text>
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactName}>{contact.name}</Text>
                  <Text style={styles.contactRole}>{contact.role}</Text>
                </View>
              </View>
              <View style={styles.contactActions}>
                <TouchableOpacity style={styles.contactButton}>
                  <Ionicons name="call-outline" size={20} color="#8B5CF6" />
                  <Text style={styles.contactButtonText}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.contactButton, styles.emailButton]}>
                  <Ionicons name="mail-outline" size={20} color="white" />
                  <Text style={styles.emailButtonText}>Email</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  messagesContainer: {
    marginBottom: 24,
  },
  messageCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    width: '100%',
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    maxWidth: '75%',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  senderDetails: {
    flex: 1,
    marginRight: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  senderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  senderRole: {
    fontSize: 14,
    color: '#6B7280',
  },
  messageTime: {
    fontSize: 14,
    color: '#6B7280',
    flexShrink: 0,
    marginLeft: 'auto',
    alignSelf: 'flex-start',
    paddingTop: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 12,
    width: '100%',
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  newBadge: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  newBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  readOnlyBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  readOnlyText: {
    color: '#6B7280',
    fontSize: 14,
  },
  replyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F3FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  replyButtonText: {
    color: '#8B5CF6',
    fontSize: 14,
    fontWeight: '500',
  },
  alertsContainer: {
    marginBottom: 24,
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  alertIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  alertDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  quickContactsSection: {
    marginBottom: 24,
  },
  contactsDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  contactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactInfo: {
    flex: 1,
    marginLeft: 12,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  contactRole: {
    fontSize: 14,
    color: '#6B7280',
  },
  contactActions: {
    flexDirection: 'row',
    gap: 12,
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#F5F3FF',
    gap: 8,
  },
  contactButtonText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '500',
  },
  emailButton: {
    backgroundColor: '#8B5CF6',
  },
  emailButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MessagesTab;
