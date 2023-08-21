import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HealthServicesScreen({ navigation }) {
  
  function navToFilter() {
    navigation.navigate('Filter');
  };
  
  return (
    <View>
      <Text>HealthServicesScreen</Text>

      <TouchableOpacity 
        style={styles.filterBtn} 
        onPress={navToFilter}
      >
        <Text style={styles.filterBtnText}>FILTER</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  filterBtn: {
    zIndex: 1,
    elevation: 1,
    right: -330,
    top: 0,
  },

  filterBtnText: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
})