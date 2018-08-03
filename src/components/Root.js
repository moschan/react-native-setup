// home.js
import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './Home'
import { TodoScreen } from './Todo'

export const Root =  createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Todo: {
    screen: TodoScreen
  },
});
