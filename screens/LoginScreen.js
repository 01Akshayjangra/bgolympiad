import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient'; 

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [hidePassword, setHidePassword] = useState(true); // State to toggle password visibility

  const handleLogin = () => {
    // Perform login logic here (e.g., validate credentials)
    console.log('Logging in with:', phone, password, 'Remember Me:', rememberMe);
    // After successful login, navigate to another screen (e.g., Home screen)
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#AA336A', '#FF0000']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Login</Text>
        <Image source={require('../assets/icon.webp')} style={styles.logoimg} />

      </LinearGradient>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
       
        <TextInput
          style={styles.input}
          placeholder="Please enter mobile number"
          value={phone}
          onChangeText={setPhone}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Please enter Password"
            secureTextEntry={hidePassword} // Toggle secureTextEntry based on hidePassword state
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <View style={[styles.checkbox, rememberMe && styles.checked]}>
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Remember Me</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 80,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center', // Center the card horizontally
    marginTop: 210, 
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'blue',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: 'blue',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
  },
  checkboxText: {
    color: 'blue',
  },
  forgotPassword: {
    color: 'blue',
    marginLeft: 50,
  },
  button: {
    backgroundColor: 'darkblue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoimg: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});

export default LoginScreen;
