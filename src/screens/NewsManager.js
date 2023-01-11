import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import SearchBox from "../components/SearchBox.js";
import NewsCard from "../components/NewsCard.js";
import Axios from "axios";
import { api } from "../resources/api.js";
import NewsCardEdit from "../components/NewsCardEdit.js";
import {AsyncStorage} from 'react-native';


const NewsManager = ({navigation}) => {
  const [articles, setArticles] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [backup, setBackup] = React.useState([]);
  const [user, setUser] = React.useState(null);

  useEffect(()=>{
    const fetchLocal = async () => {
    const access_token = await AsyncStorage.getItem('user');
    setUser(access_token)
    }
    fetchLocal()
  },[])

  useEffect(() => {
    Axios.get(`${api}/articles/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <p> {user?.details.full_name} </p>
    </View>
  );
}

export default NewsManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  search: {
    paddingTop: 60,
    backgroundColor: "#FBD07C",
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-around",
    // marginVertical: 3,
  },
  iconBack: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    marginTop: 10,
  },
  titleForm: {
    width: "100%",
    paddingTop: 30,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  imageHome: {
    zIndex: 0,
    position: "absolute",
    width: "100%",
    height: 220,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titleNewsPage: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 10,
  },
  titlePrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  iconLove: {
    width: 40,
    height: 40,
    marginLeft: 300,
    marginTop: 10,
  },
  titleHour: {
    fontSize: 15,
    paddingTop: 10,
    color: "#5B5757",
  },
  titleAddress: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "#5B5757",
  },
  iconPlace: {
    width: 18,
    height: 18,
  },
  avatar: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 80,
  },
  titleDescription: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5B5757",
    marginLeft: 20,
  },
  iconCheck: {
    width: 16,
    height: 16,
  },
  txtTienNghi: {
    fontSize: 15,
    color: "#5B5757",
  },
  txtDescription: {
    fontSize: 15,
    color: "#5B5757",
    paddingTop: 10,
  },
});