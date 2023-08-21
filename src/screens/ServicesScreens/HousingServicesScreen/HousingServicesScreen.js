import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icons if you prefer
import { color } from 'react-native-reanimated';
import HousingServicesLocations from './HousingServicesLocations';
import HousingFilters from './HousingFilters';
// searcb bar component

const RoundSearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.SearchBar}>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
      <Icon name="search" size={20} color="white" style={styles.icon} />
    </View>
  );
};

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Text style={styles.buttonText}>FILTER</Text>
    </TouchableOpacity>
  );
};

const HousingServicesScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filterPading, setFilterPading] = useState(0);

  const toggleFiltersVisibility = () => {
    setFiltersVisible(!filtersVisible); //togles true in falsse for the filters to pop
    console.log(filtersVisible); //to test delete later
    console.log(filterPading);

    setFilterPading(filtersVisible ? 0 : 650); //changes the padding every click
  };

  const handleSearch = (text) => {
    setSearchText(text);
    // Add your search logic here if required
  };
  return (
    <View>
      <ScrollView>
        <View>
          <HousingFilters visible={filtersVisible}></HousingFilters>
        </View>

        <View style={[styles.container, { paddingTop: filterPading }]}>
          <Text style={styles.title}>Search by location</Text>
          <RoundSearchBar placeholder="Search" onChangeText={handleSearch} />
          <Text style={styles.title}>Results</Text>
          <HousingServicesLocations address="2621 Damien Ave., La Verne, CA  91750 " />
          <HousingServicesLocations address="Los Angeles" />
          <HousingServicesLocations address="Irvine" />
        </View>
      </ScrollView>
      <FloatingButton onPress={toggleFiltersVisibility}></FloatingButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    paddingBottom: 12,
    color: '#47d7f2',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    size: 3,
    backgroundColor: '#47d7f2',
    position: 'absolute',
    right: 8,
    top: 14,
  },

  input: {
    fontSize: 16,
    color: 'white',
  },

  SearchBar: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#47d7f2',
    borderRadius: 20,
    marginBottom: 10,
  },

  floatingButton: {
    position: 'absolute',
    borderRadius: 30,

    height: 60,
    justifyContent: 'center',
    bottom: 20,
    alignSelf: 'center',
    width: 100,
    alignItems: 'center',
    backgroundColor: '#47d7f2',
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HousingServicesScreen;
