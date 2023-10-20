import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import ThaddeusHorizontalSVG from '../../../assets/images/thaddeus_logo_horizontal.svg';
import RegistrationPageSVG from '../../../assets/images/registration_screen_cartoon.svg';

import { AuthContext } from '../../../Navigation/AuthProvider';
import InputField from '../../../components/InputField';

/**
 * The Registration Screen.
 * 
 * @returns {React.Component} The RegistrationScreen component.
 */
export default function RegistrationScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Currently unused -- should be stored in database
    const navigation = useNavigation();
    const { register } = useContext(AuthContext);

    const handleLoginScreen = () => {
        navigation.navigate("Login");
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white' }} behavior="padding">
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <RegistrationPageSVG />
                </View>
                <View style={{ paddingHorizontal: 25 }}>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-Black',
                            fontSize: 28,
                            color: '#333',
                            marginTop: 10,
                        }}>
                        Register
                    </Text>

                    <InputField type='name' value={name} onChangeText={value => setName(value)} />
                    <InputField type='email' value={email} onChangeText={value => setEmail(value)} />
                    <InputField type='password' value={password} onChangeText={value => setPassword(value)} />

                    <TouchableOpacity
                        onPress={() => register(email, password)}
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
                            Signup
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                        <Text style={{ fontFamily: 'Montserrat-Black', marginRight: 10, }}>Returning user?</Text>
                        <TouchableOpacity onPress={handleLoginScreen}>
                            <Text style={{ fontFamily: 'Montserrat-Black', color: '#FF1493', }}>Login</Text>
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
