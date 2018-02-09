import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class Loginform extends React.Component {
  render() {
    return (
      <View style={styles.loginformcontainer}>

        <TextInput underlineColorAndroid='transparent' placeholder ='Email' style={styles.textinput} />
        <TextInput underlineColorAndroid='transparent' placeholder ='Password' style={styles.textinput} />
    
        <TouchableOpacity style={styles.loginbtn}>
          <Text>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerbtn}>
          <Text>REGISTER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotbutton}>
          <Text>FORGOT PASSWORD</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginformcontainer: {
    alignItems: 'center',
  },
  textinput: {
    color: 'white',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    borderColor: '#fff',
    borderWidth: 1,
  },
  loginbtn: {
    backgroundColor: '#ecf0f1',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 5,
  },
  registerbtn: {
    backgroundColor: '#bdc3c7',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 5,
  },
  forgotbutton: {
    backgroundColor: '#e74c3c',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 14,
    marginTop: 5,
  }
});