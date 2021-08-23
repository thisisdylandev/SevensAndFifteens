import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

export type HomeStackParams = {
  Home: undefined;
};

const Stack = createStackNavigator<HomeStackParams>();

export const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
);
