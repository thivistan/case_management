import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import resources from '../../../data/resources';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import ResourceButton from './ResourceButton';
import { colors, fonts } from '../../../global';

/**
 * The resources screen.
 * 
 * Each resource screen is programmatically rendered based on the data in `resources.js`.
 * 
 * Component navigation order: `ResourcesScreen` -> `ServiceScreen` -> `CategoryScreen`
 * 
 * @returns Resources screen component.
 */
export default function ResourcesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(
    Object.entries(resources)
      .filter(([name]) => name !== 'Resources')
      .map(([name]) => ({ [name]: false }))
  );

  function handleFavorite(name, isFavorited) {
    const updatedFavorites = favorites.map(fav => {
      if (Object.keys(fav)[0] === name) {
        return { [name]: !isFavorited };
      }
      return fav;
    });
    setFavorites(updatedFavorites);
  }

  const searchForUserQuery = () => {
    /** TO-DO
     * search for pages
     * search for resources/programs
     * search for employers
     */
    console.log(searchQuery);
  };

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={styles.elementContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Search..." placeholderTextColor={'#BEBEBE'} selectionColor={colors.primary}></TextInput>
        </View>

        <View style={styles.favoritesContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingBottom: 10,
              fontFamily: fonts.alegreyaBold,
              textTransform: 'uppercase',
            }}
          >
            Favorites
          </Text>
          <View style={styles.shadow}>

            <ScrollView
              style={styles.categoriesScrollView}
              contentContainerStyle={{
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              {favorites
                .filter(favorite => {
                  const name = Object.keys(favorite).find(key => key !== 'key');
                  return favorite[name];
                })
                .map((favorite, index) => {
                  const name = Object.keys(favorite).find(key => key !== 'key');
                  const isFavorited = favorite[name];

                  return (
                    <ResourceButton
                      name={name}
                      key={name}
                      url={resources[name].url}
                      isFavorited={isFavorited}
                      iconName={resources[name].iconName}
                      handleFavorite={() => handleFavorite(name, isFavorited)}
                    />
                  );
                })}
            </ScrollView>
          </View>
        </View>

        {/* categories section */}
        <View style={styles.categoriesContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingBottom: 10,
              fontFamily: fonts.alegreyaBold,
              textTransform: 'uppercase',
            }}
          >
            All Categories
          </Text>
          <View style={styles.shadow}>
            <ScrollView
              style={styles.categoriesScrollView}
              contentContainerStyle={{
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              {favorites.map((favorite) => {
                const name = Object.keys(favorite).find(key => key !== 'key');
                const isFavorited = favorite[name];

                return (
                  name !== 'Resources' &&
                  <ResourceButton
                    name={name}
                    key={name}
                    data={resources[name].data}
                    isFavorited={isFavorited}
                    iconName={resources[name].iconName}
                    handleFavorite={() => handleFavorite(name, isFavorited)}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

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