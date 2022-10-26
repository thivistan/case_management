import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    forgotPasswordContainer: {
        fontFamily: 'sans-serif',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'justify',
        padding: 30,
    },
    forgotPasswordPrompt: {
        textTransform: 'uppercase',
        color: '#00BFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    forgotPasswordInstructions: {
        fontSize: 15,
        marginTop: 10,
        color: '#00BFFF',
        fontWeight: 'thin',
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '90%',
        padding: 15,
        borderRadius: 100,
        color: 'white',
    },
    textInputOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#00BFFF',
        borderWidth: 2,
    },
    textInput: {
        color: 'white',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#00BFFF',
        width: '100%',
        padding: 15,
        borderRadius: 100,
        alignItems: 'center',
    },
} );

export { styles };