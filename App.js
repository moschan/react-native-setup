import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Root } from './src/components/Root';
import { Provider } from 'react-redux';
import { store } from './src/stores/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
