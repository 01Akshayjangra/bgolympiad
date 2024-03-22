import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [language, setLanguage] = useState('english');
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Registration'); // Navigate to Registration screen when signup button is pressed
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/icon.webp')} style={styles.logoimg} />
        <Text style={styles.topBarText}>Bg Olympiad</Text>
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue) => handleLanguageChange(itemValue)}
        >
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Hindi" value="hindi" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
          <Text style={styles.buttonText}>
            {language === 'english' ? 'For new registration, Click here' : 'नया पंजीकरण करने के लिए यहाँ क्लिक करें'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>
            {language === 'english' ? 'If you are already registered, Click here' : 'यदि आप पहले से पंजीकृत हैं, यहाँ क्लिक करें'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 70 : 50, // Adjust paddingTop to provide space for the top bar
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  button: {
    backgroundColor: 'darkblue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  secondButton: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: 120,
  },
});

export default Home;
