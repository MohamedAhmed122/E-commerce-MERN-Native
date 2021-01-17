import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProductScreen() {
    return (
        <View style={styles.screen}>
            <Text> Hello From the Product Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        display:"flex",
        alignItems:'center',
        justifyContent:'center'
    }
})
