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
import { SearchBar } from "react-native-elements";
import SearchBox from "../components/SearchBox.js";
import NewsCard from "../components/NewsCard.js";
// import NewsPage from './NewsPage.js';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Axios from "axios";
import { api } from "../resources/api.js";
import { useNavigation } from "@react-navigation/native";


const Stack = createStackNavigator();
const Data = {};
// const Home = () => {
// const [searchText, setSearchText] = React.useState('');
// const onChangeSearch = text => setSearchText(text);
// const handleSearch = () => {
//   // perform search here
//   alert(`Searching for: ${searchText}`);
// };
// const [url, setUrl] = React.useState('');
// useEffect(() => {
//   console.log("âcc");
//   axios
//   .get('http://192.168.1.10:5000/posts/')
//   .then(function (response) {
//     // handle success
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     // handle error
//     alert(error.message);
//   });
// }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="HomePage" component={HomePage} />
//         <Stack.Screen name="NewsPage" component={NewsPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Home;

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="NewsPage" component={NewsPage} />
    </Stack.Navigator>
  );
}

function HomePage({ navigation }) {
  // const api = "http://192.168.1.11:5000";
  const [searchText, setSearchText] = React.useState("");
  const [articles, setArticles] = React.useState([]);
  const [backup, setBackup] = React.useState([]);
  useEffect(() => {
    let filteredArr = articles.filter(function(item) {
      return item.tieude.toLowerCase().includes(searchText.toLowerCase()) || item.address.toLowerCase().includes(searchText.toLowerCase());
    });
    if(searchText!=""){
      setArticles(filteredArr);
    }
    else{
      setArticles(backup)
    }
  }, [searchText]);
  useEffect(() => {
    Axios.get(`${api}/articles/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setArticles(response.data);
        setBackup(response.data)
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <SearchBox 
      setSearchTextt = {setSearchText}/>
      <Image source={require("../../assets/slider1.png")} />
      <View style={styles.titleForm}>
        <Text style={styles.title}>Tin dành cho bạn</Text>
      </View>
      <View>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <NewsCard
              title={item.tieude}
              imageUrl={item.image}
              author={item.user_id}
              price={item.price}
              onPressView={() =>
                navigation.navigate("NewsPage", { data: { item, setSearchText } })
              }
              onPressLove={() => alert("Love")}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

function NewsPage({ route, navigation }) {
  let { data } = route.params;
  console.log(data?.item.content.ops);

  // http://192.168.1.11:5000/user/infor/63a9a376ec9da82c0887dd3f
  const [user, setUser] = React.useState();
  useEffect(() => {
    Axios.get(`${api}/user/infor/${data?.item.user_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }, [data]);
  const GoToUser = () => {
    alert(`Go to user:`);
  };
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled>
        <SearchBox setSearchTextt = {data?.setSearchText}/>
        <View style={{ alignItems: "center", position: "static" }}>
          <View style={{ flexDirection: "row", zIndex: 1 }}>
            <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
              <Image
                style={styles.iconBack}
                source={require("../../assets/icon/back.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/icon/love.png")}
                style={styles.iconLove}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.imageHome}
            source={{ uri: data?.item.image }}
          />
          <View
            style={{
              marginTop: 170,
              marginLeft: 5,
              marginRight: 5,
              borderBottomColor: "#B0B1B1",
              borderBottomWidth: 1,
            }}
          >
            <Text style={styles.titleNewsPage}>{data?.item.tieude}</Text>
            <Text style={styles.titlePrice}>{data?.item.giatien}đ/1 tháng</Text>
            <Text style={styles.titleHour}>6 giờ trước</Text>
            <View style={{ justifyContent: "center", paddingBottom: 10 }}>
              <Text style={styles.titleAddress}>
                <Image
                  style={styles.iconPlace}
                  source={require("../../assets/icon/place.png")}
                />
                {data?.item.address}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 5,
              marginRight: 5,
              borderBottomColor: "#B0B1B1",
              borderBottomWidth: 1,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 10,
                marginRight: 280,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image
                style={styles.avatar}
                source={require("../../assets/nhat.png")}
              />
              <Text style={styles.userName}>{user?.full_name}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 5,
              marginRight: 5,
              borderBottomColor: "#B0B1B1",
              borderBottomWidth: 1,
              width: 380,
            }}
          >
            <Text style={styles.titleDescription}>Tiện nghi</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={styles.txtTienNghi}>
                Gác lửng:
                {data?.item.gac_lung ? (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/check.png")}
                  />
                ) : (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/uncheck.png")}
                  />
                )}
              </Text>
              <Text style={styles.txtTienNghi}>
                Nấu Ăn:
                {data?.item.nau_an ? (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/check.png")}
                  />
                ) : (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/uncheck.png")}
                  />
                )}
              </Text>
              <Text style={styles.txtTienNghi}>
                Máy giặt:
                {data?.item.may_giat ? (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/check.png")}
                  />
                ) : (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/uncheck.png")}
                  />
                )}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <Text style={styles.txtTienNghi}>
                Thang máy:
                {data?.item.may_giat ? (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/check.png")}
                  />
                ) : (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/uncheck.png")}
                  />
                )}
              </Text>
              <Text style={styles.txtTienNghi}>
                Wifi miễn phí:
                {data?.item.wifi ? (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/check.png")}
                  />
                ) : (
                  <Image
                    style={styles.iconCheck}
                    source={require("../../assets/icon/uncheck.png")}
                  />
                )}
              </Text>
              <Text style={styles.txtTienNghi}>
                Số người ở: {data?.item.so_nguoi}
              </Text>
            </View>
            <View style={{ justifyContent: "center", paddingBottom: 10 }}>
              <Text style={styles.titleAddress}>
                <Image
                  style={styles.iconPlace}
                  source={require("../../assets/icon/dientich.png")}
                />
                Diện tích: {data?.item.square} m2
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 5,
              marginRight: 5,
              borderBottomColor: "#B0B1B1",
              borderBottomWidth: 1,
              width: 380,
            }}
          >
            <Text style={styles.titleDescription}>Mô tả chi tiết</Text>
            {/* <Text style={styles.txtDescription}>
              jjhjhjhj
            </Text> */}
            {data?.item.content.ops.map((op) => {
              if (op.insert) {
                if (typeof op.insert === "string") {
                  return <Text>{op.insert}</Text>;
                } else if (op.insert.image) {
                  return  <Image source={{ uri: op.insert.image }} style={{ width: 200, height: 200 }}/>;
                }
              }
              return null;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
