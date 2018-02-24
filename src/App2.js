import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import mainScreen from './components/mainScreen'

export default class app extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

 const AppStackNavigator = StackNavigator({

  Main: {
    screen: mainScreen
  }
 })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});