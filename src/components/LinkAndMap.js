import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { colors, backgroundColors } from '../global';

import RedirectLink from './RedirectLink';
import { Map } from './MapList';

/**
 * Component to represent a list of resources and links.
 * @param {Object} props Component props
 * @param {Object} links Contains objects with link data.
 * @param {Object} resources Contains objects with resources data.
 */
export default function LinkAndMap({ links, resources }) {
  return (
    <View style={styles.mapList}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={{ paddingTop: 20 }}>
          {links &&
            links.map((link) => (
              <RedirectLink title={link.title} url={link.url} key={link.title} />
            ))}

          {resources &&
            resources.map((resource) => <Map location={resource} key={resource.name} />)}
        </View>
      </ScrollView>
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
  text: {
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'rgb(81, 168, 194)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 13,
    display: 'flex',
    textAlign: 'center',
    paddingBottom: 15,
  },
  image: {
    height: 20,
    width: 20,
  },
  mapList: {
    height: '79%',
  },
  scrollViewContainer: {
    marginBottom: 20,
  },
});
