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
import { childProfile, riskScore, progressMetrics } from '../data/childData';
import { sessionHistory } from '../../user/data/sessionsData';

const ChildTab = () => {
  // Dummy plan data
  const exercisePlan = {
    id: 1,
    assignedBy: 'Dr. Sarah Mitchell',
    assignedDate: '2024-01-10',
    lastUpdated: '2024-01-15',
    updatedBy: 'Lisa Chen, PT',
    exercises: [
      { id: 1, name: 'Shoulder Rolls', sets: '3 sets x 10 reps', frequency: 'Daily' },
      { id: 2, name: 'Neck Stretches', sets: '2 sets x 15 reps', frequency: 'Daily' },
      { id: 3, name: 'Back Strengthening', sets: '3 sets x 12 reps', frequency: '3x/week' },
      { id: 4, name: 'Core Exercises', sets: '2 sets x 10 reps', frequency: '3x/week' },
    ],
  };

  // Check-in data
  const checkIns = [
    { date: '2024-01-15', mood: 'Good', painLevel: 4, notes: 'Feeling better today' },
    { date: '2024-01-14', mood: 'Excellent', painLevel: 3, notes: 'Great day' },
    { date: '2024-01-13', mood: 'Fair', painLevel: 5, notes: 'A bit sore' },
    { date: '2024-01-12', mood: 'Good', painLevel: 3, notes: null },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile & Metrics */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Profile & Metrics</Text>
          <View style={styles.profileRow}>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{childProfile.name}</Text>
              <Text style={styles.profileDetails}>Age: {childProfile.age} • {childProfile.gender}</Text>
              <Text style={styles.profileDetails}>Sport: Basketball • Position: Point Guard</Text>
              <Text style={styles.profileDetails}>Team: Junior Wildcats</Text>
            </View>
          </View>
          
          <View style={styles.metricsContainer}>
            <Text style={styles.sectionSubtitle}>Risk Trends Over Time</Text>
            <View style={styles.riskHistory}>
              {riskScore.history.slice(0, 5).map((entry, index) => (
                <View key={index} style={styles.riskHistoryItem}>
                  <Text style={styles.riskHistoryDate}>{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Text>
                  <View style={[styles.riskHistoryBar, { height: entry.score * 8 }]} />
                  <Text style={styles.riskHistoryScore}>{entry.score}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Plan Viewer (READ-ONLY) */}
        <View style={styles.card}>
          <View style={styles.planHeader}>
            <Text style={styles.cardTitle}>Exercise Plan (Read-Only)</Text>
            <View style={styles.readOnlyBadge}>
              <Text style={styles.readOnlyText}>VIEW ONLY</Text>
            </View>
          </View>
          <View style={styles.planInfo}>
            <Text style={styles.planInfoText}>
              Assigned by: <Text style={styles.planInfoBold}>{exercisePlan.assignedBy}</Text>
            </Text>
            <Text style={styles.planInfoText}>
              Assigned on: {new Date(exercisePlan.assignedDate).toLocaleDateString()}
            </Text>
            <Text style={styles.planInfoText}>
              Last updated: {new Date(exercisePlan.lastUpdated).toLocaleDateString()} by {exercisePlan.updatedBy}
            </Text>
          </View>
          
          <View style={styles.planDivider} />
          
          <Text style={styles.sectionSubtitle}>Exercises</Text>
          {exercisePlan.exercises.map((exercise) => (
            <View key={exercise.id} style={styles.planExerciseItem}>
              <Text style={styles.planExerciseName}>{exercise.name}</Text>
              <Text style={styles.planExerciseDetails}>
                {exercise.sets} • {exercise.frequency}
              </Text>
            </View>
          ))}
        </View>

        {/* Session History */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Session History</Text>
          <Text style={styles.sectionSubtitle}>Team Practice + Personal Workouts</Text>
          
          {sessionHistory.map((session) => (
            <View key={session.id} style={styles.sessionItem}>
              <View style={styles.sessionHeader}>
                <Text style={styles.sessionDate}>{session.date}</Text>
                <View style={[styles.riskBadge, { backgroundColor: session.type === 'Physical Therapy' ? colors.secondary : colors.primary }]}>
                  <Text style={styles.riskBadgeText}>{session.type}</Text>
                </View>
              </View>
              <View style={styles.sessionDetails}>
                <Text style={styles.sessionDuration}>Duration: {session.duration}</Text>
                {session.notes && (
                  <View style={styles.coachNotesContainer}>
                    <Text style={styles.coachNotesLabel}>Coach Notes:</Text>
                    <Text style={styles.coachNotes}>{session.notes}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.sessionExercises}>
                Exercises: {session.exercises.join(', ')}
              </Text>
            </View>
          ))}
        </View>

        {/* Check-ins */}
        <View style={styles.card}>
          <View style={styles.checkinHeader}>
            <Text style={styles.cardTitle}>Daily Check-ins</Text>
            <TouchableOpacity style={styles.remindButton}>
              <Text style={styles.remindButtonText}>💬 Remind to Check-in</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionSubtitle}>Mood and Pain Reports</Text>
          
          {checkIns.map((checkin, index) => (
            <View key={index} style={styles.checkinItem}>
              <View style={styles.checkinHeaderRow}>
                <Text style={styles.checkinDate}>{new Date(checkin.date).toLocaleDateString()}</Text>
                <View style={styles.checkinIndicators}>
                  <View style={styles.moodIndicator}>
                    <Text style={styles.moodIcon}>😊</Text>
                    <Text style={styles.moodText}>{checkin.mood}</Text>
                  </View>
                  <View style={styles.painIndicator}>
                    <Text style={styles.painLabel}>Pain:</Text>
                    <Text style={styles.painLevel}>{checkin.painLevel}/10</Text>
                  </View>
                </View>
              </View>
              {checkin.notes && (
                <Text style={styles.checkinNotes}>{checkin.notes}</Text>
              )}
            </View>
          ))}
          
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Check-ins →</Text>
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
  profileRow: {
    marginBottom: 16,
  },
  profileInfo: {
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  profileDetails: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  metricsContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  riskHistory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 120,
    marginTop: 12,
  },
  riskHistoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  riskHistoryDate: {
    fontSize: 10,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  riskHistoryBar: {
    width: 30,
    backgroundColor: colors.secondary,
    borderRadius: 4,
    marginBottom: 4,
  },
  riskHistoryScore: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  readOnlyBadge: {
    backgroundColor: colors.border,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  readOnlyText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  planInfo: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  planInfoText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  planInfoBold: {
    fontWeight: '600',
    color: colors.text,
  },
  planDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  planExerciseItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  planExerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  planExerciseDetails: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sessionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sessionDate: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  riskBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  riskBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.white,
  },
  sessionDetails: {
    marginBottom: 8,
  },
  sessionDuration: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  coachNotesContainer: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  coachNotesLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  coachNotes: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  sessionExercises: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  checkinHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  remindButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
  remindButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  checkinItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  checkinHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkinDate: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  checkinIndicators: {
    flexDirection: 'row',
    gap: 16,
  },
  moodIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  moodIcon: {
    fontSize: 16,
  },
  moodText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  painIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  painLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  painLevel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.error,
  },
  checkinNotes: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginTop: 4,
  },
  viewAllButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '600',
  },
});

export default ChildTab;

