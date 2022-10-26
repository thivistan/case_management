import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
    },
    inputContainer: {
        width: '90%'
    },
    input: {
        backgroundColor: '#00BFFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    textInput: {
        color: 'white',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        color: '#00BFFF',
        fontWeight: 'thin',
        paddingRight: 30,
        paddingTop: 10,
    },
    textInputShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 6,
    },
    buttonShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 8,
    },
    buttonContainer: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        backgroundColor: '#00BFFF',
        width: '75%',
        padding: 12,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    newUserContainer: {
        marginTop: 15,
        alignContent: 'center',
    },
    signUpText: {
        color: '#00BFFF',
    },
    signUpTextClickable: {
        color: '#00BFFF',
        fontWeight: 'bold',
    },
    thaddeusTextContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
    },
    thaddeusText: {
        fontFamily: 'serif',
        textTransform: 'uppercase',
        color: '#00BFFF',
        fontSize: 22,
        bottom: 0,
        letterSpacing: 2,
        fontWeight: 'bold',
        marginLeft: '7%',
        marginRight: '7%',
    },
    resourceCenter: {
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        color: '#00BFFF',
        fontSize: 10,
        fontWeight: 'bold',
        bottom: 0,
        letterSpacing: 3,
        marginLeft: '7%',
        marginRight: '7%',
    },
    flexBox: {
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    },
    lineStyle: {
        flex: 1,
        borderWidth: 0.6,
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#00BFFF',
    },
    year: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: '#00BFFF',
        fontSize: 8,
        alignSelf: 'center',
    },
} );

export { styles };