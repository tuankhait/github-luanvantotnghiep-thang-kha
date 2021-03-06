import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import HomeScreenStudent from '../screens/Students/Home';
import FaildSubject from '../screens/Students/FaildSubject';
import PassingSubject from '../screens/Students/PassingSubject';
import ProfileStudent from '../screens/Students/ProfileStudent';
import TotalSubject from '../screens/Students/TotalSubject';
import ChatBoxScreen from '../screens/Students/ChatBot';
import {NavigationContainer} from '@react-navigation/native';
import navigationService from '../services/navigation-service/';
import ChangePassword from '../screens/Students/ProfileStudent/ChangePassword';
import ChangeUserInfo from '../screens/Students/ProfileStudent/ChangeUserInfo';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreenStudent" component={HomeScreenStudent} />
        <Stack.Screen name="FaildSubject" component={FaildSubject} />
        <Stack.Screen name="PassingSubject" component={PassingSubject} />
        <Stack.Screen name="ProfileStudent" component={ProfileStudent} />
        <Stack.Screen name="TotalSubject" component={TotalSubject} />
        <Stack.Screen name="ChatBot" component={ChatBoxScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ChangeUserInfo" component={ChangeUserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
