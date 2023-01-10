import { StatusBar } from "expo-status-bar";
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
import React, { useState } from "react";
import Axios from "axios";
import { api } from "../resources/api.js";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = () => {
    // Validate form and send request to backend
    // Axios.post(`${api}/user/signin/`)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    Axios.
    post(`${api}/user/signin/`, {email:"toi6@toi6.com",password:"123456"}, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // axios
    //   .post('http://192.168.1.111:3000/user/signin', {
    //     email: email,
    //     password: password
    //   })
    //   .then(function (response) {
    //     // handle success
    //     alert(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     alert(error.message);
    //   });

    // Alert.alert("email: " + email + "\n password: " + password);
    // console.log("asdasd")
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
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
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
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
      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Đăng ký</Text>
      </TouchableOpacity>
      <View style={styles.image}>
        <Image source={require("../../assets/login.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 40,
    fontSize: 26,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    bottom: 0,
  },
  inputView: {
    backgroundColor: "#FCFDFE",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "Left",
    borderWidth: 1,
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
    alignItems: "Left",
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
    borderWidth: 1,
  },
});
