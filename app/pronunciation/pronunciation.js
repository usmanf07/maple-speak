import {React, useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import SafeAreaDash from '../SafeAreaDash';
import Footer from '../footer/footer';
import LevelCard from '../levelCard/levelCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY = '@pronunciationLevels';
import { useRouter, useLocalSearchParams, Link } from "expo-router";


// Component for the main screen
const MainScreen = () => {
    const [pronunciationLevels, setPronunciationLevels] = useState([]);
    const router = useRouter();
    const params = useLocalSearchParams();
    useEffect(() => {
      getPronunciationLevelsFromStorage();
    }, []);
  
    const getPronunciationLevelsFromStorage = async () => {
      try {
        const storedLevels = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedLevels !== null) {
          const levels = JSON.parse(storedLevels);
          const expiration = levels.expiration;
          const currentTime = Date.now();
  
          if (currentTime <= expiration) {
            // Use stored levels
            // console.log(levels.data)
            setPronunciationLevels(levels.data);
            return;
          }
        }
  
        // Fetch levels from API if not stored or expired
        // getPronunciationLevelsFromAPI();
      } catch (error) {
        console.log('Error fetching pronunciation levels from storage:', error);
      }
    };
  
  const renderLevelCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleLevelPress(item)}>
      <LevelCard level={item.levelNo} levelName={`${item.levelName}`} isCompleted={item < 4} />
    </TouchableOpacity>
  );

  const handleLevelPress = (level) => {
    
    //router.push({ pathname: "../loadingScreen/loadingScreen"});
    router.push({ pathname: "../gameScreen/gameScreen", params: { levelId: level._id }});
   };

  return (
    <SafeAreaDash>
      <View style={styles.container}>
        <FlatList
          data={pronunciationLevels}
          renderItem={renderLevelCard}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnsContainer}
          contentContainerStyle={styles.scrollContainer}
        />
        <Footer />
      </View>
    </SafeAreaDash>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 16,
  },
  columnsContainer: {
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
});

export default MainScreen;
