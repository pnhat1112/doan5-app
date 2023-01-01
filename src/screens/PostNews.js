import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import useLocation from "../components/useLocation";
import { provinces, districts, wards } from "../resources/addressList";

const PostNews = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [address, setAddress] = useState({});
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocation(false);
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;
  useEffect(() => {
    console.log(address);
  }, [address]);
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
  const handleValueChange = (itemValue, itemIndex, name) => {
    // Perform some action with the new value
    console.log(itemValue, name);
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: itemValue,
    }));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng bài</Text>
      <Text style={styles.titleDes}>Tiêu đề</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder=""
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          onPress={handleAddressPress}
        />
      </View>
      {/* -- */}
      <Text style={styles.titleDes}>Tỉnh, Thành Phố</Text>
      <View style={styles.inputView}>
        <Picker
          selectedValue={address.provinceCode}
          style={{ height: 45 }}
          onValueChange={(itemValue, itemIndex) =>
            handleValueChange(itemValue, itemIndex, "provinceCode")
          }
        >
          {provinces.map((option) => (
            <Picker.Item
              label={option.name}
              value={option.code}
              key={option.code}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.titleDes}>Quận, Huyện</Text>
      <View style={styles.inputView}>
        <Picker
          selectedValue={address.districtCode}
          style={{ height: 45 }}
          onValueChange={(itemValue, itemIndex) =>
            handleValueChange(itemValue, itemIndex, "districtCode")
          }
        >
          {districts[address.provinceCode]?.map((option) => (
            <Picker.Item
              label={option.name}
              value={option.code}
              key={option.code}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.titleDes}>Phường</Text>
      <View style={styles.inputView}>
        <Picker
          selectedValue={address.provinceCode}
          style={{ height: 45 }}
          onValueChange={(itemValue, itemIndex) =>
            handleValueChange(itemValue, itemIndex, "wardCode")
          }
        >
          {wards[address.districtCode]?.map((option) => (
            <Picker.Item
              label={option.name}
              value={option.code}
              key={option.code}
            />
          ))}
        </Picker>
      </View>

      {/* -- */}

      <Button title="Choose address" onPress={handleAddressPress} />
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
};

export default PostNews;

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
  titleDes: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 40,
  },
  image: {
    position: "absolute",
    bottom: 0,
  },
  inputView: {
    backgroundColor: "#FCFDFE",
    borderRadius: 10,
    width: "80%",
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
