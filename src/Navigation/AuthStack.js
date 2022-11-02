import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen/OnBoardingScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
            <Stack.Screen name = "OnBoarding" component = { OnBoardingScreen } />
            <Stack.Screen name = "Login" component = { LoginScreen } />
            <Stack.Screen name = "ForgotPassword" component = { ForgotPasswordScreen } />
            <Stack.Screen name = "Registration" component = { RegistrationScreen } />
        </Stack.Navigator>
      );
}

export default AuthStack;