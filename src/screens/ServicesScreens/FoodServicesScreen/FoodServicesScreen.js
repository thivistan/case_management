import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

// assets & constants
const searchImageDimensions = 25
const navigateButtonDimensions = 20
const uri = "https://www.transparentpng.com/download/search-button/RwuGa6-button-search-png.png"
const colorPrimary = "#00BFFF"

export default function FoodServicesScreen({ navigation }) {
  const [permissionError, setPermissionError] = useState('')

  // route to route to other page
  const route = useRoute();
  // filter data to pass through filter page
  const filter = route.params?.filter || '';

  // function to get current user's location
  const userLocation = async () => {
    // handle ASKING for user's location
    let { status } = await Location.requestForegroundPermissionsAsync();
    status !== 'granted' && setPermissionError('Permission to access location was denied')

    // get the location after permission granted, then log
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
    console.log("This is the user's current location: ")
    console.log(location)
  }
  useEffect(() => {
    // call the function to get user location
    userLocation()
  }, [])

  return (
    <View>

      <ScrollView>

        {/* search section */}
        <Text style={styles.headText}>Search by location</Text>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.navigate('Filter', { filter: filter })}
        >
          <Text style={{ color: 'white' }}>2825 W Thad</Text>
          <Image
            onPress={() => console.log("maybe")}
            style={{
              width: searchImageDimensions,
              height: searchImageDimensions,
            }}
            source={{ uri }}
          />
        </TouchableOpacity>



        {/* results section */}
        <Text style={styles.headText}>Results</Text>



        {/* map section */}
        <View style={{ padding: 15, paddingTop: 0, overflow: 'hidden' }}>
          {/* placeholder, but iterate through data */}
          {[1, 2, 3, 4].map(() => (
            // individual location result
            <View style={{ marginTop: 10, marginHorizontal: 30 }}>
              {/* actual map */}
              <View style={{ overflow: 'hidden', borderRadius: 25 }}>
                <MapView style={styles.map}
                  region={{
                    // insert location data from iteration here
                    latitude: 34.108220,
                    longitude: -117.787980,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                  {/* marker on map */}
                  <Marker coordinate={{
                    // insert location data from iteration here
                    latitude: 34.108220,
                    longitude: -117.787980,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }} title="Marker" />
                </MapView>
              </View>

              {/* map text container */}
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View>
                  <Text style={{ fontWeight: '700', fontSize: 20 }}>Big Location</Text>
                  <Text>Small Location</Text>
                </View>
                <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', backgroundColor: colorPrimary, padding: 10, borderRadius: 15 }}>
                  <Image
                    onPress={() => console.log("maybe")}
                    style={{
                      width: navigateButtonDimensions,
                      height: navigateButtonDimensions,
                    }}
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149973.png" }}
                  />
                </TouchableOpacity>
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
  headText: {
    color: colorPrimary,
    fontWeight: '700',
    padding: 10
  },
  filterBtn: {
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

  },
  map: {
    height: 155.6666666666666,
    width: "100%",
    // SET HEIGHT AND WIDTH OF MAP TO FILL UP REST OF SCREEN
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
  }
})