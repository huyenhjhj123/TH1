import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

const  ex2=() => {
  return (
    <View style={{flex: 1, justifyContent:'center' }}>
      <Button title='Button 1' onPress={() => alert ("Hello!")}/>
      <TouchableOpacity
      onPress={() => alert ("Hello 2! ")}
      style= {
        {
          backgroundColor: "pink",
          padding: 10,
          alignItems: "center",
          marginTop: 10,
        }
      }>
        <Text style={{color: "white", fontSize:18}}>Button 2</Text>
      </TouchableOpacity>
    </View> 
  );
};

export default ex2;

