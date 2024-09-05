import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { borderWidth, flex, marginPosition, opacity, paddingPoistion, styles } from '../../styles/Styles'
import { DashboardFilterButton, DashboardHeaderComponent, ModelsComponent } from '../../components'
import Feather from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import { dashboardScrollData } from '../../constants/dashboardSymbol'


export const Wishlist = () => {
    const wishlist = useSelector((state) =>state.user.modelsData.wishlist)
    console.log('====================================');
    console.log("wishlisthdshd",wishlist);
    console.log('====================================');


    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterPress = (filterName) => {
      setActiveFilter(filterName)
    };



    const filterModels = activeFilter === 'All' ? wishlist : wishlist.filter(item => item.Brand_Name === activeFilter)

    console.log("jfhdjfhejfhej",filterModels);


  return (
    <View style={[styles.bgWhite,Platform.select({android:[styles.bgWhiteSmoke]})]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        <View style={[marginPosition(5,0,0,0),Platform.select({android:marginPosition(40,0,0,0)})]}>
            <DashboardHeaderComponent title={"Wishlist"}
            CustomIcons={(
                <Feather size={25} style={[styles.black,opacity(0.7)]} name='search'/>
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
        <ModelsComponent data={filterModels}/>

    </View>
  )
}
