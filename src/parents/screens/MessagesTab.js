import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import colors from '../../../colors';
import { messageThreads, messageHistory, quickContacts } from '../data/messagesData';

const MessagesTab = () => {
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showReply, setShowReply] = useState(false);

  // System messages
  const systemMessages = [
    {
      id: 1,
      type: 'plan_update',
      title: 'Plan Updated',
      message: 'Your child\'s exercise plan was updated by Lisa Chen, PT',
      timestamp: '2024-01-15T10:00:00',
      read: false,
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'Follow-up appointment scheduled for January 22nd at 2:00 PM',
      timestamp: '2024-01-13T09:00:00',
      read: true,
    },
    {
      id: 3,
      type: 'emergency',
      title: 'Risk Alert',
      message: 'Your child\'s risk score increased. Please review.',
      timestamp: '2024-01-12T14:30:00',
      read: true,
    },
  ];

  const getThreadHistory = (threadId) => {
    return messageHistory.find((h) => h.threadId === threadId)?.messages || [];
  };

  const canReply = (thread) => {
    // Usually read-only, but can reply if coach/team allows
    return thread.participantType === 'therapist' || thread.participantType === 'team';
  };

  const handleSendReply = () => {
    // Placeholder for sending reply
    console.log('Sending reply:', replyText);
    setReplyText('');
    setShowReply(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Coach/Provider Threads */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coach/Provider Messages</Text>
          <Text style={styles.sectionSubtitle}>Conversations with your child's healthcare team</Text>
          
          {messageThreads.map((thread) => {
            const history = getThreadHistory(thread.id);
            return (
              <TouchableOpacity
                key={thread.id}
                style={styles.threadItem}
                onPress={() => setSelectedThread(thread)}
              >
                <View style={styles.threadHeader}>
                  <View style={styles.threadInfo}>
                    <Text style={styles.threadName}>{thread.participantName}</Text>
                    <Text style={styles.threadRole}>{thread.participantRole}</Text>
                  </View>
                  {thread.unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadCount}>{thread.unreadCount}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.threadPreview} numberOfLines={2}>
                  {thread.lastMessage.text}
                </Text>
                <Text style={styles.threadTime}>
                  {new Date(thread.lastMessage.timestamp).toLocaleString()}
                </Text>
                {canReply(thread) && (
                  <Text style={styles.canReplyText}>✓ You can reply</Text>
                )}
                {!canReply(thread) && (
                  <Text style={styles.readOnlyText}>Read-only</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* System Messages */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>System Messages</Text>
          <Text style={styles.sectionSubtitle}>Plan updates, alerts, appointment reminders</Text>
          
          {systemMessages.map((msg) => (
            <TouchableOpacity
              key={msg.id}
              style={[
                styles.systemMessageItem,
                !msg.read && styles.systemMessageUnread,
                msg.type === 'emergency' && styles.emergencyMessage,
              ]}
            >
              <View style={styles.systemMessageHeader}>
                <Text style={styles.systemMessageTitle}>{msg.title}</Text>
                {!msg.read && <View style={styles.unreadDot} />}
              </View>
              <Text style={styles.systemMessageText}>{msg.message}</Text>
              <Text style={styles.systemMessageTime}>
                {new Date(msg.timestamp).toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Contacts */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Contacts</Text>
          {quickContacts.map((contact) => (
            <TouchableOpacity key={contact.id} style={styles.contactItem}>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactRole}>{contact.role}</Text>
                <Text style={styles.contactHours}>{contact.officeHours}</Text>
              </View>
              <View style={styles.contactActions}>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.contactButtonText}>📞 Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.contactButtonText}>✉️ Email</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Message Detail Modal */}
      <Modal
        visible={selectedThread !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedThread(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedThread && (
              <>
                <View style={styles.modalHeader}>
                  <View>
                    <Text style={styles.modalTitle}>{selectedThread.participantName}</Text>
                    <Text style={styles.modalSubtitle}>{selectedThread.participantRole}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setSelectedThread(null)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>

                <ScrollView style={styles.modalMessages}>
                  {getThreadHistory(selectedThread.id).map((message) => (
                    <View
                      key={message.id}
                      style={[
                        styles.messageBubble,
                        message.sender === 'You' && styles.messageBubbleSent,
                      ]}
                    >
                      <Text style={styles.messageSender}>{message.sender}</Text>
                      <Text style={styles.messageText}>{message.text}</Text>
                      <Text style={styles.messageTime}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </Text>
                    </View>
                  ))}
                </ScrollView>

                {canReply(selectedThread) && (
                  <View style={styles.replyContainer}>
                    <TextInput
                      style={styles.replyInput}
                      placeholder="Type a reply..."
                      placeholderTextColor={colors.textSecondary}
                      value={replyText}
                      onChangeText={setReplyText}
                      multiline
                    />
                    <TouchableOpacity
                      style={styles.sendButton}
                      onPress={handleSendReply}
                    >
                      <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {!canReply(selectedThread) && (
                  <View style={styles.readOnlyContainer}>
                    <Text style={styles.readOnlyMessage}>
                      This conversation is read-only. Contact the provider directly for questions.
                    </Text>
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </Modal>
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
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  threadItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  threadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  threadInfo: {
    flex: 1,
  },
  threadName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  threadRole: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  unreadBadge: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 24,
    alignItems: 'center',
  },
  unreadCount: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  threadPreview: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  threadTime: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  canReplyText: {
    fontSize: 11,
    color: colors.success,
    marginTop: 4,
    fontWeight: '600',
  },
  readOnlyText: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
    fontStyle: 'italic',
  },
  systemMessageItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.background,
    marginBottom: 12,
  },
  systemMessageUnread: {
    backgroundColor: colors.background,
    borderLeftWidth: 3,
    borderLeftColor: colors.secondary,
  },
  emergencyMessage: {
    backgroundColor: '#FFF3E0',
    borderLeftColor: colors.error,
  },
  systemMessageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  systemMessageTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  systemMessageText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  systemMessageTime: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  contactItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  contactInfo: {
    marginBottom: 12,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  contactRole: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  contactHours: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  contactActions: {
    flexDirection: 'row',
    gap: 12,
  },
  contactButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  modalSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  modalMessages: {
    flex: 1,
    padding: 16,
    maxHeight: 400,
  },
  messageBubble: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    maxWidth: '80%',
  },
  messageBubbleSent: {
    backgroundColor: colors.secondary,
    alignSelf: 'flex-end',
  },
  messageSender: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  replyContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: 8,
  },
  replyInput: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: colors.white,
    fontWeight: '600',
  },
  readOnlyContainer: {
    padding: 16,
    backgroundColor: colors.background,
    margin: 16,
    borderRadius: 8,
  },
  readOnlyMessage: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default MessagesTab;

