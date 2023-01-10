import React from 'react';
import { View, TextInput, Button, Header, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const SearchBox = ({setSearchTextt}) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState('');
  const onChangeSearch = text => setSearchText(text);
  const handleSearch = () => {
    // perform search here
    setSearchTextt(searchText)
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.search}>
      <SearchBar
          searchIcon={{ size: 24 }}
          placeholder="Tìm kiếm..."
          onChangeText={onChangeSearch}
          value={searchText}
          containerStyle={{backgroundColor: '#FBD07C'}}
          platform="ios"
          backgroundColor="#FFF"
          inputContainerStyle={{backgroundColor: 'white'}}
          cancelButtonProps={{color: '#5B5757'}}
          onSubmitEditing={handleSearch}
        />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  search: {
    paddingTop: 60,
    backgroundColor: '#FBD07C',
    width: '100%',
  }
});