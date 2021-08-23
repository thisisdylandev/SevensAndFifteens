import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import { useLogin } from '../util/auth';
import { Text } from '../components/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
});
export const Login = () => {
  const { signIn, signOut, errors, email, setEmail, password, setPassword, user } = useLogin();

  if (!user) {
    return (
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Enter your email..."
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          errorText={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password..."
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
          errorText={errors.password}
          autoCapitalize="none"
        />
        <Button onPress={signIn}>Sign In</Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text type="header">Welcome {user.email || ''}</Text>
      <Button onPress={signOut}>Sign Out</Button>
    </View>
  );
};
