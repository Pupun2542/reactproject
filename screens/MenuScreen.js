import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";

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
import react from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userStoreContext } from "../context/userContext";

const MenuScreen = ({ navigation }) => {
  // const [profile, setProfile] = react.useState(null);
  const userStore = React.useContext(userStoreContext);

  react.useEffect(() => {
    const getProfile = async () => {
      const profile = await AsyncStorage.getItem("@profile");
      if (profile) {
        // setProfile(JSON.parse(profile));
        userStore.updateProfile(JSON.parse(profile));
      }
    };
    getProfile();
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: "bold",
            padding: 20,
            flex: 1,
            justifyContent: "center",
            height: 150,
            width: undefined,
          }}
        >
          เมนูหลัก
        </Text>
        {userStore.profile && (
          <>
            <Text
              style={{
                color: "blue",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              ยินดีต้อนรับคุณ {userStore.profile.name}
              อีเมล์ : {userStore.profile.email}
            </Text>
          </>
        )}

        {/* code from native base*/}
        <Content>
          <ListItem
            icon
            style={{ marginBottom: 10, marginTop: 10 }}
            onPress={() => navigation.navigate("HomeStack")}
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
          <ListItem icon onPress={() => navigation.navigate("ProductStack")}>
            <Left>
              <Button style={{ backgroundColor: "#e91263" }}>
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

          {!userStore.profile && (
            <ListItem
              icon
              style={{ marginBottom: 10, marginTop: 10 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Left>
                <Button style={{ backgroundColor: "#0000FF" }}>
                  <Icon active name="log-in" />
                </Button>
              </Left>
              <Body>
                <Text>เข้าสู่ระบบ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}
          {userStore.profile && (
            <ListItem
              icon
              style={{ marginBottom: 10, marginTop: 10 }}
              onPress={ async() =>{
                await AsyncStorage.removeItem('@token');
                await AsyncStorage.removeItem('@profile');
                userStore.updateProfile(null);
                navigation.closeDrawer();
              } }
            >
              <Left>
                <Button style={{ backgroundColor: "#FF0000" }}>
                  <Icon active name="log-out" />
                </Button>
              </Left>
              <Body>
                <Text>ออกจากระบบ</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          )}
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
