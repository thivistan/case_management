import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import resources from '../data/resources';
import ResourcesScreen from '../screens/MainScreens/ResourcesScreen/ResourcesScreen.js';
import { fonts } from '../global.js';

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
      <Stack.Screen
        name='Resources Home'
        component={ResourcesScreen}
        options={{ headerShown: false }}
      />
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