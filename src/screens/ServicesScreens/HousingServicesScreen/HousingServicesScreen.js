import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icons if you prefer
import { color } from 'react-native-reanimated';
// searcb bar component
const RoundSearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.SearchBar}>
      
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Icon name="search" size={20} color="white" style={styles.icon} />
    </View>
  );
};

const HousingServicesScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    // Add your search logic here if required
  };
  return (
    
    <View style={styles.container }>
      
      <Text style={styles.title}>Search by location</Text>
      <RoundSearchBar
        placeholder="Search"
        onChangeText={handleSearch}
      />
      <Text style={styles.title}>Results</Text>

    </View>

  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    paddingBottom:12,
    color: '#47d7f2',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    size: 3,
    backgroundColor:"black",
    alignSelf:"flex-end",
    
    marginRight: 8,
  },
  input: {
    fontSize: 16,
  },
  SearchBar: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#47d7f2',
    borderRadius: 20,
  },
});

export default HousingServicesScreen