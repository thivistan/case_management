import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';

import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../../../Navigation/AuthProvider";

import { useFonts } from 'expo-font';
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
    });

    if (!fontsLoaded) {
        return null
    };

    const handleForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword");
    }

    const handleRegistrationScreen = () => {
        navigation.navigate("Registration");
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', marginBottom: 116, paddingHorizontal: 25 }}>

                <ThaddeusHorizontalSVG
                    height={150}
                    width={'120%'}
                    fill='black'
                />
            </View>
            <View style={{ paddingHorizontal: 25 }}>
                <Text
                    style={{
                        fontFamily: 'Montserrat-Black',
                        fontSize: 28,
                        fontWeight: '500',
                        color: '#333',
                        marginBottom: 30,
                    }}>
                    Login
                </Text>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Ionicons
                        name='mail-outline'
                        size={22}
                        color='#666'
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder="Email"
                        style={{ flex: 1, paddingVertical: 0 }}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Ionicons
                        name='lock-closed-outline'
                        size={22}
                        color='#666'
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder="Password"
                        style={{ flex: 1, paddingVertical: 0 }}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity
                        onPress={handleForgotPasswordScreen}
                    >
                        <Text style={{ color: '#00BFFF', fontWeight: '700' }}>Forgot?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => login(email, password)}
                    style={{
                        backgroundColor: '#00BFFF',
                        padding: 20,
                        borderRadius: 10,
                        marginBottom: 30,
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 16,
                        color: '#fff'
                    }}>
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text style={{ marginRight: 10, fontWeight: '700' }}>New to Thaddeus Resources?</Text>
                    <TouchableOpacity onPress={handleRegistrationScreen}>
                        <Text style={{ color: '#00BFFF', fontWeight: '700' }}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}