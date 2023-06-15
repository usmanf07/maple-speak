import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { icons, COLORS } from '../../constants';
import styles from './signup.style';
import SafeAreaWrap from '../SafeAreaWrap'
const Signup3 = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const error = useState('Please fix the errors below and try again');
  const handleSignup = () => {
    // Perform validation
    const validationErrors = {};

    if (fullName.trim() === '') {
      validationErrors.fullName = 'Full Name is required';
    }

    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    }

    if (confirmPassword.trim() === '') {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // Update the errors state
    setErrors(validationErrors);

    // If there are no errors, proceed with signup
    if (Object.keys(validationErrors).length === 0) {
      // Perform signup logic here
      router.push('../login/login');
    }
  };

  const validateEmail = (email) => {
    // Email validation logic
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <SafeAreaWrap>
      <View style={styles.container}>
        
        <View>
          <Text style={styles.headerText}>Create Your Profile</Text>
        {errors.confirmPassword || errors.password || errors.fullName || errors.email ? (<Text style={styles.errorText}>{error}</Text> ) : null}
        
        </View>
        <View style={[styles.inputContainer, errors.fullName && { borderColor: 'red' }]}>
          <Image source={icons.email} style={styles.inputIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            underlineColorAndroid="transparent"
          />
        </View>
        
        <View style={[styles.inputContainer, errors.email && { borderColor: 'red' }]}>
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
       
        <View style={[styles.inputContainer, errors.password && { borderColor: 'red' }]}>
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


        <View style={[styles.inputContainer, errors.confirmPassword && { borderColor: 'red' }]}>
          <Image source={icons.password} style={styles.inputIcon} />
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            underlineColorAndroid="transparent"
          />
        </View>
        
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText1}>Let's Start Learning!</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaWrap>
  );
};

export default Signup3;
