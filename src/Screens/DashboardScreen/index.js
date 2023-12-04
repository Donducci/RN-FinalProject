import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const DashboardScreen = props => {
  return (
    <View>
      <Text>Welcome to the Dashboard!</Text>
      <Button
        title={'Logout'}
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
          props.navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default DashboardScreen;
