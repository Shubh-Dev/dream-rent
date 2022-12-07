import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ReserveList from '../components/ReserveList';
import store from '../redux/configureStore';

describe('ReserveList', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <ReserveList />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
