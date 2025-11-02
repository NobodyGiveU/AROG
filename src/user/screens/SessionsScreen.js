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

  // Dummy data
  const sessionHistory = [
    {
      id: 1,
      date: '2024-01-15',
      duration: '30 min',
      type: 'Exercise Session',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-01-14',
      duration: '25 min',
      type: 'Physical Therapy',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-01-13',
      duration: '20 min',
      type: 'Exercise Session',
      status: 'Completed',
    },
  ];

  const handleStartSession = () => {
    // Placeholder for starting a session
    console.log('Start session');
  };

  const handleUploadVideo = () => {
    // Placeholder for video upload
    console.log('Upload video');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Record Session Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Record Sensor Session</Text>
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
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleStartSession}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Start Session</Text>
          </TouchableOpacity>
        </View>

        {/* Upload Video Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upload Video</Text>
          <Text style={styles.description}>
            Record and upload your exercise video for analysis
          </Text>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleUploadVideo}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Upload Video</Text>
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
                <Text style={styles.historyDuration}>{session.duration}</Text>
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
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: colors.background,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 12,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
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
    marginBottom: 2,
  },
  historyDuration: {
    fontSize: 12,
    color: colors.textSecondary,
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

