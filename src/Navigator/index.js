import {useEffect, useState} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../Screens/SignupScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import LoginScreen from '../Screens/LoginScreen';
// import {SignupScreen, DashboardScreen, LoginScreen} from '../Screens';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigator = props => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState('');

  const navigation = useNavigation();

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Signup" component={SignupScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{title: 'Overview'}}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};
export default Navigator;
