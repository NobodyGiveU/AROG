import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

const ParentsPortalScreen = ({ navigation }) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleAccess = () => {
    // For now, navigate to parent dashboard regardless of the code
    navigation.replace('ParentsDashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="people-outline" size={40} color="white" />
        </View>
        <Text style={styles.title}>Parent Access</Text>
        <Text style={styles.subtitle}>Enter the invite code sent to your email</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Parent Invite Code"
          placeholderTextColor="#666"
          value={inviteCode}
          onChangeText={setInviteCode}
          autoCapitalize="characters"
          autoCorrect={false}
        />
        <Text style={styles.example}>e.g., PARENT-XYZ789</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleAccess}>
          <Text style={styles.buttonText}>Access Dashboard</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          As a parent, you'll be able to monitor your athlete's progress, injury risks, and training compliance.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D062', // Bright green background from screenshot
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 24,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#21A366', // Darker green for the button
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  description: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 16,
    opacity: 0.9,
  },
});

export default ParentsPortalScreen;

