import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ReservationForm from '../components/ReservationForm';
import store from '../redux/configureStore';

describe('ReservationForm', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <ReservationForm />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
