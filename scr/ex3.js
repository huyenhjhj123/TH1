import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View } from "react-native";
import React from "react";



const Button = (props)=>
(
  <TouchableOpacity
    onPress={props.onPress}
    style={{
        backgroundColor: "#ff637c",
        alignSelf: "center",
        padding: 10,
        margin: 10,
        ...props.buttonStyle,
    }}
    >
        <Text style={{ color:"#fff"}}>{props.text}</Text>
    </TouchableOpacity>
);
export default ()=>(
    <View style={{flex:1, justifyContent:"center"}}>
        <Button text="Say hello" onPress={()=> alert("Hello!")}/>
        <Button
            text="Say goodbye"
            onPress={()=> alert("goodbye!")}
            buttonStyle={{backgroundColor:"#4dc2c2"}}/>
    </View>
);