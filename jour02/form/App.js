import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Pressable} from 'react-native';

export default function App() {

  const [emailInput, setEmailInput] = useState(styles.loginInput)
  const [passwordInput, setPasswordInput] = useState(styles.loginInput)

  const validInput = (text) => {
    if (text.length >= 6) {
      setEmailInput(styles.loginInputValid)
    } else {
      setEmailInput(styles.loginInput)
    }
  }

  const validPasswordInput = (text) => {
    if (text.length >= 6) {
      setPasswordInput(styles.loginInputValid)
    } else {
      setPasswordInput(styles.loginInput)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={emailInput} placeholder="Email" onChangeText={(email) => {validInput(email)}} keyboardType='email-address'></TextInput>
      <TextInput style={passwordInput} placeholder="Password" onChangeText={(password) => {validPasswordInput(password)}} secureTextEntry={true}></TextInput>
      <Pressable style={styles.button}>
        <Text style={{color: 'white', fontSize: 20}}>Connexion</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130f40',
    alignItems: 'center',
    paddingTop: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fff',
    marginBottom: 30
  },
  loginInput: {
    marginBottom: 15,
    height: 50,
    width: 350,
    padding: 10,
    backgroundColor: '#30336b',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    color: 'white',
    fontSize: 22
  },
  loginInputValid: {
    marginBottom: 15,
    height: 50,
    width: 350,
    padding: 10,
    backgroundColor: '#30336b',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 5,
    color: 'white',
    fontSize: 22
  },
  button: {
    marginTop: 20,
    backgroundColor: '#30336b',
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
});
