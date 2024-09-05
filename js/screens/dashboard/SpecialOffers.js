import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { flex, marginPosition, opacity, styles } from "../../styles/Styles";
import { StatusBar } from "react-native";
import Icon, { Icons } from "../../components/view/IconCompnent";
import { DashboardHeaderComponent, SpecialOfferSwiper } from "../../components";
import { lampImg1, lampImg2, lampImg4, sofaImg1, SwiperImg, vaseImg1, vaseImg2, vaseImg4 } from "../../constants/links";

export const SpecialOffers = ()=> {
  return (
    <View style={[flex(1),styles.bgWhite]}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>

      <View style={[marginPosition(5,0,0,0),Platform.select({android:marginPosition(40,0,0,0)})]}>
        {/* heading */}
        <DashboardHeaderComponent title={"Special Offers"}
        CustomIcons={(
          <TouchableOpacity>
            <Icon type={Icons.MaterialCommunityIcons} size={25} style={[styles.black,opacity(0.7)]} name='dots-horizontal-circle-outline'/>

          </TouchableOpacity>
        )}
        />             
      </View>

      <ScrollView style={[marginPosition(10,0,0,0)]} showsVerticalScrollIndicator={false}>
        <View style={[{rowGap:20}]}>
          <SpecialOfferSwiper titlePercentage={'25%'} titleName={"Today's Special!"} ImgSource={SwiperImg}/>
          <SpecialOfferSwiper titlePercentage={'15%'} titleName={'Weekends Deals'} ImgSource={lampImg4}/>
          <SpecialOfferSwiper titlePercentage={'30%'} titleName={'New Arrivals'} ImgSource={sofaImg1}/>
          <SpecialOfferSwiper titlePercentage={'20%'} titleName={'Black Friday'} ImgSource={vaseImg4}/>
          <SpecialOfferSwiper titlePercentage={'20%'} titleName={'Black Friday'} ImgSource={lampImg4}/>
        </View>
        <View style={[{height:50}]}>

        </View>
      </ScrollView>
    </View>
  );
}

