import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';
import Home from './components/Home';
import Login from './components/Login'

export default function App() {
  const [connected, setConnected] = useState(false)

  const isConnected = () => {
    setConnected(true)
  }

  const logout = () => {
    setConnected(false)
  }

  return (
    <>
    <Router>
      {connected ? (
        <Route exact path={'/'}>
          <Home
            onPress={logout}
          />
        </Route>
      ) : (
        <Route exact path={'/'}>
          <Login
            onPress={isConnected}
          />
        </Route>
      )}
      {/* <Route path={'/logged'} component={Logged}></Route> */}
    </Router>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#e67e22',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    margin: 10,
    borderRadius: 5,
    fontSize: 20
  },
});
