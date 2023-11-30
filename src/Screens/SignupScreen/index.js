import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

const SignupScreen = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View>
      <Text>Welcome to the SignupScreen!</Text>
      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
