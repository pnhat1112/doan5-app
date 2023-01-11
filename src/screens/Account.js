import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Modal } from "react-native";
import SearchBox from "../components/SearchBox.js";
// import NewsPage from './NewsPage.js';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Axios from "axios";
import { api } from "../resources/api.js";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-elements';

const Account = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/slider1.png")}/>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#5B5757'}}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.avatar}
            source={require("../../assets/nhat.png")}
          />
          <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style={styles.userName}>Nhật Phạm</Text>
            <Text style={{marginLeft: 15}}>10 người theo dõi</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={{borderBottomWidth: 1, borderBottomColor: '#5B5757'}}>
          <View style={{flexDirection: 'row',paddingTop: 15, paddingLeft: 30, alignItems: 'center'}}>
            <Image
              style={styles.iconDes}
              source={require("../../assets/icon/date.png")}
            />
            <Text style={styles.titleDes}>Ngày tham gia: <Text style={{fontWeight: 'bold'}}>11/12/2021</Text> </Text>
          </View>
          <View style={{flexDirection: 'row',paddingTop: 15, paddingLeft: 30, alignItems: 'center'}}>
            <Image
              style={styles.iconDes}
              source={require("../../assets/icon/create.png")}
            />
            <Text style={styles.titleDes}>Số bài viết đã đăng: <Text style={{fontWeight: 'bold'}}>12</Text> </Text>
          </View>
          
          <View style={{flexDirection: 'row',paddingTop: 15, paddingLeft: 30, paddingRight: 30,alignItems: 'center'}}>
            <Image
              style={styles.iconDes}
              source={require("../../assets/icon/place.png")}
            />
            <Text style={styles.titleDes}>Địa chỉ: <Text style={{fontWeight: 'bold'}}>Trần Đại Nghĩa, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</Text></Text>
          </View>
          <View style={{flexDirection: 'row',paddingTop: 15, paddingLeft: 30, alignItems: 'center'}}>
            <Image
              style={styles.iconDes}
              source={require("../../assets/icon/phone.png")}
            />
            <Text style={styles.titleDes}>Số điện thoại: <Text style={{fontWeight: 'bold'}}>0708026082</Text> </Text>
          </View>
          <View style={{flexDirection: 'row',paddingTop: 15, paddingLeft: 30, paddingRight: 30,alignItems: 'center', paddingBottom: 20}}>
            <Image
              style={styles.iconDes}
              source={require("../../assets/icon/social.png")}
            />
            <Text style={styles.titleDes}>Mạng xã hội:
              <TouchableOpacity>
                <Image style={styles.iconSocial} source={require("../../assets/icon/facebook.png")}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.iconSocial} source={require("../../assets/icon/insta.png")}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.iconSocial} source={require("../../assets/icon/tweeter.png")}/>
              </TouchableOpacity>
            </Text>
          </View>
      </View>

      
      <ScrollView>
      <View style={{paddingTop: 15, paddingLeft: 30}}>
        <Text style={styles.title}>Thông tin cá nhân</Text>

          <View>
          <MyModal visible={modalVisible} onClose={() => setModalVisible(false)} />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingRight: 30}}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => setModalVisible(true)}>
              <Text>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} onPress={ () => navigation.navigate("Register")}>
              <Text style={{color: "#FBD07C"}}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
          

        </View>
      </View>
      </ScrollView>
    </View>
  );
}

export default Account;

function MyModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '80%', backgroundColor: 'white', padding: 20 }}>

          <View>
            <Text style={styles.titleName}>Họ và tên</Text>
            <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              autoCapitalize="none"
              placeholder="Minh Nhật"
              placeholderTextColor="#003f5c"
            />
            </View>
          </View>
          
          <View>
            <Text style={styles.titleName}>Ngày sinh</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="11/12/2001"
                placeholderTextColor="#003f5c"
              />
            </View>
          </View>

          <View>
            <Text style={styles.titleName}>Số điện thoại</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="0313131"
                placeholderTextColor="#003f5c"
              />
            </View>
          </View>

          <View>
            <Text style={styles.titleName}>Địa chỉ</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="0313131"
                placeholderTextColor="#003f5c"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, paddingRight: 30}}>
            <TouchableOpacity style={styles.loginBtn} onPress={onClose}>
              <Text>Lưu thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} onPress={onClose}>
              <Text style={{color: "#FBD07C"}}>Thoát</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignSelf: 'center'
  },
  iconBack: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    marginTop: 10,
  },
  imageHome: {
    zIndex: 0,
    position: "absolute",
    width: "100%",
    height: 220,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleName: {
    fontSize: 16,
    paddingTop: 20
  },
  iconDes: {
    width: 24,
    height: 24,
  },
  iconSocial: {
    width: 24,
    height: 24,
    marginLeft: 18
  },
  titleDes: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#5B5757",
    paddingRight: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 80,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  inputView: {
    backgroundColor: "#FCFDFE",
    borderRadius: 10,
    width: "92%",
    height: 45,
    marginTop: 5,
    alignItems: "Left",
    borderWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBD07C",
  },
  registerBtn: {
    width: "40%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FBD07C",
  },
});
