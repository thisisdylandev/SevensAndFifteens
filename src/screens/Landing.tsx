import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import colors from '../constants/colors';
import { AuthStackParams } from '../navigation/AuthStack';

type Props = {
  navigation: StackNavigationProp<AuthStackParams, 'Landing'>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
});

export const Landing = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text type="header">Welcome to 7s & 15s!</Text>
      <Text type="subheader">
        Use this app to coordinate practices and games with your rugby team!
      </Text>
      <Button
        onPress={() => {
          navigation.push('Login');
        }}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.push('Register');
        }}
      >
        Create Account
      </Button>
    </SafeAreaView>
  );
};
