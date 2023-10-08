import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResourcesScreen from '../screens/MainScreens/ResourcesScreen/ResourcesScreen.js';
import ServiceScreen from '../screens/MainScreens/ResourcesScreen/ServiceScreen';
import Category from '../screens/MainScreens/ResourcesScreen/Category';
import { fonts } from '../global.js';

/**
 * Native stack navigator for the resources screen.
 * @returns {React.Component} A native stack navigator containing all of the resource screens.
 */
export default function ResourcesStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      id="ResourcesStack"
      initialRouteName="Resources Home"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: fonts.defaultBold
        }
      }}
    >
      {/* Main resources screen */}
      <Stack.Screen
        name='Resources Home'
        component={ResourcesScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={"Service Screen"}
        component={ServiceScreen}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name={"Category"}
        component={Category}
        options={{ headerShown: true }}
      />

    </Stack.Navigator>
  );
}