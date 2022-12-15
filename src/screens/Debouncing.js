import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton'

const Debouncing = () => {
const [count, setCount] = useState(0);
// const [textValue, setTextValue] = useState('');
    const increaseCount = () => {
        setCount(count => count+1)
        console.log(count);
    }

    const apiCall = () => {
        console.log("api call.....")
    }

    const functionWithPause = debounceFunction();

    function debounceFunction(){
        let timer;
        return function(...args) {
            console.log("running.....")
            let context = this;
            clearTimeout(timer);
           timer = setTimeout(()=> {
                console.log("timeout....")
                increaseCount.apply(context, args);
            },200)
        }
    }

    // useEffect(()=> {
    //     const setTimeoutVar = setTimeout(() => {
    //         increaseCount();
    //       }, 1000);
      
    //       return () => {
    //         clearTimeout(setTimeoutVar);
    //       };
    // },[textValue])
  return (
    <SafeAreaView
        style = {styles.container}
    >
        <View style = {[styles.container, {justifyContent : 'center', alignItems : "center"}]} >
            <Text>{count}</Text>
            {/* <CustomButton backgroundColor = {'#0F73EE'} label = {"Increment"} onPress = {()=>{functionWithPause()}}  /> */}
            <TextInput placeholder = 'search here' onChangeText={()=>functionWithPause() } />
        </View>
    </SafeAreaView>
  )
}

export default Debouncing

const styles = StyleSheet.create({
    container : {
        flex  : 1,
    }
})