import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import HomeScreenStudent from '../screens/Students/Home';
import FaildSubject from '../screens/Students/FaildSubject';
import PassingSubject from '../screens/Students/PassingSubject';
import ProfileStudent from '../screens/Students/ProfileStudent';
import TuitionFee from '../screens/Students/TuitionFee';
import ChatBoxScreen from '../screens/Students/ChatBot';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreenStudent" component={HomeScreenStudent} />
      <Stack.Screen name="FaildSubject" component={FaildSubject} />
      <Stack.Screen name="PassingSubject" component={PassingSubject} />
      <Stack.Screen name="ProfileStudent" component={ProfileStudent} />
      <Stack.Screen name="TuitionFee" component={TuitionFee} />
      <Stack.Screen name="ChatBot" component={ChatBoxScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
