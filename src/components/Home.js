// home.js
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { TodoScreen } from './Todo';
import { createStackNavigator } from 'react-navigation';

export class HomeScreen extends Component {
  gotoTodoScreen () {
    const { navigation } = this.props;
    navigation.navigate('Todo');
  }
  render() {
    return (
      <View>
        <Button
          onPress={() => this.gotoTodoScreen()}
          title="Go to Todo"
        />
      </View>
    );
  }
}

// import { Provider } from 'react-redux';
// import { store } from '../stores/index';
//
// export class Home extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     )
//   }
// }
//
