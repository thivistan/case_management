import React from 'react';
import { useFonts } from 'expo-font';
import { AuthProvider } from './src/Navigation/AuthProvider';
import Routes from './src/Navigation/Routes';

/**
 * App Component
 *
 * This is the main entry point of the application.
 * 
 * - Loads custom fonts for the application.
 * - Renders the main navigation routes within an authentication context.
 * 
 * @returns {React.Component} The main application component wrapped with an authentication provider.
 */
export default function App() {

  // Load fonts
  const [fontsLoaded, error] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Alegreya-Regular': require('./src/assets/fonts/Alegreya-Regular.ttf'),
    'Alegreya-Bold': require('./src/assets/fonts/Alegreya-Bold.ttf'),
    'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
  });

  if (error) {
    console.error(error);
  }

  if (fontsLoaded) {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );
  }
}