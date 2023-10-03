import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { fonts } from '../../../global';

let deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lightBlueSquare: {
        position: 'absolute',
        left: 0,
        height: '65%',
        width: '75%',
        marginTop: '18%',
        borderRadius: 40,
        backgroundColor: '#89CFF0',
    },
    darkBlueSquare: {
        position: 'absolute',
        right: 0,
        height: '65%',
        width: '75%',
        marginTop: '10%',
        borderRadius: 40,
        backgroundColor: '#00BFFF',
    },
    squareShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 15,
    },
    footerContainer: {
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        padding: '10%',
        height: '35%',
        bottom: 0,
    },
    footer: {
        color: '#00BFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonContainer: {
        width: deviceWidth,
        height: '15%',
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonShadow: {
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 10,
    },
    shadow: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
        fontFamily: fonts.alegreyaBold,
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 22,
        bottom: 25,
        letterSpacing: 2,
        marginLeft: '10%',
        marginRight: '10%',
    },
    resourceCenterText: {
        // fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        bottom: 25,
        letterSpacing: 3,
        marginLeft: '10%',
        marginRight: '10%',
    },
    flexBox: {
        bottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    },
    lineStyle: {
        flex: 1,
        borderWidth: 0.5,
        marginRight: '3%',
        marginLeft: '3%',
        borderColor: 'white',
    },
    year: {
        // fontFamily: 'sans-serif',
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
        alignSelf: 'center',
    }
})

export { styles };