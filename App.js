import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Tabs from "./navigation/tabs";

export default function App() {
    const stack = createNativeStackNavigator();
    return (
        <View style={styles.container}>
            <NavigationContainer>

                <stack.Navigator>
                    <stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <stack.Screen name="Main" component={Tabs} options={{headerShown:false}}/>
                </stack.Navigator>

            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


