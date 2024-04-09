import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../api/api";
import axios from "axios";
import { Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/core";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  //logout
  const logout = async () => {
    setLoading(true);
    try {
      if (userToken) {
        const response = await axios.post(
          `${API_URL}/users/logout`,
          {
            device_id: "your_device_id",
            device_type: Platform.OS.toUpperCase(),
          },
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        if (response.data.status) {
          setUserToken(null);
          await AsyncStorage.removeItem("userToken");
          console.log(response.data);
        }
      }

      setLoading(false);
    } catch (error) {
      console.error("Error logging out:", error);
      setLoading(false);
    }
  };

  //Check is user logged in or not
  const isLoggedIn = async () => {
    setLoading(true);
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const userInfo = await AsyncStorage.getItem("userInfo");

      if (userToken && userInfo) {
        setUserToken(userToken);
        setUserInfo(JSON.parse(userInfo));
        setLoading(false);
      } else {
        setLoading(false);
        console.log("User data not found in AsyncStorage");
      }
    } catch (error) {
      console.error("Error retrieving user data from AsyncStorage:", error);
      setLoading(false);
    }
  };

  //Check is user logged in or not
  useEffect(() => {
    isLoggedIn();
  }, [userToken]);

  //Fetch user Data
  const fetchUserData = async () => {
    try {
      if (userToken) {
        const response = await axios.post(
          `${API_URL}/users/profile-detail`,
          {
            user_id: userInfo.id,
          },
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
        if (response.data.status) {
          setUserInfo(response.data.data);
          console.log(response.data);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  //   useEffect(() => {
  //     if (userInfo.id) {
  //       fetchUserData();
  //     }
  //   }, [userInfo.id]);

  const [selectedOption, setSelectedOption] = useState("");
  console.log("selectedOption", selectedOption);

  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  const [school, setSchool] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");

  const handleStudentRegistration = async () => {
    if (
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

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }

    const userData = {
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
    try {
      const response = await axios.post(`${API_URL}/users/sendOtp`, userData);
      console.log(response.data);
      if (response.data.status) {
        navigation.navigate("OtpScreen", {
          mobileNumber: mobileNumber,
        });
      } else {
        Alert.alert("Registration failed", response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handlePrincipalRegistration = async () => {
    if (
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

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }

    const userData = {
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
      // father_name: fatherName,
      // mother_name: motherName,
      // gender: gender,
      // email: email,
      // class: className,
      // section: section,
    };
    try {
      const response = await axios.post(`${API_URL}/users/sendOtp`, userData);
      console.log(response.data);
      if (response.data.status) {
        navigation.navigate("OtpScreen", {
          mobileNumber: mobileNumber,
        });
      } else {
        Alert.alert("Registration failed", response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleTeacherRegistration = async () => {
    if (
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

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }

    const userData = {
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
      // father_name: fatherName,
      // mother_name: motherName,
      // gender: gender,
      // email: email,
      // class: className,
      // section: section,
    };
    try {
      const response = await axios.post(`${API_URL}/users/sendOtp`, userData);
      console.log(response.data);
      if (response.data.status) {
        navigation.navigate("OtpScreen", {
          mobileNumber: mobileNumber,
        });
      } else {
        Alert.alert("Registration failed", response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  
  const handleOtherRegistration = async () => {
    if (
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

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }

    const userData = {
      user_type: selectedOption,
      first_name: firstName,
      last_name: lastName,
      password: password,
      password_confirmation: confirmPassword,
      mobile: mobileNumber,
    };
    try {
      const response = await axios.post(`${API_URL}/users/sendOtp`, userData);
      console.log(response.data);
      if (response.data.status) {
        navigation.navigate("OtpScreen", {
          mobileNumber: mobileNumber,
        });
      } else {
        Alert.alert("Registration failed", response.data.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        loading,
        setUserToken,
        setUserInfo,
        setLoading,
        logout,
        userInfo,

        selectedOption,
        setSelectedOption,
        otp,
        setOtp,
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
        state,
        setState,
        district,
        setDistrict,
        city,
        setCity,
        school,
        setSchool,
        fatherName,
        setFatherName,
        motherName,
        setMotherName,
        gender,
        setGender,
        email,
        setEmail,
        className,
        setClassName,
        section,
        setSection,
        handleStudentRegistration,
        handlePrincipalRegistration,
        handleTeacherRegistration,
        handleOtherRegistration,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
