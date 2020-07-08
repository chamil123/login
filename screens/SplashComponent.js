import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import *as Animatable from 'react-native-animatable';
import Button from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9100'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
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

export default class SplashComponent extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <StatusBar backgroundColor={'#ff9100'} barStyle={'dark-content'} translucent={false} />
                    <View style={styles.header}>

                    </View>
                    <Animatable.View style={styles.footer} animation="fadeInUpBig">
                        <SafeAreaView>
                            <ScrollView
                                contentInsetAdjustmentBehavior="automatic"
                                style={styles.scrollView}>
                                <LinearGradient
                                    colors={['red', 'yellow', 'green']}
                                    style={styles.linearGradient}
                                >
                                    <Text>Vertical Gradient</Text>
                                </LinearGradient>
                                <Text style={styles.title}>Stay Connect with everyone</Text>
                                <Text style={styles.text}>Sign in with account</Text>



                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignInComponent')}>
                                    <View style={{
                                        backgroundColor: '#ff9100', alignItems: 'center',
                                        justifyContent: 'center', borderRadius: 25,
                                        height: 50,
                                        marginTop: 5
                                    }}
                                    >
                                        <Text style={{ color: 'white' }}>LOGIN</Text>
                                    </View>
                                </TouchableOpacity>

                                <Button
                                    style={{ fontSize: 10, color: 'orange', marginTop: 10, borderRadius: 40, }}
                                    styleDisabled={{ color: 'white' }}

                                    containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 40, backgroundColor: 'red' }}
                                    disabledContainerStyle={{ backgroundColor: 'orange' }}
                                    onPress={() => this.props.navigation.navigate('SignUpComponent')}
                                >
                                    REGISTER
                        </Button>
                            </ScrollView>
                        </SafeAreaView>
                    </Animatable.View>
                </View>
            </SafeAreaView>

        );
    }
}