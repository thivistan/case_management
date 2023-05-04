import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuoteButtons = ({ onSelect }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.heading}>Type of quote?</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onSelect('funny')}>
          <Text style={styles.buttonText}>Funny</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onSelect('happiness')}>
          <Text style={styles.buttonText}>Happiness</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => onSelect('hope')}>
          <Text style={styles.buttonText}>Hope</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onSelect('inspirational')}>
          <Text style={styles.buttonText}>Inspirational</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  buttonContainer: {
    backgroundColor: '#f5f5f5',
    marginHorizontal: "3%",
    paddingBottom: 10,
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 20,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 16,
     marginVertical: 10,
   },
  button: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default QuoteButtons;
