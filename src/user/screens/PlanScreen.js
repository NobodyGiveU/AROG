import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const RECOVERY_TIPS = [
  "Hydration is your hidden strength.",
  "Rest is when the real growth happens.",
  "Listen to your body's signals.",
  "Good nutrition fuels better recovery.",
  "Sleep is your best recovery tool."
];

const exercises = {
  warmup: [
    { id: 1, name: 'Dynamic Leg Swings', duration: 2, icon: 'run-fast' },
    { id: 2, name: 'Hip Circles', duration: 2, icon: 'rotate-orbit' },
    { id: 3, name: 'Ankle Mobility', duration: 3, icon: 'human-handsdown' }
  ],
  mainWorkout: [
    { id: 4, name: 'Single-Leg Squats', duration: 5, icon: 'lightning-bolt' },
    { id: 5, name: 'Nordic Hamstring Curls', duration: 5, icon: 'lightning-bolt' },
    { id: 6, name: 'Balance Board Work', duration: 4, icon: 'lightning-bolt' },
    { id: 7, name: 'Jump Landing Practice', duration: 6, icon: 'lightning-bolt' }
  ],
  cooldown: [
    { id: 8, name: 'Quad Stretch', duration: 2, icon: 'run' },
    { id: 9, name: 'Hamstring Stretch', duration: 2, icon: 'run' },
    { id: 10, name: 'IT Band Foam Roll', duration: 3, icon: 'run' }
  ]
};

const PlanScreen = () => {
  const [completedExercises, setCompletedExercises] = useState(new Set());
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % RECOVERY_TIPS.length);
    }, 7000); // Change tip every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleExercise = (id) => {
    setCompletedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const calculateProgress = () => {
    const totalExercises = [...exercises.warmup, ...exercises.mainWorkout, ...exercises.cooldown].length;
    return Math.round((completedExercises.size / totalExercises) * 100);
  };

  const renderExercise = (exercise) => {
    const isCompleted = completedExercises.has(exercise.id);
    return (
      <TouchableOpacity 
        key={exercise.id} 
        style={styles.exerciseItem}
        onPress={() => toggleExercise(exercise.id)}
      >
        <View style={styles.exerciseLeft}>
          <MaterialCommunityIcons 
            name={exercise.icon} 
            size={24} 
            color={isCompleted ? '#4CAF50' : '#4B88FF'}
          />
          <Text style={[
            styles.exerciseName,
            isCompleted && styles.completedText
          ]}>
            {exercise.name}
          </Text>
          <Text style={styles.duration}>{exercise.duration} min</Text>
        </View>
        <View style={styles.checkmarkContainer}>
          {isCompleted && (
            <MaterialIcons name="check-circle" size={24} color="#4CAF50" />
          )}
          {!isCompleted && (
            <View style={styles.emptyCheckmark} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.todayText}>Today's Plan</Text>
      </View>

      <View style={styles.progressCard}>
        <Text style={styles.journeyTitle}>Your Training Journey</Text>
        <Text style={styles.journeySubtitle}>Stay consistent to maintain peak performance!</Text>
        
        <View style={styles.progressCircleContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercentage}>{calculateProgress()}%</Text>
            <Text style={styles.exerciseCount}>
              {completedExercises.size}/{[...exercises.warmup, ...exercises.mainWorkout, ...exercises.cooldown].length} Exercises
            </Text>
          </View>
        </View>
        
        <View style={styles.planTypeContainer}>
          <Text style={styles.planType}>Plan Type: Suggested Routine (Not Rehab Mode)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Warm-up</Text>
          <Text style={styles.progress}>
            {exercises.warmup.filter(ex => completedExercises.has(ex.id)).length}/{exercises.warmup.length}
          </Text>
        </View>
        {exercises.warmup.map(renderExercise)}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Main Workout</Text>
          <Text style={styles.suggestedBadge}>Suggested for You</Text>
          <Text style={styles.progress}>
            {exercises.mainWorkout.filter(ex => completedExercises.has(ex.id)).length}/{exercises.mainWorkout.length} done
          </Text>
        </View>
        {exercises.mainWorkout.map(renderExercise)}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cool-down & Recovery</Text>
          <Text style={styles.progress}>
            {exercises.cooldown.filter(ex => completedExercises.has(ex.id)).length}/{exercises.cooldown.length}
          </Text>
        </View>
        {exercises.cooldown.map(renderExercise)}
      </View>

      <View style={styles.recoveryTips}>
        <MaterialCommunityIcons name="message-text" size={24} color="#4B88FF" />
        <View style={styles.tipContainer}>
          <Text style={styles.tipTitle}>Recovery Tips</Text>
          <Text style={styles.tipText}>"{RECOVERY_TIPS[currentTipIndex]}"</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  todayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  progressCard: {
    backgroundColor: '#4B88FF',
    padding: 20,
    margin: 16,
    borderRadius: 20,
  },
  journeyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  journeySubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },
  progressCircleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  progressCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  exerciseCount: {
    fontSize: 14,
    color: '#fff',
  },
  planTypeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  planType: {
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  progress: {
    fontSize: 14,
    color: '#4B88FF',
  },
  suggestedBadge: {
    fontSize: 12,
    color: '#4B88FF',
    backgroundColor: '#EDF2FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  exerciseLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#4CAF50',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  checkmarkContainer: {
    width: 24,
    marginLeft: 12,
  },
  emptyCheckmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#DDD',
  },
  recoveryTips: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  tipContainer: {
    marginLeft: 12,
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default PlanScreen;
