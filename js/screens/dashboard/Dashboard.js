import React, { useEffect, useState } from "react";
// - - - - - COMPONENTS - - - - - //
import { ScreenViewComponent, TextComponent, TextInputCompnent } from "../../components";
// - - - - - CONSTANTS - - - - - //

// - - - - - HELPERS - - - - - //

// - - - - - LIBRARY - - - - - //
    import { useDispatch, useSelector } from "react-redux";
// - - - - - REDUX, ACTIONS & API CALLS - - - - - //

// - - - - - STYLES & COLORS - - - - - //
    import { borderWidth, flex, heightValue, margin, marginPosition, padding, paddingPoistion, radius, styles, widthValue } from "../../styles/Styles";
import { Image, PanResponder, Platform, Pressable, ScrollView, StatusBar, View } from "react-native";
import { ProfileImg, SwiperImg, tableImg1, tableImg2 } from "../../constants/links";
import Icon, { Icons } from "../../components/view/IconCompnent";
import { TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { DashboardSwiper } from "../../components/view/DashboardSwiper";
import { FlatList } from "react-native";
import { dashboardScrollData, DashboardSymbol } from "../../constants/dashboardSymbol";

export const DashboardScreen = ({navigation}) => {

    // - - - - - * * DECLARATIONS * * - - - - - //
    const dispatch = useDispatch()
    // Route Params

    // Selectors
    const { data } = useSelector(state => state.user)
    // Re-Selectors

    // States
    const [state, setState] = useState("")
    // - - - - - * * FUNCTIONS * *  - - - - - //

    // - - - - - * * API CALLS * *  - - - - - //

    // - - - - - * * USE EFFECT * *  - - - - - //
    useEffect(() => {

    },[])


    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterPress = (filterName) => {
      setActiveFilter(filterName)
    };

    return(
        <View style={[flex(1),styles.bgWhite]}>
            <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
            <View style={[flex(1),marginPosition(15,0,0,0),Platform.select({android:marginPosition(40,0,0,0)})]}>
                {/* header */}
                <View style={[paddingPoistion(20,25,20,25),styles.row,styles.centerHorizontal,styles.spaceBetween,borderWidth(0)]}>
                    <View style={[styles.allCenter,styles.row,{columnGap:10}]}>
                        <View>
                            <Image
                            source={ProfileImg}
                            style={[{height:50,width:50},radius(100)]}
                            />
                        </View>
                        <View style={[{rowGap:4}]}>
                            <TextComponent size={14} style={[styles.black_400,styles.fontWeight700]} title={'Good morning 👋'}/>
                            <TextComponent size={18} style={[styles.black_800,styles.fontWeight800]} title={'Andrew Ainsley'}/>
                        </View>

                    </View>

                    <View style={[styles.row,{columnGap:15}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Icon
                        type={Icons.FontAwesome6} 
                        name="bell"
                        size={22}
                        style={[styles.black_800]}
                        
                        />
                    </TouchableOpacity>

                    <Icon/>
                    <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
                        <Icon
                        type={Icons.FontAwesome6} 
                        name="heart"
                        size={22}
                        style={[styles.black_800]}

                        />
                        <Icon/>
                    </TouchableOpacity>

                    </View>
                </View>


                {/* searchbar */}
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style={[borderWidth(0),styles.row,styles.spaceBetween,styles.bgGray2,marginPosition(0,25,20,25),radius(10),paddingPoistion(3,45,3,25)]}>
                    <TouchableOpacity style={[styles.allCenter,styles.row]}>
                        <Icon
                        type={Icons.FontAwesome6}
                        name='magnifying-glass'
                        size={18}
                        style={[styles.black_400]}
                        />
                        <TextInputCompnent onPress={() => navigation.navigate('Search')} size={18} placeholder={'Search'} placeholderTextColor={'rgba(158,158,158,255)'} style={[styles.black,borderWidth(0),marginPosition(0,15,0,0),paddingPoistion(4,4,4,0)]}/>

                    </TouchableOpacity>
                    <Pressable onPress={() => navigation.navigate('Search')}>
                        <Icon
                        type={Icons.FontAwesome6}
                        name="list"
                        size={18}
                        style={[styles.black_400]}
                        />
                    </Pressable>

                </TouchableOpacity>


                <ScrollView showsVerticalScrollIndicator={false}>



                <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal,marginPosition(0,25,20,25)]}>
                    <TextComponent size={20} style={[styles.fontWeight700]} title={'Special Offers'}/>
                    <TextComponent size={15} onPress={() => navigation.navigate('SpecialOffers')} style={[styles.fontWeight700]} title={'See All'}/>
                </View>


                {/* swiper */}
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
                    <DashboardSwiper/>
                
                    {/* slide2 */}
                    <DashboardSwiper/>
                    
                    {/* slide3 */}
                    <DashboardSwiper/>
                    
                    {/* slide4 */}
                    <DashboardSwiper/>
                    
                    {/* slide5 */}
                    <DashboardSwiper/>
                    
                    </Swiper>
                </View>


                {/* icons */}

                <View style={[margin(0,13,0),styles.centerHorizontal,borderWidth(0)]}>
                    <FlatList
                    keyExtractor={(item,index) => index.toString()}
                    numColumns={4}
                    data={DashboardSymbol}
                    renderItem={({item}) => (
                    <View style={[marginPosition(10,18,14,18),styles.centerHorizontal,borderWidth(0)]}>
                        <View style={[styles.bgGray2,{height:heightValue(14),width:widthValue(6.5)},Platform.select({android:[{height:heightValue(14),width:widthValue(6.9)}]}),radius(100),styles.allCenter]}>
                        <Image
                        source={item.img}
                        style={[{height:heightValue(20),width:widthValue(14)},styles.bgGray2,padding(10)]}
                        resizeMode="contain"
                        />
                        </View>

                        <TextComponent style={[styles.fontWeight700,marginPosition(7,0,0,0)]} title={item.name}/>
                    </View>
                    )}

                    />
                </View>



                <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal,marginPosition(0,25,20,25)]}>
                    <TextComponent size={20} style={[styles.fontWeight700]} title={'Most Popular'}/>
                    <TextComponent size={15} onPress={() => navigation.navigate('Model')} style={[styles.fontWeight700]} title={'See All'}/>
                </View>


                <ScrollView style={[marginPosition(0,0,0,20)]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {dashboardScrollData.map((item,index)=>(
                    <TouchableOpacity key={index} onPress={() => handleFilterPress(item.name)} style={[styles.bgWhite,margin(0,0,5),borderWidth(2),padding(0,8,25),radius(100),activeFilter === item.name && styles.bgBlack]}>
                        <TextComponent style={[activeFilter === item.name && styles.white,styles.fontWeight700,borderWidth(0)]} title={item.name}/>
                    </TouchableOpacity>
                    ))}
                </ScrollView>


                {/* swiper */}
                <View style={[{height:heightValue(4.5)},borderWidth(0),marginPosition(25,25,0,25),styles.bgGray1,radius(30)]}>
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
                    <DashboardSwiper/>
                
                    {/* slide2 */}
                    <DashboardSwiper/>
                    
                    {/* slide3 */}
                    <DashboardSwiper/>
                    
                    {/* slide4 */}
                    <DashboardSwiper/>
                    
                    {/* slide5 */}
                    <DashboardSwiper/>
                    
                    </Swiper>
                </View>


                <View style={[{height:50}]}>

                </View>

                </ScrollView>

                    

            </View>
        </View>
    )
}