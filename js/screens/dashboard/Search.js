// import { Pressable, StatusBar, StyleSheet, Text, View,TouchableOpacity, Platform, FlatList, ScrollView, TextInput } from "react-native";
// import React, { useState } from "react";
// import { borderWidth, flex, fontSize, margin, marginPosition, opacity, padding, paddingPoistion, radius, styles } from "../../styles/Styles";
// import Icon, { Icons } from "../../components/view/IconCompnent";
// import { ModelsComponent, TextComponent, TextInputCompnent } from "../../components";
// import { useDispatch, useSelector } from "react-redux";

// export const Search = ({navigation}) => {
//     const furnitureModels = useSelector((state) =>state.user.modelsData.modelsData)
//     console.log("dhahsdahsd",furnitureModels)


//     const recentSearch = useSelector((state) =>state.user.modelsData.recentSearch)
//     console.log("dhahsdahsd",recentSearch)
    

//     const [searchTerm, setSearchTerm] = useState("");

//     const searchResults = searchTerm
//     ? furnitureModels.filter((model) =>
//         model.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     : [];

//     const handleSearch = (text) => {
//         setSearchTerm(text)
//     }

    

//     // const clearRecentSearch = (search) => {
//     //     setRecentSearches((prevSearches) =>
//     //     prevSearches.filter((item) => item !== search)
//     //     );
//     // };

//     // const clearAllRecentSearches = () => {
//     //     setRecentSearches([]);
//     // };


    



    

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
//                 <TextInputCompnent size={13} placeholder={'Search'} onChangeText={handleSearch} value={searchTerm} placeholderTextColor={'rgba(158,158,158,255)'} style={[styles.black,borderWidth(0),marginPosition(0,15,0,0),paddingPoistion(4,4,4,0)]}/>

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

//         {searchTerm && 
        
//         <View>
//             <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal,margin(0,5,20)]}>
//                 {/* <TextComponent size={16} style={[styles.fontWeight600]} title={'Result for '}/> */}
//                 <Text style={[fontSize(16),styles.fontWeight600]}>Result for "{searchTerm}"</Text>
//                 <TextComponent size={16} style={[styles.fontWeight600]} title={furnitureModels.length + ' founds'}/>
//             </View>
//             <ModelsComponent navigation={navigation} data={searchResults}/>

//         </View>}
        
//         {recentSearch===0 &&

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

      

//     </View>
//   );
// }











import { Pressable, StatusBar, StyleSheet, Text, View,TouchableOpacity, Platform, FlatList, ScrollView, TextInput, Image, Modal } from "react-native";
import React, { useState } from "react";
import { borderWidth, flex, fontSize, heightValue, margin, marginPosition, opacity, padding, paddingPoistion, radius, styles, widthValue } from "../../styles/Styles";
import Icon, { Icons } from "../../components/view/IconCompnent";
import { ButtonComponent, DashboardFilterButton, ModelsComponent, TextComponent, TextInputCompnent } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setRecentSearch } from "../../redux/userReducer/ModelsData";
import { notFoundImg } from "../../constants/links";
import { dashboardScrollData, ratingData, sortByData } from "../../constants/dashboardSymbol";
import { Colors } from "../../styles/Colors";
import Slider from "@react-native-community/slider";

