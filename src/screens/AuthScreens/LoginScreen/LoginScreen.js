import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';
import LoginPageSVG from '../../../assets/images/login_page_cartoon.svg';

import { AuthContext } from "../../../Navigation/AuthProvider";
import InputField from '../../../components/InputField';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword");
    }

    const handleRegistrationScreen = () => {
        navigation.navigate("Registration");
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }} behavior="padding">

            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <LoginPageSVG />
                </View>

                <View style={{ paddingHorizontal: 25 }}>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-Black',
                            fontSize: 28,
                            color: '#333',
                            marginTop: 10,
                        }}>
                        Login
                    </Text>

                    <InputField type='email' value={email} onChangeText={value => setEmail(value)} />

                    <InputField
                        type='password'
                        value={password}
                        onChangeText={value => setPassword(value)}
                        buttonRight={
                            <TouchableOpacity onPress={handleForgotPasswordScreen}>
                                <Text style={{ fontFamily: 'Montserrat-Black', color: '#00BFFF' }}>Forgot?</Text>
                            </TouchableOpacity>
                        } />

                    <TouchableOpacity
                        onPress={() => login(email, password)}
                        style={{
                            backgroundColor: '#00BFFF',
                            padding: 20,
                            borderRadius: 10,
                            marginTop: 30,
                        }}>
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                            fontFamily: 'Montserrat-Black',
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ fontFamily: 'Montserrat-Black', marginRight: 10 }}>New to Thaddeus Resources?</Text>
                        <TouchableOpacity onPress={handleRegistrationScreen}>
                            <Text style={{ fontFamily: 'Montserrat-Black', color: '#FF1493' }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 40, paddingHorizontal: 25 }}>
                        <ThaddeusHorizontalSVG
                            height={100}
                            width={'50%'}
                            fill='black'
                        />
                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}