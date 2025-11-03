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
import colors from '../../../colors';

const HomeTab = () => {
  const [selectedChild, setSelectedChild] = useState('Emma Johnson (14)');
  
  const children = [
    { id: 1, name: 'Emma Johnson (14)', age: 14 },
    { id: 2, name: 'Alex Johnson (16)', age: 16 },
  ];

  const alerts = [
    {
      id: 1,
      type: 'error',
      title: 'Exercise Session Missed',
      description: 'Emma missed the evening stretch session. Please review the plan.',
      time: '8:00 AM',
      icon: 'alert-circle',
      color: '#FF4444'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Risk Score Update',
      description: "Emma's risk score has been updated. Current score: 6.5/10 (Moderate Risk).",
      time: '10:30 AM',
      icon: 'trending-up',
      color: '#FF9800'
    },
    {
      id: 3,
      type: 'info',
      title: 'Weekly Report Available',
      description: "Emma's weekly progress report for January 8-14 is now available to view.",
      time: '7:00 AM',
      icon: 'document-text',
      color: '#2196F3'
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: 'Send Encouragement',
      icon: 'paper-plane',
      color: '#8B5CF6',
      borderColor: '#EDE9FE'
    },
    {
      id: 2,
      title: 'Set Reminder',
      icon: 'notifications',
      color: '#10B981',
      borderColor: '#ECFDF5'
    },
    {
      id: 3,
      title: 'View Plan',
      icon: 'document-text',
      color: '#3B82F6',
      borderColor: '#EFF6FF'
    },
    {
      id: 4,
      title: 'Contact Coach',
      icon: 'chatbubble',
      color: '#F97316',
      borderColor: '#FFF7ED'
    }
  ];

  const todaysActivities = [
    { id: 1, title: 'Morning Exercise Routine', time: '8:00 AM', status: 'done' },
    { id: 2, title: 'Pain Assessment', time: '12:00 PM', status: 'pending' },
    { id: 3, title: 'Evening Stretch', time: '6:00 PM', status: 'pending' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Parent Engagement Card */}
        <View style={styles.engagementCard}>
          <View style={styles.engagementHeader}>
            <Ionicons name="flame" size={24} color="#FFD700" />
            <Text style={styles.engagementTitle}>Parent Engagement</Text>
            <Ionicons name="bookmark-outline" size={24} color="white" style={styles.bookmarkIcon} />
          </View>
          <Text style={styles.engagementText}>You've checked in 5 times this week</Text>
          <View style={styles.streakContainer}>
            <Text style={styles.streakNumber}>7</Text>
            <Text style={styles.streakText}>day streak</Text>
          </View>
          <Text style={styles.encouragementText}>Keep supporting Emma!</Text>
        </View>

        {/* Alerts Feed */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Alerts Feed</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {alerts.map(alert => (
            <View key={alert.id} style={styles.alertItem}>
              <View style={[styles.alertIcon, { backgroundColor: alert.color }]}>
                <Ionicons name={alert.icon} size={20} color="white" />
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertDescription}>{alert.description}</Text>
                <Text style={styles.alertTime}>{alert.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map(action => (
              <TouchableOpacity
                key={action.id}
                style={[styles.quickActionButton, { borderColor: action.borderColor }]}
              >
                <Ionicons name={action.icon} size={24} color={action.color} />
                <Text style={[styles.quickActionText, { color: action.color }]}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Select Child */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Child</Text>
          <View style={styles.childSelector}>
            {children.map(child => (
              <TouchableOpacity
                key={child.id}
                style={[
                  styles.childButton,
                  selectedChild === child.name && styles.childButtonActive
                ]}
                onPress={() => setSelectedChild(child.name)}
              >
                <Text
                  style={[
                    styles.childButtonText,
                    selectedChild === child.name && styles.childButtonTextActive
                  ]}
                >
                  {child.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Current Injury Risk */}
          <View style={styles.riskCard}>
            <View style={styles.riskHeader}>
              <Text style={styles.riskTitle}>Current Injury Risk</Text>
              <View style={styles.riskBadge}>
                <Text style={styles.riskBadgeText}>Moderate Risk</Text>
              </View>
            </View>
            <View style={styles.riskContent}>
              <View style={styles.riskScoreCircle}>
                <Text style={styles.riskScore}>6.5</Text>
                <Text style={styles.riskScoreLabel}>/10</Text>
              </View>
              <View style={styles.riskInfo}>
                <View style={styles.trendContainer}>
                  <Ionicons name="pulse" size={16} color="#6B7280" />
                  <Text style={styles.trendText}>Trend: Stable</Text>
                </View>
                <Text style={styles.riskDescription}>
                  Based on recent activity patterns and recovery metrics
                </Text>
              </View>
            </View>
          </View>

          {/* Compliance Section */}
          <View style={styles.complianceContainer}>
            <View style={styles.complianceCard}>
              <Text style={styles.complianceNumber}>86%</Text>
              <Text style={styles.complianceLabel}>This Week</Text>
            </View>
            <View style={styles.complianceCard}>
              <Text style={styles.complianceNumber}>5</Text>
              <Text style={styles.complianceLabel}>Sessions</Text>
            </View>
            <View style={styles.complianceCard}>
              <Text style={styles.complianceNumber}>7</Text>
              <View style={styles.streakBadge}>
                <Text style={styles.complianceLabel}>Day Streak</Text>
                <Ionicons name="flame" size={16} color="#FF9800" />
              </View>
            </View>
          </View>

          {/* Today's Overview */}
          <View style={styles.todaySection}>
            <Text style={styles.sectionTitle}>Today's Overview</Text>
            {todaysActivities.map(activity => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Ionicons
                    name={activity.status === 'done' ? 'checkmark-circle' : 'time'}
                    size={24}
                    color={activity.status === 'done' ? '#10B981' : '#6B7280'}
                  />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
                <View style={styles.activityStatus}>
                  <Text
                    style={[
                      styles.activityStatusText,
                      { color: activity.status === 'done' ? '#10B981' : '#6B7280' }
                    ]}
                  >
                    {activity.status === 'done' ? 'Done' : 'Pending'}
                  </Text>
                </View>
              </View>
            ))}
          </View>
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
  engagementCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  engagementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  engagementTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
  },
  bookmarkIcon: {
    marginLeft: 'auto',
  },
  engagementText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 16,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  streakNumber: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    marginRight: 8,
  },
  streakText: {
    color: 'white',
    fontSize: 20,
  },
  encouragementText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  section: {
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
    marginBottom: 16,
  },
  seeAllText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '500',
  },
  alertItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  alertIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  alertDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickActionButton: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 12,
  },
  quickActionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  childSelector: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  childButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  childButtonActive: {
    backgroundColor: '#8B5CF6',
  },
  childButtonText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  childButtonTextActive: {
    color: 'white',
  },
  riskCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  riskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  riskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  riskBadge: {
    backgroundColor: '#F97316',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  riskBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  riskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  riskScoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#F97316',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  riskScore: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  riskScoreLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  riskInfo: {
    flex: 1,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  trendText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  riskDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  complianceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  complianceCard: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  complianceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  complianceLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  activityIcon: {
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  activityStatus: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  activityStatusText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default HomeTab;