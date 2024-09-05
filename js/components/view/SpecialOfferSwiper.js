import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { borderWidth, heightValue, margin, paddingPoistion, radius, styles } from "../../styles/Styles";
import Swiper from "react-native-swiper";
import { DashboardSwiper } from "./DashboardSwiper";


export const SpecialOfferSwiper = ({ImgSource,titlePercentage,titleName,discount})=> {
  return (
    <View style={[{height:heightValue(4.8)},Platform.select({ios:[{height:heightValue(5.1)},paddingPoistion(20,0,0,0)]}),borderWidth(0),margin(0,0,23),paddingPoistion(10,0,0,0),styles.bgGray1,radius(30)]}>
        <Swiper
        dot={
            <View
                style={[styles.bgBlack_200,margin(3),radius(100),{width: 7,height: 7,}]}
            />
        }
        activeDot={
            <View
                style={[styles.bgBlack,radius(4),margin(3),{width: 20,height: 7}]}
            />
        }
            paginationStyle={{
            alignItems:'center',
            bottom:10
        }}
        // loop
        >
        {/* slide1 */}
        <DashboardSwiper titlePercentage={titlePercentage} titleName={titleName} discount={discount} ImgSource={ImgSource}/>
    
        {/* slide2 */}
        <DashboardSwiper titlePercentage={titlePercentage} titleName={titleName} discount={discount} ImgSource={ImgSource}/>
        
        {/* slide3 */}
        <DashboardSwiper titlePercentage={titlePercentage} titleName={titleName} discount={discount} ImgSource={ImgSource}/>
        
        {/* slide4 */}
        <DashboardSwiper titlePercentage={titlePercentage} titleName={titleName} discount={discount} ImgSource={ImgSource}/>
        
        {/* slide5 */}
        <DashboardSwiper titlePercentage={titlePercentage} titleName={titleName} discount={discount} ImgSource={ImgSource}/>
        
        </Swiper>
    </View>
  );
}

