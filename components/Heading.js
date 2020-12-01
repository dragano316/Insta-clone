//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
// import { Feather } from '@expo/vector-icons'; 


const Heading = () => {
    return (
        <View style={styles.container}>
            <Feather name="camera" size={24} color="black" style={styles.icon} />
            <Text style={styles.text}>Instagram </Text>
            <Feather name="send" size={24} color="black"  style={styles.icon}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection:"row",
        alignItems: 'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        height:"10%",
        backgroundColor:'#f1f2f6'
    },
    text:{
        fontSize:25,
        fontFamily: "",
        fontWeight:'bold',
        marginTop:25
    },
    icon:{
        marginTop:25,
        paddingHorizontal:20
    }
});


export default Heading;
