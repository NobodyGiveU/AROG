import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../colors';

const LiveSessionScreen = ({ navigation }) => {
  const [showPreparingModal, setShowPreparingModal] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  const sensorData = {
    name: 'Strider-003',
    placement: 'Right Knee',
    batteryLevel: 87,
    signalStrength: 5,
    heartRate: '142 bpm',
    gForce: '2.4g',
    asymmetry: '12%',
  };

  const riskAlerts = [
    {
      time: '09:31 AM',
      severity: 'High Risk',
      message: 'Inward knee collapse detected',
    },
    {
      time: '09:44 AM',
      severity: 'Medium Risk',
      message: 'Hard landing – try more knee bend',
    },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Live Session</Text>
      <TouchableOpacity>
        <View style={styles.notificationContainer}>
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
          <View style={styles.notificationBadge} />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderSensorStatus = () => (
    <View style={styles.sensorCard}>
      <View style={styles.sensorHeader}>
        <Text style={styles.cardTitle}>Sensor Status</Text>
        <View style={styles.connectionStatus}>
          <Ionicons name="wifi" size={16} color={colors.safe} />
          <Text style={[styles.statusText, { color: colors.safe }]}>Connected</Text>
        </View>
      </View>

      <View style={styles.sensorInfo}>
        <View style={styles.sensorIcon}>
          <Text style={styles.sensorIconText}>v</Text>
        </View>
        <View style={styles.sensorDetails}>
          <Text style={styles.sensorName}>{sensorData.name}</Text>
          <Text style={styles.sensorPlacement}>{sensorData.placement}</Text>
        </View>
        <View style={styles.sensorStats}>
          <Text style={styles.batteryLevel}>{sensorData.batteryLevel}%</Text>
          <View style={styles.signalStrength}>
            {[...Array(5)].map((_, i) => (
              <View
                key={i}
                style={[
                  styles.signalBar,
                  { opacity: i < sensorData.signalStrength ? 1 : 0.3 }
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );

  const renderLiveAnalysis = () => (
    <View style={styles.analysisCard}>
      <View style={styles.analysisHeader}>
        <Text style={styles.cardTitle}>Live Movement Analysis</Text>
        <View style={styles.recordingStatus}>
          <View style={styles.recordingDot} />
          <Text style={styles.recordingText}>Recording</Text>
        </View>
      </View>

      <View style={styles.metricsContainer}>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Heart Rate</Text>
          <Text style={styles.metricValue}>{sensorData.heartRate}</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Peak G-Force</Text>
          <Text style={styles.metricValue}>{sensorData.gForce}</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Asymmetry</Text>
          <Text style={styles.metricValue}>{sensorData.asymmetry}</Text>
        </View>
      </View>
    </View>
  );

  const renderRiskAlerts = () => (
    <View style={styles.alertsCard}>
      <View style={styles.alertsHeader}>
        <Text style={styles.cardTitle}>Risk Alerts</Text>
        <View style={styles.alertCount}>
          <Text style={styles.alertCountText}>{riskAlerts.length} Events</Text>
        </View>
      </View>

      {riskAlerts.map((alert, index) => (
        <View key={index} style={styles.alertItem}>
          <View style={styles.alertTime}>
            <Text style={styles.timeText}>{alert.time}</Text>
            <View style={[
              styles.severityBadge,
              { backgroundColor: alert.severity === 'High Risk' ? '#FEE2E2' : '#FEF3C7' }
            ]}>
              <Text style={[
                styles.severityText,
                { color: alert.severity === 'High Risk' ? '#DC2626' : '#D97706' }
              ]}>{alert.severity}</Text>
            </View>
          </View>
          <Text style={styles.alertMessage}>{alert.message}</Text>
          <TouchableOpacity style={styles.howToFix}>
            <Text style={styles.howToFixText}>How to fix →</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const renderEndSession = () => (
    <TouchableOpacity 
      style={styles.endSessionButton}
      onPress={() => {
        setIsRecording(false);
        navigation.navigate('SessionSummary');
      }}
    >
      <Text style={styles.endSessionText}>End Session</Text>
    </TouchableOpacity>
  );

  const renderPreparingModal = () => (
    <Modal
      visible={showPreparingModal}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => setShowPreparingModal(false)}
          >
            <Ionicons name="close" size={24} color={colors.text} />
          </TouchableOpacity>
          
          <View style={styles.preparingIcon}>
            <Text style={styles.preparingIconText}>v</Text>
          </View>
          <Text style={styles.preparingTitle}>Preparing Sensor</Text>
          <Text style={styles.preparingSubtitle}>
            Warming up your MOveQL sensor and checking connection...
          </Text>
          
          <View style={styles.sensorStatusBox}>
            <Text style={styles.statusLabel}>Sensor status: Ready</Text>
            <Text style={styles.statusLabel}>Connection: Strong</Text>
            <Text style={styles.statusLabel}>Battery: {sensorData.batteryLevel}%</Text>
            <View style={styles.readyMessage}>
              <Ionicons name="checkmark-circle" size={20} color={colors.safe} />
              <Text style={styles.readyText}>Ready to record movement!</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderSensorStatus()}
        {renderLiveAnalysis()}
        {renderRiskAlerts()}
      </ScrollView>
      {renderEndSession()}
      {renderPreparingModal()}
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
  sensorCard: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 20,
    padding: 20,
  },
  sensorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
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
  },
  sensorIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#EBF5FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sensorIconText: {
    fontSize: 24,
    color: colors.primary,
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
  sensorPlacement: {
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
  analysisCard: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    borderRadius: 20,
    padding: 20,
  },
  analysisHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  recordingStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  recordingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.safe,
  },
  recordingText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.safe,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    alignItems: 'center',
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
  alertsCard: {
    backgroundColor: colors.white,
    margin: 16,
    marginTop: 0,
    borderRadius: 20,
    padding: 20,
  },
  alertsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  alertCount: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  alertCountText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '600',
  },
  alertItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  alertTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 8,
  },
  severityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  severityText: {
    fontSize: 12,
    fontWeight: '600',
  },
  alertMessage: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
  },
  howToFix: {
    alignSelf: 'flex-start',
  },
  howToFixText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  endSessionButton: {
    margin: 16,
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  endSessionText: {
    color: '#DC2626',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  preparingIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#EBF5FF',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  preparingIconText: {
    fontSize: 32,
    color: colors.primary,
  },
  preparingTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  preparingSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  sensorStatusBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
  },
  statusLabel: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
  },
  readyMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    gap: 8,
  },
  readyText: {
    fontSize: 14,
    color: colors.safe,
    fontWeight: '500',
  },
});

export default LiveSessionScreen;