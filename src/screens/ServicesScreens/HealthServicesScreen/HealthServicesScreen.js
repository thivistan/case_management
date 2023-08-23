import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function HealthServicesScreen({ navigation }) {

  const route = useRoute();
  const filter = route.params?.filter || '';

  function navToFilter() {
    navigation.navigate('Filter', {filter: filter});
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.filterBtn} 
        onPress={navToFilter}
        >
        <Text style={styles.filterBtnText}>FILTER</Text>
      </TouchableOpacity>

      {Object.keys(filter).map((property, index) => (
        <Text key={index}>
          {property}: {filter[property]}
        </Text>
      ))}
    </View>
  )
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
})