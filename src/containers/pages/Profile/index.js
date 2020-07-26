import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import CostumHeader from '../../../components/molecul/Header'
import LinearGradient from 'react-native-linear-gradient'
import Statistik_Logo from '../../../assets/svg/statistik-logo'
import { ProfileImage } from '../../../components'

export default class Profile extends Component {
    
    render() {
        return (
            <View style={{paddingHorizontal:22,backgroundColor:'white',flex:1}}>
                <CostumHeader></CostumHeader>
                <View style={{height:200,backgroundColor:'white',marginTop:25,elevation:4,borderRadius:6}}>
                    <View>
                        <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#F7482E','#D49B00']} style={{height:70,borderTopRightRadius:6,borderTopLeftRadius:6}}/>
                    </View>
                        <ProfileImage alignSelf='center' marginTop={-30}></ProfileImage>
                    <Text style={{textAlign:"center",marginTop:14,fontFamily:'Roboto-Bold',fontSize:20,marginBottom:5}}>Yoga Wicaksono</Text>
                    <Text style={{textAlign:"center",fontFamily:'Roboto-Reguler',fontSize:15}}>XIII - TKJ 2 - PT. Anggada Duta Wisesa</Text>
                </View>
                <View style={{flexDirection:'row',height:200,backgroundColor:'white',marginTop:40,elevation:4,borderRadius:6,paddingTop:18,paddingLeft:11}}>
                    <Statistik_Logo width={40} height={40}></Statistik_Logo>
                    <View style={{marginLeft:21}}>
                        <Text style={{fontFamily:'Roboto-Bold',fontSize:20}}>Statistik</Text>
                        <Text style={{fontFamily:'Segoe UI',color:'#F7482E'}}>10 Entri | 100 Hari</Text>
                    </View>
                </View>
            </View>
        )
    }
}
