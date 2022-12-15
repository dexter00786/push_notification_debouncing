import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    console.log(props)
    const {backgroundColor, label, onPress} = {...props}; 
  return (
    <TouchableOpacity
        style = {[styles.customBtn, {backgroundColor : backgroundColor}]}
        activeOpacity = {0.5}
        onPress = {onPress}
      >
            <Text style = {styles.label} >{label}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    customBtn : {
        height : 50, 
        width : width - 32, 
        borderRadius : 7,
        justifyContent : 'center',
        alignItems : 'center',
    },
    label : {
        color : '#FFFFFF',
        fontSize : 18,
    }
})