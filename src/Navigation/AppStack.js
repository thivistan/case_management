import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen'
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import GoalsScreen from '../screens/GoalsScreen/GoalsScreen';
import JournalScreen from '../screens/JournalScreen/JournalScreen';
import ResourcesScreen from '../screens/ResourcesScreen/ResourcesScreen';
import UserProfileScreen from '../screens/UserProfileScreen/UserProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator screenOptions = {{  headerStyle: { backgroundColor: '#00BFFF' }, headerTitleAlign: 'center', headerTintColor: 'white' }}>
            <Drawer.Screen name = 'Home ' component = { HomeScreen } />
            <Drawer.Screen name = 'Calendar' component = { CalendarScreen } />
            <Drawer.Screen name = 'Chat' component = { ChatScreen } />
            <Drawer.Screen name = 'Goals' component = { GoalsScreen } />
            <Drawer.Screen name = 'Journal' component = { JournalScreen } />
            <Drawer.Screen name = 'Resources' component = { ResourcesScreen } />
            <Drawer.Screen name = 'User Profile' component = { UserProfileScreen } />
        </Drawer.Navigator>
      );
}

export default AppStack;
