import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from '../screens/MainScreens/NotificationsScreen/NotificationsScreen';

const Stack = createNativeStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationScreen" component={NotificationScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
