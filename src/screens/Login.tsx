import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import colors from '../constants/colors';
import { AuthContext } from '../util/AuthContext';

type ErrorType = {
  email?: string;
  password?: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
});

export const Login = async () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = React.useContext(AuthContext);
  const [errors, setErrors]: [ErrorType, Dispatch<SetStateAction<{}>>] =
    React.useState({});

  const userLogin = () => {
    const nextErrors: ErrorType = {};
    if (email.length === 0) {
      nextErrors.email = 'This field is required.';
    }
    if (password.length === 0) {
      nextErrors.password = 'This field is required.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return null;
    }
    login(email, password);
    return null;
  };

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
      <Button onPress={userLogin}>Sign In</Button>
    </View>
  );
};
