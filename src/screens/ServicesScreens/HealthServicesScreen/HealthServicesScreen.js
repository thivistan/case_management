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
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import PlaceList from './PlaceList';
import MapList from './MapList';

import { getPlaces } from './url';

import * as Location from 'expo-location';

const colorPrimary = '#00BFFF';

/**
 * Component to display the health service screen, including the search bar and map.
 * @param {Object} props Component props
 * @param {Object} props.navigate Helps with navigating to the filter screen.
 */
const HealthServicesScreen = ({ navigation }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState(null);

  const route = useRoute();
  const filter = route.params?.filter || '';

  /*
   * A hook to get the user's location.
   */
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

  /**
   * Function to call the API and set its search results to the appropriate state.
   * @param {String} phrase A phrase to search for.
   */
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

  /**
   * Function to navigate to the filter.
   */
  const navToFilter = () => {
    navigation.navigate('Filter', { filter: filter });
  };

  return (
    <View>
      <View>
        <TouchableOpacity style={styles.filterBtn} onPress={navToFilter}>
          <Text style={styles.filterBtnText}>FILTER</Text>
        </TouchableOpacity>
        {/*
        {Object.keys(filter).map((property, index) => (
          <Text key={index}>
            {property}: {filter[property]}
          </Text>
        ))}
        */}
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

        <MapList searchResults={searchResults} styles={styles} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
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
  input: {
    backgroundColor: '#47d7f2',
    alignSelf: 'stretch',
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
  search: {
    justifyContent: 'center',
  },
  searchPic: {
    position: 'absolute',
    right: 10,
  },
  text: {
    margin: 10,
    color: '#47d7f2',
    fontWeight: 'bold',
  },
});

export default HealthServicesScreen;