export const Search = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);


    const dispatch = useDispatch();
    const furnitureModels = useSelector((state) =>state.user.modelsData.modelsData)
    console.log("dhahsdahsd",furnitureModels)


    const recentSearch = useSelector((state) =>state.user.modelsData.recentSearch)
    console.log("dhahsdahsd",recentSearch)
    

    const [searchTerm, setSearchTerm] = useState("");

    const searchResults = searchTerm
    ? furnitureModels.filter((model) =>
        model.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

    const handleSearch =(model) =>{
        setSearchTerm(model)
    }

    const handletouch = (model) => {
        
        dispatch(setRecentSearch([...recentSearch,model.name]))

        navigation.navigate('ProductView',{Product_Id:model.Product_Id})

    }

    

    const clearRecentSearch = (search) => {
        const updatedSearch = recentSearch.filter((item) => item !== search)
        dispatch(setRecentSearch(updatedSearch));
        
    };

    const clearAllRecentSearches = () => {
        dispatch(setRecentSearch([]));
    };

    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterPress = (filterName) => {
      setActiveFilter(filterName)
    };


    const filterModels = activeFilter === 'All' ? furnitureModels : furnitureModels.filter(item => item.Brand_Name === activeFilter)

    console.log("jfhdjfhejfhej",filterModels);


    const [activeSortBy,setActiveSortBy ] = useState('Most Recent')

    const handleSort = (filterName) => {
        setActiveSortBy(filterName)
    };


    const [activeRating,setActiveRating ] = useState('All')

    const handleRating = (filterName) => {
        setActiveRating(filterName)
    };






    



    

  return (
    <View style={[styles.bgWhite,flex(1),paddingPoistion(30,0,0,0)]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        {/* searchbar */}
        <View style={[styles.row,styles.spaceBetween,styles.bgGray2,marginPosition(0,20,20,20),Platform.select({android:[marginPosition(30,20,20,20)]}),radius(10),paddingPoistion(3,45,3,25)]}>
            <View style={[styles.allCenter,styles.row]}>
                <Icon
                type={Icons.FontAwesome6}
                name='magnifying-glass'
                size={18}
                style={[opacity(0.2)]}
                />
                <TextInputCompnent size={15} placeholder={'Search'} onChangeText={handleSearch} value={searchTerm} placeholderTextColor={'rgba(158,158,158,255)'} style={[,styles.black,borderWidth(0),marginPosition(0,15,0,0),paddingPoistion(4,4,4,0)]}/>

            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon
                type={Icons.FontAwesome6}
                name="list"
                size={18}
                style={[opacity(0.9)]}
                />
            </TouchableOpacity>
        </View>

        {searchTerm && 
        
        <View style={[flex(1)]}>
            <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal,margin(0,5,20)]}>
                <Text style={[fontSize(16),Platform.select({android:[{fontSize:16,fontWeight:700},styles.black]}),]}>Result for "{searchTerm}"</Text>
                <TextComponent size={16} style={[Platform.select({android:[styles.fontWeightBold,fontSize(17)]}),styles.fontWeight600]} title={searchResults.length + ' founds'}/>
            </View>
            {searchResults.length>0?
            (
                <ModelsComponent navigation={navigation} data={searchResults} onPress={handletouch}/>
            ):(
                <View style={[borderWidth(0),{rowGap:12},paddingPoistion(40,0,0,0),marginPosition(0,40,0,40),flex(1),styles.centerHorizontal]}>
                    <View style={[borderWidth(0),marginPosition(40,0,0,0)]}>
                        <Image source={notFoundImg} style={[marginPosition(20,0,0,0),{height:200,width:200}]} />
                    </View>
                    <TextComponent size={20} title={'Not found'} style={[styles.fontWeight700]}/>
                    <TextComponent size={16} style={[styles.textCenter,styles.fontWeight500,opacity(0.7)]} title={'Sorry, the keword you entered cannot be found please check again or search with another keyword'}/>
                </View>
            )
            }
            

        </View> }



        {recentSearch.length>0 && !searchTerm &&

        <View style={[padding(0,0,20)]}>
            <ScrollView>

            <View style={[styles.row,styles.spaceBetween,styles.centerHorizontal]}>
                <TextComponent size={16} style={[Platform.select({android:[fontSize(18),styles.fontWeight700]}),styles.fontWeight600]} title={'Recent'}/>
                <TouchableOpacity onPress={clearAllRecentSearches}>
                    <TextComponent size={16} style={[Platform.select({android:[fontSize(17)]}),styles.fontWeight600]} title={'Clear All'}/>
                </TouchableOpacity>
            </View>
            <View style={[flex(1),marginPosition(20,0,10,0),borderWidth(0.4),styles.border_black_100]}></View>
            </ScrollView>

          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
                data={recentSearch}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                <View style={[styles.row,styles.centerHorizontal,styles.spaceBetween,borderWidth(0)]}>
                    <TextComponent size={16} style={[Platform.select({android:[fontSize(18)]}),margin(0,13,0),opacity(0.5),styles.fontWeight500]} title={item}/>
                    <TouchableOpacity style={[borderWidth(2),styles.border_black_300,radius(9)]} onPress={() => clearRecentSearch(item)}>
                    <Icon style={[padding(3)]} type={Icons.AntDesign} name="close" size={11} />
                    </TouchableOpacity>
                </View>
                )}
            />

          </ScrollView>
          
        </View>}


        {/* modal */}
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        >

            <View style={[flex(1),styles.bgBlack_500]}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={[flex(1),borderWidth(0),styles.borderBlue]}>

                </TouchableOpacity>

                <View style={[,borderWidth(0),styles.borderGreen,styles.verticalEnd]}>

                    <View style={[margin(0),styles.bgWhite,borderWidth(0),paddingPoistion(10,20,20,20),radius(0,30,0,0,30)]}>
                        <View style={[,styles.border_black_100,borderWidth(0.4),styles.bgBlack,opacity(0.2),styles.selfCenter,radius(10),{height:2,width:40}]}></View>

                        <View style={[styles.selfCenter,margin(0,20,0)]}>
                            <TextComponent size={20} style={[styles.fontWeight700,opacity(0.8)]} title={'Sort & Filter'}/>
                        </View>

                        <View style={[flex(1),marginPosition(0,0,20,0),borderWidth(0.4),styles.border_black_100]}></View>

                        <TextComponent size={16} style={[marginPosition(0,0,10,0),styles.fontWeight600]} title={'Categories'}/>

                        

                        <ScrollView style={[borderWidth(0),marginPosition(0,0,0,-5)]} horizontal={true} alwaysBounceVertical={false} showsHorizontalScrollIndicator={false}>
                            <FlatList
                            horizontal
                            data={dashboardScrollData}
                            renderItem={({item}) => (
                                <DashboardFilterButton onPress={() => handleFilterPress(item.name)} style={[activeFilter === item.name && styles.bgBlack]} textTitle={item.name} textStyle={[activeFilter === item.name && styles.white]}/>
                            )}
                            />
                        </ScrollView>

                        <TextComponent size={16} style={[marginPosition(20,0,20,0),styles.fontWeight600]} title={'Price Range'}/>

                        <Slider 
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        />


                    
                        <TextComponent size={16} style={[marginPosition(20,0,10,0),styles.fontWeight600]} title={'Sort by'}/>

                        {/* <ScrollView style={[marginPosition(0,0,0,-5)]} horizontal={true} showsHorizontalScrollIndicator={false}>
                           {sortByData.map((item,index)=>(
                                <TouchableOpacity key={index} onPress={() => handleSort(item.name)} style={[styles.bgWhite,margin(0,0,5),borderWidth(2),padding(0,6,20),radius(100),activeSortBy === item.name && styles.bgBlack]}>
                                    <TextComponent style={[activeSortBy === item.name && styles.white,styles.fontWeight700,borderWidth(0)]} title={item.name}/>
                                </TouchableOpacity>
                            ))}
                        </ScrollView> */}

                        <ScrollView style={[borderWidth(0),marginPosition(0,0,0,-5)]} horizontal={true} alwaysBounceVertical={false} showsHorizontalScrollIndicator={false}>
                            <FlatList
                            horizontal
                            data={sortByData}
                            renderItem={({item}) => (
                                <DashboardFilterButton onPress={() => handleSort(item.name)} style={[activeSortBy === item.name && styles.bgBlack]} textTitle={item.name} textStyle={[activeSortBy === item.name && styles.white]}/>
                            )}
                            />
                        </ScrollView>


                        <TextComponent size={16} style={[marginPosition(20,0,20,0),styles.fontWeight600]} title={'Rating'}/>

                        <ScrollView style={[marginPosition(0,0,0,-5)]} horizontal={true} showsHorizontalScrollIndicator={false}>
                           {ratingData.map((item,index)=>(
                                <TouchableOpacity key={index} onPress={() => handleRating(item.name)} style={[styles.row,styles.centerHorizontal,{columnGap:10},styles.bgWhite,margin(0,0,5),borderWidth(2),padding(0,7,20),radius(100),activeRating === item.name && styles.bgBlack]}>
                                    <Icon size={13} style={[activeRating === item.name && styles.white]} type={Icons.FontAwesome} name={'star'}/>
                                    <TextComponent style={[activeRating === item.name && styles.white,styles.fontWeight700,borderWidth(0)]} title={item.name}/>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>


                        <View style={[flex(1),marginPosition(20,0,20,0),borderWidth(0.4),styles.border_black_100]}></View>


                        <View style={[styles.row,styles.selfCenter,marginPosition(0,0,10,0)]}>
                            {/* <ButtonComponent onPress={nextPage} title={"Continue"}/> */}
                            <ButtonComponent color={Colors.black} size={16} fontWeight={600} style={[flex(1),radius(50),marginPosition(0,0,10,0),styles.bgGray1,styles.black]} title={"Reset"}/>


                            <ButtonComponent onPress={() => setModalVisible(false)} color={Colors.white} size={16} fontWeight={600}style={[flex(1),radius(50),marginPosition(0,0,10,20),padding(0,15,20),styles.bgBlack1]} title={"Apply"}/>
                            

                         </View>


                    </View>

                </View>

            </View>

        </Modal>



    </View>
  );
}