import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../../../colors';

const SessionsScreen = () => {
  const [sessionDuration, setSessionDuration] = useState('');
  const [sessionType, setSessionType] = useState('Team Session');

  // Dummy data
  const sessionHistory = [
    {
      id: 1,
      date: '2024-01-15',
      duration: '45 min',
      type: 'Team Session',
      participants: 10,
      coach: 'Coach Martinez',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-01-12',
      duration: '40 min',
      type: 'Team Session',
      participants: 8,
      coach: 'Coach Smith',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-01-10',
      duration: '50 min',
      type: 'Group Challenge',
      participants: 12,
      coach: 'Coach Martinez',
      status: 'Completed',
    },
    {
      id: 4,
      date: '2024-01-08',
      duration: '35 min',
      type: 'Team Session',
      participants: 9,
      coach: 'Coach Smith',
      status: 'Completed',
    },
  ];

  const handleStartSession = () => {
    // Placeholder for starting a session
    console.log('Start team session');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Record Team Session */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Record Team Session</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Duration (minutes)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter duration"
              placeholderTextColor={colors.textSecondary}
              value={sessionDuration}
              onChangeText={setSessionDuration}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Session Type</Text>
            <TextInput
              style={styles.input}
              placeholder="Team Session"
              placeholderTextColor={colors.textSecondary}
              value={sessionType}
              onChangeText={setSessionType}
            />
          </View>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleStartSession}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Start Session</Text>
          </TouchableOpacity>
        </View>

        {/* Session History */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Session History</Text>
          {sessionHistory.map((session) => (
            <View key={session.id} style={styles.historyItem}>
              <View style={styles.historyItemLeft}>
                <Text style={styles.historyDate}>{session.date}</Text>
                <Text style={styles.historyType}>{session.type}</Text>
                <View style={styles.historyDetails}>
                  <Text style={styles.historyDetail}>
                    ⏱️ {session.duration} • 👥 {session.participants} participants
                  </Text>
                  <Text style={styles.historyCoach}>Coach: {session.coach}</Text>
                </View>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{session.status}</Text>
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
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  historyItemLeft: {
    flex: 1,
  },
  historyDate: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  historyType: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  historyDetails: {
    marginTop: 4,
  },
  historyDetail: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  historyCoach: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  statusBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
});

export default SessionsScreen;

