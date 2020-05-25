import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Kalender } from '../../../containers/pages';
import CostumHeader from '../Header';
import BoxReport from '../BoxReport';


const Tab = createBottomTabNavigator()

const Navbar = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeBackgroundColor:'#F7482E'}}>
            <Tab.Screen name="Kalender" component={Kalender}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Navbar
