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

const NewsManager = ({ navigation }) => {
  const [change, setChange] = React.useState(0);
  const [articles, setArticles] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [backup, setBackup] = React.useState([]);
  // useEffect(()=>{
  //   const fetchLocal = async () => {
  //   const access_token = await AsyncStorage.getItem('user');
  //   setUser(access_token)
  //   }
  //   fetchLocal()
  // },[])
  const handleStatusChange = async (id,status)=>{
    console.log(id)
    Axios.get(
        `${api}/articles/update-status/${id}/${status}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
            console.log(response.data.message);
            setChange(change+1)
            // window.location.reload();
        })
        .catch((error) => {
          // An error occurred
          console.error(error);
        });
  }
  const handleDelete = async (id)=>{
    console.log(id)
    Axios.get(
        `${api}/articles/remove/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          console.log(response.data.message);
          setChange(change+1)
        })
        .catch((error) => {
          // An error occurred
          console.error(error);
        });
  }
  useEffect(() => {
    const id = "63bebcca0dcb2df9b911cd8d";
    Axios.get(`${api}/articles/get-by-id/${id}`, {
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
  }, [change]);
  return (
    <View style={styles.container}>
      <SearchBox setSearchTextt={setSearchText} />
      <View style={styles.titleForm}>
        <Text style={styles.title}>Tin của bạn</Text>
      </View>
      <View style={{ height: "auto" }}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <View>
              {item.public === true ? (
                <NewsCardEdit
                  title={item.tieude}
                  imageUrl={item.image}
                  author={item.user_id}
                  price={item.price}
                  onPressView={() =>
                    navigation.navigate("NewsPage", {
                      data: { item, setSearchText },
                    })
                  }
                  onPressLove={() =>  handleStatusChange(item._id, false)}
                  onPressDelete={() => handleDelete(item._id)}
                />
              ) : null}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.titleForm}>
        <Text style={styles.title}>Tin đã ẩn</Text>
      </View>
      <View style={{ height: "auto" }}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <View>
              {item.public === false ? (
                <NewsCardEdit
                  title={item.tieude}
                  imageUrl={item.image}
                  author={item.user_id}
                  price={item.price}
                  onPressView={() =>
                    navigation.navigate("NewsPage", {
                      data: { item, setSearchText },
                    })
                  }
                  onPressLove={() => handleStatusChange(item._id, true)}
                  onPressDelete={() => handleDelete(item._id)}

                />
              ) : null}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

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
