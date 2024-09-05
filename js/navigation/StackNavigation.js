import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Non Auth Screens
import { LoginScreen } from '../screens/auth/login/Login';
// Auth Screens
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import { Notification } from '../screens/dashboard/Notification';
import { Wishlist } from '../screens/dashboard/Wishlist';
import { SpecialOffers } from '../screens/dashboard/SpecialOffers';
import { Model } from '../screens/dashboard/Model';
import { Search } from '../screens/dashboard/Search';
import { ProductView } from '../screens/dashboard/ProductView';

const Stack = createNativeStackNavigator();

export const StackNavigation = ()=> {
    const { at } = useSelector(state => state.auth.user)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {at !== "" ?
                // Non Auth
                <Stack.Group>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Group> :
                // Auth
                <Stack.Group>
                    <Stack.Screen name="TabNavigator" component={TabNavigator} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="Wishlist" component={Wishlist} />
                    <Stack.Screen name="SpecialOffers" component={SpecialOffers} />
                    <Stack.Screen name="Model" component={Model} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="ProductView" component={ProductView} />

                </Stack.Group>
            }
        </Stack.Navigator>
    );
}