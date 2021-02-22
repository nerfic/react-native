import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Alert, ActivityIndicator} from 'react-native';

export default function App() {


  return (
    <ScrollView style={styles.firstcontainer}>
      <View style={styles.secondContainer}>
        <Text style={styles.firstText}>First text</Text>
        <Text style={styles.secondText}>Second text</Text>
        <Text style={styles.lastText}>Last text</Text>
      </View>
      <Image 
      style={styles.logo}
      source={{ uri: ('https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png')}}></Image>
      <Image 
      style={styles.logo}
      source={require("./img/konexio-logo.png")}></Image>
      <Pressable onPress={() => Alert.alert(`le x c'est le s`)}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <ActivityIndicator size="large" color="blue" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#3498db',
  },
  secondContainer: {
    backgroundColor: 'white'
  },
  firstText: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30
  },
  secondText: {
    marginBottom: 80,
    textAlign: 'center'
  },
  lastText: {
    marginBottom: 80,
    fontWeight: 'bold'
  },
  logo: {
    height: 60,
    width: 150,
    margin: 20,
  },
});
