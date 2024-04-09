import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { API_URL } from "../api/api";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const StudentRegistrationScreen = ({ navigation }) => {
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
    handleStudentRegistration
  } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require("../assets/icon.webp")} style={styles.logoimg} />
        <Text style={styles.topBarText}>BG Olympiad</Text>
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

        {/* Card 2: Student image */}
        <View style={styles.card}>
          <View style={styles.studentImageContainer}>
            <Image
              source={require("../assets/student_icon.png")}
              style={styles.studentIcon}
            />
          </View>
        </View>
      </View>

      {/* Card for text */}
      <View style={styles.card}>
        <Text style={styles.registrationText}>Student Registration</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scontainer}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Enter First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Enter Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Gender:</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Transgender" value="Transgender" />
          </Picker>
        </View>
        <Text style={styles.inputLabel}>Class</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Enter Class Name"
            value={className}
            onChangeText={setClassName}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Enter Section"
            value={section}
            onChangeText={setSection}
          />
        </View>

        <Text style={styles.inputLabel}>Father Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Father Name"
          value={fatherName}
          onChangeText={setFatherName}
        />
        <Text style={styles.inputLabel}>Mother Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mother Name"
          value={motherName}
          onChangeText={setMotherName}
        />
        <Text style={styles.inputLabel}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.inputLabel}>State</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter State"
          value={state}
          onChangeText={setState}
        />
        <Text style={styles.inputLabel}>District</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter District"
          value={district}
          onChangeText={setDistrict}
        />
        <Text style={styles.inputLabel}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          value={city}
          onChangeText={setCity}
        />
        <Text style={styles.inputLabel}>School Id</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter School Id"
          value={school}
          onChangeText={setSchool}
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
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleStudentRegistration}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
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
    top: 10,
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
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
  registrationText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
    width: 170,
    marginRight: 10,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioLabel: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 40,
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
});

export default StudentRegistrationScreen;
