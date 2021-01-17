import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Constants from "expo-constants";
import { background } from '../config/colors';
import ProductCard from '../Components/ProductCard/ProductCard';
import AppInput from '../Common/AppInput/AppInput';

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
        <ScrollView style={styles.screen}>
            <AppInput placeholder='Search products' />
            <View style={styles.container}>
            {
                products.map(product =>(
                    <ProductCard key={product.name} item={product}/>
                ))
            }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor:background
    },
    container:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop: 20,
    }
})
