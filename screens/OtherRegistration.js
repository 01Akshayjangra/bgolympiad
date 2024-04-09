import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

const OtherRegistration = ({ navigation }) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    mobileNumber,
    setMobileNumber,
    handleOtherRegistration,
  } = useAuth();

  const handlelogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require("../assets/icon.webp")} style={styles.logoimg} />
        <Text style={styles.topBarText}>Bg Olympiad</Text>
      </View>
      <View style={styles.cardContainer}>
        {/* Card 1: Back button */}
        <View style={styles.bcard}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card for text */}
      <View style={styles.othercardcont}>
        <View style={styles.othercard}>
          <ScrollView contentContainerStyle={styles.scontainer}>
            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder="Enter First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>

              <View>
                <TextInput
                  style={[styles.input, styles.halfInput]}
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>

            <Text style={styles.inputLabel}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />

            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleOtherRegistration}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.Notestyle}>
          <TouchableOpacity style={styles.loginButton} onPress={handlelogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.Notetxt}>
            if you are already registered click here
          </Text>
          <Text>Like = 10</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    backgroundColor: "#AA336A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    top: 40,
  },
  logoimg: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  topBarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 100, // Adjust as needed
    paddingHorizontal: 20,
  },
  card: {
    top: 12,
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 10,
    padding: 5,
  },
  bcard: {
    top: 10,
    backgroundColor: "#ffffff",
    width: "11%",
    borderRadius: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  othercardcont: {
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
  },
  othercard: {
    top: 40,
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    alignSelf: "flex-start",
  },
  studentImageContainer: {
    alignItems: "center",
  },
  studentIcon: {
    width: 80,
    height: 80,
  },

  scontainer: {
    flexGrow: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  halfInput: {
    width: 140,
    marginRight: 10,
  },

  saveButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },

  Notestyle: {
    top: 80,
    backgroundColor: "#ffffff",
    width: "95%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "green",
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  Notetxt: {
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
  },
});

export default OtherRegistration;
