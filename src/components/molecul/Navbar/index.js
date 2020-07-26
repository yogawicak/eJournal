import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Kalender, Jurnal, Approval, Profile } from '../../../containers/pages';
import CostumHeader from '../Header';
import BoxReport from '../BoxReport';
import Jurnal_Logo from '../../../assets/svg/jurnal'
import Kalender_Logo from '../../../assets/svg/kalender'
import Approval_Logo from '../../../assets/svg/approve'
import Profile_Logo from '../../../assets/svg/profile'


const Tab = createBottomTabNavigator()

const Navbar = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} initialRouteName='Jurnal'>
            <Tab.Screen name="Jurnal" component={Jurnal} options={{tabBarIcon: () => <Jurnal_Logo width={26} height={26}/>}}></Tab.Screen>
            <Tab.Screen name="Kalender" component={Kalender} options={{tabBarIcon: () => <Kalender_Logo width={25} height={25}/>}}></Tab.Screen>
            <Tab.Screen name="Approval" component={Approval} options={{tabBarIcon: () => <Approval_Logo width={25} height={25}/>}}></Tab.Screen>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:() => <Profile_Logo width={25} height={25}/>}}></Tab.Screen>
        </Tab.Navigator>
    )
}

const tabBarOptions = {
    activeTintColor:'white',
    inactiveTintColor:'#C2BDBD',
    labelStyle:{
        fontFamily:'Roboto-Regular',
        fontSize:15
    },
    style : {
        backgroundColor:'#F7482E',
        height:60,
        paddingBottom:2,
        paddingTop:5,
    }
}

export default Navbar
