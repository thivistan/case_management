import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { FormButton } from './FormButtons';
import { viewStyles, textStyles } from './styling';

const FormsServicesScreen = () => {
  return (
    <ScrollView style={viewStyles.container}>
      <View style={viewStyles.MostCommonView}>
        <Text style={textStyles.headerText}>MOST COMMON</Text>
        <FormButton title="Basic Information" />
      </View>

      <View style={viewStyles.SupportGroupView}>
        <Text style={textStyles.headerText}>SUPPORT GROUPS</Text>
        <FormButton title="Registration for Color Your Way" />
        <FormButton title="Registration for Coping w/ Stress" />
      </View>

      <View style={viewStyles.DonationCenterView}>
        <Text style={textStyles.headerText}>DONATION CENTER</Text>
        <FormButton title="Request Form" />
      </View>

      <View style={viewStyles.CreateNewFormsView}>
        <Text style={textStyles.headerText}>CREATE NEW FORMS</Text>
        <FormButton title="Mental Health Intake Form" />
        <FormButton title="Physical Health Intake Form" />
      </View>
    </ScrollView>
  );
};

export default FormsServicesScreen;
