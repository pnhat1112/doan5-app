import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchBox from '../components/SearchBox.js';
import axios from 'axios';

function NewsPage({ route } ) {
  const data = route.params;
    return (
      <View style={styles.container}>
        <SearchBox />
        <TouchableOpacity style={styles.forgot_button}>
            <Text onPress={() => navigation.goBack()}>{data}</Text> 
        </TouchableOpacity> 
        <Image source={require("../../assets/slider1.png")} />
        <Text>{data}</Text>
        
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },
    search: {
      paddingTop: 60,
      backgroundColor: '#FBD07C',
      width: '100%',
      // flexDirection: "row",
      // justifyContent: "space-around",
      // marginVertical: 3,
    },
    titleForm: {
      width: '100%',
      paddingTop: 30,
      paddingLeft: 20,
      paddingBottom: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
  });

  export default NewsPage;