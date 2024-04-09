import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Getstarted from './screens/Getstarted';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import StudentRegistrationScreen from './screens/StudentRegistrationScreen';
import TeacherRegistrationScreen from './screens/TeacherRegistrationScreen';
import PrincipalRegistrationScreen from './screens/PrincipalRegistrationScreen';
import OtherRegistration from './screens/OtherRegistration';
import OtpScreen from './screens/OtpScreen';
import HomeScreen from './screens/Home'; // Corrected import statement
import MakeFriendScreen from './screens/MakeFriendScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const handleBack = ({ navigation }) => {
  navigation.goBack();
};

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Make Friend"
        component={MakeFriendScreen}
        options={{
          tabBarLabel: 'Make Friend',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      {/* Add more bottom tab screens as needed */}
      <Tab.Screen
        name="Back"
        component={handleBack} // Corrected function name
        options={{
          tabBarLabel: 'Back',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chevron-back-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
