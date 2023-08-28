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

  // Open external map app with given lat and lon
  const openMap = async (lat, lon, name) => {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lon}`;
    const label = name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('Opening the map app is not supported on this device.');
      }
    } catch (error) {
      console.error('An error occurred while opening the map app:', error);
    }
  };

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

        {/* <PlaceList places={places} /> */}

        <ScrollView>
          {/* search section */}
          {/* <View style={styles.searchHeaderContainer}>

          </View>

          <View style={styles.searchBtn}>
          <TextInput style={{ color: 'white' }}
            onChangeText={(text) => setSearchStr(text)}
            defaultValue={searchStr}
            placeholder='2621 Damien Ave, La Verne, CA, 91750 US'
            placeholderTextColor='#e8e8e8'
          />
          <Pressable
            onPress={handleSearch}
            style={({ pressed }) => {
              return { opacity: pressed ? 0 : 1, }
            }}
          >
            <Image
              style={{
                width: searchImageDimensions,
                height: searchImageDimensions,
              }}
              source={{ uri }}
            />
          </Pressable> 

            </View> */}

          {/* results section */}
          <View style={styles.searchHeaderContainer}>
            <Text style={styles.headText}>Results</Text>
          </View>

          {/* map section */}
          <View style={styles.resultsContainer}>
            {/* placeholder, but iterate through data */}
            {searchResults.length !== 0 &&
              searchResults.map((location) => (
                // individual location result
                <View style={{ marginTop: 10, marginHorizontal: 30 }} key={location.id}>
                  {/* actual map */}
                  <View style={styles.mapContainer}>
                    <MapView
                      style={styles.map}
                      region={{
                        // insert location data from iteration here
                        latitude: location.position.lat,
                        longitude: location.position.lon,
                        latitudeDelta: 0.0092,
                        longitudeDelta: 0.00921,
                      }}
                    >
                      {/* marker on map */}
                      <Marker
                        coordinate={{
                          // insert location data from iteration here
                          latitude: location.position.lat,
                          longitude: location.position.lon,
                        }}
                        title={location.poi.name}
                      />
                    </MapView>
                  </View>

                  {/* map text container */}
                  <View style={styles.mapTextContainer}>
                    <View style={{ width: '80%' }}>
                      <Text style={{ fontWeight: '700', fontSize: 20 }}>{location.poi.name}</Text>
                      <Text>{location.address.freeformAddress}</Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center' }}>
                      <TouchableOpacity
                        style={styles.resultButton}
                        onPress={() =>
                          openMap(location.position.lat, location.position.lon, location.poi.name)
                        }
                      >
                        <Image
                          style={{
                            width: navigateButtonDimensions,
                            height: navigateButtonDimensions,
                          }}
                          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149973.png' }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
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
