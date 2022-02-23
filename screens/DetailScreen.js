import { StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
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
import { FlatList } from "react-native-gesture-handler";

const DetailScreen = ({navigation,route}) => {
  const {id, title} = route.params;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (id) => {
    setLoading(true)
    const res = await axios.get("https://api.codingthailand.com/api/course/"+id);
    // console.log(res.data.data)
    setDetail(res.data.data);
    setLoading(false)
  };

    useEffect(() => {
    getData(id);
  }, [id]);

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      title:title
    })
  }, [navigation])

  return (
<View style={{ flex: 1 }}>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index+1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Badge danger>
              <Text>{item.ch_view}</Text>
            </Badge>
          </ListItem>
        )}
      />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})