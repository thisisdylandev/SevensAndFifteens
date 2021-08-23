import React from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface UserState {
  user: FirebaseAuthTypes.User | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  login: Function;
  register: Function;
  logout: Function;
}


export const AuthContext = React.createContext({} as UserState);