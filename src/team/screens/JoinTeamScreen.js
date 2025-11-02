import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../../colors';

const JoinTeamScreen = ({ navigation }) => {
  const [teamCode, setTeamCode] = useState('');

  const handleJoinTeam = () => {
    // Any team code is valid for now
    if (teamCode.trim().length > 0) {
      navigation.navigate('TeamPortal');
    }
  };

  const handleContinueAsIndividual = () => {
    navigation.navigate('UserPortal');
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
              <Ionicons name="people" size={48} color="white" />
            </View>
            <Text style={styles.title}>Join Your Team</Text>
            <Text style={styles.subtitle}>Enter the team code provided by your coach</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Team Code</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., TEAM-ABC123"
                placeholderTextColor="#94A3B8"
                value={teamCode}
                onChangeText={setTeamCode}
                autoCapitalize="characters"
                autoCorrect={false}
              />
              <Text style={styles.helperText}>
                Contact your coach if you don't have a team code
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                { opacity: teamCode.trim().length > 0 ? 1 : 0.7 },
              ]}
              onPress={handleJoinTeam}
              disabled={teamCode.trim().length === 0}
            >
              <Text style={styles.buttonText}>Join Team</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.linkButton}
              onPress={handleContinueAsIndividual}
            >
              <Text style={styles.linkText}>Continue as individual instead</Text>
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
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  helperText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 8,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    alignItems: 'center',
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
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

export default JoinTeamScreen;