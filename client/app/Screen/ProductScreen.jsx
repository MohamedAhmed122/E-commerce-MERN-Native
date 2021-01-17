import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import Constants from "expo-constants";
import { background } from '../config/colors';
import ProductCard from '../Components/ProductCard/ProductCard';
import AppInput from '../Common/AppInput/AppInput';
import ProductSearchScreen from './ProductSearchScreen'

const data = require('../../assets/data/products.json')


export default function ProductScreen() {
    const [products, setProducts] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
    const [text, setText] = useState('')
    const [focus, setFocus ] = useState(false)
   
    useEffect(()=>{
        setProducts(data)
        setFilterProduct(data)
    
        return(()=>{
            setProducts([])
        })
    })

    let searchProduct ;
     searchProduct  = products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))

    const handleClose = () =>{
        setFocus(false)
        setText(' ')
    }

    return (
        <View style={styles.screen}>
            <AppInput 
                icon='search' 
                endIcon 
                placeholder='Search products'
                onBlur={()=> setFocus(true)}
                onFocus ={() =>setFocus(true)}
                onIconPress={handleClose}
                onChangeText={(text)=>setText(text)}
            
            />
            {focus === true?
                <ProductSearchScreen items={searchProduct} />:
                <ScrollView>
                    <View style={styles.container}>
                    {
                        products.map(product =>(
                            <ProductCard key={product.id} item={product}/>
                        ))
                    }
                    </View>

                </ScrollView>
            }
        </View>
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
