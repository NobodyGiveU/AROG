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
import colors from '../../../colors';

const VideoAnalysisScreen = ({ navigation }) => {
  const pastAnalyses = [
    { date: 'Nov 1, 2025', score: '78%', issues: 2 },
    { date: 'Oct 29, 2025', score: '72%', issues: 3 },
    { date: 'Oct 27, 2025', score: '69%', issues: 4 },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>AI Video Analysis</Text>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.notificationContainer}>
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
          <View style={styles.notificationBadge} />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderUploadSection = () => (
    <View style={styles.uploadCard}>
      <TouchableOpacity style={styles.uploadArea} onPress={() => {}}>
        <View style={styles.uploadIcon}>
          <Ionicons name="play-circle" size={48} color={colors.white} />
        </View>
        <Text style={styles.uploadText}>Upload a video to analyze</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTips = () => (
    <View style={styles.tipsCard}>
      <Text style={styles.tipsTitle}>Tips for best results:</Text>
      <View style={styles.tipsList}>
        <Text style={styles.tipItem}>• Ensure full body is visible in frame</Text>
        <Text style={styles.tipItem}>• Best angle: side view (90 degrees)</Text>
        <Text style={styles.tipItem}>• Good lighting and stable camera</Text>
      </View>
    </View>
  );

  const renderActionButtons = () => (
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="camera" size={24} color={colors.primary} />
        <Text style={styles.actionButtonText}>Record Video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="cloud-upload" size={24} color={colors.primary} />
        <Text style={styles.actionButtonText}>Upload Video</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPastAnalyses = () => (
    <View style={styles.pastAnalysesSection}>
      <Text style={styles.sectionTitle}>Past Analyses</Text>
      {pastAnalyses.map((analysis, index) => (
        <TouchableOpacity key={index} style={styles.analysisItem}>
          <View style={styles.analysisIcon}>
            <Ionicons name="videocam" size={24} color={colors.text} />
          </View>
          <View style={styles.analysisInfo}>
            <Text style={styles.analysisDate}>{analysis.date}</Text>
            <Text style={styles.analysisDetails}>Score: {analysis.score} • {analysis.issues} issues</Text>
          </View>
          <Ionicons name="play-circle" size={24} color={colors.primary} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderUploadSection()}
        {renderTips()}
        {renderActionButtons()}
        {renderPastAnalyses()}
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
  uploadCard: {
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  uploadArea: {
    height: 240,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    marginBottom: 16,
  },
  uploadText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  tipsCard: {
    backgroundColor: '#F0F7FF',
    margin: 16,
    marginTop: 0,
    borderRadius: 16,
    padding: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  tipsList: {
    gap: 8,
  },
  tipItem: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  actionButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  pastAnalysesSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  analysisItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  analysisIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  analysisInfo: {
    flex: 1,
  },
  analysisDate: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  analysisDetails: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default VideoAnalysisScreen;