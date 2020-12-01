// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {createStackNavigator} from "react-navigation-stack"
// import {createAppContainer} from "react-navigation";
// import Home from "./screens/home";
// import { AntDesign } from '@expo/vector-icons'; 
// import { Feather } from '@expo/vector-icons'; 

// const screens={
//   Home:{
//       screen:Home,
//       navigationOptions:{
//           title:'Instagram',
//           headerStyle:{backgroundColor:'#eee'},
//           headerTitleAlign:"center",
//           headerLeft:()=><AntDesign name="camerao" size={24} color="black" style={{padding:10}}/>,
//           headerRight:()=><Feather name="send" size={24} color="black"  style={{padding:10}}/>
//       }
//   }
// }

// const HomeStack=createAppContainer(createStackNavigator(screens,{
//   defaultNavigationOptions:{
//       headerTintColor:'#444',
//       headerStyle:{backgroundColor:'red',height:100}
//   }
// }))

// export default function App() {
//   return (
//     <HomeStack/>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoList from './components/PhotoList';
import Heading from './components/Heading'
import Navigation from "./components/navigation";


// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Heading/>
       <Navigation/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
