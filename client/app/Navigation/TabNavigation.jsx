import React from 'react'
import { StyleSheet } from 'react-native'
import { orange } from '../config/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from '../Screen/ProductScreen'
import { Feather } from '@expo/vector-icons';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: orange,
            inactiveTintColor:'gray'
        }}
    >
            <Tab.Screen 
            component={ProductScreen} 
            name='Products'
            options={{
                tabBarIcon :({color, size})=>(
                    <Feather name="shopping-bag" size={size} color={color} />
                )
            }}
             />
              <Tab.Screen 
            component={ProductScreen} 
            name='Product Details'
            options={{
                tabBarIcon :({color, size})=>(
                    <Feather name="shopping-bag" size={size} color={color} />
                )
            }}
             />
              <Tab.Screen 
            component={ProductScreen} 
            name='Settings'
            options={{
                tabBarIcon :({color, size})=>(
                    <Feather name="shopping-bag" size={size} color={color} />
                )
            }}
             />
             
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
