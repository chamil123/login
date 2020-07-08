import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions,container } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import *as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';



import MemberProfile from './MemberProfile';
import SignInComponent from './SignInComponent';



// const Drawer = createDrawerNavigator();


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ff9100'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        marginTop: 20,
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        height: 500

    }, title: {
        color: '#85375a',
        fontWeight: 'normal',
        fontSize: 18
    }, text: {
        color: 'gray',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    }, signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    }, textSign: {
        color: 'white',
        fontWeight: 'bold'
    }


});
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

export default class HomeComponent extends React.Component {

    render() {

        return (

       

            <View>
                <Text>Welocome to Home</Text>
            </View>

        )
    }
}


