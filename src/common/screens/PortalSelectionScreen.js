import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import colors from '../../../colors';

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
        navigation.navigate('TeamPortal');
        break;
      default:
        console.log(`Selected ${portal}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/AROG.png')}
          style={styles.appLogo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Select your portal</Text>

        <View style={styles.portalContainer}>
          <TouchableOpacity
            style={[styles.portalButton, styles.userPortal]}
            onPress={() => handlePortalSelection('User Portal')}
            activeOpacity={0.8}
          >
            <Text style={styles.portalButtonText}>User Portal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.portalButton, styles.parentsPortal]}
            onPress={() => handlePortalSelection('Parents Portal')}
            activeOpacity={0.8}
          >
            <Text style={styles.portalButtonText}>Parents Portal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.portalButton, styles.teamPortal]}
            onPress={() => handlePortalSelection('Team Portal')}
            activeOpacity={0.8}
          >
            <Text style={styles.portalButtonText}>Team Portal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  appLogo: {
    width: 200,
    height: 80,
    alignSelf: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 48,
  },
  portalContainer: {
    width: '100%',
    gap: 20,
  },
  portalButton: {
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userPortal: {
    backgroundColor: colors.primary,
  },
  parentsPortal: {
    backgroundColor: colors.secondary,
  },
  teamPortal: {
    backgroundColor: colors.primary,
    opacity: 0.9,
  },
  portalButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
  },
});

export default PortalSelectionScreen;

