import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const PostNews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PostNews Page</Text>

    </View>
  );
}

export default PostNews;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 40,
      fontSize: 26,
      fontWeight: 'bold'
    },
    image: {
      position: 'absolute',
      bottom: 0
    },
    inputView: {
      backgroundColor: "#FCFDFE",
      borderRadius: 10,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "Left",
      borderWidth: 1
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      alignItems: 'Left'
    },
    loginBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#FBD07C",
      
    },
    registerBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 200,
      backgroundColor: "#FFFFFF",
      borderWidth: 1
    },
  });