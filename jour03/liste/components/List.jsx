import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

export default function List() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("http://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCountries(response)
            })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 30}}>Liste des pays:</Text>
            <FlatList 
                data={countries}
                renderItem={({ item }) => (
                    <>
                    <Text>{item.name} - {item.capital}</Text>
                    <SvgUri 
                        width="300"
                        height="200"
                        uri={`${item.flag}`}
                    />
                    {/* <Image style={{height: 100, width: 100}} source={{ uri: `${item.flag}`}}/> */}
                    </>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       marginTop: 150,
    }
})