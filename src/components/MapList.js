import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

const colorPrimary = '#00BFFF';

/**
 * Function to handle opening various apps on the OS.
 * @param {String} content the content that will be sent to the app
 * @param {String} type the type of app to open
 * @param {String} lat the latitude if opening the map app
 * @param {String} lon the longitude if opening the map app
 */
const openApp = async (content, type, lat, lon) => {
  let url = content;
  if (type === 'map') {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lon}`;
    url = Platform.select({
      ios: `${scheme}${content}@${latLng}`,
      android: `${scheme}${latLng}(${content})`,
    });
  } else if (type == 'email') {
    const scheme = Platform.select({ ios: 'message:', android: 'mailto:' });
    url = Platform.select({
      ios: `${scheme}${content}`,
      android: `${scheme}${content}`,
    });
  } else if (type == 'phone') {
    url = `tel:${content}`
  }
  
  try {
    await Linking.openURL(url);
    console.log(`Opened URL: ${url}`);
  } catch (error) {
    console.error(`Error opening URL: ${url}`, error);
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
      {location.lat && location.lon ? (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: location.lat,
              longitude: location.lon,
              latitudeDelta: 0.0092,
              longitudeDelta: 0.00921,
            }}
          >
            {/* marker on map */}
            <Marker
              coordinate={{
                latitude: location.lat,
                longitude: location.lon,
              }}
              title={location.name}
            />
          </MapView>
        </View>
      ) : null}

      {/* map text container */}
      <View style={styles.mapTextContainer}>
        <View style={{ width: '80%' }}>
          <Text style={styles.locationName}>{location.name}</Text>
          {location.address ? <Text>{location.address}</Text> : null}
          <Text onPress={() => openApp(location.phone, 'phone')}>
            <Icon name="call" /> <Text style={styles.underline}>{location.phone}</Text>
          </Text>
          {location.hours ? (
            <Text>
              <Icon name="time" /> {location.hours}
            </Text>
          ) : null}
          {location.email ? (
            <Text onPress={() => openApp(location.email, 'email')}>
              <Icon name="mail" /> <Text style={styles.underline}>{location.email}</Text>
            </Text>
          ) : null}
          {location.website ? (
            <Text onPress={() => openApp(location.website, 'browser')}>
              <Icon name="globe" /> <Text style={styles.underline}>{location.website}</Text>
            </Text>
          ) : null}
        </View>
        {location.lat && location.lon ? (
          <View style={styles.openMapButton}>
            <TouchableOpacity
              style={styles.resultButton}
              onPress={() => openApp(location.name, 'map', location.lat, location.lon)}
            >
              <Icon name="navigate" size={14} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

/**
 * Component to display a scrollable map list of all places given.
 * @param {Object} props Component props
 * @param {Object} props.locations Contains location objects.
 */
const MapList = ({ locations }) => {
  return (
    <View style={styles.mapList}>
      <ScrollView style={styles.scrollViewContainer}>
        {/* scrollable list section */}
        <View style={styles.resultsContainer}>
          {locations.map((location) => (
            <Map key={location.name} location={location} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
  locationName: {
    fontWeight: '700',
    fontSize: 20,
  },
  map: {
    height: 120,
    width: '100%',
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
  mapList: {
    height: '79%',
  },
  mapTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
    marginBottom: 20,
  },

  underline: {
    color: colorPrimary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default MapList;

export { openApp };
