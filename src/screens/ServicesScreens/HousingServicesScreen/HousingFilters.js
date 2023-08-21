import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const HousingFilters = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.base}>
      <Text style={styles.textStyle}>SORT BY </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>RECOMENDED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>WHO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>DISTANCE</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textStyle}>DISTANCE</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.bubbleStyle}></TouchableOpacity>
        <TouchableOpacity style={styles.bubbleStyle}></TouchableOpacity>
        <TouchableOpacity style={styles.bubbleStyle}></TouchableOpacity>
        <TouchableOpacity style={styles.bubbleStyle}></TouchableOpacity>
        <TouchableOpacity style={styles.bubbleStyle}></TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.buttonText}>5</Text>
        <Text style={styles.buttonText}>10</Text>
        <Text style={styles.buttonText}>15</Text>
        <Text style={styles.buttonText}>20</Text>
        <Text style={styles.buttonText}>25</Text>
      </View>
    </View>
  );
};

export default HousingFilters;

const styles = StyleSheet.create({
  base: { position: 'absolute', height: 650, width: '100%', backgroundColor: 'white', padding: 20 },
  textStyle: {
    paddingBottom: 3,
    paddingTop: 3,
    color: '#47d7f2',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonStyle: {
    width: 105,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#47d7f2',
    borderWidth: 2,
  },
  buttonText: {
    color: '#47d7f2',
    textAlign: 'left',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 8,
    fontWeight: 'bold',
  },
  bubbleStyle: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderColor: '#47d7f2',
    borderWidth: 2,
    borderRadius: 90,
  },
  boxCheckStyle: {},
});
