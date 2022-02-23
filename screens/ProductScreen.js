//HomeScreen.js
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from "native-base";
import {useFocusEffect} from '@react-navigation/native';

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate("Register")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let cancelToken;

  const getData = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course",{
      cancelToken: cancelToken.token
    });
    // console.log(res.data.data)
    setProduct(res.data.data);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useFocusEffect(
    React.useCallback(()=>{
      cancelToken = axios.CancelToken.source();
      getData();

      return ()=>{
        // alert('exit productscreen')
        cancelToken.cancel();
      }

    }, [])
  )


  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  const _onRefresh = () =>{
    getData();
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <ListItem thumbnail onPress={()=>{
            navigation.navigate('Detail',{
              id:item.id,
              title: item.title
            });
          }}>
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Badge danger>
              <Text>{item.view}</Text>
            </Badge>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
