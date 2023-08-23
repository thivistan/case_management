import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import PlaceList from "./PlaceList";

import Icon from "react-native-vector-icons/Ionicons";

import { getPlaces } from "./url"

export default function App() {
  const [places, setPlaces] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const addSearchResult = async (phrase) => {
    results = await getPlaces(phrase)
    setPlaces(results)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Services</Text>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />

      <Text style={styles.text}>Search by location</Text>

      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSearchStr(text)}
          defaultValue={searchStr}
        />
        <TouchableHighlight style={styles.searchPic}
          onPress={() => addSearchResult(searchStr)}
        >
          <Icon  name="ios-search" size={14} />
        </TouchableHighlight >
      </View>

      <PlaceList places={ places } />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#47d7f2",
    alignSelf: "stretch",
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "white"
  },
  header: {
    margin: 10,
    color: "#47d7f2",
    alignItems: "center",
    fontWeight: "bold",
  },
  text: {
    margin: 10,
    color: "#47d7f2",
    fontWeight: "bold",
  },
  search: {
    justifyContent: "center",
  },
  searchPic: {
    position: "absolute",
    right: 10,
  },
});
