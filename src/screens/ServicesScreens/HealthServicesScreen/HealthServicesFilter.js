import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import ButtonField from '../../../components/ButtonField';
import MultiSelectionField from '../../../components/MultiSelectionField';
import RadioButtonField from '../../../components/RadioButtonField';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

const defaultInsurance = [
  {
    insurance: 'No Insurance',
    id: 'No Insurance',
    selected: false,
  },
  {
    insurance: 'Blue Cross',
    id: 'Blue Cross',
    selected: false,
  },
  {
    insurance: 'Kaiser',
    id: 'Kaiser',
    selected: false,
  },
  {
    insurance: 'Cigna',
    id: 'Cigna',
    selected: false,
  },
  {
    insurance: 'Humana',
    id: 'Humana',
    selected: false,
  },
];

const defaultFacility = [
  {
    facility: 'Pharmacy',
    id: 'Pharmacy',
    selected: false,
  },
  {
    facility: 'Hospital',
    id: 'Hospital',
    selected: false,
  },
  {
    facility: 'Clinic',
    id: 'Clinic',
    selected: false,
  },
];

/**
 * Component to display the health service filter screen.
 * @param {Object} props Component props
 * @param {Object} props.navigation Helps navigating back to the main screen
 */
const HealthServicesFilter = ({ navigation }) => {
  const route = useRoute();
  const filter = route.params?.filter || '';

  const sortData = [
    { id: uuidv4(), value: 'RECOMMEND' },
    { id: uuidv4(), value: 'WHAT' },
    { id: uuidv4(), value: 'DISTANCE' },
  ];

  const distanceData = [
    { id: uuidv4(), label: '5', value: '5' },
    { id: uuidv4(), label: '10', value: '10' },
    { id: uuidv4(), label: '15', value: '15' },
    { id: uuidv4(), label: '20', value: '20' },
  ];

  const [sortType, setSortType] = useState(filter?.sortType);
  const [distance, setDistance] = useState(filter?.distance);
  const [facility, setFacility] = useState(filter?.facility ? filter?.facility : defaultFacility);
  const [finalFacility, setFinalFacility] = useState(filter?.finalFacility);
  const [insurance, setInsurance] = useState(
    filter?.insurance ? filter?.insurance : defaultInsurance
  );
  const [finalInsurance, setFinalInsurance] = useState(filter?.finalInsurance);
  const [address, setAddress] = useState(filter?.address);
  const [region, setRegion] = useState(filter?.region);

  const insuranceFilterSelect = (value) => {
    setInsurance(
      insurance.map((insure) => {
        return insure.insurance === value ? { ...insure, selected: !insure.selected } : insure;
      })
    );
  };

  useEffect(() => {
    setFinalInsurance(
      insurance.filter((insure) => insure.selected).map((insure) => insure.insurance)
    );
  }, [insurance]);

  const facilityFilterSelect = (value) => {
    setFacility(
      facility.map((fac) => {
        return fac.facility === value ? { ...fac, selected: !fac.selected } : fac;
      })
    );
  };

  useEffect(() => {
    setFinalFacility(facility.filter((fac) => fac.selected).map((fac) => fac.facility));
  }, [facility]);

  /**
   * Function to reset the selected options of the filter.
   */
  const handleReset = () => {
    setSortType(null);
    setDistance(null);
    setFacility(defaultFacility);
    setFinalFacility(null);
    setInsurance(defaultInsurance);
    setFinalInsurance(null);
    setAddress(null);
    setRegion(null);
    Alert.alert('All your selection have been removed.');
  };

  /**
   * Function to check if all fields of the filter have been filled.
   * @returns a boolean. True if all fields are filled. False otherwise.
   */
  const fieldsFilled = () => {
    return (
      sortType &&
      distance &&
      finalFacility &&
      finalFacility.length > 0 &&
      finalInsurance &&
      finalInsurance.length &&
      (address || region)
    );
  };

  /**
   * Navigate back to main screen with the data.
   */
  const applyFilter = () => {
    navigation.navigate('Health Services', {
      filter: {
        sortType: sortType,
        distance: distance,
        facility: facility,
        finalFacility: finalFacility,
        insurance: insurance,
        finalInsurance: finalInsurance,
        address: address,
        region: region,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Reset Button */}
      <TouchableOpacity onPress={() => handleReset()} style={styles.resetBtn}>
        <Text style={styles.resetBtnText}>RESET</Text>
      </TouchableOpacity>

      <ScrollView style={styles.options}>
        <Text style={styles.label}>SORT BY</Text>

        {/* Sort Type Field */}
        <ButtonField
          data={sortData}
          onSelect={(value) => setSortType(value)}
          selectedValue={sortType}
          styles={sortStyles}
        />

        <Text style={styles.label}>DISTANCE (MILES)</Text>

        {/* Distance Field */}
        <RadioButtonField
          onSelect={(value) => setDistance(value)}
          data={distanceData}
          selectedValue={distance}
          styles={distanceStyles}
        />

        {/* Address Input Box */}
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="ADDRESS"
          placeholderTextColor={'rgba(0, 191, 255, 0.5)'}
          style={styles.textInput}
        />

        <View style={styles.centeredLabelContainer}>
          <Text style={styles.centeredLabel}>OR</Text>
        </View>

        {/* Region Input Box */}
        <TextInput
          value={region}
          onChangeText={setRegion}
          placeholder="REGION"
          placeholderTextColor={'rgba(0, 191, 255, 0.5)'}
          style={styles.textInput}
        />

        <Text style={styles.label}>WHAT</Text>

        {/* Facility Field */}
        <MultiSelectionField
          data={facility}
          onSelect={(value) => facilityFilterSelect(value)}
          objectKey="facility"
          styles={facilityStyles}
        />

        <Text style={styles.label}>INSURANCE</Text>

        {/* Insurance Field */}
        <MultiSelectionField
          data={insurance}
          onSelect={(value) => insuranceFilterSelect(value)}
          objectKey="insurance"
          styles={insuranceStyles}
        />
      </ScrollView>

      {/*
      <Text>sort: {sortType}</Text>
      <Text>distance: {distance}</Text>
      <Text>facility: {facility}</Text>
      <Text>insurance: {insurance}</Text>
      */}

      {/* Accept Button */}
      <View style={styles.acceptBtnContainer}>
        <TouchableOpacity
          disabled={!fieldsFilled()}
          style={fieldsFilled() ? styles.acceptBtn : styles.unselectedAcceptBtn}
          onPress={applyFilter}
        >
          <Text style={fieldsFilled() ? styles.acceptBtnText : styles.unselectedAcceptBtnText}>
            ACCEPT SELECTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const baseSize = Platform.OS === 'android' ? 12 : 14;

const styles = StyleSheet.create({
  label: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
    marginLeft: 20,
    marginTop: baseSize * 0.714,
    marginBottom: baseSize * 0.357,
  },

  centeredLabel: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
    marginVertical: baseSize * 0.714,
  },

  centeredLabelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resetBtn: {
    zIndex: 1,
    elevation: 1,
    right: '-80%',
    top: 20,
  },

  resetBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize * 1.14,
  },

  acceptBtn: {
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    bottom: baseSize * -3.57,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    padding: baseSize * 1.07,
    borderRadius: 50,
  },

  acceptBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: baseSize * 1.14,
  },

  unselectedAcceptBtn: {
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    bottom: baseSize * -3.57,
    textAlign: 'center',
    backgroundColor: '#00BFFF',
    padding: baseSize * 1.07,
    borderRadius: 50,
    opacity: 0.5,
  },

  unselectedAcceptBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: baseSize * 1.14,
    opacity: 0.5,
  },

  acceptBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    marginVertical: 0,
    marginHorizontal: baseSize * 1.4,
    paddingHorizontal: baseSize * 0.7,
    paddingVertical: baseSize * 0.65,
    fontWeight: 'bold',
    color: '#00BFFF',
    fontSize: baseSize,
    height: baseSize * 3,
  },
});

const sortStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },

  unselected: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    marginVertical: baseSize * 0.714,
    marginHorizontal: 5,
    padding: baseSize * 0.714,
    width: baseSize * 8.5,
  },

  selected: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    marginVertical: baseSize * 0.714,
    marginHorizontal: 5,
    padding: baseSize * 0.714,
    width: baseSize * 8.5,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: baseSize,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
    textAlign: 'center',
  },

  options: {
    paddingBottom: 50,
  },
});

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
    backgroundColor: '#00BFFF',
  },

  radioBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
  },

  radioBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const facilityStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
  },

  unselected: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    margin: 10,
    padding: baseSize * 0.714,
    width: baseSize * 8,
  },

  selected: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    margin: 10,
    padding: baseSize * 0.714,
    width: baseSize * 8,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: baseSize,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
    textAlign: 'center',
  },
});

const insuranceStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 15,
    marginBottom: 30,
  },

  unselected: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    marginVertical: baseSize * 0.714,
    marginHorizontal: 5,
    padding: baseSize * 0.714,
    width: baseSize * 8.25,
  },

  selected: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    backgroundColor: '#00BFFF',
    marginVertical: baseSize * 0.714,
    marginHorizontal: 5,
    padding: baseSize * 0.714,
    width: baseSize * 8.25,
  },

  textSelected: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: baseSize,
    textAlign: 'center',
  },

  textUnselected: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: baseSize,
    textAlign: 'center',
  },
});

export default HealthServicesFilter;
