import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

import { colors, globalStyles } from '../global';
import { openApp } from '../functions/openApp'

/**
 * Component to display a place's name, address, and its resource on a map.
 * @param {Object} props Component props
 * @param {Object} props.resource Contains the place's data in JSON
 */
export const Map = ({ resource }) => {
  return (
    // individual resource result
    <View style={[styles.placeContainer, globalStyles.shadow]}>
      {/* actual map */}
      {(resource.lat && resource.lon) && (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: resource.lat,
              longitude: resource.lon,
              latitudeDelta: 0.0092,
              longitudeDelta: 0.00921,
            }}
          >
            {/* marker on map */}
            <Marker
              coordinate={{
                latitude: resource.lat,
                longitude: resource.lon,
              }}
              title={resource.name}
            />
          </MapView>
        </View>
      )}

      {/* map text container */}
      <View style={styles.mapTextContainer}>
        <View style={{ width: '80%' }}>
          <Text style={styles.locationName}>{resource.name}</Text>
          {resource.address && <Text>{resource.address}</Text>}
          {resource.phone &&
            <Text onPress={() => openApp(resource.phone, 'phone')}>
              <Icon name="call" /> <Text style={styles.underline}>{resource.phone}</Text>
            </Text>
          }
          {resource.hours && (
            <Text>
              <Icon name="time" /> {resource.hours}
            </Text>
          )}
          {resource.email && (
            <Text onPress={() => openApp(resource.email, 'email')}>
              <Icon name="mail" /> <Text style={styles.underline}>{resource.email}</Text>
            </Text>
          )}
          {resource.website && (
            <Text onPress={() => openApp(resource.website, 'browser')}>
              <Icon name="globe" /> <Text style={styles.underline}>{resource.website}</Text>
            </Text>
          )}
        </View>
        {(resource.lat && resource.lon) && (
          <View style={styles.openMapButton}>
            <TouchableOpacity
              style={styles.resultButton}
              onPress={() => openApp(resource.name, 'map', resource.lat, resource.lon)}
            >
              <Icon name="navigate" size={14} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

/**
 * Component to display a scrollable map list of all places given.
 * @param {Object} props Component props
 * @param {Object} props.resources Contains resource objects.
 */
const MapList = ({ resources }) => {
  return (
    <View style={styles.mapList}>
      <ScrollView style={styles.scrollViewContainer}>
        {/* scrollable list section */}
        <View style={styles.resultsContainer}>
          {resources.map((resource) => (
            <Map key={resource.name} resource={resource} />
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
    color: colors.primary,
    fontWeight: '700',
    fontSize: 20,
  },
  map: {
    height: 120,
    width: '100%',
  },
  mapContainer: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'grey',
    overflow: 'hidden',
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
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 30,
    marginTop: 10,
    padding: 10,
  },
  resultButton: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.primaryBold,
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
    color: colors.primaryBold,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default MapList;