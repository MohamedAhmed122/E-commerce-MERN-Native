import React from 'react'
import { StyleSheet, View } from 'react-native'
import { gray, lightGray } from '../../config/colors'

export default function AppSeparator() {
    return (
        <View style={styles.separator}></View>
    )
}

const styles = StyleSheet.create({
    separator:{
        width: '100%', 
        height: 2,
        backgroundColor: lightGray,
        
    }

})