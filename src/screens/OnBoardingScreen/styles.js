import { StyleSheet } from "react-native";

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 275,
        position: 'absolute',
        bottom: 0,
    },
    welcomeText: {
        color: '#00BFFF',
        fontWeight: '500',
        fontSize: 16,
    },
    infoText: {
        color: '#00BFFF',
        fontWeight: '500',
    },
    bottomButtonContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    button: {
        backgroundColor: '#00BFFF',
        width: '75%',
        padding: 12,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    lightBlueSquare: {
        position: 'absolute',
        left: 0,
        width: 350,
        height: 400,
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#89CFF0',
    },
    darkBlueSquare: {
        position: 'absolute',
        right: 0,
        width: 350,
        height: 400,
        top: 60,
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
    },
    thaddeusSquare: {
        position: 'absolute',
        right: 30,
        width: 200,
        height: 250,
        top: 100,
        alignItems: 'center',
        position: 'absolute',
        borderRadius: 40,
        justifyContent: 'center',
        backgroundColor: '#FF1493',
    },
    thaddeusText: {
        // Android font
        fontFamily: 'serif',
        // Apple font
        // fontFamily: 'Times New Roman',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 22,
        bottom: 25,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginLeft: 25,
        marginRight: 25,
    },
    resourceCenterText: {
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        bottom: 25,
        letterSpacing: 3,
        marginLeft: 25,
        marginRight: 25,
    },
    flexBox: {
        bottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
    },
    lineStyle: {
        flex: 1,
        borderWidth: 0.5,
        marginRight: 5,
        marginLeft: 5,
        borderColor: 'white',
    },
    year: {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: 'white',
        fontSize: 8,
        alignSelf: 'center',
    }
} )

export { styles };