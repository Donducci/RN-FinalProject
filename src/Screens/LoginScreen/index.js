/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="enter email"
        style={{
          height: 40,
          backgroundColor: 'lightgreen',
          margin: 10,
          borderRadius: 10,
          borderWidth: 0.5,
          width: 350,
        }}
      />
      <TextInput
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholder="enter password"
        style={{
          height: 40,
          backgroundColor: 'lightgreen',
          margin: 10,
          borderRadius: 10,
          borderWidth: 0.5,
          width: 350,
        }}
      />
      <Text>Welcome to the LoginScreen</Text>
      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
