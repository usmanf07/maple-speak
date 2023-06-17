import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS, icons} from '../../constants';
import SafeAreaDash from '../SafeAreaDash';
import styles from './dashboard.style';
import FeatureCard from './featureCard';
import { Stack, useRouter } from 'expo-router';
import Footer from '../footer/footer';
const STORAGE_KEY = '@pronunciationLevels';

const dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('home');
  const [pronunciationLevels, setPronunciationLevels] = useState([]);
  const [vocabularyLevels, setVocabularyLevels] = useState([]);

  useEffect(() => {
    getUserDetails();
    getPronunciationLevelsFromAPI();
    setIsLoading(false);
  }, []);

  const setPronunciationLevelsInStorage = async (levels) => {
    try {
      // Store levels in AsyncStorage with expiry time
      const expiration = Date.now() + 24 * 60 * 60 * 1000; // Expiry after 24 hours
      const storedLevels = JSON.stringify({ data: levels, expiration });
      await AsyncStorage.setItem(STORAGE_KEY, storedLevels);
    } catch (error) {
      console.log('Error setting pronunciation levels in storage:', error);
    }
  };

  const getPronunciationLevelsFromAPI = async () => {
    try {
      const response = await axios.get(`http://${COLORS.ip}:8000/levels/pronunciation`);
      const levels = response.data;

      setPronunciationLevels(levels);
      setIsLoading(false);

      // Set levels in storage
      setPronunciationLevelsInStorage(levels);
    } catch (error) {
      console.log('Error fetching pronunciation levels from API:', error);
      setIsLoading(false);
    }
  };


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
          {/*    */}
                <Image source={icons.diamond} style={styles.icon} />
                <Text style={styles.textHeader}>{user.diamonds}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item}>
                <Image source={icons.uk} style={styles.icon} />
                <Text style={styles.textHeader}>{user.learnLang}</Text>
              </TouchableOpacity>
              
        </View>
        <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.feature} onPress={() => router.push('../pronunciation/pronunciation')}>
          <FeatureCard
            backgroundImage={require('../../assets/icons/vocab.png')}
            featureName="Pronunciation"
            description="Learn how to pronounce words correctly"
            completedLevels={0}
            totalLevels={pronunciationLevels.length}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
          <FeatureCard
            backgroundImage={require('../../assets/icons/vocab2.jpg')}
            featureName="Vocabulary"
            description="Learn new words and their meanings"
            completedLevels={1}
            totalLevels={25}
          />
          </TouchableOpacity>
          
        </ScrollView>
        <Footer />
      </View>) : (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaDash>
  );
};

export default dashboard;
