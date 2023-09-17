import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const ex1 = ()=>
{
  return(
    <View style={
      MyStyle.ViewStyle
    }>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  );
}

export default ex1;

<View style={
  {width: 100,
  height:100,
  backgroundColor:'aqua',
  alignItems:'center',
  justifyContent:'center',}
}></View>
var MyStyle = StyleSheet.create(
    {
      ViewStyle:{
        width:100,
        height:100,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
  
      },
      TextStyle:{
        color:'black'
      }
    }
  )