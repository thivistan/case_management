import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import UserIcon from "../../icons/user_icon.svg";
import { auth } from "../../firebase/firebase";
import { styles } from "./styles";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) navigation.navigate("Home");
        })
        return unsubscribe;
    }, [])

    const handleForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword");
    }

    const handleRegistrationScreen = () => {
        navigation.navigate("Registration");
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with", user.email);
        }).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style = { styles.container }
            behavior = "padding">

            <View style = { styles.iconContainer }>
                <UserIcon width = { 50 } height = { 50 }>
                </UserIcon>
            </View>

            <View style = { styles.inputContainer }>
                <TextInput
                    placeholder = "Email"
                    placeholderTextColor = 'white'
                    value = { email }
                    onChangeText = { text => setEmail(text) }
                    style = { [styles.input, styles.textInputShadow] }
                />
                <TextInput
                    placeholder =  "Password"
                    placeholderTextColor = 'white'
                    value = { password }
                    onChangeText = { text => setPassword(text) }
                    style = { [styles.input, styles.textInputShadow] }
                    secureTextEntry
                />
            </View>

            <Text
                style = { styles.forgotPassword }
                onPress = { handleForgotPasswordScreen }>
                Forgot password?
            </Text>

            <View style = { styles.buttonContainer }>
                <TouchableOpacity
                    onPress = { handleLogin }
                    style = { [styles.button, styles.buttonShadow] }
                    >
                    <Text style = { styles.buttonText }>Login</Text>
                </TouchableOpacity>
            </View>

            <Text style = { styles.newUserContainer}>
                <Text style = { styles.signUpText }>New user? </Text>
                <Text
                    style = { styles.signUpTextClickable }
                    onPress = { handleRegistrationScreen }>Sign up
                </Text>
            </Text>

            <View style = { styles.thaddeusTextContainer }>
                <Text style = { styles.thaddeusText }>Thaddeus</Text>
                <Text style = { styles.resourceCenter }>Resource Center</Text>

                <View style = { styles.flexBox }>
                    <View style = { styles.lineStyle }/>
                    <View>
                        <Text style = { styles.year }>est. 1975</Text>
                    </View>
                    <View style = { styles.lineStyle }/>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen
