import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { icons, COLORS } from '../../constants';
import styles from './login.style';
import axios from 'axios';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('Please fix the errors below and try again');
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
  

    if (!validateEmail(email) && password.trim() === '') {
      setIsError(true);
    }
    
    else{
      axios.post('http://localhost:8000/autheticate', {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response === 'success') {
              console.log(response);
          }
        })
        .catch((error) => {
          setError('Invalid email or password');
          setIsError(true);
        });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.background },
          headerShadowVisible: false,
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Welcome Back!</Text>
          
        </View>
        <View>
          <Text style={styles.textColor}>Login to your account</Text>
          
        </View>
        {isError && <Text style={styles.errorText}>{error}</Text>}
        <View style={[styles.inputContainer, isError && { borderColor: 'red' }]}>
          <Image source={icons.email} style={styles.inputIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={[styles.inputContainer, isError && { borderColor: 'red' }]}>
          <Image source={icons.password} style={styles.inputIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            underlineColorAndroid="transparent"
          />
        </View>
        
        <View>
          <Text style={styles.textColor2}>Forgot Password?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText1}>Login & Start Learning!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => router.push('../signup/signup')}>
            <Text style={styles.buttonText2}>Don't Have an Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
