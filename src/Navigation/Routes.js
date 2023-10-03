import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { AuthContext } from './AuthProvider';

/**
 * Navigation container that provides the appropriate routes for the app.
 * @returns {React.Component} A navigation container that provides the appropriate routes for the app.
 */
export default function Routes() {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {/* Render the main stack if the user is authenticated */}
            {user ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
}