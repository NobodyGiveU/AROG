import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';

const PortalSelectionScreen = ({ navigation }) => {
  const handlePortalSelection = (portal) => {
    // Navigate to respective portal based on selection
    switch (portal) {
      case 'User Portal':
        navigation.navigate('UserPortal');
        break;
      case 'Parents Portal':
        navigation.navigate('ParentsPortal');
        break;
      case 'Team Portal':
        navigation.navigate('JoinTeam');
        break;
      default:
        console.log(`Selected ${portal}`);
    }
  };

  return (
    <LinearGradient
      colors={['#1E40AF', '#3B82F6']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Ionicons name="shield-outline" size={48} color="white" />
            </View>
            <Text style={styles.title}>Let's Get Started</Text>
            <Text style={styles.subtitle}>How are you joining AROG today?</Text>
          </View>

          <View style={styles.portalContainer}>
            <TouchableOpacity
              style={styles.portalButton}
              onPress={() => handlePortalSelection('Team Portal')}
              activeOpacity={0.8}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#EBF5FF' }]}>
                <Ionicons name="people" size={24} color="#3B82F6" />
              </View>
              <View style={styles.portalTextContainer}>
                <Text style={styles.portalButtonText}>I'm invited by a team</Text>
                <Text style={styles.portalDescription}>Enter your team code to join</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.portalButton}
              onPress={() => handlePortalSelection('Parents Portal')}
              activeOpacity={0.8}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#ECFDF5' }]}>
                <Ionicons name="person" size={24} color="#22C55E" />
              </View>
              <View style={styles.portalTextContainer}>
                <Text style={styles.portalButtonText}>I'm a parent/guardian</Text>
                <Text style={styles.portalDescription}>Enter your invite code</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.portalButton}
              onPress={() => handlePortalSelection('User Portal')}
              activeOpacity={0.8}
            >
              <View style={[styles.iconContainer, { backgroundColor: '#FDF2F8' }]}>
                <Ionicons name="fitness" size={24} color="#EC4899" />
              </View>
              <View style={styles.portalTextContainer}>
                <Text style={styles.portalButtonText}>I'm an individual athlete</Text>
                <Text style={styles.portalDescription}>Set up my personal training</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.8,
  },
  portalContainer: {
    width: '100%',
    gap: 16,
  },
  portalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  portalTextContainer: {
    flex: 1,
  },
  portalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  portalDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.8,
  },
});

export default PortalSelectionScreen;

