
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './components/register';
import Login from './components/login';
const Stack = createStackNavigator();
const App =  ()=> {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    //  <Register />
    //  <Login />
      
  
  );
};



export default App;
