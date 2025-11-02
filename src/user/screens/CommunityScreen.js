import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../colors';

const CommunityScreen = () => {
  // Dummy data
  const buddies = [
    { id: 1, name: 'John Doe', status: 'Active', streak: 7 },
    { id: 2, name: 'Jane Smith', status: 'Active', streak: 5 },
    { id: 3, name: 'Mike Johnson', status: 'Offline', streak: 3 },
  ];

  const challenges = [
    { id: 1, title: 'Weekly Exercise Challenge', participants: 45, daysLeft: 3 },
    { id: 2, title: '30-Day Recovery Streak', participants: 120, daysLeft: 15 },
    { id: 3, title: 'Pain-Free Days Challenge', participants: 89, daysLeft: 7 },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah Williams', points: 2450, badge: '🥇' },
    { rank: 2, name: 'Tom Brown', points: 2320, badge: '🥈' },
    { rank: 3, name: 'You', points: 2180, badge: '🥉' },
    { rank: 4, name: 'Lisa Anderson', points: 1950 },
    { rank: 5, name: 'David Lee', points: 1800 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Buddies Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>My Buddies</Text>
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

        {/* Challenges Section */}
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

        {/* Leaderboard Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Leaderboard</Text>
          {leaderboard.map((entry) => (
            <View
              key={entry.rank}
              style={[
                styles.leaderboardItem,
                entry.name === 'You' && styles.leaderboardItemHighlighted,
              ]}
            >
              <Text style={styles.rank}>{entry.badge || entry.rank}</Text>
              <View style={styles.leaderboardContent}>
                <Text style={styles.leaderboardName}>{entry.name}</Text>
                <Text style={styles.leaderboardPoints}>{entry.points} pts</Text>
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
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leaderboardItemHighlighted: {
    backgroundColor: colors.background,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  rank: {
    fontSize: 20,
    width: 40,
    textAlign: 'center',
  },
  leaderboardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaderboardName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  leaderboardPoints: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default CommunityScreen;

