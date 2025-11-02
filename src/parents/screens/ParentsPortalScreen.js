import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../../../colors';

const ParentsPortalScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Parents Portal</Text>
        <Text style={styles.subtitle}>Coming soon...</Text>
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
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
  },
});

export default ParentsPortalScreen;

