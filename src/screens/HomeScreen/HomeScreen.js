import React, { useContext } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../Navigation/AuthProvider";
import { styles } from "./styles";

export default function HomeScreen() {
    const { logout } = useContext(AuthContext);

    return (
        <View style = { styles.container }>
            <Text>Email: { auth.currentUser?.email }</Text>
            <TouchableOpacity 
                style = { styles.button }
                onPress = {() => logout() }
            >
                <Text
                    style = { styles.buttonText }>Sign out
                </Text>
            </TouchableOpacity>

        </View>
    )
}