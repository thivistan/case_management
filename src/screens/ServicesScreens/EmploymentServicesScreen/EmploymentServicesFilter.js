import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useReducer } from 'react'
import { useRoute } from '@react-navigation/native';
import RadioButtonField from '../../../components/RadioButtonField';
import { v4 as uuidv4 } from 'uuid';
import { SelectList } from 'react-native-dropdown-select-list';

// constants
const colorPrimary = "#00BFFF"

export default function EmploymentServicesFilter({ navigation }) {
  // retrieve filter from params
  const route = useRoute();
  const filter = route.params?.filter || '';

  // set filter states with useReducer
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      remote: filter?.remote || false,
      partTime: filter?.partTime || false,
      fullTime: filter?.fullTime || false,
      relocate: filter?.relocate || false,
      radius: filter?.radius || false,
      salary: filter?.salary || 0,
    }
  );

  // dropdown items
  const salaries = [
    { key: '1', value: '$0-$24,999' },
    { key: '2', value: '$25,000-$49,999' },
    { key: '3', value: '$50,000-$74,999' },
    { key: '4', value: '$75,000-$99,999' },
    { key: '5', value: '$100,000-$124,999' },
    { key: '6', value: '$125,000-$149,999' },
    { key: '7', value: '$150,000-$174,999' },
    { key: '8', value: '$175,000-$199,999' },
    { key: '9', value: '$200,000 or more' },
  ];

  const applyFilter = () => {
    navigation.navigate('Employment Services', {
      filter: state,
    });
  };


  return (
    <ScrollView>

      <View>
        {/* include remote (travel percentage = 0) */}
        <Text>Remote:</Text>
        <TouchableOpacity style={[styles(state).filterButton, styles(state).remoteButton]} onPress={() => dispatch({ remote: !state.remote })}>
          <Text style={styles(state).remoteButtonText}>{state.remote && "Don't "}Include Remote Jobs</Text>
        </TouchableOpacity>

        {/* PositionScheduleTypeCode=1 for full time */}
        {/* PositionScheduleTypeCode=2 for part time */}
        <Text>Job Type:</Text>
        <View style={styles(state).jobTypeContainer}>
          <TouchableOpacity style={[styles(state).filterButton, styles(state).partTimeButton]} onPress={() => dispatch({ partTime: !state.partTime })}>
            <Text style={styles(state).partTimeButtonText}>Part Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles(state).filterButton, styles(state).fullTimeButton]} onPress={() => dispatch({ fullTime: !state.fullTime })}>
            <Text style={styles(state).fullTimeButtonText}>Full Time</Text>
          </TouchableOpacity>
        </View>

        {/* relocation=True for if relocation is needed */}
        <Text>Willing To Relocate?:</Text>
        <TouchableOpacity style={[styles(state).filterButton, styles(state).relocateButton]} onPress={() => dispatch({ relocate: !state.relocate })}>
          <Text style={styles(state).relocateButtonText}>{state.relocate ? "Yes" : "No"}</Text>
        </TouchableOpacity>

        {/* locationName=Fremont&Radius=75 expand radius */}
        <Text>Radius:</Text>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <RadioButtonField
            onSelect={(value) => dispatch({ radius: value })}
            data={[
              { id: uuidv4(), label: '25', value: '25' },
              { id: uuidv4(), label: '50', value: '50' },
              { id: uuidv4(), label: '75', value: '75' },
              { id: uuidv4(), label: '100', value: '100' },
            ]}
            selectedValue={state.radius}
            styles={distanceStyles}
          />
        </View>

        <Text>Salary:</Text>
        <View style={{ paddingHorizontal: 20 }}>
          <SelectList
            data={salaries}
            setSelected={(value) => dispatch({ salary: value })}
            placeholder="Select Salary"
          />
        </View>


        <TouchableOpacity style={styles(state).filterButton} onPress={applyFilter}>
          <Text style={{ color: 'black' }}>Submit Filter</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>

  )
}

const styles = ({ remote, partTime, fullTime, relocate }) => StyleSheet.create({
  filterButton: {
    margin: 12,
    padding: 15,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colorPrimary,
    borderWidth: 1,
  },
  jobTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // remote
  remoteButton: {
    backgroundColor: !remote ? 'white' : colorPrimary,
  },
  remoteButtonText: {
    color: !remote ? colorPrimary : 'white'
  },
  // part time
  partTimeButton: {
    backgroundColor: !partTime ? 'white' : colorPrimary,
  },
  partTimeButtonText: {
    color: !partTime ? colorPrimary : 'white'
  },
  // full time
  fullTimeButton: {
    backgroundColor: !fullTime ? 'white' : colorPrimary,
  },
  fullTimeButtonText: {
    color: !fullTime ? colorPrimary : 'white'
  },
  // relocate
  relocateButton: {
    backgroundColor: !relocate ? 'white' : colorPrimary,
  },
  relocateButtonText: {
    color: !relocate ? colorPrimary : 'white'
  },
  // radius
  jobRadiusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
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
    backgroundColor: '#00BFFF',
  },

  radioBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 10,
  },

  radioBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});