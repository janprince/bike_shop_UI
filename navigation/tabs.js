import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import React from 'react';
import Home from "../screens/Home";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: "#FA6401"}}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Foundation name="home" size={24} color="#FA6401" />
                ),
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <SimpleLineIcons name="handbag" size={24} color="black" />
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;