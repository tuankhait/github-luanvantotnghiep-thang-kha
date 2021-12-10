import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenStudent from '../screens/Students/Home';
import FaildSubject from '../screens/Students/FaildSubject';
import PassingSubject from '../screens/Students/PassingSubject';
import ProfileStudent from '../screens/Students/ProfileStudent';
import TotalSubject from '../screens/Students/TotalSubject';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {View} from 'react-native'
import TabBarApp from './TabBarApp';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const TopTabNavigation=()=> {
    return (
        // <View style={{flex:1 }}>
        <Tab.Navigator
            tabBar={props => <TabBarApp {...props}  />}
        >
            <Tab.Screen
                name={"TotalSubjectStack"}
                component={TotalSubjectStack}
                options={{
                    headerShown: false,
                    tabBarIcon: "library",
                    tabBarIconfocus: "library",
                    title: "Môn học",
                }}
            />
            <Tab.Screen
                name={"PassingSubjectTab"}
                component={PassingSubjectStack}
                options={{
                    headerShown: false,
                    tabBarIcon: "book-sharp",
                    tabBarIconfocus: "book-sharp",
                    title: "Môn đậu",
                }}
            />
            <Tab.Screen
                name={"FaildSubjectTab"}
                component={FaildSubjectStack}
                options={{
                    headerShown: false,
                    tabBarIcon: "bookmarks-outline",
                    tabBarIconfocus: "bookmarks-outline",
                    title: "Môn trượt",
                }}
            />
            <Tab.Screen
                name={"ProfileStudentStack"}
                component={ProfileStudentStack}
                options={{
                    headerShown: false,
                    tabBarIcon: "person",
                    tabBarIconfocus: "person",
                    title: "Thông tin cá nhân",
                }}
            />
        </Tab.Navigator >
        // </View>
    );
}

function FaildSubjectStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={"FaildSubject"}
                component={FaildSubject}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
function PassingSubjectStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={"PassingSubject"}
                component={PassingSubject}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
function ProfileStudentStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={"ProfileStudent"}
                component={ProfileStudent}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
function TotalSubjectStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={"TotalSubject"}
                component={TotalSubject}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default TopTabNavigation;
