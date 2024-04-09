import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

const Home = ({ route }) => {
  const { userInfo, logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {userInfo ? (
        <React.Fragment>
          <Text>Welcome, {userInfo?.first_name}!</Text>
          <Text>Email: {userInfo?.mobile}</Text>
        </React.Fragment>
      ) : (
        <Text>Loading...</Text>
      )}
      <Button title="Logout" onPress={logout} />
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
