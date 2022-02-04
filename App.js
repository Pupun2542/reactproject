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
// import ButtomTab from "./components/buttomtab";
import ExploreScreen from "./pages/ExploreScreen";
import HomeScreen from "./pages/HomeScreen";
import SettingScreen from "./pages/SettingScreen";
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

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = ( props ) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require("./assets/drawerWhite.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function CustomSidebarMenu(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* top large image */}
      <Image
        source={require("./assets/react_logo.png")}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL("it.tni.ac.th")}
        />
        <View style={styles.customItem}>
          <Text onPress={() => Linking.openURL("tni.ac.th")}>Rate Us</Text>
          <Image
            source={require("./assets/star_filled.png")}
            styles={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);


function ButtomTabStack({ navigation }) {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iConName;
          if (route.name === "Home") {
            iConName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Setting") {
            iConName = focused ? "ios-list-circle" : "ios-list";
          }
          return <Ionicons name={iConName} color={color} style={35} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

function SettingStack() {}

function DrawerStack( {navigation} ) {
  React.useLayoutEffect(() => {
    console.log(navigation)
    navigation.setOptions({
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "#3B9C9C",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
  }, [navigation]);
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#e91263",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={ButtomTabStack}
        options={{ drawerLabel: "Home Screen Option" }}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingStack}
        options={{ drawerLabel: "Setting Screen Option" }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="ButtomtabStack"
        component={DrawerStack}
      />
    </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
