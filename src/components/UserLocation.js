import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as Location from 'expo-location';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLocationButtonPress = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  let locationText = 'Waiting..';
  if (errorMsg) {
    locationText = errorMsg;
  } else if (location) {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    locationText = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => {}} />
        <Text style={styles.headerTitle}>Resource Name</Text>
        <Button title="Filter" onPress={() => {}} />
      </View>
      <Button title="Use your location" onPress={handleLocationButtonPress} />
      <Text>{locationText}</Text>
    </View>
  );
}
