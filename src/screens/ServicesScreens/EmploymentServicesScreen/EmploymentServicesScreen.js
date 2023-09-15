import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'

// constants
const searchImageDimensions = 25
const uri = "https://www.transparentpng.com/download/search-button/RwuGa6-button-search-png.png"
const colorPrimary = "#00BFFF"

export default function EmploymentServicesScreen({ navigation }) {
  // for filter
  const route = useRoute();
  const filter = route.params?.filter || '';

  // state variables
  const [searchStr, setSearchStr] = useState('')

  const handleSearch = async () => {
    console.log("test")
  }

  return (
    <View>
      <ScrollView>
        <View>
          {/* search section */}
          <View style={styles.searchHeaderContainer}>
            <Text style={styles.headText}>Search Any Employment Services</Text>
            <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate('Employment Services Filter', { filter: filter })}>
              <Text style={{ color: colorPrimary, fontWeight: '700' }}>FILTER</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchBtn}>
            <TextInput style={{ color: 'white' }}
              onChangeText={(text) => setSearchStr(text)}
              defaultValue={searchStr}
              placeholder='Cooking Positions'
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
        </View>
      </ScrollView>
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