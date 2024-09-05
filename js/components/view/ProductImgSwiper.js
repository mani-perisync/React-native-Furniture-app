import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { borderWidth, flex, heightValue, padding, styles, widthValue } from "../../styles/Styles";

export const ProductImgSwiper = ({source})=> {
  return (
    <View style={[borderWidth(0),flex(1),styles.allCenter]}>
        <Image
        source={source}
        style={[{height:heightValue(3),width:widthValue(0.8)}]}
        resizeMode="contain"
        />
    </View>
  );
}

