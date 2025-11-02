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
  const teamExercises = [
    { id: 1, name: 'Group Warm-up', sets: '1 set x 10 min', completed: true },
    { id: 2, name: 'Team Challenge Circuit', sets: '3 rounds', completed: true },
    { id: 3, name: 'Cool-down Stretches', sets: '1 set x 5 min', completed: false },
  ];

  const personalExercises = [
    { id: 1, name: 'Shoulder Mobility', sets: '3 sets x 10 reps', completed: true },
    { id: 2, name: 'Core Strengthening', sets: '2 sets x 12 reps', completed: true },
    { id: 3, name: 'Balance Training', sets: '2 sets x 5 reps', completed: false },
    { id: 4, name: 'Posture Exercises', sets: '2 sets x 8 reps', completed: false },
  ];

  const teamProgress = {
    completed: 2,
    total: 3,
    percentage: 66.7,
  };

  const personalProgress = {
    completed: 2,
    total: 4,
    percentage: 50.0,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Team Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Team Plan</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${teamProgress.percentage}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {teamProgress.completed} of {teamProgress.total} exercises completed
            </Text>
          </View>
          {teamExercises.map((exercise) => (
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

        {/* Personal Rehab Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Rehab Plan</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${personalProgress.percentage}%` },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {personalProgress.completed} of {personalProgress.total} exercises completed
            </Text>
          </View>
          {personalExercises.map((exercise) => (
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
    marginBottom: 16,
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
});

export default PlanScreen;

