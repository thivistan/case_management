import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, BackHandler, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from './styles';
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail ] = useState('');

    const handleBackButton = () => {
        navigation.replace("Login");
    }

    const handleForgotPassword = () => {
        auth.sendPasswordResetEmail(email).then(() => {
            console.log("Reset email sent to " + email);
        }).catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
        style = { styles.container }
        behavior = 'padding'
        >
            <Text style = { styles.backButton } onPress = { handleBackButton }>Back</Text>
            <View style = { styles.forgotPasswordContainer }>
                <Text style = { styles.forgotPasswordPrompt }>Forgot Password</Text>
                <Text style = { styles.forgotPasswordInstructions }>
                    Please enter your email address. You will{"\n"}
                    receive a link to create a new password{"\n"}via email
                </Text>
            </View>

            <View style = { [styles.inputContainer, styles.textInputOutline] }>
                <TextInput
                    placeholder = "Email"
                    color = '#00BFFF'
                    placeholderTextColor = '#00BFFF'
                    value = { email }
                    onChangeText = { text => setEmail(text) }
                    styles = { styles.textInput }
                />
            </View>

            <View style = { styles.buttonContainer }>
                <TouchableOpacity
                    onPress = { handleForgotPassword }
                    style = { styles.button }
                    >
                    <Text style = { styles.buttonText }>Submit</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default ForgotPasswordScreen;