import React, { useContext, useState, useEffect } from "react";
import { Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';
import ForgotPasswordSVG from '../../../assets/images/forgot_password_screen_cartoon.svg';

import { auth } from "../../../firebase/firebase";
import { Ionicons } from "@expo/vector-icons";
import InputField from '../../../components/InputField';

export default function ForgotPasswordScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const handleBackButton = () => {
        navigation.navigate("Login");
    }

    const handleForgotPassword = () => {
        auth.sendPasswordResetEmail(email).then(() => {
            console.log("Reset email sent to " + email);
            Alert.alert("Password Reset", "Email sent to " + email,
                [
                    {
                        text: 'Continue',
                        onPress: () => navigation.replace("Login")
                    }
                ],);
        }).catch(error => alert(error.message))
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }} behavior="padding">

            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 25, }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', }}
                        onPress={handleBackButton}
                    >
                        <Ionicons
                            name='arrow-back-outline'
                            size={22}
                            color='#FF1493'
                        />
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 20,
                            color: '#FF1493',
                            paddingLeft: 5
                        }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <ForgotPasswordSVG />
                </View>

                <View style={{ paddingHorizontal: 25 }}>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-Black',
                            fontSize: 28,
                            color: '#333',
                            marginTop: 10,
                        }}>
                        Forgot Password
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-Black',
                            fontSize: 15,
                            color: '#333',
                            marginTop: 10,
                        }}>
                        Please enter your email address. You will
                        receive a link to create a new password via email
                    </Text>

                    <InputField type='email' value={email} onChangeText={value => setEmail(value)} />
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={handleForgotPassword}
                            style={{
                                backgroundColor: '#00BFFF',
                                padding: 20,
                                borderRadius: 10,
                                marginTop: 30,
                            }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16,
                                color: '#fff',
                                fontFamily: 'Montserrat-Black',
                            }}>
                                Send verification link
                            </Text>
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

