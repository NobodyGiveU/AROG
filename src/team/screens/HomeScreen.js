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

const HomeScreen = () => {
  // Dummy data
  const teamRisk = {
    average: 6.8,
    status: 'Moderate Risk',
    trend: 'improving',
    membersCount: 12,
  };

  const teamPlan = {
    today: 'Group Exercise Session',
    time: '3:00 PM',
    location: 'Gym A',
    participants: 8,
  };

  const coachUpdates = [
    {
      id: 1,
      coach: 'Coach Martinez',
      message: 'Great progress this week! Keep up the excellent work.',
      timestamp: '2024-01-15T10:00:00',
    },
    {
      id: 2,
      coach: 'Coach Smith',
      message: 'Remember to complete your individual exercises before team session.',
      timestamp: '2024-01-14T16:30:00',
    },
  ];

  const schedule = [
    { id: 1, day: 'Monday', time: '3:00 PM', activity: 'Group Exercise', location: 'Gym A' },
    { id: 2, day: 'Wednesday', time: '3:00 PM', activity: 'Team Challenge', location: 'Gym B' },
    { id: 3, day: 'Friday', time: '3:00 PM', activity: 'Progress Review', location: 'Gym A' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Team Risk Score */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Team Risk Score</Text>
          <View style={styles.riskScoreContainer}>
            <Text style={styles.riskScore}>{teamRisk.average}</Text>
            <Text style={styles.riskScoreLabel}>/ 10</Text>
          </View>
          <Text style={styles.riskScoreStatus}>{teamRisk.status}</Text>
          <Text style={styles.teamSize}>{teamRisk.membersCount} team members</Text>
        </View>

        {/* Today's Team Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Team Plan</Text>
          <View style={styles.planItem}>
            <Text style={styles.planActivity}>{teamPlan.today}</Text>
            <Text style={styles.planTime}>⏰ {teamPlan.time}</Text>
            <Text style={styles.planLocation}>📍 {teamPlan.location}</Text>
            <Text style={styles.planParticipants}>{teamPlan.participants} participants</Text>
          </View>
        </View>

        {/* Coach Updates */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coach Updates</Text>
          {coachUpdates.map((update) => (
            <View key={update.id} style={styles.updateItem}>
              <View style={styles.updateHeader}>
                <Text style={styles.updateCoach}>{update.coach}</Text>
                <Text style={styles.updateTime}>
                  {new Date(update.timestamp).toLocaleDateString()}
                </Text>
              </View>
              <Text style={styles.updateMessage}>{update.message}</Text>
            </View>
          ))}
        </View>

        {/* Weekly Schedule */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Schedule</Text>
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
  riskScoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginVertical: 8,
  },
  riskScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
  },
  riskScoreLabel: {
    fontSize: 24,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  riskScoreStatus: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
  teamSize: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
  planItem: {
    marginTop: 8,
  },
  planActivity: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  planTime: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  planLocation: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  planParticipants: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 4,
  },
  updateItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  updateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  updateCoach: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  updateTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  updateMessage: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
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
});

export default HomeScreen;

