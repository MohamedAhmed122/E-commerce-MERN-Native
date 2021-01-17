import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../Components/List/ListItem'


const imageHolder ='https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202036/0005/chesterfield-roll-arm-upholstered-sleeper-sofa-c.jpg'
export default function ProductSearchScreen({items}) {
    console.log(items);
    return (
        <View>
           <FlatList 
                data={items}
                keyExtractor={(items)=> items.id}
                renderItem={({item})=> (
                    <ListItem
                        source={item.image || imageHolder}
                        title={item.name}
                        description={item.description}ch
                    />
                )}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({})
