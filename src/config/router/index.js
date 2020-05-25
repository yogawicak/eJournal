import React from 'react'
import { View, Text } from 'react-native'
import { Kalender } from '../../containers/pages'
import { Navbar } from '../../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Router = () => {
    return (
        <Navbar />
    )
}

// const Router = () => {
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name="KalenderPages" component={Kalender}></Tab.Screen>
//         </Tab.Navigator>
//     )
// }

/**
 * <nav container>
 * <Tab con>
 * 
 * </Tab con>
 * </nav container>
 */

export default Router
