import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
