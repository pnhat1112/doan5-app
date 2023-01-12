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
  RefreshControl,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import SearchBox from "../components/SearchBox.js";
import NewsCard from "../components/NewsCard.js";
import Axios from "axios";
import { api } from "../resources/api.js";
import NewsCardEdit from "../components/NewsCardEdit.js";
import { AsyncStorage } from "react-native";

const NewsManager = ({ navigation }) => {
  const [change, setChange] = React.useState(0);
  const [articles, setArticles] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [backup, setBackup] = React.useState([]);
  const [access_token, setAccess_token] = React.useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Fetch new data here
    // Once the data is fetched, set refreshing to false
    setTimeout(() => setRefreshing(false), 2000);
  };
  useEffect(() => {
    const fetchLocal = async () => {
      const access_token = await AsyncStorage.getItem("user");
      setAccess_token(access_token);
    };
    fetchLocal();
  }, [refreshing]);
  const handleStatusChange = async (id, status) => {
    console.log(id);
    Axios.get(`${api}/articles/update-status/${id}/${status}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.message);
        setChange(change + 1);
        // window.location.reload();
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  };
  const handleDelete = async (id) => {
    console.log(id);
    Axios.get(`${api}/articles/remove/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.message);
        setChange(change + 1);
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  };
  useEffect(() => {
    if (access_token) {
      Axios.get(`${api}/articles/get-by-id/${access_token}`, {
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
    }
  }, [change, access_token]);
  return (
    <View style={styles.container}>
      <SearchBox setSearchTextt={setSearchText} />
      {/* <Text>{access_token ? access_token: "null"}</Text> */}

      {access_token ? (
        <View>
          <View style={styles.titleForm}>
            <Text style={styles.title}>Tin của bạn</Text>
          </View>
          <View style={{ height: "18%" }}>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              <FlatList
                data={articles}
                renderItem={({ item }) => (
                  <View>
                    {item.public === true ? (
                      <NewsCardEdit
                        title={item.tieude}
                        imageUrl={item.image}
                        author={item.address}
                        price={item.giatien}
                        onPressView={() =>
                          navigation.navigate("NewsPage", {
                            data: { item, setSearchText },
                          })
                        }
                        onPressLove={() => handleStatusChange(item._id, false)}
                        onPressDelete={() => handleDelete(item._id)}
                      />
                    ) : null}
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
          <View style={styles.titleForm}>
            <Text style={styles.title}>Tin đã ẩn</Text>
          </View>
          <View style={{ height: "auto" }}>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              <FlatList
                data={articles}
                renderItem={({ item }) => (
                  <View>
                    {item.public === false ? (
                      <NewsCardEdit
                        title={item.tieude}
                        imageUrl={item.image}
                        author={item.address}
                        price={item.giatien}
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
            </ScrollView>
          </View>
        </View>
      ) : (
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <Text>Ban chua dang nhap</Text>
          </ScrollView>
        </View>
      )}
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
