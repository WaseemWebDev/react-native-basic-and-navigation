import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,Button
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
export default function Login({navigation}) {
    return (
        <>
        
     <View style={{backgroundColor:"#F8F9FA",justifyContent:"center",textAlign:"center",width:"100%",height:"100%"}}>
     <View style={{height:"60%",alignSelf:"center",width:"80%"}}>
     <Text style={{fontSize:40,textAlign:"center",marginTop:30, height:"30%"}}>Login</Text>
     <TextInput
     style={{height: 40}}
     placeholder="Enter Email"
    //  onChangeText={text => setText(text)}
     defaultValue=""
     
    style={{backgroundColor:"#eaeaea",borderColor: 'gray',
    borderWidth: 1}}
  // defaultValue="You can type in me"
   />
   <TextInput
     style={{height: 40}}
     placeholder="Enter password"
    //  onChangeText={text => setText(text)}
     defaultValue=""
    style={{backgroundColor:"#eaeaea",
    marginTop:20,
    borderColor: 'gray',
    borderWidth: 1}}
  // defaultValue="You can type in me"
   />
   <View style={{marginTop:20}}>
          <Button
          onPress={() => navigation.navigate('Register')}
            title="Login"
          />
        </View>
   
    
     </View>
   </View>
        </>
    )
}
