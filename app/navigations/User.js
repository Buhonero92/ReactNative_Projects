import React from 'react';
import { 
    createStackNavigator, createAppContainer, createBottomTabNavigator
} from 'react-navigation';

//Screens
import HomeScreen from '../screens/Home';
import LoanRequestScreen from '../screens/LoanRequest';
import MyAccountScreen from '../screens/MyAccount';

const homeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen, 
        navigationOptions: ({navigation}) => ({
            title: "Home"
        })
    }
});
const loanRequestScreenStack = createStackNavigator({
    loanReq: {
        screen: LoanRequestScreen,
        navigationOptions: ({navigation}) => ({
            title: "Solicitud de préstamos"
        })
    }
});
const myAccountScreenStack = createStackNavigator({
    myAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({navigation}) => ({
            title: "Mi cuenta"
        })
    }
});
const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack
    }
});

export default createAppContainer(RootStack);