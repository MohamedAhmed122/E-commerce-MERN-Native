import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {lightBlue, white } from '../../config/colors'

export default function CategoryList({categories}) {
    return (
        <ScrollView horizontal bounces style={styles.scroll}>
           {
               categories.map(category =>(
                   <TouchableOpacity key={category.id} style={styles.badge}>
                       <Text style={styles.text}>{category.name}</Text>
                   </TouchableOpacity>
               ))
           }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    badge:{
        backgroundColor: lightBlue,
        padding: 12,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    text:{
        color: white,
    }
})
