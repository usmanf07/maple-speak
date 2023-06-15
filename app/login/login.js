import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { icons, COLORS} from '../../constants';
import styles from './login.style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SafeAreaWrap from '../SafeAreaWrap';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('Please fix the errors below and try again');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
    
    setIsLoading(true);

    if (!validateEmail(email) && password.trim() === '') {
      setIsError(true);
      setIsLoading(false);
    } else {
      console.log(COLORS.ip);
      axios.post(`http://${COLORS.ip}:8000/auth`, {
          email: email,
          password: password,
        })
        .then(async (response) => {
          
          if (response.data.token) {
            const token = response.data.token;
            console.log(token);
            
            try {
              await AsyncStorage.setItem('token', token);
            } catch (error) {
              console.log('Error saving token:', error);
            }
            setIsLoading(false);
        
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
            router.push('../dashboard/dashboard');
          }
        })
        .catch((error) => {
          console.log('Error:', error);
          setError('Invalid email or password');
          setIsError(true);
          setIsLoading(false);
        });
    }
  };

  return (

    <SafeAreaWrap>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
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
          <Text style={styles.textColor7}>Forgot Password?</Text>
        </View>
        {isLoading ? (
        <ActivityIndicator size="large" color="grey" />
      ) : (null)}
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
      </SafeAreaWrap>
  );
};

export default Login;
