import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

// utils
import { searchFoodServicesByLocation, userLocation, openMap } from "./utils"

// assets & constants
const searchImageDimensions = 25
const navigateButtonDimensions = 20
const uri = "https://www.transparentpng.com/download/search-button/RwuGa6-button-search-png.png"
const colorPrimary = "#00BFFF"

export default function FoodServicesScreen({ navigation }) {
  const [searchStr, setSearchStr] = useState('')
  const [results, setResults] = useState([])
  const [permissionError, setPermissionError] = useState('')
  const [inputError, setInputError] = useState('')
  const [loading, setLoading] = useState(false)

  // useRoute() == route to route to other page
  // filter data to pass through filter page
  const filter = useRoute().params?.filter || '';


  useEffect(() => {
    // call the function to get/log user location
    userLocation(setPermissionError)
  }, [])

  const handleSearch = async () => {
    setLoading(true)
    if (!searchStr) {
      setInputError("Please Enter Valid Input")
      setLoading(false)
      return;
    }
    setInputError("")
    const results = await searchFoodServicesByLocation(searchStr)
    const filteredResults = results.results.map((result) => ({
      id: result?.id,
      // name, address, lat, lon
      name: result?.poi.name,
      address: result?.address.freeformAddress,
      lat: result?.position.lat,
      lon: result?.position.lon,
    }))
    setResults(filteredResults)
    setLoading(false)
  }

  return (
    <View>

      <ScrollView>
        {/* search section */}
        <View style={styles.searchHeaderContainer}>
          <Text style={styles.headText}>Search by location</Text>
          <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate('Filter', { filter: filter })}>
            <Text style={{ color: colorPrimary, fontWeight: '700' }}>FILTER</Text>
          </TouchableOpacity>
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
              return { opacity: pressed ? 0 : 1 }
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

        </View>

        <Text style={{ textAlign: 'center', color: 'red' }}>
          {inputError}
        </Text>
        {/* loading */}
        {loading && <ActivityIndicator />}

        {/* results section */}
        {results.length !== 0 && (
          <View style={styles.searchHeaderContainer}>
            <Text style={styles.headText}>Results</Text>
          </View>
        )}


        {/* map section */}
        <View style={styles.resultsContainer}>
          {/* placeholder, but iterate through data */}
          {results.length !== 0 && results.map((location) => (
            // individual location result
            <View style={{ marginTop: 10, marginHorizontal: 30 }} key={location.id}>
              {/* actual map */}
              <View style={styles.mapContainer}>
                <MapView style={styles.map}
                  region={{
                    // insert location data from iteration here
                    latitude: location.lat,
                    longitude: location.lon,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                  {/* marker on map */}
                  <Marker coordinate={{
                    // insert location data from iteration here
                    latitude: location.lat,
                    longitude: location.lon,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }} title="Marker" />
                </MapView>
              </View>

              {/* map text container */}
              <View style={styles.mapTextContainer}>
                <View style={{ width: '80%' }}>
                  <Text style={{ fontWeight: '700', fontSize: 20 }}>{location.name}</Text>
                  <Text>{location.address}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'center' }}>
                  <TouchableOpacity style={styles.resultButton}
                    onPress={() => openMap(location.lat, location.lon, location.name)}
                  >
                    <Image
                      style={{
                        width: navigateButtonDimensions,
                        height: navigateButtonDimensions,
                      }}
                      source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149973.png" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>


      </ScrollView>


      {/* fixed filter button */}
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center', }}>
          <TouchableOpacity disabled style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#9ee7ff", padding: 10, paddingHorizontal: 100, borderRadius: 25 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>

  )
}


const styles = StyleSheet.create({
  searchHeaderContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headText: {
    color: colorPrimary,
    fontWeight: '700',
  },
  searchBtn: {
    backgroundColor: colorPrimary,
    margin: 12,
    padding: 15,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  resultsContainer: {
    padding: 15,
    paddingTop: 0,
    paddingBottom: 120,
    overflow: 'hidden'
  },
  map: {
    height: 155.6666666666666,
    width: "100%",
    // SET HEIGHT AND WIDTH OF MAP TO FILL UP REST OF SCREEN
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
  },
  mapTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  resultButton: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colorPrimary,
    padding: 10,
    borderRadius: 15
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
})