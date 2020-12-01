import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, Button,TouchableOpacity} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function Profile() {
  const [activeindex,setActiveIndex]=useState(0)


  const segmentclicked=(index)=>{
    setActiveIndex(index)
  }

  const renderElement=()=>{
    if(activeindex===0){
      return(
          <Text style={{fontSize:24}}>Profile</Text>
      )
    }
    else{
      return(
          <Text  style={{fontSize:24}}>Photos</Text>
      )
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={{flex:1}}>
        <Image source={require("../assets/tree.png")} style={{width:100,height:100,borderRadius:50,padding:10}}></Image>
        </View>
        <View style={{flex:3}}>
          <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <View style={{alignItems:"center"}}>
              <Text style={styles.info}>80</Text>
              <Text>Posts</Text>
            </View>

            <View style={{alignItems:"center"}}>
              <Text style={styles.info}>90</Text>
              <Text>Following</Text>
            </View>
            <View style={{alignItems:"center"}}>
              <Text style={styles.info}>85</Text>
              <Text>Followers</Text>
            </View>

          </View>
      </View>
      </View>
      <View style={{paddingHorizontal:20}}>
        <Text style={{fontSize:15,fontWeight:"bold"}}>Divyank</Text>
        <Text style={{fontSize:15,fontWeight:"bold"}}>Instaclone</Text>
      </View>
      <View style={{paddingHorizontal:20,paddingVertical:20}}>
        <Button title="EDIT PROFILE"></Button>
      </View> 
      <View style={{flexDirection:"row",justifyContent:"space-around",borderTopWidth:1,borderTopColor:"#ddd",borderBottomColor:"#ddd",borderBottomWidth:1,paddingVertical:10}}>
         <TouchableOpacity onPress={()=>segmentclicked(0)}>
          <Ionicons name="md-apps" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>segmentclicked(1)}>
          <FontAwesome name="user-circle-o" size={32} color="black"/>
        </TouchableOpacity>

      </View>
      <View style={{alignSelf:"center"}}>
        {renderElement()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection:"row",
    alignItems: 'center',

    height:"10%",
    backgroundColor:'#f1f2f6',
    paddingVertical:70,
    paddingHorizontal:20
  },
  info:{
    fontWeight:"bold",
    fontSize:20,
    fontFamily:""
  }

});
