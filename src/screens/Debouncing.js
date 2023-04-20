import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton'
import { debounceFunction } from '../utils/helper';

const Debouncing = () => {
const [count, setCount] = useState(0);
// const [textValue, setTextValue] = useState('');
    const increaseCount = (args) => {
        setCount(count => count+1)
        console.log(args);
    }

    const functionWithPause = debounceFunction(increaseCount, 200);

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
            <Image
                source = {{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSYrpLQxyEq28Drty23z10wsTdHn1Xx7Wexe3IDphvLMSHWgxZPR4wbirtE2lPFposvI&usqp=CAU"}}
                style = {{height : 100, width : 100}}
                onPartialLoad = {()=> console.warn("first")}

            />
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