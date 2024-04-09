import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Getstarted from "../screens/Getstarted";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import StudentRegistrationScreen from "../screens/StudentRegistrationScreen";
import TeacherRegistrationScreen from "../screens/TeacherRegistrationScreen";
import PrincipalRegistrationScreen from "../screens/PrincipalRegistrationScreen";
import OtherRegistration from "../screens/OtherRegistration";
import OtpScreen from "../screens/OtpScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Getstarted"
        component={Getstarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentRegistration"
        component={StudentRegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TeacherRegistration"
        component={TeacherRegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrincipalRegistration"
        component={PrincipalRegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtherRegistration"
        component={OtherRegistration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
