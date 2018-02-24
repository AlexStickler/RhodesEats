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
        <TextInput underlineColorAndroid='transparent' secureTextEntry={true} placeholder ='Password' style={styles.textinput} />
    
        <TouchableOpacity style={styles.loginbtn}>
          <Text>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerbtn}>
          <Text>REGISTER</Text>
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
    color: 'black',
    alignSelf: 'stretch',
    padding: 12,
    marginBottom: 5,
    backgroundColor: '#fff',
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
  }
});