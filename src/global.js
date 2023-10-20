/**
 *  Global consts for company colors, fonts, etc.
 *  9/23/23: Using styles from Thaddeus Style Guide: 
 *  https://thethaddeusfoundation.sharepoint.com/sites/ThaddeusStaff/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FThaddeusStaff%2FShared%20Documents%2FGeneral%2FMedia%2FThaddeus%20Media%2FThaddeus%20Style%20Guide%202020%2FThaddeus%20Style%20Guide%2Epdf&parent=%2Fsites%2FThaddeusStaff%2FShared%20Documents%2FGeneral%2FMedia%2FThaddeus%20Media%2FThaddeus%20Style%20Guide%202020&p=true&ct=1695504599220&or=Teams%2DHL&ga=1&LOF=1
 */

import { StyleSheet } from "react-native";

export const colors = {
    primary: "#6acfee",
    primaryBold: '#00BFFF', // Most commonly used color prior to the creation of this file.
    primaryTransparent: "#6acfee66",
    secondary: "#df1683",
}

export const backgroundColors = {
    primary: "#6acfee66"
}

export const fonts = {
    default: "Roboto-Regular",
    defaultBold: "Roboto-Bold",
    alegreya: "Alegreya-Regular",
    alegreyaBold: "Alegreya-Bold",
}

export const globalStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 5,
    },
    shadowNormal: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});