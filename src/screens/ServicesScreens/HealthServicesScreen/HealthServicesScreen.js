// TODO:
// -Get filter to work with search
// -Add box shadow to the interactive map
// -Better spacings between components
// -Make Marker smaller if possible

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import MapList from './MapList';

const colorPrimary = '#00BFFF';

/**
 * Component to display the health service screen, including the search bar and map.
 * @param {Object} props Component props
 * @param {Object} props.navigation Helps with navigating to the filter screen.
 */
const HealthServicesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Medical Care</Text>
      <Text>Park Tree - (909)-630-7196 Hours: 8 am-5 pm </Text>

      <Text>Dental Care</Text>
      <Text>Sierra Dental - (909) 592-8338 Hours: 9 am-5 pm</Text>
      <Text>Children's Choice Pediatric Dental Care- (626) 914-7645 Hours: 9 am-5 pm </Text>

      <Text>Womens Health Care</Text>
      <Text>Woodglen Medical Group- (626) 963-4124 Hours: 8 am-5 pm</Text>

      <Text>Mental Health/Substance Use Disorder</Text>
      <Text>Thaddeus Resource Center - (909) 599-2111 Hours: 9 am-8 pm</Text>
      <Text>Tri City Mental Health Center- (909) 623-6131 Hours: 8 am-5 pm </Text>
      <Text>Pacific Clinics- (909) 625-7207 Hours: 9 am- 5 pm </Text>
      <Text>Ettie Lee Youth & Family Services- (909) 620-2521 Hours: 8 am-5 pm </Text>
      <Text>Stigma Free - (626) 335-6425</Text>

      <Text>Mental Helath Facilities</Text>
      <Text>Behavioral Health Services - (909) 865-2336 Hours: 8 am-5 pm </Text>
      <Text>Inland Valley Care and Rehab Center - (909) 623-7100 Hours: 8 am- 8 pm </Text>
      <Text>
        Prototypes - Outpatient Behavioral Health Treatment and Community Services Center- (213)
        542-3838
      </Text>

      <Text>Screenings/Tests</Text>
      <Text>Park Avenue Optometry- (909) 622-3531 Hours: 9 am- 5 pm </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  filterBtn: {
    zIndex: 1,
    elevation: 1,
    right: '-80%',
    top: 20,
  },
  filterBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#47d7f2',
    alignSelf: 'stretch',
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
  search: {
    justifyContent: 'center',
  },
  searchPic: {
    position: 'absolute',
    right: 10,
  },
  text: {
    margin: 10,
    color: '#47d7f2',
    fontWeight: 'bold',
  },
});

export default HealthServicesScreen;
