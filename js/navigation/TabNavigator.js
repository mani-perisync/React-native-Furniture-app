import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { DashboardScreen } from '../screens/dashboard/Dashboard'
import { Colors } from '../styles/Colors'
import Feather from 'react-native-vector-icons/Feather'
import Ant from 'react-native-vector-icons/AntDesign'
import { margin, padding, styles } from '../styles/Styles'
import Icon, { Icons } from '../components/view/IconCompnent'
import { Cart } from '../screens/bottomtabs/Cart'
import { Orders } from '../screens/bottomtabs/Orders'
import { Wallet } from '../screens/bottomtabs/Wallet'
import { Profile } from '../screens/bottomtabs/Profile'



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:Colors.black,
            tabBarInactiveTintColor:Colors.gray2,
            tabBarStyle:{
                backgroundColor:Colors.white,
                paddingVertical:5,
                paddingHorizontal:10,
            },
            tabBarLabelStyle:{
                fontWeight:'700',
                fontSize:10,
                letterSpacing:2
            }
        }}
        >
            <Tab.Screen name={'Home'} component={DashboardScreen}
            options={{
                tabBarIcon:({color,size}) => (
                    <Icon type={Icons.FontAwesome6} name='house' color={color} size={20}/>
                )
            }}
            />
            <Tab.Screen name={'Cart'} component={Cart}
            options={{
                tabBarIcon:({color,size}) => (
                    <Icon type={Icons.Ionicons} name='bag-handle-outline' color={color} size={20}/>
                )
            }}
            />
            <Tab.Screen name={'Orders'} component={Orders}
            options={{
                tabBarIcon:({color,size}) => (
                    <Feather name='shopping-cart' color={color} size={20}/>
                )
            }}
            />
            <Tab.Screen name={'Wallet'} component={Wallet}
            options={{
                tabBarIcon:({color,size}) => (
                    <Ant name='wallet' color={color} size={20}/>
                )
            }}
            />
            <Tab.Screen name={'Profile'} component={Profile}
            options={{
                tabBarIcon:({color,size}) => (
                    <Feather name='user' color={color} size={20}/>
                )
            }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;

