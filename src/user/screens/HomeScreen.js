import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import colors from '../../../colors';

const HomeScreen = () => {
  const [showRiskDetails, setShowRiskDetails] = useState(false);
  
  // Dummy data
  const riskScore = 75; // Out of 100 as percentage
  const todaysPlan = [
    { id: 1, task: 'Morning Exercise Routine', time: '8:00 AM', completed: true },
    { id: 2, task: 'Pain Assessment', time: '12:00 PM', completed: false },
    { id: 3, task: 'Evening Stretch', time: '6:00 PM', completed: false },
  ];
  const alerts = [
    { id: 1, message: 'Remember to complete your morning exercises', type: 'info' },
    { id: 2, message: 'New session data uploaded successfully', type: 'success' },
  ];

  // Analysis charts data
  const analysisCharts = [
    { id: 1, title: 'ACL Injury Rates Vs. Age', data: 'Chart data for Age analysis' },
    { id: 2, title: 'ACL Injury Rates Vs. Weight', data: 'Chart data for Weight analysis' },
    { id: 3, title: 'ACL Injury Rates Vs. Height', data: 'Chart data for Height analysis' },
    { id: 4, title: 'ACL Injury Rates Vs. Training Intensity', data: 'Chart data for Training Intensity analysis' },
    { id: 5, title: 'ACL Injury Rates Vs. Training Hours', data: 'Chart data for Training Hours analysis' },
    { id: 6, title: 'ACL Injury Rates Vs. Gender', data: 'Chart data for Gender analysis' },
    { id: 7, title: 'ACL Injury Rates Vs. Rest Days', data: 'Chart data for Rest Days analysis' },
    { id: 8, title: 'ACL Recovery Time Vs. Age', data: 'Chart data for Recovery Time analysis' },
  ];

  const getRiskStatus = () => {
    if (riskScore < 30) return 'Low Risk';
    if (riskScore < 70) return 'Moderate Risk';
    return 'High Risk';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Risk Score Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Risk Score</Text>
          <TouchableOpacity
            onPress={() => setShowRiskDetails(true)}
            activeOpacity={0.8}
          >
            <View style={styles.riskScoreContainer}>
              <Text style={styles.riskScore}>{riskScore}</Text>
              <Text style={styles.riskScoreLabel}>%</Text>
            </View>
            <Text style={styles.riskScoreStatus}>{getRiskStatus()}</Text>
            <Text style={styles.clickForDetails}>Tap to view detailed analysis</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Plan */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today's Plan</Text>
          {todaysPlan.map((item) => (
            <View key={item.id} style={styles.planItem}>
              <View style={styles.planItemLeft}>
                <View
                  style={[
                    styles.checkbox,
                    item.completed && styles.checkboxCompleted,
                  ]}
                >
                  {item.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <View style={styles.planItemContent}>
                  <Text style={styles.planItemTask}>{item.task}</Text>
                  <Text style={styles.planItemTime}>{item.time}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Alerts */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Alerts</Text>
          {alerts.map((alert) => (
            <View key={alert.id} style={styles.alertItem}>
              <View
                style={[
                  styles.alertIndicator,
                  alert.type === 'success' && styles.alertSuccess,
                ]}
              />
              <Text style={styles.alertText}>{alert.message}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Risk Details Modal */}
      <Modal
        visible={showRiskDetails}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowRiskDetails(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Risk Score Analysis</Text>
              <TouchableOpacity
                onPress={() => setShowRiskDetails(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalScrollView}>
              <View style={styles.scoreSummary}>
                <Text style={styles.scoreValue}>{riskScore}%</Text>
                <Text style={styles.scoreLabel}>{getRiskStatus()}</Text>
              </View>

              <Text style={styles.analysisTitle}>Analysis Charts</Text>
              {analysisCharts.map((chart) => (
                <View key={chart.id} style={styles.chartCard}>
                  <Text style={styles.chartTitle}>{chart.title}</Text>
                  <View style={styles.chartPlaceholder}>
                    <Text style={styles.chartPlaceholderText}>
                      📊 {chart.data}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  riskScoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginVertical: 8,
  },
  riskScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
  },
  riskScoreLabel: {
    fontSize: 24,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  riskScoreStatus: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
  clickForDetails: {
    fontSize: 12,
    color: colors.primary,
    textAlign: 'center',
    marginTop: 8,
    textDecorationLine: 'underline',
  },
  planItem: {
    marginBottom: 12,
  },
  planItemLeft: {
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
  planItemContent: {
    flex: 1,
  },
  planItemTask: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  planItemTime: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: 12,
  },
  alertSuccess: {
    backgroundColor: colors.success,
  },
  alertText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  modalScrollView: {
    padding: 16,
  },
  scoreSummary: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 20,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
  },
  scoreLabel: {
    fontSize: 18,
    color: colors.textSecondary,
    marginTop: 8,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  chartCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  chartPlaceholder: {
    height: 120,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  chartPlaceholderText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default HomeScreen;
