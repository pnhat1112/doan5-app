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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// import GoogleSignin from 'react-native-google-signin';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = () => {
    // Validate form and send request to backend
    Alert.alert("email: " + email + "\n password: " + password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
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
          placeholder="Mật khẩu."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.forgot_button}>
        <Text>Quên mật khẩu</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}  onPress={handleSubmit}>
        <Text>Đăng nhập</Text> 
      </TouchableOpacity> 

      {/* {userInfo ? (
        <Text>Welcome, {userInfo.name}!</Text>
      ) : (
        <GoogleSignin.Button
          onPress={handleGoogleSignIn}
          size={GoogleSignin.Size.Wide}
          color={GoogleSignin.Color.Dark}
        />
      )}
       */}
      <TouchableOpacity style={styles.registerBtn}  onPress={() => navigation.navigate('Register')}>
        <Text>Đăng ký</Text> 
      </TouchableOpacity>
      <View style={styles.image} >
        <Image source={require("./assets/login.png")} />
      </View> 
    </View>
  );
}

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const handleSubmit = () => {
    // Validate form and send request to backend
    Alert.alert("email: " + email + "\n password: " + password +  "\n Repassword: " + repassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
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
          placeholder="Mật khẩu."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập lại mật khẩu."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(repassword) => setRePassword(repassword)}
        /> 
      </View> 
      <TouchableOpacity style={styles.forgot_button}>
        <Text onPress={() => navigation.goBack()}>Trở về đăng nhập</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.registerBtn1} onPress={handleSubmit}>
        <Text>Đăng ký</Text> 
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
  registerBtn1: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 200,
    backgroundColor: "#FBD07C",
  },
});
