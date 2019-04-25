import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Header} from 'react-native';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <TextInput style = {styles.inputBox}
        placeholder="Full Name"
        placeholderTextColor="#313233"
        onChangeText={(text) => this.setState({fullname:text})}/>

        <TextInput style = {styles.inputBox}
        placeholder="Phone Number"
        placeholderTextColor="#313233"
         onChangeText={(text) => this.setState({phoneNumber:text})}/>

        <TextInput style = {styles.inputBox}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#313233"
         onChangeText={(text) => this.setState({password:text})}/>

  </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
   borderRadius: 15,
    backgroundColor:'white',
    margin: 20,

  },
  inputBox: {
    alignSelf: 'stretch',
    margin: 15,
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
      width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40
  },

});
