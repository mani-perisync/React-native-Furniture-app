import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonComponent, ColorComponent, DashboardHeaderComponent, ProductImgSwiper, ScreenViewComponent, TextComponent } from "../../components";
import { borderWidth, flex, fontSize, heightValue, margin, marginPosition, opacity, padding, paddingPoistion, radius, shadow, styles, widthValue } from "../../styles/Styles";
import Swiper from "react-native-swiper";
import Icon, { Icons } from "../../components/view/IconCompnent";
import { toggleFavorite } from "../../redux/userReducer/ModelsData";
import { ColorData } from "../../constants/ColorData";

export const ProductView = ({route,navigation}) => {
    const dispatch = useDispatch()
    const {product_id} = route.params 
    console.log('product_iidddd',product_id);
    
    // const product = useSelector(state => state.user.modelsData.modelsData.find(item => item.Product_Id ===product_id))
    // console.log("productttttt",product);

    const furnitureModels = useSelector((state) =>state.user.modelsData.modelsData)
    console.log("dhahsdahsd",furnitureModels)

    const product = furnitureModels.find((item) => item.Product_Id === product_id)

    console.log("productviejhjhjhjh",product)
    


    const handleFavorite = (Product_Id) =>{
        dispatch(toggleFavorite({Product_Id}))
    }

    const [selectColor, setSelectColor] = useState(0);

    const handleSelect = (click) => {
        setSelectColor(click)
    };
  return (
    <View style={[flex(1)]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'}/>
        
        <View style={[flex(1),styles.bgGray1,borderWidth(0),styles.positionRelative]}>
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
                bottom:10,
            }}
            // loop
            >
                {/* slide1 */}
                <ProductImgSwiper source={product.Img}/>
            
                {/* slide2 */}
                <ProductImgSwiper source={product.Img}/>
                
                {/* slide3 */}
                <ProductImgSwiper source={product.Img}/>
                
                {/* slide4 */}
                <ProductImgSwiper source={product.Img}/>
                
                {/* slide5 */}
                <ProductImgSwiper source={product.Img}/>
                        
            </Swiper>
            
            <View style={[marginPosition(0,0,0,0),styles.positionAbsolute,,Platform.select({android:marginPosition(40,0,0,0)})]}>
                <DashboardHeaderComponent/>             
            </View>
        </View>
        <View style={[flex(1),padding(0,0,20)]}>
            <View>
                <View style={[paddingPoistion(20,0,10,0),styles.row,styles.centerHorizontal,styles.spaceBetween]}>
                    <TextComponent size={25} style={[styles.fontWeight600,Platform.select({android:[styles.fontWeight700,fontSize(28)]})]} title={product.name}/>
                    <TouchableOpacity onPress={() => handleFavorite(product.Product_Id)}>
                        {product.favorite? <Icon size={20} type={Icons.AntDesign} name={'heart'}/> : <Icon size={20} type={Icons.AntDesign} name={'hearto'}/>}
                    </TouchableOpacity>

                </View>
                <View style={[paddingPoistion(0,0,15,0),styles.row,styles.centerHorizontal,{columnGap:10}]}> 
                    <View style={[styles.bgBlack_100,radius(5)]}>
                        <TextComponent style={[padding(0,4,10),Platform.select({android:[fontSize(13),styles.fontWeight700,opacity(0.6)]})]} size={12} title={product.Condition}/>
                    </View>
                    <Image 
                    source={product.starImg}
                    style={[{height:heightValue(40),width:widthValue(25)},borderWidth(0),styles.borderBlack]}
                    resizeMode='contain'
                    />
                    <TextComponent style={[Platform.select({android:[fontSize(13),styles.fontWeight700,opacity(0.6)]})]} size={12} title={product.Rating + ' (6.573 reviews)'}/>


                </View>

                <View style={[flex(1),marginPosition(0,0,15,0),borderWidth(0.4),styles.border_black_100]}></View>
                
                <View style={[{rowGap:8}]}>
                    <TextComponent size={15} style={[styles.fontWeight600,Platform.select({android:[fontSize(17),styles.fontWeight700]})]} title={'Description'}/>
                    <TextComponent size={12} style={[opacity(0.5),styles.fontWeight600,Platform.select({android:[fontSize(14),styles.fontWeight700]})]} title={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'}/>


                </View>
                <TextComponent size={15} style={[paddingPoistion(14,0,13,0),styles.fontWeight600,Platform.select({android:[fontSize(17),styles.fontWeight700]})]} title={'Color'}/>

                <View style={[borderWidth(0),marginPosition(0,0,0,-5)]}>
                
                    <FlatList
                    horizontal
                    data={ColorData}
                    key={ColorData.id}
                    renderItem={({item,index}) => (
                        <TouchableOpacity onPress={() => handleSelect(item.id)} style={[styles.borderWhite,borderWidth(0),margin(0,0,4)]}>
                            <View style={[item.name,borderWidth(0),{height:heightValue(24),width:widthValue(11)},Platform.select({android:[{height:heightValue(21),width:widthValue(10)}]}),radius(100),opacity(0.9),styles.allCenter]}>
                                {selectColor === item.id && <Icon size={17} type={Icons.FontAwesome6} name={'check'} style={[styles.white]}/>}
                                
                            </View>
                        </TouchableOpacity>
                    )}

                    />
                </View>

                <View style={[styles.row,styles.centerHorizontal,{columnGap:15},padding(0,15,0)]}>
                    <TextComponent size={15} style={[styles.fontWeight600,Platform.select({android:[fontSize(17),styles.fontWeight700]})]} title={'Quantity'}/>
                    <View style={[styles.row,styles.centerHorizontal,{columnGap:18},borderWidth(0),padding(0,8,18),Platform.select({android:padding(0,10,25)}),styles.bgGray2,radius(100),shadow(1)]}>
                        <TouchableOpacity>
                            <Icon size={14} style={[Platform.select({android:[fontSize(20)]})]} type={Icons.FontAwesome6} name={'minus'}/>

                        </TouchableOpacity>
                        <TextComponent size={15} style={[styles.fontWeight600,Platform.select({android:[fontSize(17),styles.fontWeight700]})]} title={'2'}/>
                        <TouchableOpacity>
                            <Icon style={[Platform.select({android:[fontSize(20)]})]} size={14} type={Icons.FontAwesome6} name={'plus'}/>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={[flex(1),marginPosition(0,0,15,0),Platform.select({android:[marginPosition(3,0,18,0)]}),borderWidth(0.4),styles.border_black_100]}></View>

                <View style={[styles.row,styles.centerHorizontal,{columnGap:30},marginPosition(0,0,0,0)]}>
                    <View style={[{rowGap:5},Platform.select({android:[{rowGap:1}]})]}>
                        <TextComponent size={12} style={[opacity(0.5),styles.fontWeight600,Platform.select({android:[fontSize(14),styles.fontWeight700]})]} title={'Total price'}/>
                        <TextComponent size={18} style={[styles.fontWeight600,Platform.select({android:[fontSize(22),styles.fontWeight700]})]} title={product.Rate}/>
                    </View>

                    <TouchableOpacity style={[flex(1),styles.bgBlack,padding(0, 15, 20),styles.row,{columnGap:15},styles.allCenter,radius(100)]}>
                        <Icon size={16} style={[styles.white]} type={Icons.FontAwesome} name={'lock'}/>
                        <TextComponent size={16} style={[styles.white,styles.fontWeight600,Platform.select({android:[styles.fontWeight700]})]} title={'Add to Cart'}/>
                    </TouchableOpacity>
        

                </View>


            </View>
            
        </View>
    </View>


  );
}

