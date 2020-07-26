import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Jurnal_Logo from '../../../assets/svg/jurnal'
import CostumHeader from '../../../components/molecul/Header'
import { ProfileImage, BoxReport } from '../../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default class Jurnal extends Component {
    render() {
        return (
            <View style={style.container}>
                <CostumHeader></CostumHeader>
                <View style={{marginLeft:10,marginTop:17,flexDirection:"row"}}>
                    <ProfileImage></ProfileImage>
                    <View style={{marginLeft:20}}>
                        <Text style={{color:'white',fontFamily:'Roboto-Bold',fontSize:22}}>Hi Yoga Wicaksono</Text>
                        <Text style={{color:'white',fontFamily:'Roboto-Medium',fontSize:14}}>28 Februari 2020</Text>
                        <Text style={{color:'white',fontFamily:'Segoe UI',marginTop:10,marginBottom:20}}>10 Entri | 100 Hari</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white',flex:1,marginHorizontal:-22,paddingHorizontal:22,paddingBottom:10}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{color:'#F7482E', fontFamily:'Roboto-Medium',marginTop:10,fontSize:17}}>28 Februari 2020. Jum'at</Text>
                    <BoxReport></BoxReport>
                    <BoxReport></BoxReport>
                    <Text style={{color:'#F7482E', fontFamily:'Roboto-Medium',marginTop:10,fontSize:17}}>28 Februari 2020. Jum'at</Text>
                    <BoxReport></BoxReport>
                    <BoxReport></BoxReport>
                    <BoxReport></BoxReport>
                </ScrollView>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        paddingHorizontal:22,
        backgroundColor:'#F7482E',
        flex:1,
        marginBottom:-0,
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:1
    }
})