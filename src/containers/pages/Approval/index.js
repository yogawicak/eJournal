import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BoxReport from '../../../components/molecul/BoxReport'
import CostumHeader from '../../../components/molecul/Header'
import { BoxReportStatus } from '../../../components'

export default class Approval extends Component {
    render() {
        return (
            <View style={style.container}>
                <CostumHeader></CostumHeader>
                <BoxReportStatus status='Laporan Selesai'></BoxReportStatus>
                <BoxReport></BoxReport>
                <BoxReportStatus status='Disetujui Industri'></BoxReportStatus>
                <BoxReport></BoxReport>
                <BoxReportStatus status='Terkumpul'></BoxReportStatus>
                <BoxReport></BoxReport>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        paddingHorizontal:22,
        backgroundColor:'white',
        flex:1,
    }
})
