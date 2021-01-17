import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native'
import AppButton from '../../Common/AppButtons/PrimaryButton'
import AppText from '../../Common/AppText/AppText'
import { background, lightBlue, orange, white } from '../../config/colors'


const { width } = Dimensions.get('window')

export default function ProductCard({item}) {
    const {name, countInStock, price, image } = item;
    const imageHolder ='https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202036/0005/chesterfield-roll-arm-upholstered-sleeper-sofa-c.jpg'
    return (
        <View style={{width :'50%'}}> 
        <TouchableOpacity style={styles.container}>
          <Image 
            resizeMode='cover'
            style={styles.image} 
            source={{ url: image ||imageHolder}} 
        />
          <View style={styles.textContainer}>
              <AppText>
                  {name.length > 15 ? name.substring(0, 15-3)+ '...' : name}
                </AppText>
              <Text style={styles.price} >1{price}$</Text>
              <AppButton inverted title='Add' color={lightBlue}  />
          </View>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width / 2 -20,
        height: width / 1.5,
        marginBottom: 20,
        marginTop:50,
        backgroundColor: white,
        alignItems:'center',
        marginLeft:10,
        borderRadius: 10,
    },
    image:{
        width: width /2 -20 -20,
        height: width /2 -20 -30,
        // position:'absolute',
        top: -35,
        borderRadius:20,
    },
    textContainer:{
        alignItems:'center',
    },
    price:{
        color: orange,
        marginTop:5,
  
    },

})
