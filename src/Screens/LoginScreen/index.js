import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

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
      <Button title={'Login'} onPress={async () => {}} />
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
