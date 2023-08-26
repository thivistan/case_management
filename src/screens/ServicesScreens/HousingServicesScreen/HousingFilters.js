import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HousingFilters = ({ visible }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [homelessChecked, setHomelessChecked] = useState(false);
  const [seniorsChecked, setSeniorsChecked] = useState(false);
  const [familyChildrenChecked, setFamilyChildrenChecked] = useState(false);
  const [bubbleCheck, SetBubbleCheck] = useState(25);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [Gender, SetGender] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  function CustomCheckBox() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
      setIsChecked(!isChecked);
    };

    return (
      <View>
        <TouchableOpacity
          onPress={toggleCheckBox}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            name={isChecked ? 'check-square-o' : 'square-o'}
            size={24}
            color={isChecked ? 'green' : '#47d7f2'}
          />
        </TouchableOpacity>
      </View>
    );
  }
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
        <View>
          <TouchableOpacity
            style={[
              styles.bubbleStyle,
              { backgroundColor: bubbleCheck == 5 ? '#47d7f2' : 'white' },
            ]}
            onPress={() => SetBubbleCheck(5)}
          ></TouchableOpacity>
          <Text style={[styles.buttonText, { paddingTop: 4 }]}>5</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.bubbleStyle,
              { backgroundColor: bubbleCheck == 10 ? '#47d7f2' : 'white' },
            ]}
            onPress={() => SetBubbleCheck(10)}
          ></TouchableOpacity>
          <Text style={[styles.buttonText, { paddingTop: 4 }]}>10</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.bubbleStyle,
              { backgroundColor: bubbleCheck == 15 ? '#47d7f2' : 'white' },
            ]}
            onPress={() => SetBubbleCheck(15)}
          ></TouchableOpacity>
          <Text style={[styles.buttonText, { paddingTop: 4 }]}>15</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.bubbleStyle,
              { backgroundColor: bubbleCheck == 20 ? '#47d7f2' : 'white' },
            ]}
            onPress={() => SetBubbleCheck(20)}
          ></TouchableOpacity>
          <Text style={[styles.buttonText, { paddingTop: 4 }]}>20</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[
              styles.bubbleStyle,
              { backgroundColor: bubbleCheck == 25 ? '#47d7f2' : 'white' },
            ]}
            onPress={() => SetBubbleCheck(25)}
          ></TouchableOpacity>
          <Text style={[styles.buttonText, { paddingTop: 4 }]}>25</Text>
        </View>
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
      <View></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.checkboxContainer}>
          <CustomCheckBox
            value={homelessChecked}
            onValueChange={() => setHomelessChecked(!homelessChecked)}
          />
          <Text style={styles.checkboxLabel}>Homeless </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CustomCheckBox
            value={seniorsChecked}
            onValueChange={() => setSeniorsChecked(!seniorsChecked)}
          />
          <Text style={styles.checkboxLabel}>Seniors </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CustomCheckBox
            value={familyChildrenChecked}
            onValueChange={() => setFamilyChildrenChecked(!familyChildrenChecked)}
          />
          <Text style={styles.checkboxLabel}>Family and Children </Text>
        </View>
      </View>
      <Text style={styles.textStyle}>GENDER</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={() => SetGender('MALE')}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            name={Gender == 'MALE' ? 'check-square-o' : 'square-o'}
            size={24}
            color={Gender == 'MALE' ? 'green' : '#47d7f2'}
          />
          <Text>MALE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => SetGender('FEMALE')}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            name={Gender == 'FEMALE' ? 'check-square-o' : 'square-o'}
            size={24}
            color={Gender == 'FEMALE' ? 'green' : '#47d7f2'}
          />
          <Text>FEMALE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => SetGender('TRANS')}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            name={Gender == 'TRANS' ? 'check-square-o' : 'square-o'}
            size={24}
            color={Gender == 'TRANS' ? 'green' : '#47d7f2'}
          />
          <Text>TRANS</Text>
        </TouchableOpacity>
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
