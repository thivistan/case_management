import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from "react-native";
import { getStaticImage } from "./url"
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";

const Place = ({place}) => {
  const getImage = () => {
    const result = getStaticImage(place.position.lon, place.position.lat)
    return result
  }

  return (
    <View style={styles.placeContainer}>
    <Image source={{uri: getImage()}} style={ styles.placeImage }  />
      <Text style={styles.placeName} >{place.poi.name}</Text>
      <Text style={styles.placeAddress}>{place.address.freeformAddress}</Text>
      <TouchableHighlight style={styles.mapIcon}
          onPress=""
        >
          <Icon name="navigate-outline" size={14} />
        </TouchableHighlight >
    </View>
  );
};

const PlaceList = ({ places }) => {
  const results = (
    <>
    <Text style={styles.resultText}>Results</Text>
    <View style={styles.results}>
    <ScrollView>
      {places.map((place) => <Place key={String(place.address.freeformAddress) } place={place} />)}
    </ScrollView>
    </View>
    </>
  )

  return (
    <View>
      {places.length > 0
        ? results
        : (<Text>"Please search for a location."</Text>)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  placeContainer: {
    margin: 10,
  },
  placeName: {
    color: "#47d7f2",
  },
  placeAddress: {
    color: "#b0edf6",
  },
  resultText: {
    fontWeight: "bold",
    color: "#47d7f2",
    margin: 10,
  },
  placeImage: {
    width: 300,
    height: 150,
    borderRadius: 150 / 12,
  },
  mapIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#47d7f2",
    borderRadius: 150 / 12,
  },
  results: {
    marginBottom: 10,
  }

});

export default PlaceList;
