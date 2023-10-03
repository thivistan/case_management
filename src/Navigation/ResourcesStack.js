import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import resources from '../data/resources';
import ResourcesScreen from '../screens/MainScreens/ResourcesScreen/ResourcesScreen.js';
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

      {/* Create a screen for each resource in the resources object. */}
      {Object.entries(resources).map(([name, { component }], index) => (
        <Stack.Screen
          key={index}
          name={name}
          component={component}
          options={{ headerShown: true }}
        />
      ))}
    </Stack.Navigator>
  );
}