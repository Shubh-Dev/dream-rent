import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import MyReservations from '../components/MyReservations';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';

describe('MyReservations', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(
        <Provider store={store}>
            <MyReservations />
        </Provider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('display MY RESERVATIONS', () => {
        const testRenderer = TestRenderer.create(
        <Provider store={store}>
            <MyReservations />
        </Provider>,
        );
        const testInstance = testRenderer.root;
        const h1 = testInstance.findByType('h1');
    });
    });