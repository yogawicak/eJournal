import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const BoxReport = () => {
    return (
        <View style={style.container}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text style={style.dateText}>Senin, 02 Jan 2020 10:30</Text>
                    <Text>Design Sprint day 1 : Understanding User Needs</Text>
                </View>
                <View style={{marginLeft:70}}>
                    <Image style={{height:100,width:100}} source={require('../../../assets/png/ex-image-boxreport.png')}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        // flex:1
        marginTop:15,
        elevation:4,
        height:130,
        backgroundColor:'white',
        borderRadius:5,
        borderStyle:'solid',
        borderColor:'#ECECEC',
        borderWidth:1,
        paddingHorizontal:12,
        paddingVertical:12
    },
    dateText:{
        marginBottom:3,
    }
})

export default BoxReport
