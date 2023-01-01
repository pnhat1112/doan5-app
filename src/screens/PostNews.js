import React, { useState }from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActionSheetIOS, Button, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useLocation from '../components/useLocation';

const PostNews = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  } = useLocation(false);
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;
  const handleAddressPress = () => {
    // ActionSheetIOS.showActionSheetWithOptions(
    //   {
    //     options: ['Home', 'Work', 'Other'],
    //     cancelButtonIndex: 2,
    //   },
    //   (buttonIndex) => {
    //     if (buttonIndex === 0) {
    //       // Handle selection of "Home"
    //       console.log(cityOptions);
    //     } else if (buttonIndex === 1) {
    //       // Handle selection of "Work"
    //       console.log(selectedDistrict);
    //     }
    //   },
    // );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng bài</Text>
      
      <Text style={styles.titleDes}>Địa chỉ phòng trọ</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="Thành phố."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          onPress={handleAddressPress}
        /> 
      </View> 
      <Button
        title="Choose address"
        onPress={handleAddressPress}
      />
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
      <TouchableOpacity style={styles.loginBtn}>
        <Text>Đăng nhập</Text> 
      </TouchableOpacity> 

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
    titleDes: {
      marginBottom: 10,
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      paddingLeft: 40,
    },
    image: {
      position: 'absolute',
      bottom: 0
    },
    inputView: {
      backgroundColor: "#FCFDFE",
      borderRadius: 10,
      width: "80%",
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