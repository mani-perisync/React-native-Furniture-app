import { FlatList, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { borderWidth, flex, heightValue, marginPosition, opacity, padding, paddingPoistion, radius, shadow, styles, widthValue, zIndex } from "../../styles/Styles";
import { DashboardHeaderComponent, TextComponent } from "../../components";
import Icon, { Icons } from "../../components/view/IconCompnent";
import { NotificationsData } from "../../constants/NotificationData";

export const Notification = ()=> {
  return (
    <View style={[flex(1),styles.bgWhite]}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>

      <View style={[marginPosition(5,0,0,0),Platform.select({android:marginPosition(40,0,0,0)})]}>
        {/* heading */}
        <DashboardHeaderComponent title={"Notification"}
        CustomIcons={(
          <TouchableOpacity>
            <Icon type={Icons.MaterialCommunityIcons} size={25} style={[styles.black,opacity(0.7)]} name='dots-horizontal-circle-outline'/>

          </TouchableOpacity>
        )}
        />             
      </View>

      <ScrollView style={[marginPosition(0,0,0,0)]}>
        <FlatList
        key={item => item.id}
        data={NotificationsData}
        renderItem={({item}) => (
            <View style={[marginPosition(10,20,10,20),borderWidth(0)]}>
                <View style={[marginPosition(5,0,20,0)]}>
                    {item.value && <TextComponent size={17} style={[styles.fontWeight700]} title={item.day}/>}
                </View>
                <View style={[styles.row,flex(0),borderWidth(0),shadow(1.2),Platform.select({android:[shadow(0.4)]}),radius(20),styles.bgWhite,styles.centerHorizontal,padding(0,15,20),{columnGap:20}]}>

                    <View style={[borderWidth(0),styles.borderGreen,{height:heightValue(13.5),width:widthValue(6.5)},Platform.select({android:[{width:widthValue(6.5),height:heightValue(13)}]}),styles.allCenter,radius(100),styles.bgBlack,styles.positionRelative,zIndex(-1)]}>
                        <Image
                        source={item.img}
                        style={[{height:heightValue(24),width:widthValue(16)},styles.positionAbsolute,zIndex(1),styles.bgWhite,borderWidth(1)]}
                        resizeMode="stretch"
                        />
                    </View>
                    <View style={[flex(1),borderWidth(0)]}>
                        <TextComponent size={17} style={[styles.fontWeight700]} title={item.status}/>
                        <TextComponent size={12} style={[styles.fontWeight600,opacity(0.6),padding(0,7,0)]} title={item.comments}/>
                    </View>
                </View>
            </View>
            

        )}
        />
        <View style={[{height:60},Platform.select({android:{height:40}})]}></View>
      </ScrollView>
    </View>
  );
}

