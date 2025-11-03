import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

const TRAINING_BUDDIES = [
  {
    id: 1,
    initials: 'SC',
    name: 'Sarah Chen',
    sport: 'Soccer',
    status: 'Active',
    riskScore: 24,
    weeklyGoal: { completed: 4, total: 5 }
  },
  {
    id: 2,
    initials: 'MR',
    name: 'Marcus Rodriguez',
    sport: 'Basketball',
    status: 'Active',
    riskScore: 31,
    weeklyGoal: { completed: 5, total: 5 }
  },
  {
    id: 3,
    initials: 'EW',
    name: 'Emma Williams',
    sport: 'Volleyball',
    status: 'Resting',
    riskScore: 19,
    weeklyGoal: { completed: 3, total: 6 }
  }
];

const LEADERBOARD = [
  { rank: 1, initials: 'EW', name: 'Emma Williams', points: 2847, change: '+2' },
  { rank: 2, initials: 'AJ', name: 'Alex Johnson', points: 2693, change: '-' },
  { rank: 3, initials: 'MR', name: 'Marcus Rodriguez', points: 2541, change: '+1' },
  { rank: 4, initials: 'SC', name: 'Sarah Chen', points: 2398, change: '-2' },
  { rank: 5, initials: 'JL', name: 'Jordan Lee', points: 2156, change: '+1' }
];

