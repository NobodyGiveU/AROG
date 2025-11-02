import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import colors from '../../../colors';

const HomeScreen = () => {
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
          <View style={styles.riskScoreContainer}>
            <Text style={styles.riskScore}>{riskScore}</Text>
            <Text style={styles.riskScoreLabel}>%</Text>
          </View>
          <Text style={styles.riskScoreStatus}>{getRiskStatus()}</Text>
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
});

export default HomeScreen;
