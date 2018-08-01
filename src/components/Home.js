// home.js
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { add, remove } from '../actions/index';

  export class Home extends Component {
    render() {
      const { todos, add, remove } = this.props
      return (
        <View>
          <Text style={{marginTop: 200}}>To Do Example</Text>

          <Button
            onPress={() => add(1)}
            title="Add"
          />

          <Button
            onPress={() => remove()}
            title="Remove"
          />

          {todos.map((todo, index) => {
            return <Text key={index}>{todo}</Text>
          })}
        </View>
      );
    }
  }

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  add,
  remove,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Container;
