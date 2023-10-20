import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import { colors, backgroundColors, fonts } from '../../../global';

import ResourcesList from './ResourceList';
import ExternalLinkButton from '../../../components/ExternalLinkButton';

/**
 * Component to represent a sub-category's list of resources and links.
 * @param {Object} props Component props
 * @param {Object} route Contains an object to handle data passed to this component via navigation.
 * @param {Object} navigation Contains an object to manage app navigation.
 */
export default function CategoryScreen({ route, navigation }) {
  const { category, name, url } = route.params;

  const displayHeader = (category.label.length > 20) ? (category.label.substring(0, 16) + "...") : category.label

  // Set header options
  useEffect(() => {
    navigation.setOptions({
      headerTitle: displayHeader,
      headerStyle: {
        backgroundColor: colors.primary,
        elevation: 0, // Remove shadow for Android
        shadowOpacity: 0, // Remove shadow for iOS
      },
      headerTitleStyle: {
        fontFamily: fonts.defaultBold,
        fontSize: 16,
        color: 'white', // Color for the header title
      },
      headerTintColor: colors.secondary,
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ResourcesList resources={category.resources} />

      {/* Find more <category> resources button */}
      <ExternalLinkButton
        text={`Find More ${displayHeader} Resources`}
        link={category.url}
      />

      {/* "See all ResourceType resources button */}
      <ExternalLinkButton text={`See All ${name} Resources`} link={url} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: backgroundColors.primary,
  },
});