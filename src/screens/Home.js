import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchBox from '../components/SearchBox.js';
import NewsCard from '../components/NewsCard.js';
import NewsPage from './NewsPage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Stack = createStackNavigator();
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
    const [searchText, setSearchText] = React.useState('');
    const onChangeSearch = text => setSearchText(text);
    const handleSearch = () => {
      // perform search here
      alert(`Searching for: ${searchText}`);
    };
    return (
      <View style={styles.container}>
      <SearchBox />
      <Image source={require("../../assets/slider1.png")} />
      <View style={styles.titleForm}>
        <Text style={styles.title}>Tin dành cho bạn</Text>
      </View>
      <ScrollView>
        <View>
            <NewsCard 
              title="Cho thuê nhà trọ gần ĐH Việt Hàn, đường Nam Kì Khởi Nghĩa"
              imageUrl="../../assets/slider1.png"
              author="Nhật Phạm"
              onPressView={ () => navigation.navigate('NewsPage', {title: "Cho thuê nhà trọ gần ĐH Việt Hàn, đường Nam Kì Khởi Nghĩa"})}
              onPressLove={() => alert('Love')}
            />
            <NewsCard 
              title="Cho thuê nhà trọ đường Trần Đại Nghĩa"
              imageUrl="../../assets/slider1.png"
              author="Thành Tuân"
              onPressView={() => navigation.navigate('NewsPage')}
              onPressLove={() => alert('Love')}
            />
            <NewsCard 
              title="Cho thuê nhà nguyên căn đầy đủ nội thất đường Phạm Thận Duật"
              imageUrl="../../assets/slider1.png"
              author="Nhật Phạm"
              onPressView={() => navigation.navigate('NewsPage')}
              onPressLove={() => alert('Love')}
            />
            <NewsCard 
              title="My Blog Post"
              imageUrl="../../assets/slider1.png"
              author="John Doe"
              onPressView={() => navigation.navigate('NewsPage')}
              onPressLove={() => alert('Love')}
            />
        </View>
      </ScrollView>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
    },
    search: {
      paddingTop: 60,
      backgroundColor: '#FBD07C',
      width: '100%',
      // flexDirection: "row",
      // justifyContent: "space-around",
      // marginVertical: 3,
    },
    titleForm: {
      width: '100%',
      paddingTop: 30,
      paddingLeft: 20,
      paddingBottom: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
  });   