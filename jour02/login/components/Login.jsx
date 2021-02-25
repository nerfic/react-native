import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Login(props) {
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={props.onPress}>
                    <Text style={styles.button}>Login</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.button}>Signup</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1   ,
        justifyContent: 'center',
        alignItems: 'center'
    },
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