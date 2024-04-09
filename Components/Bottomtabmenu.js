import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import MakeFriendScreen from './MakeFriendScreen';

const Tab = createBottomTabNavigator();

const bottombar = () => {
  return (
 <Text>Bottom menu</Text>
  );
};

export default bottombar;
