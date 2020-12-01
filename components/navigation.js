import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "../appnavigator/home"
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import PhotoList from '../components/PhotoList'; 
import Profile from "./profile"

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function AddMediaScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AddMedia!</Text>
      </View>
    );
  }
  function LikesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Likes!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? <Entypo name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="black" />;
              return iconName;
            } else if (route.name === 'Search') {
              iconName = focused ? <Feather name="search" size={24} color="black" /> : <EvilIcons name="search" size={32} color="black" />;
              return iconName;
            } else if (route.name === 'AddMedia') {
              iconName = focused ?<Ionicons name="ios-add-circle" size={24} color="black" /> : <Ionicons name="ios-add-circle-outline" size={24} color="black" />;
              return iconName;
            } else if (route.name === 'Likes') {
              iconName = focused ? <AntDesign name="heart" size={24} color="black" /> : <AntDesign name="hearto" size={24} color="black" />;
              return iconName;
            } else if (route.name === 'Profile') {
              iconName = focused ?<MaterialIcons name="person" size={24} color="black" /> : <MaterialIcons name="person-outline" size={24} color="black" />;
              return iconName;
            }
          },
          tabBarLabel:""
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style:{
              paddingVertical:15

          }
        }}
      >
        <Tab.Screen name="Home" component={PhotoList} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="AddMedia" component={AddMediaScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}