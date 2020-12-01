import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation";
// import {TabNavigator} from "react-navigation"
import Home from "../appnavigator/home"
import Likes from "../appnavigator/likes"
import Profile from "../appnavigator/profile"
import Search from "../appnavigator/search"
import AddMedia from "../appnavigator/addmedia"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const screens={
//   Home:{
//       screen:Home,
//       navigationOptions:{
//           title:'Instagram',
//           headerStyle:{backgroundColor:'#333'}
//       }
//   }
// }

const AppNavigator=createBottomTabNavigator({
    HomeTab:{
        screen:Home
    },
    SearchTab:{
        screen:Search
    },
    AddMediaTab:{
        screen:AddMedia
    },
    LikesTab:{
        screen:Likes
    },
    ProfileTab:{
        screen:Profile
    }
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
