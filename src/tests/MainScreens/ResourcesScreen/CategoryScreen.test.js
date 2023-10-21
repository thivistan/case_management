/**
 * Provides tests for CategoryScreen.
 * Specific screens can be added and excluded via the testResources variable.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { Linking, TouchableOpacity, Platform } from 'react-native';

import CategoryScreen from '../../../screens/MainScreens/ResourcesScreen/CategoryScreen';
import ExternalLinkButton from '../../../components/ExternalLinkButton';
import { Map } from '../../../components/MapList';
import RedirectLink from '../../../components/RedirectLink';
import ResourcesList from '../../../screens/MainScreens/ResourcesScreen/ResourceList';

import resources from '../../../data/resources';

const testResources = {
  'Health Services': resources['Health Services'],
  'Legal Services': resources['Legal Services'],
  'Food Services': resources['Food Services'],
  'Income & Employment Services': resources['Income & Employment Services'],
};

const spyOpenURL = jest.spyOn(Linking, 'openURL').mockImplementation(() => {
  return { openURL() { } };
});

const resourceRouteTemplate = { params: { category: null, name: 'List', url: null } };

/**
 * Mocks icons to prevent error with Ionicons
 */
jest.mock('react-native-vector-icons/Ionicons', () =>
  jest.genMockFromModule('react-native-vector-icons/Ionicons')
);

/**
 * Mocks Platform to prevent error with Platform.
 */
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
  Platform.OS = 'android';
  return Platform;
});

beforeEach(() => {
  spyOpenURL.mockRestore();
  Platform.OS = 'android';
});

describe('Resource list screen', () => {
  for (const [key, value] of Object.entries(testResources)) {
    it(`Checks if bottom 2 buttons of all ${key} resource lists are rendered`, () => {
      for (const category of value.data) {
        if (category.resources) {
          const route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = category;
          route.params.url = value.url;
          route.params.name = category.label;

          const tree = renderer.create(
            <CategoryScreen route={route} navigation={{ setOptions: function () { } }} />
          );
          expect(tree.root.findAllByType(ExternalLinkButton).length).toBe(2);
        }
      }
    });
    it(`Amount of resources in ${key} rendered match the amount of resources in the .json file`, () => {
      for (const category of value.data) {
        if (category.resources) {
          const route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = category;
          route.params.url = value.url;
          route.params.name = category.label;

          const tree = renderer.create(
            <CategoryScreen route={route} navigation={{ setOptions: function () { } }} />
          );

          const resourcesRendered =
            tree.root.findAllByType(Map).length + tree.root.findAllByType(RedirectLink).length;

          expect(resourcesRendered).toBe(category.resources.length);
        }
      }
    });
    it(`Clicks on the 2 bottom buttons of all ${key} resource lists`, () => {
      for (const category of value.data) {
        if (category.resources) {
          const route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = category;
          route.params.url = value.url;
          route.params.name = category.label;

          const tree = renderer.create(
            <CategoryScreen route={route} navigation={{ setOptions: function () { } }} />
          );

          const externalLinks = tree.root.findAllByType(ExternalLinkButton);
          expect(externalLinks.length).toBe(2);

          externalLinks[0].findByType(TouchableOpacity).props.onPress();
          externalLinks[1].findByType(TouchableOpacity).props.onPress();

          expect(spyOpenURL).toHaveBeenCalledTimes(2);
          spyOpenURL.mockRestore();
        }
      }
    });
    it(`Clicks on all ${key} link resources`, () => {
      for (const category of value.data) {
        if (category.resources) {
          const route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = category;
          route.params.url = value.url;
          route.params.name = category.label;

          const tree = renderer.create(
            <CategoryScreen route={route} navigation={{ setOptions: function () { } }} />
          );

          const resourceList = tree.root.findByType(ResourcesList);
          const redirectLinks = resourceList.findAllByType(RedirectLink);
          for (let j = 0; j < redirectLinks.length; j++) {
            const touchableOpacity = redirectLinks[j].findByType(TouchableOpacity);
            touchableOpacity.props.onPress();
          }
          expect(spyOpenURL).toHaveBeenCalledTimes(redirectLinks.length);
          spyOpenURL.mockRestore();
        }
      }
    });
    it(`Opens the map for all ${key} map resources with latitude and longtitude`, () => {
      for (const category of value.data) {
        if (category.resources) {
          const route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = category;
          route.params.url = value.url;
          route.params.name = category.label;

          const tree = renderer.create(
            <CategoryScreen route={route} navigation={{ setOptions() { } }} />
          );

          const resourceList = tree.root.findByType(ResourcesList);
          const maps = resourceList.findAllByType(Map);

          let expectedCall = maps.length;
          for (const map of maps) {
            if (map.props.resource.lat && map.props.resource.long) {
              const mapLink = map.findByType(TouchableOpacity);
              mapLink.props.onPress();
            } else expectedCall--;
          }
          expect(spyOpenURL).toHaveBeenCalledTimes(expectedCall);
          spyOpenURL.mockRestore();
        }
      }
    });
  }

});