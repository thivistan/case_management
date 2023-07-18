import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; //message1 and phone icon
import { Entypo } from '@expo/vector-icons'; //edit pencil icon
import ContactSelectPopup from '../../PopupScreens/ContactSelectPopup';

const GoalsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Goals Screen</Text>
    </View>
  );
};

export default GoalsScreen;
