import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';

export type HomeStackParams = {
  Team: undefined;
  Schedule: undefined;
  Profile: undefined;
};

MaterialCommunityIcon.loadFont();

const Tab = createBottomTabNavigator<HomeStackParams>();

export const HomeStack = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Team"
      component={Home}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcon
            name="rugby"
            size={30}
            color={colors.primary}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Schedule"
      component={Home}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcon
            name="calendar"
            size={30}
            color={colors.primary}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcon
            name="account-circle-outline"
            size={30}
            color={colors.primary}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
