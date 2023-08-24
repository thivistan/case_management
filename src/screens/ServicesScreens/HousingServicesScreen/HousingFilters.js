import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';

const HousingFilters = ({ visible }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // const [homelessChecked, setHomelessChecked] = useState(false);
  // const [seniorsChecked, setSeniorsChecked] = useState(false);
  // const [familyChildrenChecked, setFamilyChildrenChecked] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

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
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="zip, address"
          placeholderTextColor="#47d7f2"
        />
      </View>
      <Text style={styles.buttonText}>OR</Text>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownContainer}>
        <Text style={styles.dropdownText}>{selectedOption || 'Choose Option'}</Text>
      </TouchableOpacity>
      <Modal visible={dropdownVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => selectOption(option)}
              style={styles.optionContainer}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <Text style={styles.textStyle}>WHO</Text>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={homelessChecked}
            onValueChange={() => setHomelessChecked(!homelessChecked)}
          />
          <Text style={styles.checkboxLabel}>Homeless</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={seniorsChecked}
            onValueChange={() => setSeniorsChecked(!seniorsChecked)}
          />
          <Text style={styles.checkboxLabel}>Seniors</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={familyChildrenChecked}
            onValueChange={() => setFamilyChildrenChecked(!familyChildrenChecked)}
          />
          <Text style={styles.checkboxLabel}>Family and Children</Text>
        </View>
      </View> */}
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  textInputContainer: {
    borderWidth: 2,
    borderColor: '#47d7f2',
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  textInput: {
    borderWidth: 0,
    width: 200,
    fontSize: 16,
  },
  dropdownContainer: {
    borderWidth: 2,
    borderColor: '#47d7f2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  dropdownText: {
    color: '#47d7f2',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionText: {
    color: '#47d7f2',
    fontSize: 16,
  },
});
