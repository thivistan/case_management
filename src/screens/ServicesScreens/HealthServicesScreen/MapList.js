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
import MapView, { Marker } from 'react-native-maps';


export default function MapList({ searchResults, styles }) {

    const searchImageDimensions = 25;
    const navigateButtonDimensions = 20;

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
        <ScrollView>
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
    )
}