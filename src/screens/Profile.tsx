import firestore from '@react-native-firebase/firestore';
import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import { Loading } from '../components/Loading';
import { Text } from '../components/Text';
import colors from '../constants/colors';
import { AuthContext } from '../util/AuthContext';

type ProfileType = {
  firstName?: string;
  lastName?: string;
  displayName?: string;
  team?: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
});

export const Profile = () => {
  const { user } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);
  const [userProfile, setUserProfile]: [
    ProfileType,
    Dispatch<SetStateAction<{}>>
  ] = React.useState({});

  React.useEffect(() => {
    const subscriber = firestore()
      .collection('profiles')
      .doc(user?.uid)
      .onSnapshot(doc => {
        const prof: ProfileType = doc.data() as ProfileType;
        setUserProfile(prof);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [user]);

  const setProfileValues = (text: string, profileValue: string) => {
    const newProfile = { ...userProfile };
    const key = profileValue as keyof typeof userProfile;
    newProfile[key] = text;
    setUserProfile(newProfile);
  };

  const updateProfile = () => {
    setLoading(true);
    firestore()
      .collection('profiles')
      .doc(user?.uid)
      .update(userProfile)
      .then(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text type="header">Profile</Text>
      <TextInput
        label="Display Name"
        placeholder="Enter your display name..."
        value={userProfile.displayName}
        onChangeText={(text: string) => setProfileValues(text, 'displayName')}
        autoCapitalize="none"
      />
      <TextInput
        label="First Name"
        placeholder="Enter your first name..."
        value={userProfile.firstName}
        onChangeText={(text: string) => setProfileValues(text, 'firstName')}
        autoCapitalize="none"
      />
      <TextInput
        label="Last Name"
        placeholder="Enter your last name..."
        value={userProfile.lastName}
        onChangeText={(text: string) => setProfileValues(text, 'lastName')}
        autoCapitalize="none"
      />
      <Button onPress={() => updateProfile()}>Update Profile</Button>
    </SafeAreaView>
  );
};
