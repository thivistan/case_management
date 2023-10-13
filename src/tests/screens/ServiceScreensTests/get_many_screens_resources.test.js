/**
 * Provides dynamic testcases for frontend screens in ServicesScreens.
 * Specific screens can be added and excluded via the testResources variable.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { Linking, TouchableOpacity, Platform } from 'react-native';

import ServiceScreen from '../../../screens/MainScreens/ResourcesScreen/ServiceScreen';
import Category from '../../../screens/MainScreens/ResourcesScreen/Category';
import ExternalLinkButton from '../../../components/ExternalLinkButton';
import { Map } from '../../../components/MapList';
import RedirectLink from '../../../components/RedirectLink';
import ResourcesList from '../../../screens/MainScreens/ResourcesScreen/ResourceList';

import resources from '../../../data/resources';

const testResources = {
  'Health Services': resources['Health Services'],
  'Legal Services': resources['Legal Services'],
};

const spyOpenURL = jest.spyOn(Linking, 'openURL').mockImplementation(() => {
  return {
    openURL: function () { },
  };
});


const serviceRouteTemplate = { params: { data: null } };

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

describe('Section categories screen', () => {
  for (const [key, value] of Object.entries(testResources)) {
    it(`Checks if ${key} have ${value.data.length} categories`, () => {
      let route = JSON.parse(JSON.stringify(serviceRouteTemplate));
      route.params.data = value.data;

      const tree = renderer.create(<ServiceScreen route={route} navigation={{ setOptions: function () { } }} />);
      const componentStr = JSON.stringify(tree);
      const componentObj = JSON.parse(componentStr);

      expect(componentObj).toBeDefined();
      expect(componentObj.children).toBeDefined();
      expect(componentObj.children[0].children.length).toBe(value.data.length);
    });
  };

  for (const [key, value] of Object.entries(testResources)) {
    it(`Checks ${key} categories' names`, () => {
      let route = JSON.parse(JSON.stringify(serviceRouteTemplate));
      route.params.data = value.data;

      const tree = renderer.create(<ServiceScreen route={route} navigation={{ setOptions: function () { } }} />);
      const componentStr = JSON.stringify(tree);
      const componentObj = JSON.parse(componentStr);

      expect(componentObj).toBeDefined();
      expect(componentObj.children).toBeDefined();

      for (let i = 0; i < value.data.length; i++) {
        const categoryStr = JSON.stringify(componentObj.children[0].children[i]);
        expect(categoryStr).toContain(value.data[i].label);
      }
    });
  };

  for (const [key, value] of Object.entries(testResources)) {
    it(`Pressing category buttons with resources in ${key} section; expecting handler to be called w/ resources passed in`, async () => {
      let route = JSON.parse(JSON.stringify(serviceRouteTemplate));
      route.params.data = value.data;

      const tree = renderer.create(<ServiceScreen route={route} navigation={{ setOptions: function () { } }} />);
      const componentObj = tree.toJSON();

      let actualTotalCall = 0;
      let expectedTotalCall = 0;

      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) expectedTotalCall++;
      }

      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) {
          const category = componentObj.children[0].children[i];
          expect(category.props.onClick).toBeDefined();

          const spy = jest.spyOn(category.props, 'onClick').mockImplementation();
          category.props.onClick();
          expect(spy).toHaveBeenCalledTimes(1);
          actualTotalCall++;
        }
      }

      expect(actualTotalCall).toBe(expectedTotalCall);
    });
  };
});

describe('Resource list screen', () => {
  for (const [key, value] of Object.entries(testResources)) {
    it(`Checks if bottom 2 buttons of all ${key} resource lists are rendered`, () => {
      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) {
          let route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = value.data[i];
          route.params.url = value.url;
          route.params.name = value.data[i].label;

          const tree = renderer.create(
            <Category route={route} navigation={{ setOptions: function () { } }} />
          );
          expect(tree.root.findAllByType(ExternalLinkButton).length).toBe(2);
        }
      }
    });
  };

  for (const [key, value] of Object.entries(testResources)) {
    it(`Amount of resources in ${key} rendered match the amount of resources in the .json file`, () => {
      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) {
          let route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = value.data[i];
          route.params.url = value.url;
          route.params.name = value.data[i].label;

          const tree = renderer.create(
            <Category route={route} navigation={{ setOptions: function () { } }} />
          );

          const resourcesRendered =
            tree.root.findAllByType(Map).length + tree.root.findAllByType(RedirectLink).length;

          expect(resourcesRendered).toBe(value.data[i].resources.length);
        }
      }
    });
  };

  for (const [key, value] of Object.entries(testResources)) {
    it(`Clicks on the 2 bottom buttons of all ${key} resource lists`, () => {
      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) {
          let route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = value.data[i];
          route.params.url = value.url;
          route.params.name = value.data[i].label;

          const tree = renderer.create(
            <Category route={route} navigation={{ setOptions: function () { } }} />
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
  };

  for (const [key, value] of Object.entries(testResources)) {
    it(`Clicks on all ${key} link resources`, () => {
      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) {
          let route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = value.data[i];
          route.params.url = value.url;
          route.params.name = value.data[i].label;

          const tree = renderer.create(
            <Category route={route} navigation={{ setOptions: function () { } }} />
          );

          const resourceList = tree.root.findByType(ResourcesList);
          const redirectLinks = resourceList.findAllByType(RedirectLink);
          for (let j = 0; j < redirectLinks.length; j++) redirectLinks[j].props.onPress();
          expect(spyOpenURL).toHaveBeenCalledTimes(redirectLinks.length);
          spyOpenURL.mockRestore();
        }
      }
    });
  };

  for (const [key, value] of Object.entries(testResources)) {
    it(`Opens the map for all ${key} map resources with latitude and longtitude`, () => {
      for (let i = 0; i < value.data.length; i++) {
        if (value.data[i].resources) {
          let route = JSON.parse(JSON.stringify(resourceRouteTemplate));
          route.params.category = value.data[i];
          route.params.url = value.url;
          route.params.name = value.data[i].label;

          const tree = renderer.create(
            <Category route={route} navigation={{ setOptions: function () { } }} />
          );

          const resourceList = tree.root.findByType(ResourcesList);
          const maps = resourceList.findAllByType(Map);

          let expectedCall = maps.length;
          for (let j = 0; j < maps.length; j++) {
            if (maps[j].props.resource.lat && maps[j].props.resource.long) {
              const mapLink = maps[j].findByType(TouchableOpacity);
              mapLink.props.onPress();
            } else expectedCall--;
          }
          expect(spyOpenURL).toHaveBeenCalledTimes(expectedCall);
          spyOpenURL.mockRestore();
        }
      }
    });
  };
});
