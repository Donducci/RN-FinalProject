/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignupScreen = props => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.view}>
      <TextInput
        value={fullName}
        onChangeText={text => {
          setFullName(text);
        }}
        placeholder="enter Full Name"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="enter email"
        style={styles.input}
      />
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="enter password"
        style={styles.input}
      />
      <Button
        title={'Submit'}
        onPress={() => {
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
          props.navigation.navigate('DashboardScreen');
        }}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'lightgreen',
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    width: 350,
  },
  view: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
