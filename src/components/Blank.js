// home.js
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { add, remove } from '../actions/index';

export class Blank extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}
