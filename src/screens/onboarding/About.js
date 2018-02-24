import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, Camera } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.11

const Form = t.form.Form;

var options = {
  fields: {
    residence: {
      label: "Where do you live?", 
      placeholder: "e.g. Voorhies 8, East Village A 102",
    }
  }
};

const User = t.struct({
  firstName: t.String,
  lastName: t.String,
  residence: t.String, // What if there is a need for multiple locations?
  phone: t.String,
  email: t.String,
});

export default class App extends Component {
  
  handleSubmit = () => {
  const value = this._form.getValue(); // use that ref to get the form value
  console.log('value: ', value);
  }
  
  render() {
    return (
      
   <View style={styles.container}>
   
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          Tell us about you!
        </Text>
      </View>
      
      <View style={styles.form}>
        <Form type= {User} options={options} style={styles.form} ref={c => this._form = c} /> 
        
        <TouchableHighlight style={styles.button} onPress={this.onPress} onPress={this.handleSubmit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
                
      </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },  
  header: {
    backgroundColor: '#C70039',
    height: 120,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'left',
  },
  form: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 30,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 52,
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FBFBFB',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
