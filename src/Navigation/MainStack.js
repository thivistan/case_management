import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalendarScreen from '../screens/MainScreens/CalendarScreen/CalendarScreen'
import ChatScreen from '../screens/MainScreens/ChatScreen/ChatScreen';
import GoalsScreen from '../screens/MainScreens/GoalsScreen/GoalsScreen';
import JournalScreen from '../screens/MainScreens/JournalScreen/JournalScreen';
import HomeScreen from '../screens/MainScreens/HomeScreen/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';
import ResourcesScreen from '../screens/MainScreens/ResourcesScreen/ResourcesScreen';
import UserProfileScreen from '../screens/MainScreens/UserProfileScreen/UserProfileScreen';
import ResourcesStack from './ResourcesStack';



const Drawer = createDrawerNavigator();

export default function MainStack() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Home"
            screenOptions={{
                drawerActiveBackgroundColor: '#00BFFF',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                headerTitleAlign: 'center',
                headerTintColor: '#00BFFF',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15
                },
            }}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Calendar' component={CalendarScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="calendar-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Chat' component={ChatScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="call-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Goals' component={GoalsScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="checkmark-circle-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Journal' component={JournalScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="journal-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='Resources' component={ResourcesStack} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="search-outline" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='User Profile' component={UserProfileScreen} options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={22} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
}

