import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../colors';

const SessionScreen = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(false);

  // Weekly progress data
  const riskyEvents = 18;
  const previousRiskyEvents = 24;
  const safeMovementRate = 88;
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const riskLevels = [75, 85, 95, 60, 70, 55, 45];

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Session</Text>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.notificationContainer}>
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
          <View style={styles.notificationBadge} />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderWeeklyProgress = () => (
    <TouchableOpacity style={styles.card} onPress={() => {}}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Weekly Progress & Safe Movement Rate</Text>
        <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
      </View>
      
      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Risky events this week</Text>
          <Text style={styles.progressImprovement}>
            <Ionicons name="trending-down" size={16} color={colors.safe} /> 25% improvement
          </Text>
        </View>
        <Text style={styles.riskCount}>
          {riskyEvents} <Text style={styles.riskSubtext}>down from {previousRiskyEvents}</Text>
        </Text>
      </View>

      <View style={styles.weeklyChart}>
        {weekDays.map((day, index) => (
          <View key={day} style={styles.chartColumn}>
            <View style={[styles.chartBar, { height: `${riskLevels[index]}%` }]} />
            <Text style={styles.chartLabel}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.safetySection}>
        <Text style={styles.safetyTitle}>Safe movement rate</Text>
        <View style={styles.safetyBar}>
          <View style={[styles.safetyProgress, { width: `${safeMovementRate}%` }]} />
        </View>
        <Text style={styles.safetyPercentage}>{safeMovementRate}%</Text>
      </View>
    </TouchableOpacity>
  );

  const renderActionButtons = () => (
    <View style={styles.actionButtons}>
      <TouchableOpacity 
        style={[styles.actionButton, !isConnected && styles.disabledButton]}
        onPress={() => isConnected && navigation.navigate('LiveSession')}
        disabled={!isConnected}
      >
        <Text style={styles.actionButtonText}>Use Personal Sensor</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.actionButton, styles.secondaryButton]}
        onPress={() => navigation.navigate('VideoAnalysis')}
      >
        <Text style={styles.secondaryButtonText}>Analyze Video</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTeamSensorHub = () => (
    <View style={styles.card}>
      <View style={styles.sensorHeader}>
        <Text style={styles.cardTitle}>Team Sensor Hub</Text>
        <View style={styles.connectionStatus}>
          <Ionicons name="wifi" size={16} color={isConnected ? colors.safe : colors.danger} />
          <Text style={[styles.statusText, { color: isConnected ? colors.safe : colors.danger }]}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </Text>
        </View>
      </View>

      <View style={styles.sensorInfo}>
        <View style={styles.sensorIcon}>
          <Ionicons name="pulse" size={24} color={colors.primary} />
        </View>
        <View style={styles.sensorDetails}>
          <Text style={styles.sensorName}>Team Sensor - Field Unit 01</Text>
          <Text style={styles.sensorSync}>Last sync: 5 min ago</Text>
        </View>
        <View style={styles.sensorStats}>
          <Text style={styles.batteryLevel}>87%</Text>
          <View style={styles.signalStrength}>
            {[...Array(5)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.signalBar,
                  { opacity: i < (isConnected ? 5 : 2) ? 1 : 0.3 }
                ]}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={[styles.placementCard, !isConnected && styles.placementCardDisconnected]}>
        <Text style={styles.managedByText}>Managed by your Sports Medicine Team</Text>
        {!isConnected && (
          <Text style={styles.offlineMessage}>
            Sensor is currently offline. Contact your sports medicine team to reconnect.
          </Text>
        )}
      </View>
    </View>
  );

  const renderStartSession = () => (
    <View style={[styles.card, styles.startSessionCard]}>
      <View style={styles.startSessionContent}>
        <View style={styles.playButton}>
          <Ionicons name="play" size={32} color={colors.primary} />
        </View>
        <Text style={styles.startSessionTitle}>
          {isConnected ? 'Start Team Session' : 'Waiting for Connection'}
        </Text>
        <Text style={styles.startSessionDescription}>
          {isConnected 
            ? 'Begin a real-time movement safety session using the active field sensor and video analysis'
            : 'Sensor connection required to start session'}
        </Text>
        <TouchableOpacity 
          style={[styles.startButton, !isConnected && styles.disabledButton]}
          disabled={!isConnected}
          onPress={() => isConnected && navigation.navigate('LiveSession')}
        >
          <Ionicons name="play" size={20} color={colors.white} />
          <Text style={styles.startButtonText}>Start Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderQuickActions = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Quick Actions</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.quickAction}>
          <Ionicons name="videocam" size={24} color={colors.primary} />
          <Text style={styles.quickActionText}>Technique Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickAction}>
          <Ionicons name="people" size={24} color={colors.primary} />
          <Text style={styles.quickActionText}>Connect with Coach</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDevToggle = () => (
    <TouchableOpacity 
      style={styles.devToggle} 
      onPress={() => setIsConnected(!isConnected)}
    >
      <Text style={styles.devToggleText}>
        Dev: Toggle Connection ({isConnected ? 'connected' : 'disconnected'})
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderWeeklyProgress()}
        {renderActionButtons()}
        {renderTeamSensorHub()}
        {renderStartSession()}
        {renderQuickActions()}
      </ScrollView>
      {renderDevToggle()}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.danger,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    margin: 16,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  progressSection: {
    marginBottom: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTitle: {
    fontSize: 16,
    color: colors.text,
  },
  progressImprovement: {
    fontSize: 14,
    color: colors.safe,
  },
  riskCount: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
  },
  riskSubtext: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  weeklyChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    marginBottom: 24,
  },
  chartColumn: {
    alignItems: 'center',
    flex: 1,
  },
  chartBar: {
    width: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
    marginBottom: 8,
  },
  chartLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  safetySection: {
    marginTop: 16,
  },
  safetyTitle: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  safetyBar: {
    height: 8,
    backgroundColor: '#F1F5F9',
    borderRadius: 4,
    marginBottom: 8,
  },
  safetyProgress: {
    height: '100%',
    backgroundColor: colors.safe,
    borderRadius: 4,
  },
  safetyPercentage: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  secondaryButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  sensorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  connectionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  sensorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sensorIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sensorDetails: {
    flex: 1,
  },
  sensorName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  sensorSync: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sensorStats: {
    alignItems: 'flex-end',
  },
  batteryLevel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  signalStrength: {
    flexDirection: 'row',
    gap: 2,
  },
  signalBar: {
    width: 3,
    height: 12,
    backgroundColor: colors.primary,
    borderRadius: 1.5,
  },
  placementCard: {
    backgroundColor: '#F0FDF4',
    borderRadius: 12,
    padding: 16,
  },
  placementCardDisconnected: {
    backgroundColor: '#FFF7ED',
  },
  managedByText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  offlineMessage: {
    fontSize: 14,
    color: colors.danger,
  },
  startSessionCard: {
    backgroundColor: '#F0F7FF',
    padding: 0,
  },
  startSessionContent: {
    alignItems: 'center',
    padding: 32,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  startSessionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  startSessionDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  startButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  startButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 16,
  },
  quickAction: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
  devToggle: {
    backgroundColor: '#1E293B',
    padding: 12,
    alignItems: 'center',
  },
  devToggleText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SessionScreen;