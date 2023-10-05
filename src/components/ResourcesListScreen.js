import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import { backgroundColors } from '../global';

import LinkAndMap from './LinkAndMap';
import ExternalLinkButton from './ExternalLinkButton';

/**
 * Component to represent a sub-category's list of resources and links.
 * @param {Object} props Component props
 * @param {Object} route Contains an object to handle data passed to this component via navigation.
 * @param {Object} navigation Contains an object to manage app navigation.
 */
const ResourcesListScreen = ({ route, navigation }) => {
  const { subcategory, global_label, global_url } = route.params;

  let displayHeader = (subcategory.label.length > 18) ? (subcategory.label.substring(0, 16) + "...") : subcategory.label

  useEffect(() => {
    navigation.setOptions({ headerTitle: displayHeader });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <LinkAndMap resources={subcategory.resources} links={subcategory.links} />

      {/* Find more <subcategory> resources button */}
      <ExternalLinkButton
        text={`Find More ${displayHeader} Resources`}
        link={subcategory.url}
      />

      {/* "See all <category> resources button */}
      <ExternalLinkButton text={`See All ${global_label} Resources`} link={global_url} />
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

export default ResourcesListScreen;