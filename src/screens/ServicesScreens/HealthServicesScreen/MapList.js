import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

const colorPrimary = '#00BFFF';

/**
 * Method to redirect to default map application on the mobile device with coordinates used
 * from place searches.
 * @param {Number} lat Latitude of the location
 * @param {Number} lon Longtitude of the location
 * @param {String} name Name of the location
 */
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

/**
 * Component to display a place's name, address, and its location on a map.
 * @param {Object} props Component props
 * @param {Object} props.location Contains the place's data in JSON
 */
const Map = ({ location }) => {
  return (
    // individual location result
    <View style={styles.placeContainer}>
      {/* actual map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: location.position.lat,
            longitude: location.position.lon,
            latitudeDelta: 0.0092,
            longitudeDelta: 0.00921,
          }}
        >
          {/* marker on map */}
          <Marker
            coordinate={{
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
          <Text style={styles.locationName}>{location.poi.name}</Text>
          <Text>{location.address.freeformAddress}</Text>
        </View>
        <View style={styles.openMapButton}>
          <TouchableOpacity
            style={styles.resultButton}
            onPress={() => openMap(location.position.lat, location.position.lon, location.poi.name)}
          >
            <Icon name="navigate" size={14} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

/**
 * Component to display a scrollable list of all places found in the search.
 * @param {Object} props Component props
 * @param {Object} props.searchResults Contains the places' data in JSON
 */
const MapList = ({ searchResults }) => {
  if (searchResults == null) {
    return <Text style={styles.message}>Please search for a location.</Text>;
  } else if (searchResults.length == 0) {
    return <Text style={styles.message}>No results found. Please try another search.</Text>;
  } else if (searchResults == 'error') {
    return <Text style={styles.message}>An error occured. Please try again later.</Text>;
  } else if (searchResults == 'empty') {
    return <Text style={styles.message}>Please enter a valid search phrase.</Text>;
  }

  return (
    <View>
      <View style={styles.searchHeaderContainer}>
        <Text style={styles.headText}>Results</Text>
      </View>
      <View>
        <ScrollView style={styles.scrollViewContainer}>
          {/* scrollable list section */}
          <View style={styles.resultsContainer}>
            {searchResults.length !== 0 &&
              searchResults.map((location) => <Map key={location.id} location={location} />)}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBtn: {
    zIndex: 1,
    elevation: 1,
    right: '-80%',
    top: 20,
  },
  headText: {
    color: colorPrimary,
    fontWeight: '700',
  },
  locationName: {
    fontWeight: '700',
    fontSize: 20,
  },
  map: {
    height: 155.6666666666666,
    width: '100%',
    // SET HEIGHT AND WIDTH OF MAP TO FILL UP REST OF SCREEN
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
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
  mapTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  message: {
    margin: 20,
  },
  openMapButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  placeContainer: {
    marginTop: 10,
    marginHorizontal: 30,
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
  scrollViewContainer: {
    height: '83%',
  },
  searchHeaderContainer: {
    marginBottom: 10,
  },
});

export default MapList;
