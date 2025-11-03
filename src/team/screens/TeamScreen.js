import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../config/colors';

const TeamScreen = () => {
  // Dummy data
  const messages = [
    {
      id: 1,
      sender: 'Coach Martinez',
      message: 'Team meeting tomorrow at 3 PM',
      timestamp: '2024-01-15T14:00:00',
      unread: true,
    },
    {
      id: 2,
      sender: 'Sarah (Team Lead)',
      message: 'Great work on today\'s challenge!',
      timestamp: '2024-01-15T15:30:00',
      unread: false,
    },
  ];

  const schedule = [
    { id: 1, day: 'Monday', time: '3:00 PM', activity: 'Group Exercise', location: 'Gym A' },
    { id: 2, day: 'Wednesday', time: '3:00 PM', activity: 'Team Challenge', location: 'Gym B' },
    { id: 3, day: 'Friday', time: '3:00 PM', activity: 'Progress Review', location: 'Gym A' },
  ];

  const buddies = [
    { id: 1, name: 'Alex Johnson', status: 'Active', streak: 10 },
    { id: 2, name: 'Maria Garcia', status: 'Active', streak: 8 },
    { id: 3, name: 'Chris Lee', status: 'Offline', streak: 5 },
  ];

  const challenges = [
    { id: 1, title: 'Team Weekly Goal', participants: 12, daysLeft: 3 },
    { id: 2, title: 'Group Exercise Challenge', participants: 8, daysLeft: 5 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Messages */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {messages.map((msg) => (
            <View key={msg.id} style={styles.messageItem}>
              <View style={styles.messageContent}>
                <View style={styles.messageHeader}>
                  <Text style={styles.messageSender}>{msg.sender}</Text>
                  {msg.unread && <View style={styles.unreadDot} />}
                </View>
                <Text style={styles.messageText} numberOfLines={1}>
                  {msg.message}
                </Text>
                <Text style={styles.messageTime}>
                  {new Date(msg.timestamp).toLocaleString()}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Schedule */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Team Schedule</Text>
          {schedule.map((item) => (
            <View key={item.id} style={styles.scheduleItem}>
              <View style={styles.scheduleLeft}>
                <Text style={styles.scheduleDay}>{item.day}</Text>
                <Text style={styles.scheduleActivity}>{item.activity}</Text>
              </View>
              <View style={styles.scheduleRight}>
                <Text style={styles.scheduleTime}>{item.time}</Text>
                <Text style={styles.scheduleLocation}>{item.location}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Team Buddies */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Team Buddies</Text>
          {buddies.map((buddy) => (
            <View key={buddy.id} style={styles.buddyItem}>
              <View style={styles.buddyLeft}>
                <View
                  style={[
                    styles.statusIndicator,
                    buddy.status === 'Active' && styles.statusActive,
                  ]}
                />
                <View style={styles.buddyInfo}>
                  <Text style={styles.buddyName}>{buddy.name}</Text>
                  <Text style={styles.buddyStreak}>{buddy.streak} day streak</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.messageButtonText}>Message</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Challenges */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Active Challenges</Text>
          {challenges.map((challenge) => (
            <View key={challenge.id} style={styles.challengeItem}>
              <View style={styles.challengeContent}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <View style={styles.challengeStats}>
                  <Text style={styles.challengeStat}>
                    👥 {challenge.participants} participants
                  </Text>
                  <Text style={styles.challengeStat}>
                    ⏰ {challenge.daysLeft} days left
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  messageItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  messageSender: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginRight: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  messageText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  scheduleLeft: {
    flex: 1,
  },
  scheduleDay: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  scheduleActivity: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  scheduleRight: {
    alignItems: 'flex-end',
  },
  scheduleTime: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 4,
  },
  scheduleLocation: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  buddyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  buddyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.textSecondary,
    marginRight: 12,
  },
  statusActive: {
    backgroundColor: colors.success,
  },
  buddyInfo: {
    flex: 1,
  },
  buddyName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  buddyStreak: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  messageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  challengeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  challengeContent: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  challengeStats: {
    flexDirection: 'row',
    gap: 16,
  },
  challengeStat: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  joinButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
});

export default TeamScreen;

