import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  AlwaysBounceVertical
} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  nickname: t.maybe(t.String),
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 5
    },
  },
  controlLabel: {
    normal: {
      color: '#514F4F',
      fontSize: 12,
      marginBottom: 7,
      fontWeight: '800'
    },
    // the style applied when a validation error occours
    error: {
      color: '#DC2D2D',
      fontSize: 12,
      marginBottom: 7,
      fontWeight: '800'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Slow down there! You forgot your email address'
    },
    username: {
      error: 'How will we know who you are? Pick a Username'
    },
    password: {
      error: 'Don\'t forget to set a password'
    },
    terms: {
      label: 'Agree to the terms!',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    /*render() {
      return <RootStack />;
    }*/
  }

  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
      <View style={styles.container}>
        <View style={styles.formStyle}>
        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Rhodes_College_seal.svg/1024px-Rhodes_College_seal.svg.png' }}
          style={styles.image}//{ height: 200, width: 200 }}
        />
      </View>
        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
        />

        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1,
    //marginTop: 50,
    //padding: 20,
    backgroundColor: '#DFFEFF',
  },
  formStyle:{
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    backgroundColor: '#DFFEFF',
  },
    image:{
    height: 200,
    width: 200,
  },
});
