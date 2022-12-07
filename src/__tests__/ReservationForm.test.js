import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import ReservationForm from '../components/ReservationForm';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';

describe('ReservationForm', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(
        <Provider store={store}>
            <ReservationForm />
        </Provider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('display RESERVATION FORM', () => {
        const testRenderer = TestRenderer.create(
        <Provider store={store}>
            <ReservationForm />
        </Provider>,
        );
        const testInstance = testRenderer.root;
        const h1 = testInstance.findByType('h1');
        });
    });