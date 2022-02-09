import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from "native-base";
import React from "react";

const MenuScreen = ( {navigation} ) => {
  return (
    <View>
      <Text style={styles.style}>MenuScreen</Text>
      <Content>
        <ListItem icon
            style={{marginBottom:10, marginTop:10}}
            onPress={()=>{navigation.navigate("HomeStack")}}
        >
          <Left>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name="home" />
            </Button>
          </Left>
          <Body>
            <Text>หน้าหลัก</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>สินค้า</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  style: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});
