import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const data = require('../../assets/data/products.json')


export default function ProductScreen() {
    const [products, setProducts] = useState([])
   
    useEffect(()=>{
        setProducts(data)
        return(()=>{
            setProducts([])
        })
    })

    return (
        <View style={styles.screen}>
            <Text> Hello From the Product Page</Text>
            <FlatList
                data={products}
                keyExtractor={product => product.name}
                renderItem={({item})=> <Text>{item.name}</Text>}
            />
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
