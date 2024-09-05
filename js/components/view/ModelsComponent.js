import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { borderWidth, flex, heightValue, margin, marginPosition, opacity, padding, radius, shadow, styles, widthValue } from '../../styles/Styles'
import { TextComponent } from './TextComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setRecentSearch, toggleFavorite } from '../../redux/userReducer/ModelsData'
import Icon, { Icons } from './IconCompnent'

export const ModelsComponent = ({data,onPress,navigation})=> {


    const dispatch = useDispatch()

    
    const handleFavorite = (Product_Id) =>{
        dispatch(toggleFavorite({Product_Id}))
    }

    const handleProduct = (product) => {
        onPress(product);
    }



  return (
    <ScrollView style={[borderWidth(0)]} showsVerticalScrollIndicator={false}>
        <View style={[marginPosition(5,0,0,7),borderWidth(0)]}>
            <FlatList
            keyExtractor={(item,index) => index.toString()}
            numColumns={2}
            data={data}
            renderItem={({item,index})=>(
                <View style={[borderWidth(0)]}>
                    <TouchableOpacity onPress={() => handleProduct(item)
                    } style={[borderWidth(0),margin(0,10,10)]}>
                        <View style={[styles.positionRelative,borderWidth(0),radius(20),styles.bgGray2,styles.allCenter,padding(0,20,0),Platform.select({android:padding(0,25,0)})]}>
                            <Image 
                            source={item.Img}
                            style={[{height:heightValue(6.8),width:widthValue(2.3)},borderWidth(0),styles.borderBlack]}
                            resizeMode='contain'
                            />
                            <TouchableOpacity onPress={() => handleFavorite(item.Product_Id)} style={[borderWidth(0),styles.positionAbsolute,{top:10,right:10,height:heightValue(29),width:widthValue(14)},radius(100),styles.allCenter,styles.bgBlack,shadow(1)]}>
                                {item.favorite? <Icon size={14} style={[opacity(0.9),styles.white]} type={Icons.AntDesign} name={'heart'}/> : <Icon size={14} style={[,styles.white]} type={Icons.AntDesign} name={'hearto'}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={[borderWidth(0),marginPosition(5,0,0,0)]}>
                            <TextComponent size={17} style={[styles.fontWeight700]} title={item.name}/>
                            <View style={[borderWidth(0),styles.row,{columnGap:7},styles.centerHorizontal,padding(0,5,0)]}>
                                <Image 
                                source={item.starImg}
                                style={[{height:heightValue(40),width:widthValue(25)},borderWidth(0),styles.borderBlack]}
                                resizeMode='contain'
                                />
                                <TextComponent size={13} style={[styles.black_500,styles.fontWeight700]} title={item.Rating}/>
                                <View style={[{height:'55%',width:1.5},styles.bgBlack_200]}></View>
                                <View style={[styles.bgBlack_100,radius(5)]}>
                                    <TextComponent style={[padding(0,4,10)]} size={11} title={item.Condition}/>
                                </View>
                            </View>
                            <TextComponent style={[styles.fontWeight700]} title={item.Rate}/>
                        </View>

                    </TouchableOpacity>
                    
                </View>

            )}
            />
        </View>
        <View style={[{height:200}]}>

        </View>
    </ScrollView>
  )
}













// import { Pressable, StatusBar, StyleSheet, Text, View,TouchableOpacity, Platform, FlatList, ScrollView, TextInput } from "react-native";
// import React, { useState } from "react";
// import { borderWidth, flex, fontSize, margin, marginPosition, opacity, padding, paddingPoistion, radius, styles } from "../../styles/Styles";
// import Icon, { Icons } from "../../components/view/IconCompnent";
// import { ModelsComponent, TextComponent, TextInputCompnent } from "../../components";
// import { useDispatch, useSelector } from "react-redux";
// import { setRecentSearch } from "../../redux/userReducer/ModelsData";

// export const Search = ({navigation}) => {
//     const dispatch = useDispatch()
    
//     const furnitureModels = useSelector((state) =>state.user.modelsData.modelsData)
//     console.log("dhahsdahsd",furnitureModels)


//     const recentSearch = useSelector((state) =>state.user.modelsData.recentSearch)
//     console.log("dhahsdahsd",recentSearch)

//     const handleSearch = (model) =>{
        // dispatch(setRecentSearch([...recentSearch,model.name]))

        // navigation.navigate('ProductView',{product:model})

//     }




    // const clearRecentSearch = (search) => {
    //     const updatedSearch = recentSearch.filter((item) => item !== search)
    //     dispatch(setRecentSearch(up));
        
    // };

    // const clearAllRecentSearches = () => {
    //     dispatch(setRecentSearch([]));
    // };

    



    

//   return (
//     <View style={[styles.bgWhite,flex(1),paddingPoistion(30,0,0,0)]}>
//         <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
//         {/* searchbar */}
//         <View style={[styles.row,styles.spaceBetween,styles.bgGray2,marginPosition(0,20,20,20),Platform.select({android:[marginPosition(30,20,20,20)]}),radius(10),paddingPoistion(3,45,3,25)]}>
//             <View style={[styles.allCenter,styles.row]}>
//                 <Icon
//                 type={Icons.FontAwesome6}
//                 name='magnifying-glass'
//                 size={18}
//                 style={[opacity(0.2)]}
//                 />
//                 <TextInputCompnent size={13} placeholder={'Search'} placeholderTextColor={'rgba(158,158,158,255)'} style={[styles.black,borderWidth(0),marginPosition(0,15,0,0),paddingPoistion(4,4,4,0)]}/>

//             </View>
//             <TouchableOpacity>
//                 <Icon
//                 type={Icons.FontAwesome6}
//                 name="list"
//                 size={18}
//                 style={[opacity(0.9)]}
//                 />
//             </TouchableOpacity>
//         </View>

        
    
        
//         {recentSearch.length>0 && 

//         <View style={[padding(0,0,20)]}>
//             <ScrollView>

//             <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal]}>
//                 <TextComponent size={16} style={[styles.fontWeight600]} title={'Recent'}/>
//                 <TouchableOpacity onPress={clearAllRecentSearches}>
//                     <TextComponent size={16} style={[styles.fontWeight600]} title={'Clear All'}/>
//                 </TouchableOpacity>
//             </View>
//             <View style={[flex(1),marginPosition(20,0,10,0),borderWidth(0.4),styles.border_black_100]}></View>
//             </ScrollView>

//           <ScrollView showsVerticalScrollIndicator={false}>
//             <FlatList
//                 data={recentSearch}
//                 keyExtractor={(item) => item}
//                 renderItem={({ item }) => (
//                 <View style={[styles.row,styles.centerHorizontal,styles.spaceBetween,borderWidth(0)]}>
//                     <TextComponent style={[margin(0,13,0),opacity(0.5),styles.fontWeight600]} title={item}/>
//                     <TouchableOpacity style={[borderWidth(1),radius(7),opacity(0.7)]} onPress={() => clearRecentSearch(item)}>
//                     <Icon style={[padding(3)]} type={Icons.AntDesign} name="close" size={10} />
//                     </TouchableOpacity>
//                 </View>
//                 )}
//             />

//           </ScrollView>
          
//         </View>}


//         <View>
//             <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal,margin(0,5,20)]}>
//                 {/* <TextComponent size={16} style={[styles.fontWeight600]} title={'Result for '}/> */}
//                 <Text style={[fontSize(16),styles.fontWeight600]}>Result for ""</Text>
//                 <TextComponent size={16} style={[styles.fontWeight600]} title={furnitureModels.length + ' founds'}/>
//             </View>
//             <ModelsComponent navigation={navigation} data={furnitureModels} onPress={handleSearch}/>

//         </View>

      

//     </View>
//   );
// }

