import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashComponent from './screens/SplashComponent';
import SignInComponent from './screens/SignInComponent';
import SignUpComponent from './screens/SignUpComponent';


const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="SplashComponent" 
        component={SplashComponent} 
        options={{ title: 'SplashComponent' }}
        options={{headerShown: false}} 
        
      />
      <Stack.Screen 
        name="SignInComponent" 
        component={SignInComponent} 
        options={{ title: 'SignInComponent',headerStyle:{backgroundColor:'#ff9100',  elevation: 0}  }}
      
      />
       <Stack.Screen 
        name="SignUpComponent" 
        component={SignUpComponent} 
        options={{ title: 'SignUpComponent',headerStyle:{backgroundColor:'#ff9100',  elevation: 0}  }}
      
      />
       <Stack.Screen 
      name="HomeComponent" 
      component={HomeComponent} 
      options={{ title: 'HomeComponent',headerStyle:{backgroundColor:'#ff9100',  elevation: 0}  }}
    
    />
     
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}