import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";
import { styles } from "./styles";

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut().then( () => {
            navigation.navigate("Login")
        }).catch(error => alert(error.message));
    }

    return (
        <View style = { styles.container }>
            <Text>Email: { auth.currentUser?.email }</Text>

            <TouchableOpacity style = { styles.button }>
                <Text
                    onPress = { handleSignOut }
                    style = { styles.buttonText }>Sign out
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default HomeScreen;