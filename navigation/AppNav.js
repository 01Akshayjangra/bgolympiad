import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useAuth } from "../context/AuthContext";

const AppNav = () => {
  const { loading, userToken } = useAuth();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      if (userToken !== null) {
        setInitializing(false);
      } else {
        setInitializing(false);
      }
    };

    checkUserLoggedIn();
  }, [userToken]);

  if (loading || initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return userToken !== null ? <AppStack /> : <AuthStack />;
};

export default AppNav;
