import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Login({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../assets/bike.jpg')}/>
            <Text style={{
                fontSize: 23,
                color: 'black',
            }}>
                Welcome to
            </Text>
            <Text style={{
                fontSize: 26,
                fontWeight: 'bold',
                marginBottom: 20,
            }}>
                Power Bike Shop
            </Text>

            <TouchableOpacity style={{
                backgroundColor: '#e0e0e0',
                paddingHorizontal: 80,
                paddingVertical: 14,
                marginBottom: 13,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: "center",
            }}>
                <AntDesign name="google" size={24} color="red" style={{marginRight: 8,}}/>
                <Text>Login with Gmail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor: 'black',
                paddingHorizontal: 80,
                paddingVertical: 14,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: "center",
            }} onPress={() => {
                navigation.navigate("Main");
            }}>
                <AntDesign name="apple1" size={24} color="white" style={{marginRight: 8,}}/>
                <Text style={{color: 'white', }}>Login with Apple</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color:'grey'}}>Not a member?</Text>
                <Pressable>
                    <Text style={{marginLeft: 5, color:'#FA6401', fontWeight:'bold'}}>Sign Up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        borderRadius: 17,
        transform: [{ rotate:"45deg"}],
        marginVertical: 90,

    }
});
