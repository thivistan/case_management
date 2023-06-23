import React, { useState } from 'react';
import Header from './Header';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const Goal = (navigation) => {
  const [shortTermGoals, setShortTermGoals] = useState([]);
  const [longTermGoals, setLongTermGoals] = useState([]);

  const addGoal = (type) => {
    if (type === 'shortTerm') {
      setShortTermGoals([...shortTermGoals, {name: '', progress: 0}]);
    } else {
      setLongTermGoals([...longTermGoals, {name: '', progress: 0}]);
    }
  }

  const updateGoalName = (index, type, name) => {
    if (type === 'shortTerm') {
      const updatedGoals = [...shortTermGoals];
      updatedGoals[index].name = name;
      setShortTermGoals(updatedGoals);
    } else {
      const updatedGoals = [...longTermGoals];
      updatedGoals[index].name = name;
      setLongTermGoals(updatedGoals);
    }
  }

  const updateGoalProgress = (index, type, progress) => {
    if (type === 'shortTerm') {
      const updatedGoals = [...shortTermGoals];
      updatedGoals[index].progress = progress;
      setShortTermGoals(updatedGoals);
    } else {
      const updatedGoals = [...longTermGoals];
      updatedGoals[index].progress = progress;
      setLongTermGoals(updatedGoals);
    }
  }

  return (
    <View style={{ flex: 1 }}>
    <Header
        navigation={navigation} 
        style={styles.header} 
        resourceName='Title'
        leftComponent={<Ionicons name="menu-outline" size={24} color="white" onPress={() => navigation.openDrawer()} />}
        centerComponent={{ text: 'Resource Page', style: { color: '#fff' } }}
    />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Short-term Goals:</Text>
        <ScrollView>
          {shortTermGoals.map((goal, index) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }} key={index}>
              <TextInput
                style={{ flex: 1, marginHorizontal: 10, borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 5 }}
                placeholder="Enter goal name"
                value={goal.name}
                onChangeText={(text) => updateGoalName(index, 'shortTerm', text)}
              />
              <Slider
                style={{ width: 100, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={goal.progress}
                onValueChange={(value) => updateGoalProgress(index, 'shortTerm', value)}
              />
              <Text style={{ marginLeft: 10 }}>{goal.progress}%</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: '#ccc', borderRadius: 5 }} onPress={() => addGoal('shortTerm')}>
          <Text style={{ textAlign: 'center' }}>Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Long-term Goals:</Text>
        <ScrollView>
          {longTermGoals.map((goal, index) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }} key={index}>
              <TextInput
                style={{ flex: 1, marginHorizontal: 10, borderBottomWidth: 1,
                borderColor: '#ccc', paddingVertical: 5 }}
                placeholder="Enter goal name"
                value={goal.name}
                onChangeText={(text) => updateGoalName(index, 'longTerm', text)}
              />
              <Slider
                style={{ width: 100, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={goal.progress}
                onValueChange={(value) => updateGoalProgress(index, 'longTerm', value)}
              />
              <Text style={{ marginLeft: 10 }}>{goal.progress}%</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={{ marginVertical: 10, padding: 10, backgroundColor: '#ccc', borderRadius: 5 }} onPress={() => addGoal('longTerm')}>
          <Text style={{ textAlign: 'center' }}>Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logo}>
      <Image source={require('../assets/images/thaddeus_logo.jpg')} style={styles.logoImage} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logoImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
});

export default Goal;
  