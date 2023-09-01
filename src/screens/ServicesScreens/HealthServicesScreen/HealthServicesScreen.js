// TODO:
// -Get filter to work with search
// -Add box shadow to the interactive map
// -Better spacings between components
// -Make Marker smaller if possible

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Pressable,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';

import PlaceList from './PlaceList';
import MapList from './MapList';

import { getPlaces } from './url';

import * as Location from 'expo-location';

const searchImageDimensions = 25;
const navigateButtonDimensions = 20;
const uri = 'https://www.transparentpng.com/download/search-button/RwuGa6-button-search-png.png';
const colorPrimary = '#00BFFF';

export default function HealthServicesScreen({ navigation }) {
  const [searchStr, setSearchStr] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Use API to get search results and set the result state to all results found
  const addSearchResult = async (phrase) => {
    let results = null;

    if (location) {
      results = await getPlaces(
        phrase,
        location.coords.longitude,
        location.coords.latitude,
        filter.distance,
        filter.facility,
        filter.address,
        filter.region,
        filter.sortType
      );
    } else results = await getPlaces(phrase);

    setSearchResults(results);
  };

  const route = useRoute();
  const filter = route.params?.filter || '';

  function navToFilter() {
    navigation.navigate('Filter', { filter: filter });
  }

  return (
    <View>
      <View>
        <TouchableOpacity style={styles.filterBtn} onPress={navToFilter}>
          <Text style={styles.filterBtnText}>FILTER</Text>
        </TouchableOpacity>

        {Object.keys(filter).map((property, index) => (
          <Text key={index}>
            {property}: {filter[property]}
          </Text>
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Search by location</Text>

        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearchStr(text)}
            defaultValue={searchStr}
          />
          <TouchableHighlight style={styles.searchPic} onPress={() => addSearchResult(searchStr)}>
            <Icon name="ios-search" size={14} />
          </TouchableHighlight>
        </View>

        <MapList searchResults={searchResults} styles={styles}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterBtn: {
    zIndex: 1,
    elevation: 1,
    right: '-80%',
    top: 20,
  },

  filterBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  container: {
    margin: 30,
  },
  input: {
    backgroundColor: '#47d7f2',
    alignSelf: 'stretch',
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
  header: {
    margin: 10,
    color: '#47d7f2',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  text: {
    margin: 10,
    color: '#47d7f2',
    fontWeight: 'bold',
  },
  search: {
    justifyContent: 'center',
  },
  searchPic: {
    position: 'absolute',
    right: 10,
  },

  map: {
    height: 155.6666666666666,
    width: '100%',
    // SET HEIGHT AND WIDTH OF MAP TO FILL UP REST OF SCREEN
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
  },

  mapTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  resultButton: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colorPrimary,
    padding: 10,
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
  },

  headText: {
    color: colorPrimary,
    fontWeight: '700',
  },

  mapContainer: {
    overflow: 'hidden',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colorPrimary,
    shadowColor: '#171717',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
