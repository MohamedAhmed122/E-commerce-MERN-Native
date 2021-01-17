import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Constants from "expo-constants";
import { background } from '../config/colors';
import ProductCard from '../Components/ProductCard/ProductCard';

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
        <ScrollView>
            <View style={styles.screen}>
            {
                products.map(product =>(
                    <ProductCard key={product.id} item={product}/>
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
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop: Constants.statusBarHeight,
        backgroundColor:background
    }
})
