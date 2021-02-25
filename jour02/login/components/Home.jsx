import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Home(props) {
    return (
        <>
            <View style={styles.container}>
                <Text>Je suis logged</Text>
                <Pressable onPress={props.onPress}>
                    <Text style={styles.button}>Logout</Text>
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