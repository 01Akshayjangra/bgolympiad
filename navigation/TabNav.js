import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//Icons
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import MakeFriendScreen from "../screens/MakeFriendScreen";

//Screens
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        //   headerShown: false,
        }}
      />
      <Tab.Screen
        name="Make Friend"
        component={MakeFriendScreen}
        options={{
          tabBarLabel: "Make Friend",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
