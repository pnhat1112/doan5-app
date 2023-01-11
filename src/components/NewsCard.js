import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const NewsCard = ({
  title,
  imageUrl,
  author,
  price,
  onPressView,
  onPressLove,
}) => {
//   console.log(imageUrl);
  const a = "../../assets/slider2.png";
  return (
    <View>
      <TouchableOpacity style={styles.cardForm} onPress={onPressView}>
        <Image
          style={{
            width: 150,
            height: 110,
            resizeMode: 'cover'
          }}
          source={{ uri: imageUrl }}
        />

        <View style={styles.TitleForm}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Author}>{author}</Text>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={styles.Price}>{price}đ/1 tháng</Text>
            <TouchableOpacity onPress={onPressLove}>
              <Image
                source={require("../../assets/icon/love.png")}
                resizeMode="contain"
                style={styles.btnLove}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardForm: {
    flexDirection: "row",
    width: 380,
    height: "auto",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  Image: {
    width: 140,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  TitleForm: {
    width: 200,
    paddingLeft: 15,
  },
  Title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  Author: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  Price: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
    marginTop: 5,
  },
  btnLove: {
    alignItems: "flex-end",
    width: 25,
    height: 25,
    marginTop: 5,
  },
});
