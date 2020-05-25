import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const BoxReport = () => {
    return (
        <View style={style.container}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Text>10.30</Text>
                    <Text>Design Sprint day 1 : Understanding User Needs</Text>
                </View>
                <View style={{marginLeft:30}}>
                    <Image source={require('../../../assets/png/ex-image-boxreport.png')}/>
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
        height:100,
        backgroundColor:'white',
        borderRadius:5,
        borderStyle:'solid',
        borderColor:'#ECECEC',
        borderWidth:1,
        paddingHorizontal:12,
        paddingVertical:12
    }
})

export default BoxReport
