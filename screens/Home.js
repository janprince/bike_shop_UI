import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Entypo, FontAwesome, SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const items = [
    {name: 'Brompton Bike', price: '1,500.00', image_source: require('../assets/bike3.png'), type: "Road bike"},
    {name: 'Pinarello Bike', price: '1,500.00', image_source: require('../assets/bike2.png'), type: "Mountain bike"},
    {name: 'Norco Bike', price: '1,200.00', image_source: require('../assets/bike1.png'), type: "Urban bike"},
    {name: 'Schwinn Bike', price: '980.00', image_source: require('../assets/bike4.png'), type: "Road bike"},
]

export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: 'row',
                marginTop: 54,

                alignItems: 'center',
            }}>
                <Entypo name="menu" size={25} color="black" style={{flex: 1}}/>
                <TouchableOpacity style={{flex: 1, marginLeft: 65}} onPress={() => {
                    navigation.navigate("Cart");
                }}>
                    <FontAwesome name="bicycle" size={25} color="black" />
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
                    <AntDesign name="search1" size={25} color="black" />
                    <SimpleLineIcons name="bell" size={25} color="black" style={{marginLeft: 5}}/>
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'flex-end', marginVertical: 15}}>
                <Text style={{marginBottom: 2, fontSize: 17, color: '#8c8989'}}>The World's </Text>
                <Text style={{fontSize: 20, color: "#FA6401", fontWeight: 'bold', marginBottom:0}}>Best Bike</Text>
            </View>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Categories</Text>
                <ScrollView horizontal={true} style={{marginVertical: 13,}} showsHorizontalScrollIndicator={false}>
                    <Text style={styles.active_scroll_text}>All</Text>
                    <Text style={styles.scroll_text}>RoadBike</Text>
                    <Text style={styles.scroll_text}>Mountain</Text>
                    <Text style={styles.scroll_text}>Urban</Text>
                </ScrollView>
            </View>

            <View style={{flexWrap: "wrap", flexDirection: "row", marginTop: 10, justifyContent: 'space-between'}}>
                {
                    items.map(item => {
                        return (
                            <View key={item.name} style={{
                                backgroundColor: "#e0e0e0",
                                alignItems: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                borderRadius: 15,
                                marginBottom: 10,
                            }}>
                                <Entypo name="heart-outlined" size={24} color="black" style={{
                                    alignSelf: "flex-end",
                                    backgroundColor: "white",
                                    borderRadius: 50,
                                    padding: 5,
                                    marginHorizontal: 10,

                                }} />
                                <Image style={styles.bikes} source={item.image_source}/>
                                <Text style={{fontSize: 16, color: '#8c8989',}}>{item.name}</Text>
                                <View style={{flexDirection: 'row', alignItems:'center'}}>
                                    <Text style={{color: '#FA6401', fontSize: 17, fontWeight: "bold", marginRight: 8}}>$</Text>
                                    <Text style={{fontSize: 17, fontWeight: "bold"}}>{item.price}</Text>
                                </View>
                            </View>
                        );
                    })
                }

            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 22,
    },
    scroll_text: {
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 17,
        paddingVertical: 8,
        borderRadius: 12,
        marginRight: 15,
        fontSize: 16,
        color: "#8c8989",
    },
    active_scroll_text: {
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 17,
        paddingVertical: 8,
        borderRadius: 12,
        marginRight: 15,
        fontSize: 16,
        color: "#FA6401",
    },
    bikes: {
        width: 150,
        height: 150,
    }
});