const CommunityScreen = () => {
  const renderActiveChallenge = () => (
    <View style={styles.challengeCard}>
      <View style={styles.challengeHeader}>
        <View style={styles.trophyContainer}>
          <MaterialCommunityIcons name="trophy" size={24} color="#fff" />
        </View>
        <View style={styles.challengeInfo}>
          <Text style={styles.challengeTitle}>Active Challenge</Text>
          <Text style={styles.challengeName}>November Movement Challenge</Text>
        </View>
        <View style={styles.streakBadge}>
          <Ionicons name="flame" size={16} color="#fff" />
          <Text style={styles.streakText}>5 day streak</Text>
        </View>
      </View>

      <Text style={styles.challengeDescription}>
        Complete 20 training sessions this month
      </Text>

      <View style={styles.progressSection}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.sessionCount}>12/20 sessions</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '60%' }]} />
        </View>
      </View>

      <View style={styles.challengeFooter}>
        <View style={styles.participantsInfo}>
          <MaterialCommunityIcons name="account-group" size={20} color="#fff" />
          <Text style={styles.participantsText}>156 participants</Text>
        </View>
        <Text style={styles.daysLeft}>14 days left</Text>
      </View>
    </View>
  );

  const renderBuddyCard = (buddy) => (
    <View key={buddy.id} style={styles.buddyCard}>
      <View style={styles.buddyHeader}>
        <View style={styles.buddyAvatarSection}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{buddy.initials}</Text>
          </View>
          <View style={[styles.statusDot, 
            { backgroundColor: buddy.status === 'Active' ? '#4CAF50' : '#9E9E9E' }]} />
        </View>
        
        <View style={styles.buddyInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.buddyName}>{buddy.name}</Text>
            <View style={[styles.statusBadge, 
              { backgroundColor: buddy.status === 'Active' ? '#E8F5E9' : '#F5F5F5' }]}>
              <Text style={[styles.statusText, 
                { color: buddy.status === 'Active' ? '#4CAF50' : '#9E9E9E' }]}>
                {buddy.status}
              </Text>
            </View>
          </View>
          <Text style={styles.sportText}>{buddy.sport}</Text>
        </View>

        <View style={styles.riskScoreContainer}>
          <Text style={styles.riskScoreLabel}>Risk Score</Text>
          <Text style={styles.riskScoreValue}>{buddy.riskScore}</Text>
        </View>
      </View>

      <View style={styles.goalSection}>
        <Text style={styles.goalLabel}>Weekly Goal</Text>
        <Text style={styles.goalProgress}>
          {buddy.weeklyGoal.completed}/{buddy.weeklyGoal.total} sessions
        </Text>
        <View style={styles.goalBar}>
          <View 
            style={[
              styles.goalFill, 
              { width: `${(buddy.weeklyGoal.completed / buddy.weeklyGoal.total) * 100}%` }
            ]} 
          />
        </View>
      </View>

      <TouchableOpacity style={styles.messageButton}>
          <MaterialCommunityIcons name="message-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  const renderLeaderboard = () => (
    <View style={styles.leaderboardSection}>
      <View style={styles.leaderboardHeader}>
        <MaterialCommunityIcons name="trophy-outline" size={24} color="#1A1A1A" />
        <Text style={styles.leaderboardTitle}>Weekly Leaderboard</Text>
        <TouchableOpacity>
          <MaterialIcons name="info-outline" size={20} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      {LEADERBOARD.map((player, index) => (
        <View 
          key={player.rank} 
          style={[
            styles.leaderboardRow,
            { backgroundColor: index === 0 ? '#FFF9C4' : 
              index === 1 ? '#FFFFFF' :
              index === 2 ? '#FFE0B2' : '#FFFFFF' }
          ]}
        >
          <View style={styles.rankSection}>
            <Text style={styles.rankNumber}>{player.rank}</Text>
            <View style={styles.playerAvatar}>
              <Text style={styles.playerInitials}>{player.initials}</Text>
            </View>
          </View>

          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerPoints}>{player.points} pts</Text>
          </View>

          <Text style={[
            styles.changeIndicator,
            { color: player.change.startsWith('+') ? '#4CAF50' : 
              player.change === '-' ? '#9E9E9E' : '#F44336' }
          ]}>
            {player.change}
          </Text>
        </View>
      ))}

      <Text style={styles.leaderboardUpdate}>Leaderboard updates every Monday</Text>

      <View style={styles.inviteSection}>
        <View style={styles.inviteContent}>
          <MaterialCommunityIcons name="target" size={24} color="#007AFF" />
          <View style={styles.inviteTextContainer}>
            <Text style={styles.inviteTitle}>Invite your friends!</Text>
            <Text style={styles.inviteDescription}>
              Training together reduces injury risk by 40% and boosts motivation.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteButtonText}>Invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderActiveChallenge()}
      
      <View style={styles.buddiesSection}>
        <View style={styles.buddiesHeader}>
          <Text style={styles.buddiesTitle}>Training Buddies</Text>
          <TouchableOpacity style={styles.addBuddyButton}>
            <MaterialIcons name="person-add" size={20} color="#007AFF" />
            <Text style={styles.addBuddyText}>Add Buddy</Text>
          </TouchableOpacity>
        </View>
        
        {TRAINING_BUDDIES.map(renderBuddyCard)}
      </View>

      {renderLeaderboard()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingBottom: 24, // Add padding at the bottom of the screen
  },
  challengeCard: {
    backgroundColor: '#8B5CF6',
    margin: 16,
    marginTop: 24,
    marginBottom: 24,
    padding: 20,
    borderRadius: 20,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  trophyContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 8,
  },
  challengeInfo: {
    flex: 1,
    marginLeft: 12,
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  challengeName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  streakBadge: {
    backgroundColor: '#FF4B4B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  streakText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: '600',
  },
  challengeDescription: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  progressSection: {
    marginBottom: 20,
  },
  progressLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  sessionCount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participantsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantsText: {
    color: '#fff',
    marginLeft: 8,
  },
  daysLeft: {
    color: '#fff',
  },
  buddiesSection: {
    marginTop: 24,
    marginBottom: 32,
  },
  buddiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  buddiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addBuddyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBuddyText: {
    color: '#007AFF',
    marginLeft: 4,
    fontWeight: '600',
  },
  buddyCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    paddingBottom: 32, // Increased to accommodate the message button
    borderRadius: 12,
    position: 'relative', // Ensure relative positioning for absolute children
  },
  buddyHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  buddyAvatarSection: {
    position: 'relative',
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buddyInfo: {
    flex: 1,
    marginLeft: 12,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buddyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sportText: {
    color: '#666',
    marginTop: 2,
  },
  riskScoreContainer: {
    alignItems: 'flex-end',
  },
  riskScoreLabel: {
    fontSize: 12,
    color: '#666',
  },
  riskScoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  goalSection: {
    marginBottom: 24,
  },
  goalLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  goalBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  goalFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
  messageButton: {
    position: 'absolute',
    bottom: 8,
    right: 16,
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1, // Ensure button stays on top
  },
  leaderboardSection: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 32,
    borderRadius: 12,
    padding: 16,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },
  leaderboardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  rankSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  rankNumber: {
    width: 24,
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerInitials: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  playerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '500',
  },
  playerPoints: {
    fontSize: 14,
    color: '#666',
  },
  changeIndicator: {
    fontSize: 14,
    fontWeight: '600',
  },
  leaderboardUpdate: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 8,
    marginBottom: 16,
  },
  inviteSection: {
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inviteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  inviteTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  inviteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  inviteDescription: {
    fontSize: 12,
    color: '#666',
  },
  inviteButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CommunityScreen;
