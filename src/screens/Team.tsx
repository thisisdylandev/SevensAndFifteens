import firestore from '@react-native-firebase/firestore';
import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
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

type TeamType = {
  members?: Array<string>;
  name?: string;
  owner?: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
    alignContent: 'center',
  },
  footer: {
    marginTop: 'auto',
  },
  footerText: {
    textAlign: 'auto',
  },
  inviteText: {
    paddingVertical: 15,
  },
});

export const Team = () => {
  const { user } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [userProfile, setUserProfile]: [
    ProfileType,
    Dispatch<SetStateAction<{}>>
  ] = React.useState({});
  const [team, setTeam]: [TeamType, Dispatch<SetStateAction<{}>>] =
    React.useState({});

  React.useEffect(() => {
    async function getAllTheThings() {
      let profileData = await firestore()
        .collection('profiles')
        .doc(user?.uid)
        .get();

      const profile: ProfileType = await profileData.data()!;

      let teamData = await firestore()
        .collection('teams')
        .doc(profile.team)
        .get();

      const team: TeamType = await teamData.data()!;

      setUserProfile(profile);
      setTeam(team);
      setLoading(false);
    }

    getAllTheThings();
  }, [user, team]);

  const invite = () => {
    console.log(team);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {team ? (
        <>
          <Text type="header">{team.name!}</Text>
          <Button onPress={() => invite()}>Upcoming Events</Button>
          <Button onPress={() => invite()}>Past Events</Button>
          <Button type="outline" onPress={() => invite()}>
            Members
          </Button>
          <View style={styles.footer}>
            {/* TODO: dont use any here */}
            <Text style={styles.footerText as any}>
              Would you like to invite somebody to join?
            </Text>
            <Button onPress={() => invite()}>Get Invite Code</Button>
          </View>
        </>
      ) : (
        <>
          <Text type="header">Join a Rugby Club!</Text>
          <View style={styles.inviteText}>
            <Text>
              Ask a team member for their invite code, and enter it below!
            </Text>
          </View>
          <TextInput
            label="Invite Code"
            placeholder="Enter a club's invite code..."
            onChangeText={invite}
            autoCapitalize="none"
          />
          <Button onPress={() => invite()}>Join!</Button>
        </>
      )}
    </SafeAreaView>
  );
};
