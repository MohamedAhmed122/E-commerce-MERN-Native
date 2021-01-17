import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

import {orange, white} from '../../config/colors'

export default function AppButton({inverted, title, onPress , color= orange}) {
    return (
        <TouchableOpacity 
           onPress={onPress} 
           style={[
                inverted ?styles.smallContainer :styles.container,
                {backgroundColor: color }]}
        >
            <Text style={
                inverted ? styles.smallText : styles.text
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: orange,
        width:'98%',
        padding: 13,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        alignSelf:'center'
    },
    smallContainer:{
        backgroundColor: orange,
        width:100,
        padding: 10,
        borderRadius:30,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        alignSelf:'center'
    },
    smallText:{
        fontSize:16,
        color: white,
        
    },
    text:{
        fontSize:18,
        color: white,
        textTransform:"uppercase",
        fontWeight:'bold'
    }
})
