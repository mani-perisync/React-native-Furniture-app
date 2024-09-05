import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { borderWidth, flex, fontSize, heightValue, marginPosition, paddingPoistion, styles, widthValue } from '../../styles/Styles'
import { TextComponent } from '../view'
import { ProfileImg, SwiperImg } from '../../constants/links'

export const DashboardSwiper = ({ImgSource,titlePercentage,titleName,discount})=> {
  return (
    <View style={[styles.row,styles.centerVertical,{width:'100%',height:'100%'},paddingPoistion(0,30,20,10),borderWidth(0)]}>
        <View style={[flex(1),borderWidth(0),styles.centerVertical,styles.borderBlue,{rowGap:10},paddingPoistion(0,0,0,15)]}>
            <TextComponent size={35} style={[styles.fontWeight700,fontSize(35),Platform.select({ios:fontSize(35)})]} title={titlePercentage? titlePercentage:'25%'}/>
            <TextComponent size={20} style={[styles.fontWeight700,Platform.select({ios:fontSize(17)})]} title={titleName? titleName:"Today's Special!"}/>
            <TextComponent size={13} style={[styles.fontWeight700,styles.black_700,,Platform.select({ios:fontSize(10)})]} title={discount? discount:'Get discount for every order, only valid for today'}/>
        </View>
        <View style={[flex(1.20),styles.centerVertical,borderWidth(0),styles.borderGreen]}>
            <Image
            source={ImgSource? ImgSource : SwiperImg}
            resizeMode="contain"
            style={[{height:heightValue(2),width:widthValue(2)}]}
            />
        </View>
    </View>
  )
}

