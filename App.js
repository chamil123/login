import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';



import SplashComponent from './screens/SplashComponent';
import SignInComponent from './screens/SignInComponent';
import SignUpComponent from './screens/SignUpComponent';
import HomeComponent from './screens/HomeComponent';

import MemberProfile from './screens/MemberProfile';




const Drawer = createDrawerNavigator();


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
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="SplashComponent"
        component={SplashComponent}
        options={{ title: 'SplashComponent' }}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name="SignInComponent"
        component={SignInComponent}
        options={{ title: 'SignInComponent', headerStyle: { backgroundColor: '#ff9100', elevation: 0 } }}

      />
      <Stack.Screen
        name="SignUpComponent"
        component={SignUpComponent}
        options={{ title: 'SignUpComponent', headerStyle: { backgroundColor: '#ff9100', elevation: 0 } }}

      />
      <Stack.Screen
        name="HomeComponent"
        component={NavDraw}
        options={{ title: 'NavDraw', headerStyle: { backgroundColor: 'white', elevation: 1 }, }}


      />


    </Stack.Navigator>
  );
}

function NavDraw() {
  return (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeComponent} />
          <Drawer.Screen name="Profile" component={MemberProfile} />

        </Drawer.Navigator>

  );
}

// function NotificationsScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     );
//   }
// export default function HomeComponent() {
//     return (
//         <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Home" component={MemberProfile} />

//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }
export default function App() {
  return (
    <NavigationContainer>

      <NavStack />
      {/* <NavDraw /> */}

    </NavigationContainer>
  );
}