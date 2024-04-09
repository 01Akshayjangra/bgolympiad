import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { API_URL } from "../api/api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";

const OtpScreen = ({ navigation, route }) => {
  const {
    selectedOption,
    otp,
    setOtp,
    firstName,
    lastName,
    password,
    confirmPassword,
    mobileNumber,
    setUserInfo,
    setUserToken,
    state,
    district,
    city,
    school,
    fatherName,
    motherName,
    gender,
    email,
    className,
    section,
    handleOtherRegistration,
    handleStudentRegistration,
    handlePrincipalRegistration,
    handleTeacherRegistration,
  } = useAuth();

  const handleVerifyOtp = async () => {
    if (!otp || !mobileNumber) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return false;
    }
    const userData = {
      otp: otp,
      mobile: mobileNumber,
    };
    try {
      const response = await axios.post(
        `${API_URL}/users/verify-otp`,
        userData
      );
      if (response) {
        if (response.data.status) {
          console.log(response.data);
          handleSave();
        } else {
          console.log(response.data);
          Alert.alert("Validation Error:", response.data.message);
          return false;
        }
      }
    } catch (error) {
      console.error("Verify OTP failed:", error);
      return false;
    }
  };

  const handleSave = async () => {
    let userData;
    if (selectedOption === "Student") {
      if (
        !otp ||
        !selectedOption ||
        !firstName ||
        !lastName ||
        !password ||
        !confirmPassword ||
        !mobileNumber ||
        !state ||
        !district ||
        !city ||
        !school ||
        !fatherName ||
        !motherName ||
        !email ||
        !className ||
        !section
      ) {
        Alert.alert("Validation Error", "Please fill in all fields.");
        return false;
      }
      userData = {
        otp: otp,
        selectedOption: selectedOption,
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_confirmation: confirmPassword,
        mobile: mobileNumber,
        user_type: selectedOption,
        state_id: state,
        district_id: district,
        city_id: city,
        school_id: school,
        father_name: fatherName,
        mother_name: motherName,
        gender: gender,
        email: email,
        class: className,
        section: section,
      };
    }

    if (selectedOption === "Teacher" || selectedOption === "Principal") {
      if (
        !otp ||
        !selectedOption ||
        !firstName ||
        !lastName ||
        !password ||
        !confirmPassword ||
        !mobileNumber ||
        !state ||
        !district ||
        !city ||
        !school
      ) {
        Alert.alert("Validation Error", "Please fill in all fields.");
        return false;
      }
      userData = {
        otp: otp,
        selectedOption: selectedOption,
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_confirmation: confirmPassword,
        mobile: mobileNumber,
        user_type: selectedOption,
        state_id: state,
        district_id: district,
        city_id: city,
        school_id: school,
      };
    }

    if (selectedOption === "User") {
      if (
        !otp ||
        !selectedOption ||
        !firstName ||
        !lastName ||
        !password ||
        !confirmPassword ||
        !mobileNumber
      ) {
        Alert.alert("Validation Error", "Please fill in all fields.");
        return false;
      }
      userData = {
        otp: otp,
        user_type: selectedOption,
        first_name: firstName,
        last_name: lastName,
        password: password,
        password_confirmation: confirmPassword,
        mobile: mobileNumber,
      };
    }

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }

    try {
      console.log("data Checking", userData);
      const response = await axios.post(`${API_URL}/users/register`, userData);
      if (response.data.status && response.data.data.user) {
        console.log("After registration----------", response.data);
        // Set user token in AsyncStorage
        await AsyncStorage.setItem(
          "userToken",
          response.data.data.access_token
        );

        // Set user info in AsyncStorage
        await AsyncStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.data.user)
        );

        // Set user token in state
        setUserToken(response.data.data.access_token);

        // Set user info in state
        setUserInfo(response.data.data.user);
      } else {
        Alert.alert("Login failed: ", response.data.message);
        Alert.alert("Login failed: ", response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Image source={require("../assets/icon.webp")} style={styles.logoimg} />
        <Text style={styles.topBarText}>Bg Olympiad</Text>
      </View>

      {/* Card Container */}
      <View style={styles.cardContainer}>
        {/* Back button */}
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* OTP Input Card */}
        <View style={styles.otpCard}>
          <Text style={styles.phtxt}>Phone Verification</Text>
          <Text style={styles.phlabel}>Enter Your OTP Code Here</Text>
          {/* OTP Input Fields */}
          <View style={styles.otpInputContainer}>
            {/* {[0, 1, 2, 3].map((index) => ( */}
            <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              value={otp}
              onChangeText={setOtp}
            />
            {/* // ))} */}
          </View>
          <Text style={styles.relabel}>Didn't Receive any code</Text>
          {/* Resend OTP */}
          <TouchableOpacity style={styles.resendButton} onPress={()=>{
            if(selectedOption === "User"){
              handleOtherRegistration();
              Alert.alert("A new OTP has been sent to your mobile number.");
            }
            if(selectedOption === "Student"){
              handleStudentRegistration();
              Alert.alert("A new OTP has been sent to your mobile number.");
            }
            if(selectedOption === "Principal"){
              handlePrincipalRegistration();
              Alert.alert("A new OTP has been sent to your mobile number.");
            }
            if(selectedOption === "Teacher"){
              handleTeacherRegistration();
              Alert.alert("A new OTP has been sent to your mobile number.");
            }
          }}>
            <Text style={styles.resendText}>Resend a new code.</Text>
          </TouchableOpacity>
          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonContainer: {
    position: "absolute",
    top: 120,
    left: 20,
  },
  backButton: {
    borderRadius: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: "#333",
  },
  otpCard: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  phtxt: {
    fontSize: 28,
    fontWeight: "900",
    color: "#333",
    marginBottom: 10,
  },
  phlabel: {
    fontSize: 12,
    color: "gray",
    marginBottom: 20,
  },

  relabel: {
    fontSize: 18,
    fontWeight: "400",
    color: "gray",
    marginTop: 20,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    padding: 10,
    marginHorizontal: 5, // Add margin between boxes
  },

  verifyButton: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "blue",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 10,
  },
  resendButton: {
    marginTop: 10,
    marginBottom: 25,
  },
  resendText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OtpScreen;
