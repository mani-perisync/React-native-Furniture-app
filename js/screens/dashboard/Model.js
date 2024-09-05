import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon, { Icons } from "../../components/view/IconCompnent";
import { DashboardFilterButton, DashboardHeaderComponent, ModelsComponent } from "../../components";
import { borderWidth, flex, marginPosition, opacity, padding, paddingPoistion, styles } from "../../styles/Styles";
import { dashboardScrollData } from "../../constants/dashboardSymbol";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";

export const Model = ({navigation}) =>{

  const furnitureModels = useSelector((state) =>state.user.modelsData.modelsData)
  console.log("dhahsdahsd",furnitureModels)

  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterPress = (filterName) => {
    setActiveFilter(filterName)
  };


  const handletouch = (product) => {
    navigation.navigate('ProductView',{product_id: product.Product_ID})
  }


  // const filterModels = activeFilter === 'All' ? furnitureModels : furnitureModels.filter(item => item.Brand_Name === activeFilter)

  const filterModels = activeFilter === 'All' ? furnitureModels : furnitureModels.filter(item => item.Brand_Name === activeFilter)

  console.log("jfhdjfhejfhej",filterModels);



  return (
    <View style={[styles.bgWhite]}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>

      <View style={[marginPosition(5,0,0,0),Platform.select({android:marginPosition(40,0,0,0)})]}>
        {/* heading */}
        <DashboardHeaderComponent title={"Most Popular"}
        CustomIcons={(
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon type={Icons.Feather} size={25} style={[styles.black,opacity(0.7)]} name='search'/>
          </TouchableOpacity>
        )}
        />             
      </View>


      <ScrollView style={[borderWidth(0),paddingPoistion(0,0,0,12)]} horizontal={true} alwaysBounceVertical={false} showsHorizontalScrollIndicator={false}>
        <FlatList
        horizontal
        data={dashboardScrollData}
        renderItem={({item}) => (
            <DashboardFilterButton onPress={() => handleFilterPress(item.name)} style={[activeFilter === item.name && styles.bgBlack]} textTitle={item.name} textStyle={[activeFilter === item.name && styles.white]}/>
        )}
        />
      </ScrollView>


      {/* Data */}
      <ModelsComponent data={filterModels} onPress={handletouch} navigation={navigation}/>
      
    </View>

  );
}

