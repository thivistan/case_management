import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Pressable, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'

// constants
const searchImageDimensions = 25
const uri = "https://www.transparentpng.com/download/search-button/RwuGa6-button-search-png.png"
const colorPrimary = "#00BFFF"
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function EmploymentServicesScreen({ navigation }) {
  // for filter
  const route = useRoute();
  const filter = route.params?.filter || '';
  useEffect(() => {
    console.log(filter);
  }, [filter])

  // state variables
  const [searchStr, setSearchStr] = useState('')
  const [data, setData] = useState([])

  const handleSearch = async () => {
    fetch(`https://data.usajobs.gov/api/Search?keyword=software%20engineer&locationName=california,%20fremont`, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "info@thaddeus.org",
        "Authorization-Key": "NTD9y/WKS7/8glH6vrEsMqvgcQC8SwGrJz9rIjRFLuM=",
        "Host": "data.usajobs.gov"
      }
    })
      .then(res => res.json())
      .then(data => {
        data = data?.SearchResult?.SearchResultItems;

        let filteredData = data.map(data => {
          // console.log(data.MatchedObjectDescriptor.PositionRemuneration[0].Description)
          return ({
            id: data.MatchedObjectDescriptor.PositionID,
            title: data.MatchedObjectDescriptor.PositionTitle,
            link: data.MatchedObjectDescriptor.PositionURI,
            location: data.MatchedObjectDescriptor.PositionLocationDisplay,
            organizationName: data.MatchedObjectDescriptor.OrganizationName,
            qualificationSummary: data.MatchedObjectDescriptor.QualificationSummary,
            salaryMin: data.MatchedObjectDescriptor.PositionRemuneration[0].MinimumRange,
            salaryMax: data.MatchedObjectDescriptor.PositionRemuneration[0].MaximumRange,
            perYearOrHourly: data.MatchedObjectDescriptor.PositionRemuneration[0].Description,
          })
        })
        setData(filteredData)
      })
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
          <View style={{ width: '100%', margin: 10 }}>
            {data.length !== 0 ? data.map((item) => (
              // DONEid: data.MatchedObjectDescriptor.PositionID,
              // DONEtitle: data.MatchedObjectDescriptor.PositionTitle,
              // DONElink: data.MatchedObjectDescriptor.PositionURI,
              // DONElocation: data.MatchedObjectDescriptor.PositionLocationDisplay,
              // DONEorganizationName: data.MatchedObjectDescriptor.OrganizationName,
              // qualificationSummary: data.MatchedObjectDescriptor.QualificationSummary,
              // DONEsalaryMin: data.MatchedObjectDescriptor.PositionRemuneration.MinimumRange,
              // DONEsalaryMax: data.MatchedObjectDescriptor.PositionRemuneration.MaximumRange,
              // DONEperYearOrHourly: data.MatchedObjectDescriptor.PositionRemuneration.Description,
              <View key={item.id} style={{ width: '90%', marginBottom: 40 }}>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 23 }} onPress={() => Linking.openURL(item.link)}>{item.title}</Text>
                <Text>{item.organizationName}</Text>
                <Text>Location: {item.location}</Text>
                <Text>Salary: ${numberWithCommas(item.salaryMin)}0-${numberWithCommas(item.salaryMax)}0 {item.perYearOrHourly == "Per Year" ? "Per Year" : "Hourly"}</Text>
              </View>
            )) : (
              <Text>Search Any Jobs!</Text>
            )}
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