import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/AuthScreens/LoginScreen/LoginScreen";
import OnBoardingScreen from "../screens/AuthScreens/OnBoardingScreen/OnBoardingScreen";
import ForgotPasswordScreen from "../screens/AuthScreens/ForgotPasswordScreen/ForgotPasswordScreen";
import RegistrationScreen from "../screens/AuthScreens/RegistrationScreen/RegistrationScreen";


const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="OnBoarding"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
    );
}
