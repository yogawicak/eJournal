import React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CostumHeader = () => {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => Alert.alert('hello')}>
                <Image source={require('../../../assets/png/drawer-botton.png')}></Image>
            </TouchableOpacity>
            <Text style={style.text}>EJournal</Text>
            <TouchableOpacity>
                <Image source={require('../../../assets/png/search-button.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:15,
        justifyContent:'space-between',
        alignItems:'center',
        height:50,
        marginTop:19,
        // marginHorizontal:21,
        borderRadius:10,
        borderColor:'#ECECEC',
        borderStyle:'solid',
        borderWidth:0.4,
        elevation:7,
        marginBottom:8,
        backgroundColor:'white',
    },
    text:{
        fontFamily:'Poppins-Bold',
        color:'#F7482E',
        fontSize:17
    }
})

export default CostumHeader
