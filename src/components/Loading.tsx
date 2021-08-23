import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
}