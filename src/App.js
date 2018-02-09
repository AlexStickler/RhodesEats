import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

import Loginform from './components/loginform';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={ "padding" } style={styles.keyboardwrapper}>

      <ImageBackground source={require('./img/food.jpg')} style={styles.container}>
          <View style={styles.logocontainer}>
              <Image source={require('./img/logo.png')} style={styles.logo} />
          </View>
      
          <Loginform />

      </ImageBackground>

   </KeyboardAvoidingView>
   );
}
}

const styles = StyleSheet.create({
keyboardwrapper: {
   flex: 1,
   justifyContent: 'center',
   alignSelf: 'stretch',
   width: null,
   marginTop: 20,
},
container: {
   flex: 1,
   justifyContent: 'center',
   alignSelf: 'stretch',
   width: null,
   padding: 20,
},

logocontainer: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
},
logo: {
   width: 230,
   height: 140,

}
});

      