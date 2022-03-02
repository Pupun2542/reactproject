import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import CustomSidebarMenu from "./pages/CustomSidebarMenu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./components/styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import DetailScreen from "./screens/DetailScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import Register from "./screens/Register";
import Loginscreen from "./screens/Loginscreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0096DA",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Loginscreen}/>
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0096DA",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} />

      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContent={(props) => <MenuScreen {...props} />}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="ProductStack" component={ProductStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
