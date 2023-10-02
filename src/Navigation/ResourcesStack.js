import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import resources from '../data/resources';
import { fonts } from '../global.js';

export default function ResourcesStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
      id="ResourcesStack" 
      initialRouteName="Resources"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: fonts.defaultBold
        }
      }}
    >
      {Object.entries(resources).map(([name, { component }], index) => (
        // Don't render the header for the main resources screen. There's already a header from the main stack
        name === 'Resources' ? 
          <Stack.Screen 
            key={index}
            name={name}
            component={component}
            options={{ headerShown: false }}
          /> : 
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