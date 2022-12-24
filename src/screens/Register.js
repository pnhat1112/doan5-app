import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from 'react';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     // Validate form and send request to backend
//   };
//   const handleButtonPress = () => {
//     Alert.alert("email: " + email + "\n password: " + password);
//   };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.forgot_button}>
        <Text>Quên mật khẩu</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={handleButtonPress}>Đăng nhập</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.loginText}>Đăng ký</Text> 
      </TouchableOpacity>
      <View style={styles.image} >
        <Image source={require("./assets/login.png")} />
      </View> 
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
