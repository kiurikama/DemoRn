import React, { Component } from 'react';
import {
  Platform,TouchableOpacity,
  StyleSheet,TextInput,
  Text,
  View
} from 'react-native';
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register"
import NewFeed from "./NewFeed"

import { createStackNavigator } from "react-navigation";
const HomeRoute = createStackNavigator ({
    SplashScreen: {screen: Splash},
    LoginScreen: {screen: Login},
    RegisterScreen: {screen: Register},
    NewFeedScreen: {screen: NewFeed}
},
{
    initialRouteName: "SplashScreen"
}
)



export default class App extends Component {
  render() {
    return (
        <HomeRoute />
    );
  }
}
