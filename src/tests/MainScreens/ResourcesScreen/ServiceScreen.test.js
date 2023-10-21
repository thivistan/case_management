/**
 * Provides tests for ServiceScreen.
 * Specific screens can be added and excluded via the testResources variable.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ServiceScreen from '../../../screens/MainScreens/ResourcesScreen/ServiceScreen';

import resources from '../../../data/resources';

const testResources = {
    'Health Services': resources['Health Services'],
    'Legal Services': resources['Legal Services'],
    'Food Services': resources['Food Services'],
    'Income & Employment Services': resources['Income & Employment Services'],
};

const serviceRouteTemplate = { params: { data: null } };

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

describe('Section categories screen', () => {
    for (const [key, value] of Object.entries(testResources)) {
        it(`Checks if ${key} have ${value.data.length} categories`, () => {
            const route = JSON.parse(JSON.stringify(serviceRouteTemplate));
            route.params.data = value.data;

            const tree = renderer.create(
                <ServiceScreen route={route} navigation={{ setOptions: function () { } }} />
            );
            const componentStr = JSON.stringify(tree);
            const componentObj = JSON.parse(componentStr);

            expect(componentObj).toBeDefined();
            expect(componentObj.children).toBeDefined();
            expect(componentObj.children[0].children.length).toBe(value.data.length);
        });

        it(`Checks ${key} categories' names`, () => {
            const route = JSON.parse(JSON.stringify(serviceRouteTemplate));
            route.params.data = value.data;

            const tree = renderer.create(
                <ServiceScreen route={route} navigation={{ setOptions: function () { } }} />
            );
            const componentStr = JSON.stringify(tree);
            const componentObj = JSON.parse(componentStr);

            expect(componentObj).toBeDefined();
            expect(componentObj.children).toBeDefined();

            for (let i = 0; i < value.data.length; i++) {
                const categoryStr = JSON.stringify(componentObj.children[0].children[i]);
                expect(categoryStr).toContain(value.data[i].label);
            }
        });

        it(`Pressing category buttons with resources in ${key} section; expecting handler to be called w/ resources passed in`, async () => {
            const route = JSON.parse(JSON.stringify(serviceRouteTemplate));
            route.params.data = value.data;

            const tree = renderer.create(
                <ServiceScreen route={route} navigation={{ setOptions: function () { } }} />
            );
            const componentObj = tree.toJSON();

            let actualTotalCall = 0;
            let expectedTotalCall = 0;

            for (const category of value.data) {
                if (category.resources) expectedTotalCall++;
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
    }
});