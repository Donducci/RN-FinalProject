import React, {useState} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.view}>
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
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="enter password"
        style={styles.input}
      />
      <Button
        title={'Login'}
        onPress={async () => {
          auth()
            .signInWithEmailAndPassword(email, password)
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
      <Button
        title={'Register'}
        onPress={() => {
          props.navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

export default LoginScreen;

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
