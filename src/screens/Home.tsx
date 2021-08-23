import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <Text>Welcome user {user?.email}</Text>
      <Button onPress={() => logout()}>Logout</Button>
    </View>
  );
};
