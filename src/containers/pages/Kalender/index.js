import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'
import CostumHeader from '../../../components/molecul/Header'
import { BoxReport } from '../../../components'
import { ScrollView } from 'react-native-gesture-handler'

export class Kalender extends Component {
    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <CostumHeader></CostumHeader>
                    <Calendar onDayPress={() => console.log('day')} theme={{dotColor:'red',selectedDotColor:'green',todayTextColor:'red'}}></Calendar>
                    <BoxReport></BoxReport>
                    <BoxReport></BoxReport>
                    <BoxReport></BoxReport>
                    <BoxReport></BoxReport>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container:{
        paddingHorizontal:22,
        backgroundColor:'white',
        flex:1,
        marginBottom:20
    }
})

export default Kalender
