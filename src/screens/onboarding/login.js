import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';


export default class App extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: 'https://dlynx.rhodes.edu/jspui/bitstream/10267/10746/1/Seal_Rhodes_style1_1color_2004.jpg' }}
          style={styles.image}
        />
      
        <Button
          title="Login"
          onPress={this._handleButtonPress}
        />
      
        <Button
          title="Sign Up"
          onPress={this._handleButtonPress}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  image:{
    height: 200, 
    width: 200,
  },
});
