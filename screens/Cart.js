import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const items = [
    {name: 'Brompton Bike', price: '1,500.00', image_source: require('../assets/bike3.png'), type: "Road bike"},
    {name: 'Pinarello Bike', price: '1,500.00', image_source: require('../assets/bike2.png'), type: "Mountain bike"},
    {name: 'Norco Bike', price: '1,200.00', image_source: require('../assets/bike1.png'), type: "Urban bike"},
]


export default function Cart() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 50,
                marginBottom: 25,
            }}>
                <Ionicons name="arrow-back-outline" style={{flex: 1}} size={24} color="black" />
                <View style={{flex: 2, marginLeft: 20,}}>
                    <Text style={{fontWeight:'bold'}}>Cart list</Text>
                    <Text style={{color: '#8c8989'}}>(3 items)</Text>
                </View>

            </View>

            {/* cart items */}
            {
                items.map(item => {
                    return(
                        <View style={{flexDirection: 'row', marginBottom: 20}} key={item.name}>
                            <View style={{backgroundColor: "#e0e0e0", padding: 19, borderRadius: 15, marginRight: 20}}>
                                <Image style={{width:60, height: 60,}} source={item.image_source}/>
                            </View>

                            <View style={{flex: 1}}>
                                <View style={{flex:1, flexDirection: 'row', alignItems: "center", marginBottom: 2}}>
                                    <Text style={{fontSize: 17, flex: 4}}>{item.name}</Text>
                                    <View style={{
                                        backgroundColor: "#fff",
                                        borderWidth: 1,
                                        borderColor: "#e0e0e0",
                                        borderRadius: 50,
                                        padding: 5,
                                        alignItems: 'center',
                                    }}>
                                        <AntDesign name="delete" size={24} color="#FA6401" />
                                    </View>

                                </View>

                                <Text style={{color: '#8c8989', marginBottom: 2,}}>{item.type}</Text>

                                <View style={{flex:1, flexDirection: "row", alignItems: 'center'}}>
                                    <View style={{flex: 4, flexDirection: 'row'}}>
                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>$</Text>
                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> {item.price}</Text>
                                    </View>

                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={{
                                            backgroundColor: "black",
                                            padding: 5,
                                            borderRadius: 50,
                                        }}>
                                            <AntDesign name="minus" size={24} color="white" />
                                        </View>
                                        <Text style={{fontWeight: 'bold', fontSize: 18}}>  1  </Text>
                                        <View style={{
                                            backgroundColor: "#FA6401",
                                            padding: 5,
                                            borderRadius: 50,
                                        }}>
                                            <AntDesign name="plus" size={24} color="white" />
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })
            }


            {/*  total pricing  */}
            <View style={{ backgroundColor: "#e0e0e0", padding: 25, marginTop: 20, borderRadius: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#8c8989"}}>Subtotal</Text>
                    <View style={{flexDirection:'row', flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={{color: '#FA6401', fontSize: 17}}>$ </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>3,400.00</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{flex: 1, fontSize: 17, color: "#8c8989"}}>Shipping Fee</Text>
                    <View style={{flexDirection:'row', flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={{color: '#FA6401', fontSize: 17}}>$ </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>100.00</Text>
                    </View>
                </View>

                <View style={{
                    borderStyle: 'dotted', borderWidth: 1, borderColor: "#8c8989", borderRadius: 1,
                    marginTop: 10
                }}></View>

                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{flex: 1, fontSize: 17, fontWeight: "bold", marginTop: 8}}>Total</Text>
                    <View style={{flexDirection:'row', flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={{color: '#FA6401', fontSize: 17}}>$ </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>100.00</Text>
                    </View>
                </View>

            </View>

            <TouchableOpacity style={{
                backgroundColor: "#FA6401", alignItems: 'center',
                paddingVertical: 17, marginHorizontal: 30,
                marginTop: 20, borderRadius: 20,
            }}>
                <Text style={{color: 'white', fontSize: 15}}>Proceed to Checkout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 22,
    },
});