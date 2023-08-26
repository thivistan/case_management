import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import PlaceList from './PlaceList';

import { getPlaces } from './url';

export default function HealthServicesScreen({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  const addSearchResult = async (phrase) => {
    console.log('PHRASE: ', phrase);
    const results = await getPlaces(phrase);
    setPlaces(results);
  };

  const route = useRoute();
  const filter = route.params?.filter || '';

  function navToFilter() {
    navigation.navigate('Filter', { filter: filter });
  }

  return (
    <View>
      <View>
        <TouchableOpacity style={styles.filterBtn} onPress={navToFilter}>
          <Text style={styles.filterBtnText}>FILTER</Text>
        </TouchableOpacity>

        {Object.keys(filter).map((property, index) => (
          <Text key={index}>
            {property}: {filter[property]}
          </Text>
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Search by location</Text>

        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearchStr(text)}
            defaultValue={searchStr}
          />
          <TouchableHighlight style={styles.searchPic} onPress={() => addSearchResult(searchStr)}>
            <Icon name="ios-search" size={14} />
          </TouchableHighlight>
        </View>

        <PlaceList places={places} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  container: {
    margin: 30,
  },
  input: {
    backgroundColor: '#47d7f2',
    alignSelf: 'stretch',
    borderRadius: 150 / 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'white',
  },
  header: {
    margin: 10,
    color: '#47d7f2',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  text: {
    margin: 10,
    color: '#47d7f2',
    fontWeight: 'bold',
  },
  search: {
    justifyContent: 'center',
  },
  searchPic: {
    position: 'absolute',
    right: 10,
  },
});
