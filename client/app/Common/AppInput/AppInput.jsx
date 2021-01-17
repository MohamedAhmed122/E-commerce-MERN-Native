import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { black, lightGray, white } from '../../config/colors'
import { MaterialIcons } from '@expo/vector-icons';
const AppInput = ({
    icon, 
    placeholder,
    style, 
    onChangeText, 
    endIcon,
    onIconPress,
    onFocus,
    ...otherProps}) => {
    
    return (
        <View style={styles.container}>
            {icon &&  <MaterialIcons name={icon} size={24} color="gray" />}
            <TextInput 
                onChangeText={onChangeText} 
                style={[styles.inputText, style]} 
                onFocus={onFocus}
                placeholder={placeholder}
                {...otherProps} 
            />
           {endIcon &&  <MaterialIcons name='cancel' size={24} color="gray" onPress={onIconPress} />}
        </View>
    )
}

export default AppInput

const styles = StyleSheet.create({
    container:{
        width:'95%',
        marginLeft: 10,
        backgroundColor: white,
        height:50,
        borderRadius:25,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },
    inputText:{
        backgroundColor:'transparent',
        width: 'auto',
        height:'100%',
        marginLeft:10,
        color: black,
        fontSize:17,
        flex:1,
    }
})