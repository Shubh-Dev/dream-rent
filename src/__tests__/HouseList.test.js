import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import HouseList from '../components/HouseList';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';

describe('HouseList', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(
        <Provider store={store}>
            <HouseList />
        </Provider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    });