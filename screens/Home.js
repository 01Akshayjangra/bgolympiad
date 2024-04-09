import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ route }) => {
  const { userData } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {userData ? (
        <React.Fragment>
          <Text>Welcome, {userData.first_name}!</Text>
          <Text>Email: {userData.email}</Text>
          {/* Access other user data here */}
        </React.Fragment>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Home;
