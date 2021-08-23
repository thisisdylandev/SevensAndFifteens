import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Landing } from '../screens/Landing';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
  Landing: undefined;
};

const Stack = createStackNavigator<AuthStackParams>();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
