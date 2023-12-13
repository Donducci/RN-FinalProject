/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignupScreen, DashboardScreen, LoginScreen} from '../Screens';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Navigator = props => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
  }

  const getAuthStack = () => (
    <Stack.Group>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Group>
  );

  const getMainStack = () => (
    <Stack.Group>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{title: 'Overview'}}
      />
    </Stack.Group>
  );

  const isUserLoggedIn = user && user.uid;

  return (
    <Stack.Navigator initialRouteName="Login">
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
