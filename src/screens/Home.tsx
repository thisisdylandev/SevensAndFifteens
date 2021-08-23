import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import colors from '../constants/colors';
import { AuthContext } from '../util/AuthContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
});

export const Home = () => {
  const { user, logout } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text>Welcome user {user?.email}</Text>
      <Button onPress={() => logout()}>Logout</Button>
    </SafeAreaView>
  );
};
