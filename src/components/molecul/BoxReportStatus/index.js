import React from 'react'
import { View, Text } from 'react-native'

const BoxReportStatus = (props) => {
    return (
        <View style={{backgroundColor:'#A4FFB0',borderTopLeftRadius:5,borderTopRightRadius:5,marginBottom:-15,marginTop:15}}>
            <Text style={{fontFamily:'Roboto-Reguler',fontSize:17,textAlign:'center',marginTop:10,marginBottom:10,color:'#498553'}}>{props.status}</Text>
        </View>
    )
}

export default BoxReportStatus
