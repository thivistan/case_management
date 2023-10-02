import React, { useState } from 'react';
import { styles } from './styles';
import resources from '../../../data/resources';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import ResourceButton from '../../../components/ResourceButton';

export default function ResourcesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(
    Object.entries(resources)
      .filter(([name]) => name !== 'Resources')
      .map(([name]) => ({[name]: false}))
  );

  function handleFavorite(name, isFavorited)  {
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
          <TextInput style={styles.searchBar} placeholder="   Search..." font></TextInput>
        </View>

        <View style={styles.favoritesContainer}>
          <Text
            style={{
              color: '#00BFFF',
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 10,
              fontFamily: 'Montserrat-Black',
            }}
          >
            Favorites
          </Text>
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
                      isFavorited={isFavorited} 
                      iconName={resources[name].iconName}
                      handleFavorite={() => handleFavorite(name, isFavorited)}
                    />
                  );
                })}
            </ScrollView>
        </View>

        {/* categories section */}
        <View style={styles.categoriesContainer}>
          <Text
            style={{
              color: '#00BFFF',
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 10,
              fontFamily: 'Montserrat-Black',
            }}
          >
            All Categories
          </Text>

          <ScrollView 
            style={styles.categoriesScrollView} 
            contentContainerStyle={{ 
              justifyContent: "space-evenly", 
              flexWrap: "wrap", 
              flexDirection: "row", 
              justifyContent: "flex-start"
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
                  isFavorited={isFavorited} 
                  iconName={resources[name].iconName}
                  handleFavorite={() => handleFavorite(name, isFavorited)}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
