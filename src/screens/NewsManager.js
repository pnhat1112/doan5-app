import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import Axios from "axios";
import { api } from "../resources/api.js";




const NewsManager = ({navigation}) => {
  const [articles, setArticles] = React.useState([]);
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
    <View >
      <Text>NewsManager Page</Text>

    </View>
  );
}

export default NewsManager;