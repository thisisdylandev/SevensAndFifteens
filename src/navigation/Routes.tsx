import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Loading } from '../components/Loading';
import { AuthContext } from '../util/AuthContext';
import { AuthStack } from './AuthStack';
import { HomeStack } from './HomeStack';

export default function Routes() {
  const { user, setUser } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [initializing, setInitializing] = React.useState(true);
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
