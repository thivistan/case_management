import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, BackHandler, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from './styles';
import { TextInput } from "react-native-gesture-handler";

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail ] = useState('');

    const handleSubmitButton = () => {
        console.log("Entered email", user.email);
    }

    const handleBackButton = () => {
        navigation.replace("Login");
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
                    color = '#00BFFF'
                    styles = { styles.textInput }
                    placeholder = "Email"
                    placeholderTextColor = '#00BFFF'
                    value = { email }
                    onChangeText = { text => setEmail(text) }
                />
            </View>
            <View style = { styles.buttonContainer }>
                <TouchableOpacity
                    onPress = { handleSubmitButton }
                    style = { styles.button }
                    >
                    <Text style = { styles.buttonText }>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ForgotPasswordScreen;