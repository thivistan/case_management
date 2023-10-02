import React, { useState } from 'react';
import { styles } from './styles';
import resources from '../../../data/resources';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList, Keyboard, KeyboardAvoidingView, Text, Touchable, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { fonts } from '../../../global';
import ResourceButton from '../../../components/ResourceButton';

export default function ResourcesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const resourceButtonRenderItem = ({ item }) => {
  //     if (item.favorited) {
  //         <TouchableOpacity style={styles.categoryButton}>
  //             <Text>{item.buttonName}</Text>
  //         </TouchableOpacity>
  //     }
  //     else {
  //         <></>
  //     }
  // }

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
          <View style={styles.favoriteCategoriesContainer}>
            <FlatList
              horizontal={true}
              //data={ }
              //renderItem={( {item, index}) => {}}
            ></FlatList>
          </View>
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
            {/* Create buttons with every resource except the resources component */}
            {Object.entries(resources).map(([name, component], index) => (name !== 'Resources' && <ResourceButton name={name}/>))}
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
