import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

const SessionSummaryScreen = ({ navigation }) => {
  const sessionData = {
    duration: '24:35',
    riskScore: 28,
    metrics: {
      avgHeartRate: '152 bpm',
      maxGForce: '3.8 G',
      avgAsymmetry: '14%',
    },
    riskEvents: [
      {
        title: 'Asymmetric Movement',
        description: '32% asymmetry detected during cutting motion',
        time: '15:47',
        severity: 'high',
      },
      {
        title: 'Rapid Deceleration',
        description: 'Quick stop with improper knee alignment',
        time: '21:10',
        severity: 'moderate',
      },
    ],
    recommendations: [
      'Focus on strengthening exercises for your left knee',
      'Practice proper landing technique to reduce impact forces',
      'Work on balance drills to improve symmetry',
    ],
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Session Summary</Text>
      <TouchableOpacity>
        <Ionicons name="share-outline" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  const renderOverview = () => (
    <View style={styles.overviewContainer}>
      <View style={styles.overviewCard}>
        <View style={styles.overviewItem}>
          <Ionicons name="time-outline" size={24} color={colors.primary} />
          <Text style={styles.overviewValue}>{sessionData.duration}</Text>
          <Text style={styles.overviewLabel}>Duration</Text>
        </View>
        <View style={styles.overviewDivider} />
        <View style={styles.overviewItem}>
          <Ionicons name="trending-up" size={24} color={colors.safe} />
          <Text style={styles.overviewValue}>{sessionData.riskScore}</Text>
          <View style={styles.riskBadge}>
            <Text style={styles.riskBadgeText}>Low Risk</Text>
          </View>
          <Text style={styles.overviewLabel}>Risk Score</Text>
        </View>
      </View>
    </View>
  );

  const renderMetrics = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Session Metrics</Text>
      <View style={styles.metricsGrid}>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Avg Heart Rate</Text>
          <Text style={styles.metricValue}>{sessionData.metrics.avgHeartRate}</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Max G-Force</Text>
          <Text style={styles.metricValue}>{sessionData.metrics.maxGForce}</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Avg Asymmetry</Text>
          <Text style={styles.metricValue}>{sessionData.metrics.avgAsymmetry}</Text>
        </View>
      </View>
    </View>
  );

  const renderRiskEvents = () => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Risk Events Detected</Text>
        <View style={styles.eventCount}>
          <Text style={styles.eventCountText}>{sessionData.riskEvents.length}</Text>
        </View>
      </View>
      {sessionData.riskEvents.map((event, index) => (
        <View key={index} style={styles.eventCard}>
          <View style={styles.eventHeader}>
            <View style={styles.eventInfo}>
              <Ionicons name="alert-triangle" size={20} color={event.severity === 'high' ? '#DC2626' : '#D97706'} />
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventTime}>{event.time}</Text>
            </View>
          </View>
          <Text style={styles.eventDescription}>{event.description}</Text>
          <View style={[
            styles.severityBadge,
            { backgroundColor: event.severity === 'high' ? '#FEE2E2' : '#FEF3C7' }
          ]}>
            <Text style={[
              styles.severityText,
              { color: event.severity === 'high' ? '#DC2626' : '#D97706' }
            ]}>{event.severity} severity</Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderRecommendations = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Recommendations</Text>
      <View style={styles.recommendationsList}>
        {sessionData.recommendations.map((recommendation, index) => (
          <View key={index} style={styles.recommendationItem}>
            <Text style={styles.recommendationText}>• {recommendation}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderOverview()}
        {renderMetrics()}
        {renderRiskEvents()}
        {renderRecommendations()}
      </ScrollView>
      <TouchableOpacity 
        style={styles.saveButton}
        onPress={() => navigation.navigate('SessionMain')}
      >
        <Ionicons name="checkmark-circle" size={20} color={colors.white} />
        <Text style={styles.saveButtonText}>Save Session & Return</Text>
      </TouchableOpacity>
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
  overviewContainer: {
    padding: 16,
  },
  overviewCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  overviewItem: {
    alignItems: 'center',
  },
  overviewDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#E2E8F0',
  },
  overviewValue: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginVertical: 8,
  },
  overviewLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  riskBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  riskBadgeText: {
    fontSize: 12,
    color: colors.safe,
    fontWeight: '600',
  },
  card: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    borderRadius: 20,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    alignItems: 'flex-start',
  },
  metricLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  eventCount: {
    backgroundColor: '#F1F5F9',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventCountText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  eventTime: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  eventDescription: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 12,
  },
  severityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  severityText: {
    fontSize: 12,
    fontWeight: '600',
  },
  recommendationsList: {
    gap: 12,
  },
  recommendationItem: {
    flexDirection: 'row',
  },
  recommendationText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SessionSummaryScreen;