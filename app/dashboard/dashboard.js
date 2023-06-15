import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS, icons} from '../../constants';
import SafeAreaDash from '../SafeAreaDash';
import styles from './dashboard.style';
const dashboard = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('home');

  useEffect(() => {
    
    getUserDetails();
    setIsLoading(false);
    
  }, []);

  const getUserDetails = async () => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios
          .get(`http://${COLORS.ip}:8000/users/user-details`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
           
            setUser(response.data);
          })
          .catch((error) => {
            console.log('Error fetching user details:', error);
          });
      }
    } catch (error) {
      console.log('Error retrieving token from AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaDash>
      {!isLoading ? (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.item}>
          {console.log(user)}
                <Image source={icons.diamond} style={styles.icon} />
                <Text style={styles.textHeader}>{user.diamonds}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image source={icons.uk} style={styles.icon} />
                <Text style={styles.textHeader}>{user.learnLang}</Text>
              </TouchableOpacity>
              
        </View>
        <View style={styles.content}>
          <Text style={styles.textContent}>Content</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.footerItem,
              selectedOption === 'home' && styles.footerItemSelected,
            ]}
            onPress={() => setSelectedOption('home')}
          >
            <Image source={icons.home} style={styles.iconFooter} />
            <Text
              style={[
                styles.textFooter,
                selectedOption === 'home' && styles.textFooterSelect,
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerItem,
              selectedOption === 'leaderboards' && styles.footerItemSelected,
            ]}
            onPress={() => setSelectedOption('leaderboards')}
          >
            <Image source={icons.leaderboard} style={styles.iconFooter} />
            <Text
              style={[
                styles.textFooter,
                selectedOption === 'leaderboards' && styles.textFooterSelect,
              ]}
            >
              Leaderboards
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.footerItem,
              selectedOption === 'profile' && styles.footerItemSelected,
            ]}
            onPress={() => setSelectedOption('profile')}
          >
            <Image source={icons.profile} style={styles.iconFooter} />
            <Text
              style={[
                styles.textFooter,
                selectedOption === 'profile' && styles.textFooterSelect,
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>) : (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaDash>
  );
};

export default dashboard;
