import React from 'react';
import Providers from './src/Navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Alegreya-Regular': require('./src/assets/fonts/Alegreya-Regular.ttf'),
    'Alegreya-Bold': require('./src/assets/fonts/Alegreya-Bold.ttf'),
  });

  if (error) {
    console.error(error);
  }

  if (fontsLoaded) {
    return <Providers />;
  }
}