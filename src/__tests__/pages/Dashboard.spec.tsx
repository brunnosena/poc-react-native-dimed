import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import Dashboard from '../../pages/Dashboard';

afterEach(cleanup);

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

const initialState = {
  repos: [],
};

describe('Dashboard page', () => {
  const mockStore = configureStore([]);

  it('should be able Component', async () => {
    const store = mockStore(initialState);

    const rendered = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );

    const buttonComponent = rendered.getByTestId('button');
    fireEvent(buttonComponent, 'press');
    const actions = store.getActions();
    expect(actions.length).toBe(0);
  });
});
