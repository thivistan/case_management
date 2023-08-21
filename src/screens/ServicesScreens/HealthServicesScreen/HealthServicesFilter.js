import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import ButtonField from '../../../components/ButtonField'
import RadioButtonField from '../../../components/RadioButtonField'
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

export default function HealthServicesFilter({ navigation }) {

  const route = useRoute();
  const filter = route.params?.filter || '';

  const [sortType, setSortType] = useState(filter?.sortType);
  const [distance, setDistance] = useState(filter?.distance);
  const [facility, setFacility] = useState(filter?.facility);
  const [insurance, setInsurance] = useState(filter?.insurance);
  const [address, setAddress] = useState(filter?.address);
  const [region, setRegion] = useState(filter?.region);

  const sortData = [
    { id: uuidv4(), value: 'RECOMMEND' },
    { id: uuidv4(), value: 'WHAT' },
    { id: uuidv4(), value: 'DISTANCE' },
  ]

  const distanceData = [
    { id: uuidv4(), label: '5', value: '5' },
    { id: uuidv4(), label: '10', value: '10' },
    { id: uuidv4(), label: '15', value: '15' },
    { id: uuidv4(), label: '20', value: '20' },
  ]

  const facilityData = [
    { id: uuidv4(), value: 'Pharmacy' },
    { id: uuidv4(), value: 'Hospital' },
    { id: uuidv4(), value: 'Clinic' },
  ]

  const insuranceData = [
    { id: uuidv4(), value: 'No Insurance' },
    { id: uuidv4(), value: 'Blue Cross' },
    { id: uuidv4(), value: 'Humana' },
  ]

  function handleReset() {
    setSortType(null);
    setDistance(null);
    setFacility(null);
    setInsurance(null);
    setAddress(null);
    setRegion(null);
    Alert.alert('Options Reset');
  }

  function fieldsFilled() {
    return (sortType && distance && facility && insurance && (address || region));
  }

  function applyFilter() {
    navigation.navigate('Health Services', {filter: 
      {sortType: sortType, 
        distance: distance, 
        facility: facility,
        insurance: insurance, 
        address: address, 
        region: region
      }
    });
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => handleReset()} style={styles.resetBtn}>
        <Text style={styles.resetBtnText}>RESET</Text>   
      </TouchableOpacity>

      <ScrollView style={styles.options}>
        <Text style={styles.label}>SORT BY</Text>

        <ButtonField 
          data={sortData} 
          onSelect={(value) => setSortType(value)} 
          selectedValue={sortType} 
          styles={sortStyles}
        />

        <Text>{sortType}</Text>

        <Text style={styles.label}>DISTANCE (MILES)</Text>

        <RadioButtonField
          onSelect={(value) => setDistance(value)} 
          data={distanceData}
          selectedValue={distance}
          styles={distanceStyles}
        />

        <Text>{distance}</Text>

        <TextInput 
          value={address}
          onChangeText={setAddress}        
          placeholder='ADDRESS' 
          placeholderTextColor={'rgba(0, 191, 255, 0.5)'} 
          style={styles.textInput}
        />

        <View style={styles.centeredLabelContainer}>
          <Text style={styles.centeredLabel}>OR</Text>
        </View>

        <TextInput 
          value={region}
          onChangeText={setRegion}

          placeholder='REGION' 
          placeholderTextColor={'rgba(0, 191, 255, 0.5)'} 
          style={styles.textInput}
        />

        <Text style={styles.label}>WHAT</Text>

        <ButtonField 
          data={facilityData} 
          onSelect={(value) => setFacility(value)} 
          selectedValue={facility} 
          styles={facilityStyles}
        />

        <Text>{facility}</Text>

        <Text style={styles.label}>INSURANCE</Text>

        <ButtonField 
          data={insuranceData} 
          onSelect={(value) => setInsurance(value)} 
          selectedValue={insurance} 
          styles={insuranceStyles}
        />

        <Text>{insurance}</Text>
      </ScrollView>

      <View style={styles.acceptBtnContainer}>
        <TouchableOpacity 
          disabled={!fieldsFilled()} 
          style={fieldsFilled() ? styles.acceptBtn : styles.unselectedAcceptBtn}
          onPress={applyFilter}
        >
          <Text style={fieldsFilled() ? styles.acceptBtnText : styles.unselectedAcceptBtnText}>ACCEPT SELECTED</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
  },

  centeredLabel: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 10,
  },

  centeredLabelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resetBtn: {
    zIndex: 1,
    elevation: 1,
    right: -330,
    top: 20,
  },

  resetBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  acceptBtn: {
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    bottom: -60,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: '50%',
  },

  acceptBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  unselectedAcceptBtn: {
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    bottom: -60,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: '50%',
    opacity: 0.5,
  },

  unselectedAcceptBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 0.5,
  },

  acceptBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    marginVertical: 0,
    marginHorizontal: 20,
    padding: 10,
    fontWeight: 'bold',
    color: '#00BFFF',
  },

})

const sortStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },

  unselected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    width: 118,
  },

  selected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    width: 120,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  options: {
    paddingBottom: 50,
  },
})

const oldDistanceStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },

  unselected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    margin: 10,
    padding: 10,
    width: 50,
  },

  selected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    margin: 10,
    padding: 10,
    width: 50,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
})

const distanceStyles = StyleSheet.create({
  radioBtnBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 5,
  },

  radioBtnSelected: {
    width: 10, 
    height: 10, 
    borderRadius: 5, 
    backgroundColor: '#00BFFF'
  },

  radioBtnText: {
    color: '#00BFFF', 
    fontWeight: 'bold', 
    fontSize: 14,
  },

  radioBtnContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  }
})

const facilityStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },

  unselected: {
    
    borderWidth: '2px',
    borderColor: '#00BFFF',
    margin: 10,
    padding: 10,
    width: 110,
  },

  selected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    margin: 10,
    padding: 10,
    width: 110,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
})

const insuranceStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 15,
  },

  unselected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    width: 115,
  },

  selected: {
    borderWidth: '2px',
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    width: 115,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
})