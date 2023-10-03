import { StyleSheet } from "react-native";
import { colors, fonts } from '../../../global';

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        backgroundColor: colors.primaryTransparent,
        paddingBottom: 50,
        alignItems: 'center',   //align items on the cross axis (left to right)
        justifyContent: 'flex-start',
    },
    topSpacer: {
        flex: 1.5,
    },
    elementContainer: {
        height: '100%',
        width: '90%',
        flex: 18,
    },
    searchBarContainer: {
        flexDirection: 'row',
        flex: .5,
        paddingBottom: 20,
    },
    searchBar: {
        // borderWidth: 1.5,
        borderColor: colors.primaryBold,
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 15,
        fontFamily: fonts.defaultBold,
        color: colors.primary,
    },
    favoritesContainer: {
        flex: 2,
        paddingBottom: 30,
    },
    favoriteCategoriesContainer: {
        borderWidth: 1.5,
        flexGrow: 1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    categoriesContainer: {
        flex: 5,
    },
    categoriesScrollView: {
        borderColor: colors.primaryBold,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 20,
        paddingLeft: '3%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    resourceFavoriteButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    favoriteButton: {
        borderWidth: 1,
        height: 15,
        width: 15,
        borderRadius: 7,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 5,
    },
});

export { styles };