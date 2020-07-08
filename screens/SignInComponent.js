import React from "react";
import { View, Text,ScrollView, StyleSheet, StatusBar, TouchableOpacity, Dimensions,Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import *as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';
import Button from 'apsl-react-native-button';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9100'
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
export default class SignInComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TextInputName: '',
            TextInputpassword: ''
        }
    }
    InputUsers = () => {
        const { TextInputName } = this.state;
        const { TextInputpassword } = this.state;

        fetch('http://192.168.8.106/tr_reactnative/loginCheck.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                member_name: TextInputName,
                member_password: TextInputpassword,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
                this.props.navigation.navigate('HomeComponent');
            }).catch((error) => {
                console.error(error);
            })
    }


    render() {
        return (

            <View style={styles.container}>

                {/* <View style={styles.header}>

                </View> */}
                <Animatable.View style={styles.footer} animation="fadeInUp">
                    <SafeAreaView>
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            <Text style={styles.text}>Use email to Login</Text>
                            <TextInput onChangeText={TextInputValue => this.setState({ TextInputName: TextInputValue })} style={{ backgroundColor: 'white', marginTop: 80 }} label="Email" />
                            <TextInput onChangeText={TextInputValue => this.setState({ TextInputpassword: TextInputValue })} style={{ backgroundColor: 'white', marginTop: 30 }} label="Password" />


                            <TouchableOpacity  onPress={this.InputUsers}>
                                <View style={{
                                    backgroundColor: '#ff9100', alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 25,
                                    height: 50,
                                    marginTop: 50
                                }}
                                >
                                    <Text style={{ color: 'white' }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </SafeAreaView>
                </Animatable.View>


            </View>

        )
    }
}