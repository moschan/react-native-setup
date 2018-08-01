import {
  applyMiddleware,
  createStore,
} from 'redux';

import { reducers } from '../reducers/index';

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
