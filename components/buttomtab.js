import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";


const ButtomTab = () => {
  const Tab = createBottomTabNavigator();
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
      {/* <Tab.Screen name="Setting" component={secondScreenStack} /> */}
    </Tab.Navigator>
  );
};

export default ButtomTab;
