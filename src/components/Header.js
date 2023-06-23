import React from 'react';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, resourceName }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons 
        name="menu-outline" 
        size={32} 
        color="#00BFFF" 
        style={{lineHeight:24}}
        marginLeft={-25}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{resourceName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  
});

export default Header;