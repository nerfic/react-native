import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List'

export default function App() {
  return (
    <View style={styles.container}>
      <List></List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
