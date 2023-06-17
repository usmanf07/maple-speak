import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './footer.style';
import { icons } from '../../constants';
import { useRouter } from 'expo-router';

const footer = () => {
  const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('home');
    const handleProfilePress = () => {
      setSelectedOption('profile');
      router.push('../userprofile/userprofile');
    };
    return (
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
            onPress={handleProfilePress}
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
    );
    }
    
export default footer;