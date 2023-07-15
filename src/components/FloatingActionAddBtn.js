import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

//You can find the icon catalog at: https://icons.expo.fyi/

function FloatingActionAdd(props) {
  return (
    <TouchableOpacity style={styles.position}>
      <Entypo style={styles.container} name="circle-with-plus" size={67} color="#FF1493" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    shadowColor: '#00BFFF',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 10,
    width: 62,
    height: 65,
  },

  position: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 25,
  },
});

export default FloatingActionAdd;
