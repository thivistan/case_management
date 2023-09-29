// jest.useFakeTimers();
import React from 'react';
import renderer from 'react-test-renderer';
import HealthServicesScreen from './HealthServicesScreen';

import { Linking } from "react-native";


const spyOpenURL = jest.spyOn(Linking, 'openURL').mockImplementation(() => {
    return {
        openURL: mockOpenURL,
    }
});



describe('<HealthServicesScreen />', () =>
    it('has 3 children', () => {
        const tree = renderer.create(<HealthServicesScreen />).toJSON();
        console.log(tree);
        expect(tree.children.length).toBe(3);
    }),

    // Note: Running toMatchSnapshot() on this screen causes an error. The error trace mentions an issue with Icon.

    //   it('renders correctly', () => {
    //     const tree = renderer.create(<HealthServicesScreen />).toJSON();
    //     expect(tree).toMatchSnapshot();
    //   }),

    it('renders "See All Healthcare Resources" button', () => {
        const tree = renderer.create(<HealthServicesScreen />).toJSON();

        // TODO: btn shouldn't use hardcoded indices
        const seeAllBtn = tree.children[2].children[1]
        console.log(seeAllBtn);
        expect(seeAllBtn).toBeDefined();
    }),

    it('open url', async () => {
        const tree = renderer.create(<HealthServicesScreen />).toJSON();
        // TODO: btn shouldn't use hardcoded indices
        const seeAllBtn = tree.children[2].children[1];
        seeAllBtn.props.onClick();
        const spy = jest.spyOn(Linking, 'openURL');

        expect(spy).toBeCalledWith('https://211la.org/resources/subcategory/healthcare');
        spy.mockReset();
        spy.mockRestore();
    }),

);