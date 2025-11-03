import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

const HomeScreen = () => {
  const [currentDate] = useState(new Date());
  const [moodScore, setMoodScore] = useState(75);
  const [painLevel, setPainLevel] = useState(20);
  const [sliderWidth, setSliderWidth] = useState(0);
  const userName = 'Alex';
  const riskScore = 32;

  const handleSliderMove = (event, setValue) => {
    if (sliderWidth === 0) return;
    const touch = event.nativeEvent.locationX;
    const percentage = Math.max(0, Math.min(100, (touch / sliderWidth) * 100));
    setValue(Math.round(percentage));
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [28, 29, 30, 31, 1, 2, 3];
  const statuses = ['safe', 'safe', 'caution', 'safe', 'current', 'rest', 'rest'];

  const trainingPlan = [
    { id: 1, name: 'Dynamic Warm-up', duration: '10 min', status: 'complete' },
    { id: 2, name: 'ACL Strengthening', duration: '20 min', status: 'in-progress' },
    { id: 3, name: 'Cool Down & Stretch', duration: '5 min', status: 'pending' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'safe': return colors.safe;
      case 'caution': return colors.caution;
      case 'current': return colors.primary;
      default: return colors.rest;
    }
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>AJ</Text>
        </View>
        <View>
          <Text style={styles.appTitle}>AROG</Text>
          <Text style={styles.appSubtitle}>Injury Prevention</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationButton}>
        <Ionicons name="notifications-outline" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  const renderWelcome = () => (
    <View style={styles.welcomeSection}>
      <Text style={styles.welcomeTitle}>Welcome back, {userName}</Text>
      <Text style={styles.welcomeSubtitle}>Let's keep your knees healthy today</Text>
    </View>
  );

  const renderRiskStatus = () => (
    <View style={styles.riskCard}>
      <View style={styles.riskHeader}>
        <View style={styles.riskIconContainer}>
          <Ionicons name="shield-outline" size={24} color={colors.primary} />
        </View>
        <View>
          <Text style={styles.riskTitle}>ACL Risk Status</Text>
          <View style={styles.riskBadge}>
            <Text style={styles.riskBadgeText}>LOW</Text>
          </View>
        </View>
        <Text style={styles.riskScore}>{riskScore}</Text>
      </View>
      <Text style={styles.riskImprovement}>
        <Ionicons name="arrow-up" size={16} color={colors.safe} /> 12% improvement from last week
      </Text>
    </View>
  );

  const renderCalendar = () => (
    <View style={styles.calendarSection}>
      <Text style={styles.sectionTitle}>7-Day Safe Movement Calendar</Text>
      <View style={styles.calendar}>
        {weekDays.map((day, index) => (
          <View key={day} style={styles.calendarColumn}>
            <Text style={styles.calendarDay}>{day}</Text>
            <Text style={styles.calendarDate}>{dates[index]}</Text>
            <View 
              style={[
                styles.calendarStatus,
                { backgroundColor: getStatusColor(statuses[index]) }
              ]}
            />
          </View>
        ))}
      </View>
      <View style={styles.calendarLegend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: colors.safe }]} />
          <Text style={styles.legendText}>Safe</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: colors.caution }]} />
          <Text style={styles.legendText}>Caution</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: colors.rest }]} />
          <Text style={styles.legendText}>Rest</Text>
        </View>
      </View>
    </View>
  );

  const renderTrainingPlan = () => (
    <View style={styles.trainingCard}>
      <View style={styles.trainingHeader}>
        <Ionicons name="calendar-outline" size={20} color={colors.white} />
        <Text style={styles.trainingDate}>
          Friday, November 1
        </Text>
      </View>
      <Text style={styles.trainingTitle}>Today's Training Plan</Text>
      <View style={styles.exercises}>
        {trainingPlan.map(exercise => (
          <View key={exercise.id} style={styles.exerciseItem}>
            <View style={styles.exerciseStatus}>
              <View style={[
                styles.statusDot,
                { backgroundColor: exercise.status === 'complete' ? colors.safe :
                  exercise.status === 'in-progress' ? colors.primary : colors.rest }
              ]} />
            </View>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseDuration}>{exercise.duration}</Text>
            </View>
            <View style={styles.exerciseAction}>
              <Text style={[
                styles.exerciseActionText,
                { color: exercise.status === 'complete' ? colors.safe :
                  exercise.status === 'in-progress' ? colors.white : colors.rest }
              ]}>
                {exercise.status === 'complete' ? 'Complete' :
                 exercise.status === 'in-progress' ? 'In Progress' : ''}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.progressSection}>
        <Text style={styles.progressLabel}>Overall Progress</Text>
        <Text style={styles.progressPercent}>45%</Text>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue Training</Text>
      </TouchableOpacity>
    </View>
  );

  const renderQuickActions = () => (
    <View style={styles.quickActionsSection}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#EBF5FF' }]}>
            <Ionicons name="cloud-upload-outline" size={24} color={colors.primary} />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Upload Video</Text>
            <Text style={styles.actionSubtitle}>Analyze your movement</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#ECFDF5' }]}>
            <Ionicons name="play" size={24} color={colors.safe} />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Start Session</Text>
            <Text style={styles.actionSubtitle}>Begin your workout</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#F5F3FF' }]}>
            <Ionicons name="trophy-outline" size={24} color="#8B5CF6" />
          </View>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>View Badges</Text>
            <Text style={styles.actionSubtitle}>Track your achievements</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCheckIn = () => (
    <View style={styles.checkInSection}>
      <Text style={styles.sectionTitle}>Today's Check-in</Text>
      <View style={styles.checkInCard}>
        <View style={styles.checkInHeader}>
          <View style={[styles.checkInIconContainer, { backgroundColor: '#E6F7F0' }]}>
            <Ionicons name="happy-outline" size={24} color={colors.safe} />
          </View>
          <View style={styles.checkInTitleContainer}>
            <Text style={styles.checkInTitle}>Mood</Text>
            <Text style={styles.checkInSubtitle}>How are you feeling?</Text>
          </View>
          <Text style={styles.checkInScore}>{moodScore}%</Text>
        </View>
        <TouchableOpacity 
          style={styles.sliderContainer}
          activeOpacity={0.8}
          onTouchStart={() => {}}
          onTouchMove={(event) => handleSliderMove(event, setMoodScore)}
          onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
        >
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderProgress, { width: `${moodScore}%`, backgroundColor: colors.safe }]} />
            <View style={[styles.sliderKnob, { left: `${moodScore}%` }]}>
              <View style={[styles.knobInner, { backgroundColor: colors.safe }]} />
            </View>
          </View>
          <View style={styles.scaleLabels}>
            <Text style={styles.scaleLabel}>Low</Text>
            <Text style={styles.scaleLabel}>High</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.checkInCard, { marginTop: 16 }]}>
        <View style={styles.checkInHeader}>
          <View style={[styles.checkInIconContainer, { backgroundColor: '#FEF3C7' }]}>
            <Ionicons name="pulse" size={24} color={colors.caution} />
          </View>
          <View style={styles.checkInTitleContainer}>
            <Text style={styles.checkInTitle}>Pain Level</Text>
            <Text style={styles.checkInSubtitle}>Any discomfort?</Text>
          </View>
          <Text style={styles.checkInScore}>{painLevel}%</Text>
        </View>
        <TouchableOpacity 
          style={styles.sliderContainer}
          activeOpacity={0.8}
          onTouchStart={() => {}}
          onTouchMove={(event) => handleSliderMove(event, setPainLevel)}
          onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
        >
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderProgress, { width: `${painLevel}%`, backgroundColor: colors.caution }]} />
            <View style={[styles.sliderKnob, { left: `${painLevel}%` }]}>
              <View style={[styles.knobInner, { backgroundColor: colors.caution }]} />
            </View>
          </View>
          <View style={styles.scaleLabels}>
            <Text style={styles.scaleLabel}>None</Text>
            <Text style={styles.scaleLabel}>Severe</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderWelcome()}
        {renderRiskStatus()}
        {renderCalendar()}
        {renderTrainingPlan()}
        {renderQuickActions()}
        {renderCheckIn()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 85, // Add padding for bottom nav
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  appSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  notificationButton: {
    padding: 8,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  riskCard: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 24,
    borderRadius: 20,
    padding: 20,
  },
  riskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  riskIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  riskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  riskBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  riskBadgeText: {
    color: colors.safe,
    fontSize: 12,
    fontWeight: '600',
  },
  riskScore: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
  },
  riskImprovement: {
    color: colors.safe,
    fontSize: 14,
    marginTop: 12,
  },
  calendarSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
  },
  calendarColumn: {
    alignItems: 'center',
  },
  calendarDay: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  calendarDate: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  calendarStatus: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  calendarLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  legendText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  trainingCard: {
    backgroundColor: colors.primary,
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 20,
    padding: 20,
  },
  trainingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trainingDate: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 8,
    opacity: 0.9,
  },
  trainingTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
    marginTop: 16,
    marginBottom: 28,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  exerciseStatus: {
    marginRight: 12,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseDuration: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  exerciseAction: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  exerciseActionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  progressLabel: {
    color: colors.white,
    fontSize: 16,
  },
  progressPercent: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  continueButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  quickActionsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  quickActions: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  checkInSection: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  checkInCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  checkInHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkInIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkInTitleContainer: {
    flex: 1,
  },
  checkInTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  checkInScore: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  checkInSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sliderContainer: {
    width: '100%',
    paddingVertical: 8,
  },
  sliderTrack: {
    position: 'relative',
    width: '100%',
    height: 8,
    backgroundColor: '#F1F5F9',
    borderRadius: 4,
  },
  sliderProgress: {
    position: 'absolute',
    height: '100%',
    borderRadius: 4,
  },
  sliderKnob: {
    position: 'absolute',
    top: -6,
    marginLeft: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  knobInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  scaleLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  scaleLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default HomeScreen;
