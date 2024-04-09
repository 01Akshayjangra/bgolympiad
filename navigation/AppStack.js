import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group>
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{ headerShown: false }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        {/* Modals comes here */}
        {/* <Stack.Screen name='modal' component={modal} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
