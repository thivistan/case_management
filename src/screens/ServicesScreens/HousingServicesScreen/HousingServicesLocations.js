import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HousingServicesLocations = ({ address }) => {
  const openInBrowser = () => {
    const encodedAddress = encodeURIComponent(address);
    // Open the address in the device's browser
    const url = `https://www.google.com/maps/search/?q=${encodedAddress}`;
    Linking.openURL(url).catch((err) => console.error('Error opening URL1: ', err));
  };

  return (
    <View style={styles.box}>
      {/* Google Maps container */}
      <View
        style={{
          backgroundColor: '#47d7f2',
          padding: 10,
          height: 100,
          margin: 10,
        }}
      >
        {/* Google Maps component */}
        {/* Replace this with your actual Google Maps component */}
        <Text>Google Maps Component</Text>
      </View>

      {/* Address text */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 1, color: '#47d7f2', fontSize: 16, marginTop: 10, marginStart: 10 }}>
          {address}
        </Text>

        {/* Button to open address in browser */}
        {/* <TouchableOpacity
          onPress={openInBrowser}
          style={{ flex: 0.25, backgroundColor: 'green', padding: 10, marginTop: 10 }}
        >
          <Text style={{ color: 'white' }}>Open in Browser</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={openInBrowser}
          style={{
            flex: 0.15,
            backgroundColor: '#47d7f2',
            borderRadius: 15,
            padding: 8,
            alignItems: 'center',
            marginTop: 15,
            marginEnd: 10,
          }}
        >
          <Icon name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  box: {
    backgroundColor: 'white',
    height: 200,
    marginBottom: 10,
    borderRadius: 20,
  },
});

export default HousingServicesLocations;
