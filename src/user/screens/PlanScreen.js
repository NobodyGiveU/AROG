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

const PlanScreen = () => {
  // Dummy data
  const dailyExercises = [
    { id: 1, name: 'Shoulder Rolls', sets: '3 sets x 10 reps', completed: true },
    { id: 2, name: 'Neck Stretches', sets: '2 sets x 15 reps', completed: true },
    { id: 3, name: 'Back Strengthening', sets: '3 sets x 12 reps', completed: false },
    { id: 4, name: 'Core Exercises', sets: '2 sets x 10 reps', completed: false },
    { id: 5, name: 'Balance Training', sets: '2 sets x 5 reps', completed: false },
  ];

  const recoveryTimeline = [
    { week: 'Week 1', status: 'completed', description: 'Initial assessment and basic exercises' },
    { week: 'Week 2', status: 'completed', description: 'Increase exercise intensity' },
    { week: 'Week 3', status: 'current', description: 'Advanced exercises and monitoring' },
    { week: 'Week 4', status: 'upcoming', description: 'Progress evaluation and adjustments' },
  ];

  const completedCount = dailyExercises.filter((ex) => ex.completed).length;
  const totalCount = dailyExercises.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Progress Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Progress</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${progressPercentage}%` }]}
              />
            </View>
            <Text style={styles.progressText}>
              {completedCount} of {totalCount} exercises completed
            </Text>
          </View>
        </View>

        {/* Daily Exercises */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Exercises</Text>
          {dailyExercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseItem}>
              <View style={styles.exerciseItemLeft}>
                <View
                  style={[
                    styles.checkbox,
                    exercise.completed && styles.checkboxCompleted,
                  ]}
                >
                  {exercise.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <View style={styles.exerciseContent}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseSets}>{exercise.sets}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Recovery Timeline */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recovery Timeline</Text>
          {recoveryTimeline.map((milestone, index) => (
            <View key={index} style={styles.timelineItem}>
              <View
                style={[
                  styles.timelineDot,
                  milestone.status === 'completed' && styles.timelineDotCompleted,
                  milestone.status === 'current' && styles.timelineDotCurrent,
                ]}
              />
              <View style={styles.timelineContent}>
                <Text style={styles.timelineWeek}>{milestone.week}</Text>
                <Text style={styles.timelineDescription}>{milestone.description}</Text>
              </View>
              {milestone.status === 'completed' && (
                <Text style={styles.timelineCheck}>✓</Text>
              )}
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
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 12,
    backgroundColor: colors.border,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: 6,
  },
  progressText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  exerciseItem: {
    marginBottom: 16,
  },
  exerciseItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  checkmark: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  exerciseContent: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  exerciseSets: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingLeft: 12,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.border,
    marginRight: 12,
    marginTop: 4,
  },
  timelineDotCompleted: {
    backgroundColor: colors.success,
  },
  timelineDotCurrent: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.white,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  timelineContent: {
    flex: 1,
  },
  timelineWeek: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  timelineDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  timelineCheck: {
    fontSize: 20,
    color: colors.success,
    marginLeft: 8,
  },
});

export default PlanScreen;

