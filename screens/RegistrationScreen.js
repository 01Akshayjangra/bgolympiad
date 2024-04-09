import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import StudentRegistrationScreen from './StudentRegistrationScreen';

const RegistrationScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      // Navigate to registration form based on selected option
      console.log('Selected option:', selectedOption);
  
      // Navigate to the respective registration screen
      if (selectedOption === 'student') {
        navigation.navigate('StudentRegistration', { category: selectedOption });
      } else if (selectedOption === 'teacher') {
        navigation.navigate('TeacherRegistration', { category: selectedOption });
      } else if (selectedOption === 'principal') {
        navigation.navigate('PrincipalRegistration', { category: selectedOption });
      }  else if (selectedOption === 'other') {
        navigation.navigate('OtherRegistration', { category: selectedOption });
      } else if (selectedOption === 'otp') {
        navigation.navigate('OtpScreen', { category: selectedOption });
      }
      else {
        // Handle other options
      }
    } else {
      // Show error message, no option selected
      console.log("Please select an option");
    }
  };
  

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#AA336A", "#FF0000"]} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Register</Text>
        <Image source={require("../assets/icon.webp")} style={styles.logoimg} />
      </LinearGradient>
      <Text style={styles.title}>Select Registration Type</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === "student" && styles.selectedCard,
          ]}
          onPress={() => handleOptionSelect("student")}
        >
          <View style={styles.radioButton}>
            {selectedOption === "student" ? (
              <Ionicons name="radio-button-on" size={24} color="blue" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="blue" />
            )}
          </View>
          <Image
            source={require("../assets/student_icon.png")}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Register as a Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === "teacher" && styles.selectedCard,
          ]}
          onPress={() => handleOptionSelect("teacher")}
        >
          <View style={styles.radioButton}>
            {selectedOption === "teacher" ? (
              <Ionicons name="radio-button-on" size={24} color="blue" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="blue" />
            )}
          </View>
          <Image
            source={require("../assets/student_icon.png")}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Register as a Teacher</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === "principal" && styles.selectedCard,
          ]}
          onPress={() => handleOptionSelect("principal")}
        >
          <View style={styles.radioButton}>
            {selectedOption === "principal" ? (
              <Ionicons name="radio-button-on" size={24} color="blue" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="blue" />
            )}
          </View>
          <Image
            source={require("../assets/student_icon.png")}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Register as a Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'other' && styles.selectedCard]}
          onPress={() => handleOptionSelect('other')}
        >
          <View style={styles.radioButton}>
            {selectedOption === 'other' ? (
              <Ionicons name="radio-button-on" size={24} color="blue" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="blue" />
            )}
          </View>
          <Image source={require('../assets/student_icon.png')} style={styles.icon} />
          <Text style={styles.cardText}>Register Other</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, selectedOption === 'otp' && styles.selectedCard]}
          onPress={() => handleOptionSelect('otp')}
        >
          <View style={styles.radioButton}>
            {selectedOption === 'otp' ? (
              <Ionicons name="radio-button-on" size={24} color="blue" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="blue" />
            )}
          </View>
          <Image source={require('../assets/student_icon.png')} style={styles.icon} />
          <Text style={styles.cardText}>otp</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    top: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 80,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 90,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "80%", // Set width to 80% for long-width card
    aspectRatio: 4, // Adjust aspectRatio according to your design
    height: 700, // Add height to the card
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center",
    marginVertical: 10, // Adjust margin
    borderWidth: 2,
    borderColor: "#ccc",
    paddingHorizontal: 10, // Add horizontal padding
  },
  selectedCard: {
    borderColor: "blue",
  },
  radioButton: {
    marginRight: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "darkblue",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    width: "80%",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logoimg: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});

export default RegistrationScreen;
