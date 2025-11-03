import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';

const CommunityScreen = ({ navigation }) => {
  const [feedFilter, setFeedFilter] = useState('All'); // All, Coach, Teammates

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>AROG</Text>
        <Text style={styles.headerSubtitle}>Team Hub</Text>
      </View>
    </View>
  );

  const renderTeamHub = () => (
    <View style={styles.gradientCard}>
      <LinearGradient
        colors={['#FFB800', '#FF8A00']}
        style={styles.gradient}
      >
        <Text style={styles.gradientTitle}>Team Hub</Text>
        <Text style={styles.gradientSubtitle}>
          Empowering every athlete through collaboration
        </Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Athletes</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Challenges</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3 PM</Text>
            <Text style={styles.statLabel}>Tomorrow</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsText}>View Details</Text>
          <Ionicons name="chevron-forward" size={20} color="#FFF" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );

  const renderTeamSchedule = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Team Schedule</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>This Week</Text>
        </TouchableOpacity>
      </View>

      {[
        { day: 'Monday', title: 'Group Exercise', time: '3 PM', location: 'Gym A' },
        { day: 'Wednesday', title: 'Team Challenge', time: '3 PM', location: 'Gym B' },
        { day: 'Friday', title: 'Progress Review', time: '3 PM', location: 'Gym A' },
      ].map((event, index) => (
        <View key={index} style={styles.scheduleItem}>
          <View style={styles.scheduleStatus} />
          <View style={styles.scheduleIconContainer}>
            <Ionicons
              name={index === 1 ? "trophy" : index === 2 ? "stats-chart" : "fitness"}
              size={24}
              color={colors.primary}
            />
          </View>
          <View style={styles.scheduleContent}>
            <Text style={styles.scheduleTitle}>{event.day} — {event.title}</Text>
            <View style={styles.scheduleDetails}>
              <Ionicons name="time-outline" size={16} color={colors.textSecondary} />
              <Text style={styles.scheduleText}>{event.time}</Text>
              <Ionicons name="location-outline" size={16} color={colors.textSecondary} />
              <Text style={styles.scheduleText}>{event.location}</Text>
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>View Full Schedule</Text>
        <Ionicons name="arrow-forward" size={16} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );

  const renderTeamBuddies = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Team Buddies</Text>
      <View style={styles.buddiesContainer}>
        {[
          { initials: 'AJ', name: 'Alex Johnson', streak: '10d' },
          { initials: 'MG', name: 'Maria Garcia', streak: '7d' },
        ].map((buddy, index) => (
          <View key={index} style={styles.buddyCard}>
            <View style={styles.buddyHeader}>
              <View style={styles.buddyAvatar}>
                <Text style={styles.buddyInitials}>{buddy.initials}</Text>
              </View>
              <View style={styles.onlineIndicator} />
            </View>
            <Text style={styles.buddyName}>{buddy.name}</Text>
            <View style={styles.streakBadge}>
              <Ionicons name="flame" size={16} color="#FFF" />
              <Text style={styles.streakText}>{buddy.streak}</Text>
            </View>
            <TouchableOpacity style={styles.chatButton}>
              <Ionicons name="chatbubble-outline" size={20} color={colors.text} />
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );

  const renderActiveChallenges = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Active Challenges</Text>
      
      {[
        {
          title: 'Team Weekly Goal',
          participants: 5,
          daysLeft: 3,
          progress: 75,
          top: 'Emma Johnson',
          color: '#8B5CF6',
        },
        {
          title: 'Group Exercise Challenge',
          participants: 4,
          daysLeft: 5,
          progress: 60,
          top: 'Maria Garcia',
          color: '#FF8A00',
        },
      ].map((challenge, index) => (
        <View key={index} style={[styles.challengeCard, { backgroundColor: challenge.color }]}>
          <View style={styles.challengeHeader}>
            <Text style={styles.challengeTitle}>{challenge.title}</Text>
            <Ionicons name="trophy" size={24} color="#FFF" />
          </View>
          <View style={styles.challengeStats}>
            <Ionicons name="people" size={16} color="#FFF" />
            <Text style={styles.challengeStatsText}>{challenge.participants} participants</Text>
            <Text style={styles.challengeBullet}>•</Text>
            <Text style={styles.challengeStatsText}>{challenge.daysLeft} days left</Text>
          </View>
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Progress</Text>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: `${challenge.progress}%` }]} />
            </View>
            <Text style={styles.progressPercentage}>{challenge.progress}%</Text>
          </View>
          <View style={styles.challengeFooter}>
            <View style={styles.topPerformer}>
              <Ionicons name="medal" size={16} color="#FFD700" />
              <Text style={styles.topPerformerText}>Top: {challenge.top}</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderTeamInsights = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Team Insights & Highlights</Text>
      <View style={styles.insightTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Monthly</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.insightsContainer, styles.insightMarginTop]}>
        <View style={styles.insightCard}>
          <Text style={styles.insightLabel}>Avg Safe-Movement</Text>
          <Text style={styles.insightValue}>89%</Text>
        </View>
        <View style={styles.insightCard}>
          <Text style={styles.insightLabel}>Team Trend</Text>
          <Text style={[styles.insightValue, styles.trendPositive]}>+12%</Text>
        </View>
      </View>

      <View style={styles.insightMessage}>
        <Text style={styles.messageText}>
          Your team improved risk awareness by <Text style={styles.highlightText}>15%</Text> this week
          — keep training together!
        </Text>
      </View>
    </View>
  );

  const renderLeaderboard = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Team Leaderboard</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="trophy" size={16} color="#FFD700" />
          <Text style={styles.filterButtonText}>Top 5</Text>
        </TouchableOpacity>
      </View>

      {[
        { rank: 1, initials: 'EW', name: 'Emma Williams', points: 2847, change: '+2' },
        { rank: 2, initials: 'AJ', name: 'Alex Johnson', points: 2693, change: '-' },
        { rank: 3, initials: 'MR', name: 'Marcus Rodriguez', points: 2541, change: '+1' },
        { rank: 4, initials: 'SC', name: 'Sarah Chen', points: 2389, change: '-1' },
        { rank: 5, initials: 'JL', name: 'Jordan Lee', points: 2156, change: '+1' },
      ].map((player, index) => (
        <View key={index} style={styles.leaderboardItem}>
          <View style={[styles.rankContainer, index === 0 && styles.rankFirst]}>
            <Text style={[styles.rankText, index === 0 && styles.rankFirstText]}>
              {player.rank}
            </Text>
          </View>
          <View style={styles.playerAvatar}>
            <Text style={styles.playerInitials}>{player.initials}</Text>
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerPoints}>{player.points} pts</Text>
          </View>
          <Text style={[
            styles.playerChange,
            player.change.startsWith('+') ? styles.changePositive : 
            player.change === '-' ? styles.changeNeutral : styles.changeNegative
          ]}>
            {player.change}
          </Text>
        </View>
      ))}

      <Text style={styles.leaderboardUpdate}>
        Leaderboard updates every Monday
      </Text>
    </View>
  );

  const renderTeamFeed = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Team Feed / Updates</Text>
      <View style={styles.feedFilters}>
        {['All', 'Coach', 'Teammates'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, feedFilter === filter && styles.activeFilter]}
            onPress={() => setFeedFilter(filter)}
          >
            <Text style={[
              styles.filterButtonText,
              feedFilter === filter && styles.activeFilterText
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.feedItems, styles.feedMarginTop]}>
        <View style={styles.feedItem}>
          <View style={[styles.feedAvatar, { backgroundColor: '#E9D5FF' }]}>
            <Text style={[styles.feedInitials, { color: '#8B5CF6' }]}>CM</Text>
          </View>
          <View style={styles.feedContent}>
            <Text style={styles.feedText}>
              <Text style={styles.feedName}>Coach Martinez</Text> shared new warm-up drills
            </Text>
            <Text style={styles.feedTime}>2h ago</Text>
          </View>
        </View>

        <View style={styles.feedItem}>
          <View style={styles.feedAvatar}>
            <Text style={styles.feedInitials}>MG</Text>
          </View>
          <View style={styles.feedContent}>
            <Text style={styles.feedText}>
              <Text style={styles.feedName}>Maria Garcia</Text> achieved a 7-day streak
            </Text>
            <Text style={styles.feedTime}>4h ago</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.postUpdateButton}>
          <Ionicons name="send" size={20} color={colors.textSecondary} />
          <Text style={styles.postUpdateText}>Post Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderTeamHub()}
        {renderTeamSchedule()}
        {renderTeamBuddies()}
        {renderActiveChallenges()}
        {renderTeamInsights()}
        {renderLeaderboard()}
        {renderTeamFeed()}
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
    padding: 16,
    backgroundColor: colors.white,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
  },
  headerSubtitle: {
    fontSize: 24,
    fontWeight: '400',
    color: colors.text,
  },
  gradientCard: {
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    padding: 24,
  },
  gradientTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 8,
  },
  gradientSubtitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    minWidth: '30%',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.9,
  },
  viewDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 12,
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    margin: 16,
    marginTop: 8,
    marginBottom: 8,
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
    color: colors.text,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 4,
  },
  filterButtonText: {
    fontSize: 14,
    color: colors.text,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  scheduleStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.safe,
    marginRight: 12,
  },
  scheduleIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  scheduleDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scheduleText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 8,
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    gap: 4,
  },
  viewMoreText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  buddiesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  buddyCard: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  buddyHeader: {
    position: 'relative',
    marginBottom: 8,
  },
  buddyAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buddyInitials: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.primary,
  },
  onlineIndicator: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.safe,
    borderWidth: 2,
    borderColor: colors.white,
  },
  buddyName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF8A00',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
    gap: 4,
  },
  streakText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chatButtonText: {
    fontSize: 14,
    color: colors.text,
  },
  challengeCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  challengeStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  challengeStatsText: {
    fontSize: 14,
    color: '#FFF',
  },
  challengeBullet: {
    fontSize: 14,
    color: '#FFF',
    marginHorizontal: 4,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressLabel: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 8,
  },
  progressContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginBottom: 4,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFF',
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'right',
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topPerformer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  topPerformerText: {
    fontSize: 14,
    color: '#FFF',
  },
  viewButton: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  insightTabs: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    padding: 2,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  insightMarginTop: {
    marginTop: 16,
  },
  activeTab: {
    backgroundColor: '#000',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeTabText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  inactiveTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  inactiveTabText: {
    color: colors.text,
    fontSize: 14,
  },
  insightsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  insightCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
  },
  insightLabel: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  insightValue: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.safe,
  },
  trendPositive: {
    color: colors.primary,
  },
  insightMessage: {
    backgroundColor: '#EBF5FF',
    borderRadius: 12,
    padding: 16,
  },
  messageText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  highlightText: {
    color: colors.primary,
    fontWeight: '500',
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    marginBottom: 8,
  },
  rankContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rankFirst: {
    backgroundColor: '#FFB800',
  },
  rankText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  rankFirstText: {
    color: '#FFF',
  },
  playerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  playerInitials: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  playerPoints: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  playerChange: {
    fontSize: 14,
    fontWeight: '500',
  },
  changePositive: {
    color: colors.safe,
  },
  changeNegative: {
    color: colors.danger,
  },
  changeNeutral: {
    color: colors.textSecondary,
  },
  leaderboardUpdate: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
  feedFilters: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    flexWrap: 'wrap',
  },
  feedMarginTop: {
    marginTop: 16,
  },
  activeFilter: {
    backgroundColor: colors.primary,
  },
  activeFilterText: {
    color: '#FFF',
  },
  feedItems: {
    gap: 16,
  },
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  feedInitials: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  feedContent: {
    flex: 1,
  },
  feedText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  feedName: {
    color: colors.primary,
    fontWeight: '500',
  },
  feedTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  postUpdateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  postUpdateText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default CommunityScreen;