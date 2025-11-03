import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../colors';

const ChildTab = () => {
  const childProfile = {
    initials: 'EJ',
    name: 'Emma Johnson',
    sport: 'Soccer',
    position: 'Midfielder',
    team: 'Valley United U14',
    recoveryPhase: 'Improving',
  };

  const exercisePlan = [
    { 
      id: 1, 
      name: 'Shoulder Rolls',
      reps: '3x10 reps',
      frequency: 'daily',
      icon: 'pulse'
    },
    { 
      id: 2, 
      name: 'Neck Stretches',
      reps: '2x15 reps',
      frequency: 'daily',
      icon: 'pulse'
    },
    { 
      id: 3, 
      name: 'Hamstring Stretches',
      reps: '3x30 seconds',
      frequency: '3x per week',
      icon: 'radio-button-on'
    },
    { 
      id: 4, 
      name: 'Core Strengthening',
      reps: '2x20 reps',
      frequency: 'daily',
      icon: 'fitness'
    }
  ];

  const sessions = [
    {
      id: 1,
      type: 'Physical Therapy',
      date: '2024-01-14',
      duration: '25 min',
      notes: 'Focused on knee mobility and strength exercises.',
      tags: ['Quad Sets', 'Wall Sits'],
      icon: 'fitness'
    },
    {
      id: 2,
      type: 'Exercise Session',
      date: '2024-01-13',
      duration: '20 min',
      notes: 'Completed morning routine. No pain reported.',
      tags: ['Core work', 'Stretching'],
      icon: 'pulse'
    },
    {
      id: 3,
      type: 'Physical Therapy',
      date: '2024-01-12',
      duration: '30 min',
      notes: 'Assessment and adjustment of exercise plan.',
      tags: ['Flexibility assessment', 'New exercises'],
      icon: 'fitness'
    }
  ];

  const reflections = [
    {
      id: 1,
      date: '2024-01-14',
      pain: 3,
      status: 'Improving',
      notes: 'Feeling good, knee less stiff.',
      mood: 'happy'
    },
    {
      id: 2,
      date: '2024-01-13',
      pain: 4,
      status: 'Stable',
      notes: "Some soreness after yesterday's PT session.",
      mood: 'neutral'
    },
    {
      id: 3,
      date: '2024-01-12',
      pain: 3,
      status: 'Improving',
      notes: 'Good energy, completed all exercises.',
      mood: 'happy'
    }
  ];

  const renderMoodEmoji = (mood) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'sad': return '😟';
      default: return '😊';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{childProfile.initials}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{childProfile.name}</Text>
            <Text style={styles.details}>
              {childProfile.sport} • {childProfile.position} • {childProfile.team}
            </Text>
            <View style={styles.recoveryBadge}>
              <View style={styles.recoveryDot} />
              <Text style={styles.recoveryText}>
                Recovery Phase: {childProfile.recoveryPhase}
              </Text>
            </View>
          </View>
        </View>

        {/* Info Cards */}
        <View style={styles.infoCards}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Age</Text>
            <Text style={styles.infoValue}>14 yrs</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Female</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Risk Trend</Text>
            <View style={styles.trendContainer}>
              <Text style={styles.infoValue}>Stable</Text>
              <Ionicons name="trending-down" size={16} color="#10B981" />
            </View>
          </View>
        </View>

        {/* Risk Trends Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Risk Trends Over Time</Text>
          <Text style={styles.sectionSubtitle}>
            Lower score = less pain. Great progress!
          </Text>
          <View style={styles.graphPlaceholder}>
            {/* Add your graph component here */}
          </View>
          <View style={styles.riskLegend}>
            <View style={styles.legendItem}>
              <Text style={styles.legendEmoji}>🙂</Text>
              <Text style={styles.legendText}>Low</Text>
            </View>
            <View style={styles.legendItem}>
              <Text style={styles.legendEmoji}>😐</Text>
              <Text style={styles.legendText}>Medium</Text>
            </View>
            <View style={styles.legendItem}>
              <Text style={styles.legendEmoji}>😣</Text>
              <Text style={styles.legendText}>High</Text>
            </View>
          </View>
        </View>

        {/* Exercise Plan */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exercise Plan</Text>
            <Text style={styles.readOnly}>Read-Only</Text>
          </View>
          <View style={styles.assignedBy}>
            <Text style={styles.assignedText}>
              Assigned by <Text style={styles.doctorName}>Dr. Sarah Mitchell, PT</Text>
            </Text>
          </View>
          {exercisePlan.map(exercise => (
            <View key={exercise.id} style={styles.exerciseItem}>
              <View style={styles.exerciseIcon}>
                <Ionicons name={exercise.icon} size={24} color="#8B5CF6" />
              </View>
              <View style={styles.exerciseContent}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseReps}>{exercise.reps}</Text>
              </View>
              <View style={styles.frequencyBadge}>
                <Text style={styles.frequencyText}>{exercise.frequency}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sessions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Child Progress - Sessions</Text>
          {sessions.map(session => (
            <View key={session.id} style={styles.sessionItem}>
              <View style={styles.sessionDot} />
              <View style={styles.sessionIcon}>
                <Ionicons name={session.icon} size={24} color="#8B5CF6" />
              </View>
              <View style={styles.sessionContent}>
                <View style={styles.sessionHeader}>
                  <Text style={styles.sessionType}>{session.type}</Text>
                  <Text style={styles.sessionDuration}>{session.duration}</Text>
                </View>
                <Text style={styles.sessionDate}>{session.date}</Text>
                <Text style={styles.sessionNotes}>{session.notes}</Text>
                <View style={styles.tagContainer}>
                  <Text style={styles.tagLabel}>Tags:</Text>
                  {session.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Recovery Reflections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Emma's Recovery Reflections</Text>
            <TouchableOpacity style={styles.remindButton}>
              <Text style={styles.remindText}>Remind</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.reflectionSubtitle}>Daily wellness tracking</Text>
          {reflections.map(reflection => (
            <View key={reflection.id} style={styles.reflectionItem}>
              <View style={[styles.reflectionContent, 
                { backgroundColor: reflection.status === 'Improving' ? '#ECFDF5' : '#FFFBEB' }]}>
                <View style={styles.reflectionHeader}>
                  <View style={styles.painContainer}>
                    <Text style={styles.moodEmoji}>
                      {renderMoodEmoji(reflection.mood)}
                    </Text>
                    <Text style={styles.painScore}>Pain: {reflection.pain}/10</Text>
                  </View>
                  <View style={[styles.statusBadge, 
                    { backgroundColor: reflection.status === 'Improving' ? '#D1FAE5' : '#FEF3C7' }]}>
                    <Text style={[styles.statusText, 
                      { color: reflection.status === 'Improving' ? '#059669' : '#D97706' }]}>
                      {reflection.status}
                    </Text>
                    {reflection.status === 'Improving' && (
                      <Ionicons name="trending-up" size={16} color="#059669" />
                    )}
                  </View>
                </View>
                <Text style={styles.reflectionNotes}>{reflection.notes}</Text>
                <Text style={styles.reflectionDate}>{reflection.date}</Text>
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
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  recoveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  recoveryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  recoveryText: {
    fontSize: 14,
    color: '#059669',
  },
  infoCards: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 12,
  },
  infoCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  readOnly: {
    fontSize: 14,
    color: '#6B7280',
  },
  assignedBy: {
    backgroundColor: '#F5F3FF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  assignedText: {
    fontSize: 14,
    color: '#6B7280',
  },
  doctorName: {
    color: '#8B5CF6',
    fontWeight: '500',
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  exerciseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseContent: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  exerciseReps: {
    fontSize: 14,
    color: '#6B7280',
  },
  frequencyBadge: {
    backgroundColor: '#F5F3FF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  frequencyText: {
    fontSize: 12,
    color: '#8B5CF6',
  },
  sessionItem: {
    flexDirection: 'row',
    marginBottom: 24,
    position: 'relative',
  },
  sessionDot: {
    position: 'absolute',
    left: -4,
    top: 28,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8B5CF6',
  },
  sessionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sessionContent: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  sessionType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  sessionDuration: {
    fontSize: 14,
    color: '#6B7280',
    backgroundColor: '#F3F4F6',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  sessionDate: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  sessionNotes: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  tag: {
    backgroundColor: '#F5F3FF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: '#8B5CF6',
  },
  remindButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  remindText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  reflectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  reflectionItem: {
    marginBottom: 12,
  },
  reflectionContent: {
    borderRadius: 12,
    padding: 16,
  },
  reflectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  painContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  moodEmoji: {
    fontSize: 20,
  },
  painScore: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    gap: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  reflectionNotes: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  reflectionDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  riskLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendEmoji: {
    fontSize: 16,
  },
  legendText: {
    fontSize: 14,
    color: '#6B7280',
  },
  graphPlaceholder: {
    height: 200,
    backgroundColor: '#F5F3FF',
    borderRadius: 12,
    marginVertical: 16,
  },
});

export default ChildTab;
