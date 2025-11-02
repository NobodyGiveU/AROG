import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../colors';
import { childProfile, riskScore, adherenceStats, dailyActivity } from '../data/childData';
import { alerts as alertsData } from '../data/alertsData';

const HomeTab = () => {
  const [selectedChild, setSelectedChild] = useState(1);

  // Dummy data - multiple children
  const children = [
    { id: 1, name: 'Emma Johnson', age: 14 },
    { id: 2, name: 'Alex Johnson', age: 16 },
  ];

  // Filter alerts for today
  const todayAlerts = alertsData.filter((alert) => !alert.read).slice(0, 5);

  const getRiskColor = () => {
    if (riskScore.status.includes('Low')) return colors.success; // Green
    if (riskScore.status.includes('High')) return colors.error; // Red
    return '#FF9800'; // Orange for Moderate
  };

  const todaysExercises = [
    { id: 1, name: 'Morning Exercise Routine', time: '8:00 AM', completed: true },
    { id: 2, name: 'Pain Assessment', time: '12:00 PM', completed: false },
    { id: 3, name: 'Evening Stretch', time: '6:00 PM', completed: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Child Switcher */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Select Child</Text>
          <View style={styles.childSwitcher}>
            {children.map((child) => (
              <TouchableOpacity
                key={child.id}
                style={[
                  styles.childButton,
                  selectedChild === child.id && styles.childButtonActive,
                ]}
                onPress={() => setSelectedChild(child.id)}
              >
                <Text
                  style={[
                    styles.childButtonText,
                    selectedChild === child.id && styles.childButtonTextActive,
                  ]}
                >
                  {child.name} ({child.age})
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Risk Banner */}
        <View style={[styles.card, styles.riskBanner, { borderLeftColor: getRiskColor() }]}>
          <View style={styles.riskHeader}>
            <Text style={styles.riskLabel}>Current Injury Risk</Text>
            <View style={[styles.riskBadge, { backgroundColor: getRiskColor() }]}>
              <Text style={styles.riskBadgeText}>{riskScore.status}</Text>
            </View>
          </View>
          <Text style={styles.riskScore}>Risk Score: {riskScore.current}/10</Text>
          <Text style={styles.riskTrend}>
            Trend: {riskScore.trend === 'improving' ? '📈 Improving' : riskScore.trend === 'stable' ? '➡️ Stable' : '📉 Worsening'}
          </Text>
        </View>

        {/* Compliance Tile */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Compliance</Text>
          <View style={styles.complianceRow}>
            <View style={styles.complianceStat}>
              <Text style={styles.complianceValue}>{adherenceStats.currentWeek.completionRate.toFixed(0)}%</Text>
              <Text style={styles.complianceLabel}>This Week</Text>
            </View>
            <View style={styles.complianceDivider} />
            <View style={styles.complianceStat}>
              <Text style={styles.complianceValue}>{adherenceStats.currentWeek.sessionsCompleted}</Text>
              <Text style={styles.complianceLabel}>Sessions</Text>
            </View>
            <View style={styles.complianceDivider} />
            <View style={styles.complianceStat}>
              <Text style={styles.complianceValue}>7</Text>
              <Text style={styles.complianceLabel}>Day Streak 🔥</Text>
            </View>
          </View>
        </View>

        {/* Today's Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Overview</Text>
          {todaysExercises.map((exercise) => (
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
                  <Text style={styles.exerciseTime}>{exercise.time}</Text>
                </View>
              </View>
              <Text style={styles.checkinStatus}>
                {exercise.completed ? '✓ Checked in' : 'Pending'}
              </Text>
            </View>
          ))}
        </View>

        {/* Alerts Feed */}
        <View style={styles.card}>
          <View style={styles.alertsHeader}>
            <Text style={styles.cardTitle}>Alerts Feed</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {todayAlerts.map((alert) => (
            <View key={alert.id} style={styles.alertItem}>
              <View
                style={[
                  styles.alertIndicator,
                  alert.type === 'success' && styles.alertSuccess,
                  alert.type === 'warning' && styles.alertWarning,
                  alert.type === 'important' && styles.alertImportant,
                ]}
              />
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertMessage}>{alert.message}</Text>
                <Text style={styles.alertTime}>
                  {new Date(alert.timestamp).toLocaleTimeString()}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>💌</Text>
              <Text style={styles.quickActionText}>Send Encouragement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>📋</Text>
              <Text style={styles.quickActionText}>View Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>⏰</Text>
              <Text style={styles.quickActionText}>Set Reminder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>👨‍⚕️</Text>
              <Text style={styles.quickActionText}>Contact Coach</Text>
            </TouchableOpacity>
          </View>
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
  childSwitcher: {
    flexDirection: 'row',
    gap: 12,
  },
  childButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
  },
  childButtonActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  childButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  childButtonTextActive: {
    color: colors.white,
  },
  riskBanner: {
    borderLeftWidth: 4,
    backgroundColor: colors.background,
  },
  riskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  riskLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  riskBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  riskBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  riskScore: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  riskTrend: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  complianceRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  complianceStat: {
    alignItems: 'center',
  },
  complianceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 4,
  },
  complianceLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  complianceDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  exerciseItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
    color: colors.text,
    fontWeight: '500',
  },
  exerciseTime: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  checkinStatus: {
    fontSize: 12,
    color: colors.success,
    fontWeight: '600',
  },
  alertsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '600',
  },
  alertItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  alertIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: 12,
    marginTop: 6,
  },
  alertSuccess: {
    backgroundColor: colors.success,
  },
  alertWarning: {
    backgroundColor: '#F39C12',
  },
  alertImportant: {
    backgroundColor: colors.error,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  alertMessage: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionButton: {
    width: '47%',
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  quickActionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
});

export default HomeTab;

