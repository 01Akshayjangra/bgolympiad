import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OtpScreen = ({ navigation }) => {
  
    const handleSave = () => {
      // Handle saving data
    };

    const handlelogin = () => {
        navigation.navigate('Login');
    };
  
    return (
      <View style={styles.container}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <Image source={require('../assets/icon.webp')} style={styles.logoimg} />
          <Text style={styles.topBarText}>Bg Olympiad</Text>
        </View>
        
        {/* Card Container */}
        <View style={styles.cardContainer}>
          {/* Back button */}
          <View style={styles.backButtonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </View>
          
          {/* OTP Input Card */}
          <View style={styles.otpCard}>
            <Text style={styles.phtxt}>Phone Verification</Text>
            <Text style={styles.phlabel}>Enter Your OTP Code Here</Text>
            {/* OTP Input Fields */}
            <View style={styles.otpInputContainer}>
              <TextInput style={styles.otpInput} maxLength={1} />
              <TextInput style={styles.otpInput} maxLength={1} />
              <TextInput style={styles.otpInput} maxLength={1} />
              <TextInput style={styles.otpInput} maxLength={1} />
            </View>
            <Text style={styles.relabel}>Didn't Recived any code</Text>
            {/* Resend OTP */}
            <TouchableOpacity style={styles.resendButton}>
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
    backgroundColor: 'white',
  },
  topBar: {
    backgroundColor: '#AA336A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    top: 40,
  },
  logoimg: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 120,
    left: 20,
  },
  backButton: {
    borderRadius: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: '#333',
  },
  otpCard: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
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
    fontWeight: '900',
    color: '#333',
    marginBottom: 10,
  },
  phlabel: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 20,
  },

  relabel: {

    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
    marginTop: 20,

  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
},
otpInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    textAlign: 'center',
    width: '20%',
    fontSize: 20,
    padding: 10,
    marginHorizontal: 5, // Add margin between boxes
},


  verifyButton: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'blue',
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
    color: 'blue',
    textDecorationLine: 'underline',
   
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
  
export default OtpScreen;
