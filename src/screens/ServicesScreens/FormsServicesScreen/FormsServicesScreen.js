// import { Text, View } from 'react-native';
// import React from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { FormButton } from './FormButtons';
// import { viewStyles, textStyles } from './styling';
// import { SearchBar } from './SearchBar'; 

// const FormsServicesScreen = () => {
//   return (
//     <ScrollView style={viewStyles.container}>
//       <SearchBar />
//       <View style={viewStyles.MostCommonView}>
//         <Text style={textStyles.headerText}>MOST COMMON</Text>
//         <FormButton title="Basic Information" />
//       </View>

//       <View style={viewStyles.SupportGroupView}>
//         <Text style={textStyles.headerText}>SUPPORT GROUPS</Text>
//         <FormButton title="Registration for Color Your Way" />
//         <FormButton title="Registration for Coping w/ Stress" />
//       </View>

//       <View style={viewStyles.DonationCenterView}>
//         <Text style={textStyles.headerText}>DONATION CENTER</Text>
//         <FormButton title="Request Form" />
//       </View>

//       <View style={viewStyles.CreateNewFormsView}>
//         <Text style={textStyles.headerText}>CREATE NEW FORMS</Text>
//         <FormButton title="Mental Health Intake Form" />
//         <FormButton title="Physical Health Intake Form" />
//       </View>
//     </ScrollView>
//   );
// };

// export default FormsServicesScreen;


import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SearchBar } from './SearchBar';
import { FormButton } from './FormButtons';
import { viewStyles, textStyles } from './styling';

const FormSection = ({ title, buttons, searchText }) => {
  const matchingButtons = buttons.filter(button =>
    searchText === '' || button.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (matchingButtons.length === 0) {
    return null; 
  }

  return (
    <View style={viewStyles.SectionView}>
      <Text style={textStyles.headerText}>{title}</Text>
      {matchingButtons.map((button, index) => (
        <FormButton key={index} title={button.title} />
      ))}
    </View>
  );
};

const FormsServicesScreen = () => {
  const [searchText, setSearchText] = useState('');

  const formSections = [
    {
      title: 'MOST COMMON',
      buttons: [{ title: 'Basic Information' }],
    },
    {
      title: 'SUPPORT GROUPS',
      buttons: [
        { title: 'Registration for Color Your Way' },
        { title: 'Registration for Coping w/ Stress' },
      ],
    },
    {
      title: 'DONATION CENTER',
      buttons: [{ title: 'Request Form' }],
    },
    {
      title: 'CREATE NEW FORMS',
      buttons: [
        { title: 'Mental Health Intake Form' },
        { title: 'Physical Health Intake Form' },
      ],
    },
  ];

  return (
    <View style={{ flex: 1 }}> 
      <ScrollView style={viewStyles.container}>
        <SearchBar onChangeText={setSearchText} />
          {formSections.map((section, index) => (
            <FormSection key={index} title={section.title} buttons={section.buttons} searchText={searchText} />
          ))}
      </ScrollView>
    </View>
  );
};

export default FormsServicesScreen;


